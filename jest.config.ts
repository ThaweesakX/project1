import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  moduleDirectories: ['node_modules', 'src'],
  verbose: true,
  transform: {
  '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
export default config;