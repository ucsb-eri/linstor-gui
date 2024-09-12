export const drbdOptions = {
  objects: {
    controller: [
      'on-io-error',
      'disk-barrier',
      'disk-flushes',
      'disk-drain',
      'md-flushes',
      'resync-after',
      'al-extents',
      'al-updates',
      'discard-zeroes-if-aligned',
      'disable-write-same',
      'disk-timeout',
      'read-balancing',
      'rs-discard-granularity',
      'resync-rate',
      'c-plan-ahead',
      'c-delay-target',
      'c-fill-target',
      'c-max-rate',
      'c-min-rate',
      'bitmap',
      'cpu-mask',
      'on-no-data-accessible',
      'auto-promote',
      'peer-ack-window',
      'peer-ack-delay',
      'twopc-timeout',
      'twopc-retry-timeout',
      'auto-promote-timeout',
      'max-io-depth',
      'quorum',
      'on-no-quorum',
      'quorum-minimum-redundancy',
      'transport',
      'protocol',
      'timeout',
      'max-epoch-size',
      'connect-int',
      'ping-int',
      'sndbuf-size',
      'rcvbuf-size',
      'ko-count',
      'allow-two-primaries',
      'cram-hmac-alg',
      'shared-secret',
      'after-sb-0pri',
      'after-sb-1pri',
      'after-sb-2pri',
      'always-asbp',
      'rr-conflict',
      'ping-timeout',
      'data-integrity-alg',
      'tcp-cork',
      'on-congestion',
      'congestion-fill',
      'congestion-extents',
      'csums-alg',
      'csums-after-crash-only',
      'verify-alg',
      'use-rle',
      'socket-check-timeout',
      'fencing',
      'max-buffers',
      'allow-remote-read',
      'after-resync-target',
      'before-resync-target',
      'before-resync-source',
      'out-of-sync',
      'quorum-lost',
      'fence-peer',
      'unfence-peer',
      'initial-split-brain',
      'local-io-error',
      'pri-lost',
      'pri-lost-after-sb',
      'pri-on-incon-degr',
      'split-brain',
    ],
    'resource-definition': [
      'on-io-error',
      'disk-barrier',
      'disk-flushes',
      'disk-drain',
      'md-flushes',
      'resync-after',
      'al-extents',
      'al-updates',
      'discard-zeroes-if-aligned',
      'disable-write-same',
      'disk-timeout',
      'read-balancing',
      'rs-discard-granularity',
      'resync-rate',
      'c-plan-ahead',
      'c-delay-target',
      'c-fill-target',
      'c-max-rate',
      'c-min-rate',
      'bitmap',
      'cpu-mask',
      'on-no-data-accessible',
      'auto-promote',
      'peer-ack-window',
      'peer-ack-delay',
      'twopc-timeout',
      'twopc-retry-timeout',
      'auto-promote-timeout',
      'max-io-depth',
      'quorum',
      'on-no-quorum',
      'quorum-minimum-redundancy',
      'transport',
      'protocol',
      'timeout',
      'max-epoch-size',
      'connect-int',
      'ping-int',
      'sndbuf-size',
      'rcvbuf-size',
      'ko-count',
      'allow-two-primaries',
      'cram-hmac-alg',
      'shared-secret',
      'after-sb-0pri',
      'after-sb-1pri',
      'after-sb-2pri',
      'always-asbp',
      'rr-conflict',
      'ping-timeout',
      'data-integrity-alg',
      'tcp-cork',
      'on-congestion',
      'congestion-fill',
      'congestion-extents',
      'csums-alg',
      'csums-after-crash-only',
      'verify-alg',
      'use-rle',
      'socket-check-timeout',
      'fencing',
      'max-buffers',
      'allow-remote-read',
      'after-resync-target',
      'before-resync-target',
      'before-resync-source',
      'out-of-sync',
      'quorum-lost',
      'fence-peer',
      'unfence-peer',
      'initial-split-brain',
      'local-io-error',
      'pri-lost',
      'pri-lost-after-sb',
      'pri-on-incon-degr',
      'split-brain',
    ],
    'volume-definition': [
      'on-io-error',
      'disk-barrier',
      'disk-flushes',
      'disk-drain',
      'md-flushes',
      'resync-after',
      'al-extents',
      'al-updates',
      'discard-zeroes-if-aligned',
      'disable-write-same',
      'disk-timeout',
      'read-balancing',
      'rs-discard-granularity',
    ],
    'rsc-conn': [
      'resync-rate',
      'c-plan-ahead',
      'c-delay-target',
      'c-fill-target',
      'c-max-rate',
      'c-min-rate',
      'bitmap',
      'transport',
      'protocol',
      'timeout',
      'max-epoch-size',
      'connect-int',
      'ping-int',
      'sndbuf-size',
      'rcvbuf-size',
      'ko-count',
      'allow-two-primaries',
      'cram-hmac-alg',
      'shared-secret',
      'after-sb-0pri',
      'after-sb-1pri',
      'after-sb-2pri',
      'always-asbp',
      'rr-conflict',
      'ping-timeout',
      'data-integrity-alg',
      'tcp-cork',
      'on-congestion',
      'congestion-fill',
      'congestion-extents',
      'csums-alg',
      'csums-after-crash-only',
      'verify-alg',
      'use-rle',
      'socket-check-timeout',
      'fencing',
      'max-buffers',
      'allow-remote-read',
    ],
  },
  properties: {
    'on-io-error': {
      internal: true,
      key: 'DrbdOptions/Disk/on-io-error',
      drbd_option_name: 'on-io-error',
      drbd_res_file_section: 'disk',
      values: ['pass_on', 'call-local-io-error', 'detach'],
      type: 'symbol',
    },
    'disk-barrier': {
      internal: true,
      key: 'DrbdOptions/Disk/disk-barrier',
      drbd_option_name: 'disk-barrier',
      drbd_res_file_section: 'disk',
      default: false,
      type: 'boolean',
    },
    'disk-flushes': {
      internal: true,
      key: 'DrbdOptions/Disk/disk-flushes',
      drbd_option_name: 'disk-flushes',
      drbd_res_file_section: 'disk',
      default: true,
      type: 'boolean',
    },
    'disk-drain': {
      internal: true,
      key: 'DrbdOptions/Disk/disk-drain',
      drbd_option_name: 'disk-drain',
      drbd_res_file_section: 'disk',
      default: true,
      type: 'boolean',
    },
    'md-flushes': {
      internal: true,
      key: 'DrbdOptions/Disk/md-flushes',
      drbd_option_name: 'md-flushes',
      drbd_res_file_section: 'disk',
      default: true,
      type: 'boolean',
    },
    'resync-after': {
      internal: true,
      key: 'DrbdOptions/Disk/resync-after',
      drbd_option_name: 'resync-after',
      drbd_res_file_section: 'disk',
      type: 'string',
    },
    'al-extents': {
      internal: true,
      key: 'DrbdOptions/Disk/al-extents',
      drbd_option_name: 'al-extents',
      drbd_res_file_section: 'disk',
      unit_prefix: '1',
      min: 67,
      max: 65534,
      default: 1237,
      type: 'range',
    },
    'al-updates': {
      internal: true,
      key: 'DrbdOptions/Disk/al-updates',
      drbd_option_name: 'al-updates',
      drbd_res_file_section: 'disk',
      default: true,
      type: 'boolean',
    },
    'discard-zeroes-if-aligned': {
      internal: true,
      key: 'DrbdOptions/Disk/discard-zeroes-if-aligned',
      drbd_option_name: 'discard-zeroes-if-aligned',
      drbd_res_file_section: 'disk',
      default: true,
      type: 'boolean',
    },
    'disable-write-same': {
      internal: true,
      key: 'DrbdOptions/Disk/disable-write-same',
      drbd_option_name: 'disable-write-same',
      drbd_res_file_section: 'disk',
      default: false,
      type: 'boolean',
    },
    'disk-timeout': {
      internal: true,
      key: 'DrbdOptions/Disk/disk-timeout',
      drbd_option_name: 'disk-timeout',
      drbd_res_file_section: 'disk',
      unit_prefix: '1',
      unit: '1/10 seconds',
      min: 0,
      max: 6000,
      default: 0,
      type: 'range',
    },
    'read-balancing': {
      internal: true,
      key: 'DrbdOptions/Disk/read-balancing',
      drbd_option_name: 'read-balancing',
      drbd_res_file_section: 'disk',
      values: [
        'prefer-local',
        'prefer-remote',
        'round-robin',
        'least-pending',
        'when-congested-remote',
        '32K-striping',
        '64K-striping',
        '128K-striping',
        '256K-striping',
        '512K-striping',
        '1M-striping',
      ],
      type: 'symbol',
    },
    'rs-discard-granularity': {
      internal: true,
      key: 'DrbdOptions/Disk/rs-discard-granularity',
      drbd_option_name: 'rs-discard-granularity',
      drbd_res_file_section: 'disk',
      unit_prefix: '1',
      unit: 'bytes',
      min: 0,
      max: 1048576,
      default: 0,
      type: 'range',
    },
    'resync-rate': {
      internal: true,
      key: 'DrbdOptions/PeerDevice/resync-rate',
      drbd_option_name: 'resync-rate',
      drbd_res_file_section: 'disk',
      unit_prefix: 'k',
      unit: 'bytes/second',
      min: 1,
      max: 8388608,
      default: 250,
      type: 'range',
    },
    'c-plan-ahead': {
      internal: true,
      key: 'DrbdOptions/PeerDevice/c-plan-ahead',
      drbd_option_name: 'c-plan-ahead',
      drbd_res_file_section: 'disk',
      unit_prefix: '1',
      unit: '1/10 seconds',
      min: 0,
      max: 300,
      default: 20,
      type: 'range',
    },
    'c-delay-target': {
      internal: true,
      key: 'DrbdOptions/PeerDevice/c-delay-target',
      drbd_option_name: 'c-delay-target',
      drbd_res_file_section: 'disk',
      unit_prefix: '1',
      unit: '1/10 seconds',
      min: 1,
      max: 100,
      default: 10,
      type: 'range',
    },
    'c-fill-target': {
      internal: true,
      key: 'DrbdOptions/PeerDevice/c-fill-target',
      drbd_option_name: 'c-fill-target',
      drbd_res_file_section: 'disk',
      unit_prefix: 's',
      unit: 'bytes',
      min: 0,
      max: 1048576,
      default: 100,
      type: 'range',
    },
    'c-max-rate': {
      internal: true,
      key: 'DrbdOptions/PeerDevice/c-max-rate',
      drbd_option_name: 'c-max-rate',
      drbd_res_file_section: 'disk',
      unit_prefix: 'k',
      unit: 'bytes/second',
      min: 0,
      max: 4194304,
      default: 102400,
      type: 'range',
    },
    'c-min-rate': {
      internal: true,
      key: 'DrbdOptions/PeerDevice/c-min-rate',
      drbd_option_name: 'c-min-rate',
      drbd_res_file_section: 'disk',
      unit_prefix: 'k',
      unit: 'bytes/second',
      min: 0,
      max: 4194304,
      default: 250,
      type: 'range',
    },
    bitmap: {
      internal: true,
      key: 'DrbdOptions/PeerDevice/bitmap',
      drbd_option_name: 'bitmap',
      drbd_res_file_section: 'disk',
      default: true,
      type: 'boolean',
    },
    'cpu-mask': {
      internal: true,
      key: 'DrbdOptions/Resource/cpu-mask',
      drbd_option_name: 'cpu-mask',
      drbd_res_file_section: 'options',
      type: 'string',
    },
    'on-no-data-accessible': {
      internal: true,
      key: 'DrbdOptions/Resource/on-no-data-accessible',
      drbd_option_name: 'on-no-data-accessible',
      drbd_res_file_section: 'options',
      values: ['io-error', 'suspend-io'],
      type: 'symbol',
    },
    'auto-promote': {
      internal: true,
      key: 'DrbdOptions/Resource/auto-promote',
      drbd_option_name: 'auto-promote',
      drbd_res_file_section: 'options',
      default: true,
      type: 'boolean',
    },
    'peer-ack-window': {
      internal: true,
      key: 'DrbdOptions/Resource/peer-ack-window',
      drbd_option_name: 'peer-ack-window',
      drbd_res_file_section: 'options',
      unit_prefix: 's',
      unit: 'bytes',
      min: 2048,
      max: 204800,
      default: 4096,
      type: 'range',
    },
    'peer-ack-delay': {
      internal: true,
      key: 'DrbdOptions/Resource/peer-ack-delay',
      drbd_option_name: 'peer-ack-delay',
      drbd_res_file_section: 'options',
      unit_prefix: '1',
      unit: 'milliseconds',
      min: 1,
      max: 10000,
      default: 100,
      type: 'range',
    },
    'twopc-timeout': {
      internal: true,
      key: 'DrbdOptions/Resource/twopc-timeout',
      drbd_option_name: 'twopc-timeout',
      drbd_res_file_section: 'options',
      unit_prefix: '1',
      unit: '1/10 seconds',
      min: 50,
      max: 600,
      default: 300,
      type: 'range',
    },
    'twopc-retry-timeout': {
      internal: true,
      key: 'DrbdOptions/Resource/twopc-retry-timeout',
      drbd_option_name: 'twopc-retry-timeout',
      drbd_res_file_section: 'options',
      unit_prefix: '1',
      unit: '1/10 seconds',
      min: 1,
      max: 50,
      default: 1,
      type: 'range',
    },
    'auto-promote-timeout': {
      internal: true,
      key: 'DrbdOptions/Resource/auto-promote-timeout',
      drbd_option_name: 'auto-promote-timeout',
      drbd_res_file_section: 'options',
      unit_prefix: '1',
      unit: '1/10 seconds',
      min: 0,
      max: 600,
      default: 20,
      type: 'range',
    },
    'max-io-depth': {
      internal: true,
      key: 'DrbdOptions/Resource/max-io-depth',
      drbd_option_name: 'max-io-depth',
      drbd_res_file_section: 'options',
      unit_prefix: '1',
      min: 4,
      max: 4294967295,
      default: 8000,
      type: 'range',
    },
    quorum: {
      internal: true,
      key: 'DrbdOptions/Resource/quorum',
      drbd_option_name: 'quorum',
      drbd_res_file_section: 'options',
      values: ['off', 'majority', 'all'],
      min: '1',
      max: '32',
      type: 'numeric-or-symbol',
    },
    'on-no-quorum': {
      internal: true,
      key: 'DrbdOptions/Resource/on-no-quorum',
      drbd_option_name: 'on-no-quorum',
      drbd_res_file_section: 'options',
      values: ['io-error', 'suspend-io'],
      type: 'symbol',
    },
    'quorum-minimum-redundancy': {
      internal: true,
      key: 'DrbdOptions/Resource/quorum-minimum-redundancy',
      drbd_option_name: 'quorum-minimum-redundancy',
      drbd_res_file_section: 'options',
      values: ['off', 'majority', 'all'],
      min: '1',
      max: '32',
      type: 'numeric-or-symbol',
    },
    transport: {
      internal: true,
      key: 'DrbdOptions/Net/transport',
      drbd_option_name: 'transport',
      drbd_res_file_section: 'net',
      type: 'string',
    },
    protocol: {
      internal: true,
      key: 'DrbdOptions/Net/protocol',
      drbd_option_name: 'protocol',
      drbd_res_file_section: 'net',
      values: ['A', 'B', 'C'],
      type: 'symbol',
    },
    timeout: {
      internal: true,
      key: 'DrbdOptions/Net/timeout',
      drbd_option_name: 'timeout',
      drbd_res_file_section: 'net',
      unit_prefix: '1',
      unit: '1/10 seconds',
      min: 1,
      max: 600,
      default: 60,
      type: 'range',
    },
    'max-epoch-size': {
      internal: true,
      key: 'DrbdOptions/Net/max-epoch-size',
      drbd_option_name: 'max-epoch-size',
      drbd_res_file_section: 'net',
      unit_prefix: '1',
      min: 1,
      max: 20000,
      default: 2048,
      type: 'range',
    },
    'connect-int': {
      internal: true,
      key: 'DrbdOptions/Net/connect-int',
      drbd_option_name: 'connect-int',
      drbd_res_file_section: 'net',
      unit_prefix: '1',
      unit: 'seconds',
      min: 1,
      max: 120,
      default: 10,
      type: 'range',
    },
    'ping-int': {
      internal: true,
      key: 'DrbdOptions/Net/ping-int',
      drbd_option_name: 'ping-int',
      drbd_res_file_section: 'net',
      unit_prefix: '1',
      unit: 'seconds',
      min: 1,
      max: 120,
      default: 10,
      type: 'range',
    },
    'sndbuf-size': {
      internal: true,
      key: 'DrbdOptions/Net/sndbuf-size',
      drbd_option_name: 'sndbuf-size',
      drbd_res_file_section: 'net',
      unit_prefix: '1',
      unit: 'bytes',
      min: 0,
      max: 10485760,
      default: 0,
      type: 'range',
    },
    'rcvbuf-size': {
      internal: true,
      key: 'DrbdOptions/Net/rcvbuf-size',
      drbd_option_name: 'rcvbuf-size',
      drbd_res_file_section: 'net',
      unit_prefix: '1',
      unit: 'bytes',
      min: 0,
      max: 10485760,
      default: 0,
      type: 'range',
    },
    'ko-count': {
      internal: true,
      key: 'DrbdOptions/Net/ko-count',
      drbd_option_name: 'ko-count',
      drbd_res_file_section: 'net',
      unit_prefix: '1',
      min: 0,
      max: 200,
      default: 7,
      type: 'range',
    },
    'allow-two-primaries': {
      internal: true,
      key: 'DrbdOptions/Net/allow-two-primaries',
      drbd_option_name: 'allow-two-primaries',
      drbd_res_file_section: 'net',
      default: false,
      type: 'boolean',
    },
    'cram-hmac-alg': {
      internal: true,
      key: 'DrbdOptions/Net/cram-hmac-alg',
      drbd_option_name: 'cram-hmac-alg',
      drbd_res_file_section: 'net',
      type: 'string',
    },
    'shared-secret': {
      internal: true,
      key: 'DrbdOptions/Net/shared-secret',
      drbd_option_name: 'shared-secret',
      drbd_res_file_section: 'net',
      type: 'string',
    },
    'after-sb-0pri': {
      internal: true,
      key: 'DrbdOptions/Net/after-sb-0pri',
      drbd_option_name: 'after-sb-0pri',
      drbd_res_file_section: 'net',
      values: [
        'disconnect',
        'discard-younger-primary',
        'discard-older-primary',
        'discard-zero-changes',
        'discard-least-changes',
        'discard-local',
        'discard-remote',
      ],
      type: 'symbol',
    },
    'after-sb-1pri': {
      internal: true,
      key: 'DrbdOptions/Net/after-sb-1pri',
      drbd_option_name: 'after-sb-1pri',
      drbd_res_file_section: 'net',
      values: ['disconnect', 'consensus', 'discard-secondary', 'call-pri-lost-after-sb', 'violently-as0p'],
      type: 'symbol',
    },
    'after-sb-2pri': {
      internal: true,
      key: 'DrbdOptions/Net/after-sb-2pri',
      drbd_option_name: 'after-sb-2pri',
      drbd_res_file_section: 'net',
      values: ['disconnect', 'call-pri-lost-after-sb', 'violently-as0p'],
      type: 'symbol',
    },
    'always-asbp': {
      internal: true,
      key: 'DrbdOptions/Net/always-asbp',
      drbd_option_name: 'always-asbp',
      drbd_res_file_section: 'net',
      default: false,
      type: 'boolean',
    },
    'rr-conflict': {
      internal: true,
      key: 'DrbdOptions/Net/rr-conflict',
      drbd_option_name: 'rr-conflict',
      drbd_res_file_section: 'net',
      values: ['disconnect', 'call-pri-lost', 'violently', 'retry-connect'],
      type: 'symbol',
    },
    'ping-timeout': {
      internal: true,
      key: 'DrbdOptions/Net/ping-timeout',
      drbd_option_name: 'ping-timeout',
      drbd_res_file_section: 'net',
      unit_prefix: '1',
      unit: '1/10 seconds',
      min: 1,
      max: 300,
      default: 5,
      type: 'range',
    },
    'data-integrity-alg': {
      internal: true,
      key: 'DrbdOptions/Net/data-integrity-alg',
      drbd_option_name: 'data-integrity-alg',
      drbd_res_file_section: 'net',
      type: 'string',
    },
    'tcp-cork': {
      internal: true,
      key: 'DrbdOptions/Net/tcp-cork',
      drbd_option_name: 'tcp-cork',
      drbd_res_file_section: 'net',
      default: true,
      type: 'boolean',
    },
    'on-congestion': {
      internal: true,
      key: 'DrbdOptions/Net/on-congestion',
      drbd_option_name: 'on-congestion',
      drbd_res_file_section: 'net',
      values: ['block', 'pull-ahead', 'disconnect'],
      type: 'symbol',
    },
    'congestion-fill': {
      internal: true,
      key: 'DrbdOptions/Net/congestion-fill',
      drbd_option_name: 'congestion-fill',
      drbd_res_file_section: 'net',
      unit_prefix: 's',
      unit: 'bytes',
      min: 0,
      max: 20971520,
      default: 0,
      type: 'range',
    },
    'congestion-extents': {
      internal: true,
      key: 'DrbdOptions/Net/congestion-extents',
      drbd_option_name: 'congestion-extents',
      drbd_res_file_section: 'net',
      unit_prefix: '1',
      min: 67,
      max: 65534,
      default: 1237,
      type: 'range',
    },
    'csums-alg': {
      internal: true,
      key: 'DrbdOptions/Net/csums-alg',
      drbd_option_name: 'csums-alg',
      drbd_res_file_section: 'net',
      type: 'string',
    },
    'csums-after-crash-only': {
      internal: true,
      key: 'DrbdOptions/Net/csums-after-crash-only',
      drbd_option_name: 'csums-after-crash-only',
      drbd_res_file_section: 'net',
      default: false,
      type: 'boolean',
    },
    'verify-alg': {
      internal: true,
      key: 'DrbdOptions/Net/verify-alg',
      drbd_option_name: 'verify-alg',
      drbd_res_file_section: 'net',
      type: 'string',
    },
    'use-rle': {
      internal: true,
      key: 'DrbdOptions/Net/use-rle',
      drbd_option_name: 'use-rle',
      drbd_res_file_section: 'net',
      default: true,
      type: 'boolean',
    },
    'socket-check-timeout': {
      internal: true,
      key: 'DrbdOptions/Net/socket-check-timeout',
      drbd_option_name: 'socket-check-timeout',
      drbd_res_file_section: 'net',
      unit_prefix: '1',
      min: 0,
      max: 300,
      default: 0,
      type: 'range',
    },
    fencing: {
      internal: true,
      key: 'DrbdOptions/Net/fencing',
      drbd_option_name: 'fencing',
      drbd_res_file_section: 'net',
      values: ['dont-care', 'resource-only', 'resource-and-stonith'],
      type: 'symbol',
    },
    'max-buffers': {
      internal: true,
      key: 'DrbdOptions/Net/max-buffers',
      drbd_option_name: 'max-buffers',
      drbd_res_file_section: 'net',
      unit_prefix: '1',
      min: 32,
      max: 131072,
      default: 2048,
      type: 'range',
    },
    'allow-remote-read': {
      internal: true,
      key: 'DrbdOptions/Net/allow-remote-read',
      drbd_option_name: 'allow-remote-read',
      drbd_res_file_section: 'net',
      default: true,
      type: 'boolean',
    },
    'after-resync-target': {
      internal: true,
      key: 'DrbdOptions/Handlers/after-resync-target',
      drbd_option_name: 'after-resync-target',
      drbd_res_file_section: 'handlers',
      type: 'string',
    },
    'before-resync-target': {
      internal: true,
      key: 'DrbdOptions/Handlers/before-resync-target',
      drbd_option_name: 'before-resync-target',
      drbd_res_file_section: 'handlers',
      type: 'string',
    },
    'before-resync-source': {
      internal: true,
      key: 'DrbdOptions/Handlers/before-resync-source',
      drbd_option_name: 'before-resync-source',
      drbd_res_file_section: 'handlers',
      type: 'string',
    },
    'out-of-sync': {
      internal: true,
      key: 'DrbdOptions/Handlers/out-of-sync',
      drbd_option_name: 'out-of-sync',
      drbd_res_file_section: 'handlers',
      type: 'string',
    },
    'quorum-lost': {
      internal: true,
      key: 'DrbdOptions/Handlers/quorum-lost',
      drbd_option_name: 'quorum-lost',
      drbd_res_file_section: 'handlers',
      type: 'string',
    },
    'fence-peer': {
      internal: true,
      key: 'DrbdOptions/Handlers/fence-peer',
      drbd_option_name: 'fence-peer',
      drbd_res_file_section: 'handlers',
      type: 'string',
    },
    'unfence-peer': {
      internal: true,
      key: 'DrbdOptions/Handlers/unfence-peer',
      drbd_option_name: 'unfence-peer',
      drbd_res_file_section: 'handlers',
      type: 'string',
    },
    'initial-split-brain': {
      internal: true,
      key: 'DrbdOptions/Handlers/initial-split-brain',
      drbd_option_name: 'initial-split-brain',
      drbd_res_file_section: 'handlers',
      type: 'string',
    },
    'local-io-error': {
      internal: true,
      key: 'DrbdOptions/Handlers/local-io-error',
      drbd_option_name: 'local-io-error',
      drbd_res_file_section: 'handlers',
      type: 'string',
    },
    'pri-lost': {
      internal: true,
      key: 'DrbdOptions/Handlers/pri-lost',
      drbd_option_name: 'pri-lost',
      drbd_res_file_section: 'handlers',
      type: 'string',
    },
    'pri-lost-after-sb': {
      internal: true,
      key: 'DrbdOptions/Handlers/pri-lost-after-sb',
      drbd_option_name: 'pri-lost-after-sb',
      drbd_res_file_section: 'handlers',
      type: 'string',
    },
    'pri-on-incon-degr': {
      internal: true,
      key: 'DrbdOptions/Handlers/pri-on-incon-degr',
      drbd_option_name: 'pri-on-incon-degr',
      drbd_res_file_section: 'handlers',
      type: 'string',
    },
    'split-brain': {
      internal: true,
      key: 'DrbdOptions/Handlers/split-brain',
      drbd_option_name: 'split-brain',
      drbd_res_file_section: 'handlers',
      type: 'string',
    },
  },
};
