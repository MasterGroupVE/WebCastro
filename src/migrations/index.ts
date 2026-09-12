import * as migration_20260830_045128 from './20260830_045128';
import * as migration_20260912_022810 from './20260912_022810';

export const migrations = [
  {
    up: migration_20260830_045128.up,
    down: migration_20260830_045128.down,
    name: '20260830_045128',
  },
  {
    up: migration_20260912_022810.up,
    down: migration_20260912_022810.down,
    name: '20260912_022810'
  },
];
