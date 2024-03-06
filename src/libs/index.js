export function GenerateInvoiceNumber(counter, prefix) {
  const paddedCounter = counter.toString().padStart(6, '0')
  const currentDate = new Date()
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
  const year = currentDate.getFullYear().toString()

  const invoiceNumber = `${prefix}/${paddedCounter}/${month}${year}`

  return invoiceNumber
}

export const GenerateRandomString = (n) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let randomString = ''
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomString += characters.charAt(randomIndex)
  }
  return randomString
}
