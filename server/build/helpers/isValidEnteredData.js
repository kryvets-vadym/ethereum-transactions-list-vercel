export const isValidEnteredData = (value, type) => {
    const formatCheck = new RegExp(`^(0x)?[0-9a-fA-F]{${type}}$`);
    const hexadecimalCheck = new RegExp(`^(0x)?[0-9A-Fa-f]{${type}}$`);
    if (!formatCheck.test(value)) {
        return false;
    }
    else if (formatCheck.test(value) ||
        hexadecimalCheck.test(value)) {
        return true;
    }
    else {
        return false;
    }
};
//# sourceMappingURL=isValidEnteredData.js.map