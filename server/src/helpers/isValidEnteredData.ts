import { ValidationType } from '../types/types.js';

export const isValidEnteredData = (value: string, type: ValidationType) => {
  const formatCheck = new RegExp(`^(0x)?[0-9a-fA-F]{${type}}$`);
  const hexadecimalCheck = new RegExp(`^(0x)?[0-9A-Fa-f]{${type}}$`);

  if (!formatCheck.test(value)) {
    // Check if the value has the correct format

    return false;
  } else if (formatCheck.test(value) ||
    hexadecimalCheck.test(value)) {
    // Check if the value consists of hexadecimal digits

    return true;
  } else {
    return false;
  }
};
