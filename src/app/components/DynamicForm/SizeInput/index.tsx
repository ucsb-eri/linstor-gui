import React, { useCallback, useEffect, useState } from 'react';
import { Select, SelectOption, SelectVariant, TextInput } from '@patternfly/react-core';

import './index.css';

interface SizeInputProps {
  name: string;
  id: string;
  options: Array<{ label: string; value: string; isDisabled: boolean }>;
  isCreatable?: boolean;
  value: { unit: string; number: number };
  onChange: (val: { unit: string; number: number }) => void;
  style?: { width?: string };
}

const SizeInput: React.FunctionComponent<SizeInputProps> = ({ value, onChange, options, isCreatable, style = {} }) => {
  const [selected, setSelected] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState<number>(0);

  const onSelect = useCallback(
    (selection) => {
      setSelected(selection);
      setIsOpen(false);
      onChange({
        unit: selection,
        number: Number(input),
      });
    },
    [input, onChange]
  );

  const handleInputChange = useCallback(
    (input: string) => {
      setInput(Number(input));
      onChange({
        unit: selected ?? '',
        number: Number(input),
      });
    },
    [onChange, selected]
  );

  // set original value
  useEffect(() => {
    if (value?.unit) {
      setSelected(value.unit);
    }
    if (value?.number) {
      setInput(value.number);
    }
  }, [value]);

  return (
    <div className="size_input">
      <TextInput
        className="input"
        value={input}
        onChange={handleInputChange}
        type="number"
        aria-label="number"
        min={0}
      />

      <Select
        className="select"
        variant={SelectVariant.single}
        typeAheadAriaLabel="Please select"
        onToggle={(val) => setIsOpen(val)}
        onSelect={(e, selection) => onSelect(selection)}
        selections={selected}
        isOpen={isOpen}
        placeholderText="Please select"
        isCreatable={isCreatable}
        style={style}
      >
        {options.map((option, index) => (
          <SelectOption isDisabled={option.isDisabled} key={index} value={option.value} />
        ))}
      </Select>
    </div>
  );
};

export default SizeInput;
