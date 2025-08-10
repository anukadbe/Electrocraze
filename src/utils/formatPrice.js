export function formatPrice(value) {
  if (!value) return "Rs0";
  return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}