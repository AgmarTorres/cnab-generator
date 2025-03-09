const dayjs = require('dayjs'); // Instale: npm install dayjs

function fullDate() {
  return dayjs().add(5, 'years').format('DDMMYYYY');
}

function simpleDate() {
    console.log(dayjs().add(5, 'years').format('DDMMYYYY'))
    return dayjs().add(5, 'years').format('DDMMYY');
}

module.exports = {
    fullDate,
    simpleDate
}