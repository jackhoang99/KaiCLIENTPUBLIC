/**
 * Formats a number as a price string with $ symbol and 2 decimal places
 */
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};