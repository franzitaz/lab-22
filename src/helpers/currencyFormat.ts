export const currencyFormat = (price: number) => {
    return Intl.NumberFormat(
        'br-PT', {
        style: 'currency',
        currency: 'BRL'
        }
    ).format(price);
}