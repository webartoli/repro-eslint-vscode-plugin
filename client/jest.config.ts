import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
    'json'
  ],
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts'
  ],
  moduleNameMapper: {
    "\\.(css|svg)$": 'identity-obj-proxy'
  }
};

export default config;
