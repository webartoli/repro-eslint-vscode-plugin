import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testPathIgnorePatterns: [ ".integration." ]
};

export default config;
