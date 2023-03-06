export const dateFormatter = new Intl.DateTimeFormat()

export const priceFormatter = new Intl.NumberFormat('en-us',{
    style:'currency',
    currency:'US'
})