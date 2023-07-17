function getStateAbbreviation(dmaName) {
  return `RIGHT(${dmaName}, 2)`;
}

module.exports = { getStateAbbreviation };