import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input, Select, Space } from 'antd';
import { useHistory } from 'react-router-dom';

import { SizeInput } from '@app/components/SizeInput';
import { createISCSIExport } from '../api';
import { notify } from '@app/utils/toast';

import { useResourceGroups } from '@app/features/resourceGroup';

type FormType = {
  name: string;
  resource_group: string;
  service_ip: string;
  export_path: string;
  file_system: string;
  size: number;
  allowed_ips: string[];
  iqn: string;
};

const CreateISCSIForm = () => {
  const history = useHistory();
  const [form] = Form.useForm<FormType>();

  const { data: resourceGroupsFromLinstor } = useResourceGroups({ excludeDefault: true });
  const [time, setTime] = useState('');
  const [domain, setDomain] = useState('');

  const backToList = () => {
    history.push('/gateway/iscsi');
  };

  const createMutation = useMutation({
    mutationFn: createISCSIExport,
    onSuccess: () => {
      notify('Create iSCSI Export successfully', {
        type: 'success',
      });
      setTimeout(() => {
        backToList();
      }, 300);
    },
    onError: (err: { code: string; message: string }) => {
      let message = 'Create iSCSI export target failed';
      if (err.message) {
        message = err.message;
      }
      notify(message, {
        type: 'error',
      });
    },
  });

  const onFinish = async (values: FormType) => {
    const iqn = 'iqn.' + time + '.' + domain + ':' + values.iqn;

    const volumes = [
      {
        number: 1,
        size_kib: values.size,
      },
    ];

    const currentExport = {
      iqn,
      service_ips: [values.service_ip],
      resource_group: values.resource_group,
      volumes,
      username: '',
      password: '',
    };

    createMutation.mutate(currentExport);
  };

  return (
    <Form<FormType>
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      style={{ maxWidth: 700 }}
      size="large"
      layout="horizontal"
      form={form}
      onFinish={onFinish}
      initialValues={{
        satellite_port: 3366,
        type: 'Satellite',
      }}
    >
      <Form.Item
        label="IQN"
        name="iqn"
        required
        rules={[
          {
            required: true,
            message: 'IQN is required!',
          },
        ]}
      >
        <Space.Compact size="large">
          <Input addonBefore="iqn." placeholder="yyyy-mm" onChange={(e) => setTime(e.target.value)} />
          <Input addonBefore="." placeholder="com.company" onChange={(e) => setDomain(e.target.value)} />
          <Input addonBefore=":" placeholder="unique-name" />
        </Space.Compact>
      </Form.Item>

      <Form.Item
        label="Resource Group"
        name="resource_group"
        required
        rules={[{ required: true, message: 'Please select resource group!' }]}
      >
        <Select
          allowClear
          placeholder="Please select resource group"
          options={resourceGroupsFromLinstor?.map((e) => ({
            label: `${e.name}`,
            value: e.name,
          }))}
        />
      </Form.Item>

      <Form.Item
        label="Service IP"
        name="service_ip"
        required
        rules={[
          {
            required: true,
            message: 'IP address is required!',
          },
        ]}
        tooltip="Must be valid IP address, like 192.168.1.1, 10.10.1.1"
      >
        <Input placeholder="192.168.1.1/24" />
      </Form.Item>

      <Form.Item name="size" label="Size" required>
        <SizeInput />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
        <Button type="primary" htmlType="submit" loading={createMutation.isLoading}>
          Submit
        </Button>

        <Button type="text" onClick={backToList}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export { CreateISCSIForm };
