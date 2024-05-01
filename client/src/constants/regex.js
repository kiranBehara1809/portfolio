const BLOOD_GROUP_REGEX = /^(A|B|AB|O)[+\-]$/;
const TEXT_REGEX = {
  TEXT_WITH_SPACE_25: /^[a-zA-Z ]{1,25}$/,
  TEXT_WITH_SPACE_5: /^[a-zA-Z ]{1,5}$/,
  TEXT_WITH_SPACE_50: /^[a-zA-Z ]{1,50}$/,
  TEXT_WITH_ALL: /^[a-zA-Z0-9\s!@#$%^&*()-_+=,.<>/?;:'"[\]{}|`~]*$/,
  MOBILE_NO: /^(\+91-|\+91|0)?[6-9]\d{9}$/,
  BLOOD_PRESSURE: /^(90|[1-8][0-9]|120)\/(60|[1-9][0-9]|1[0-1][0-9]|120)$/,
  NUMBER_ONLY: /\d+(?:\.\d+)?/,
  EMAIL : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
};

export { BLOOD_GROUP_REGEX, TEXT_REGEX };