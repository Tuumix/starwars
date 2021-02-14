export const validateField = (input: string) => {
  return input.replace(/\D/g, "");
}