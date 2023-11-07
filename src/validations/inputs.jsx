export function isNullOrEmpty(value) {
  let checkVal;
  if (typeof value === "object" && value !== null) {
    checkVal = Object.keys(value);
  } else {
    checkVal = value;
  }
  return !checkVal?.toString()?.length;
}
export function isSufficientLength(value, len) {
  return typeof value === "string" && value?.toString()?.length === len;
}
