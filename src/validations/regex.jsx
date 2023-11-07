export const nameRegex = /^[a-zA-Z][a-zA-Z\s]+[a-zA-Z]$/;
export const addressRegex = /^[^\s].*[^\s]$/;
export const cityRegex = /^[a-zA-Z][a-zA-Z\s]+[^\s\d]$/;
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;
export const amountRegex = /^\d+[.]{0,1}\d{0,2}$/; //ANY number with 2 decimal places
export const phoneNumberRegex = /^3[0-5]\d{8}$/;
export const numericRegex = /[^0-9]/g;
export function validate(value, regex, message) {
  if (value === undefined || value === null) {
    return message;
  } else {
    return regex.test(value);
  }
}
