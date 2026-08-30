import * as migration_20260830_045128 from './20260830_045128';

export const migrations = [
  {
    up: migration_20260830_045128.up,
    down: migration_20260830_045128.down,
    name: '20260830_045128'
  },
];
