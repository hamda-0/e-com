import '@testing-library/jest-native/extend-expect';
import jestConfig from './jest.config';

// Mock React Native's LogBox
jestConfig.mock('react-native/Libraries/LogBox/LogBox');