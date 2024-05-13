const formatPrice = (amount: number) => {
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount)

  return priceFormatted.replace('R$', '').trim()
}

export const format = {
  price: formatPrice,
}
