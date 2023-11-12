export default function formatNumber(number) {
  const NUMBER_CONVERTER = new Intl.NumberFormat()
  return NUMBER_CONVERTER.format(number)
}
