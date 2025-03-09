const utils = require('./utils')
const event = require('./event')
const date = require('./date')
const writeFile = require('./write-file')
const { Q } = require('./febraban/collection')

function buildCollection(batchCount = 1) {
  let content = ""
  event.event["batchCount"] = `${batchCount}`;
  Q.forEach(segment=> {
    const isNum = segment.type==='Num'
    if (isNum) {
      const defaultValue = segment.defaultValue || "";
      const size = (segment.to - segment.from) + 1;
      //console.log(size)
      if(defaultValue) {
        content += utils.fillZerosLeft(defaultValue, size);
      } else { 
        const variable = segment.variable || ""
        
        if (variable)  content += utils.fillZerosLeft(event.event[variable], size);
        else content += utils.fillZerosLeft('', size);
      }
    } else {
      const defaultValue = segment.defaultValue || ""
      const size = (segment.to - segment.from) + 1;
      //console.log(size)
      if(defaultValue) {
        content += utils.fillSpaceLeft(defaultValue, size);
      } else {
        const variable = segment.variable || "";
        
        if (variable) content += utils.fillSpaceRight(event.event[variable], size);
        else  content += utils.fillSpaceRight('', size) ;
      }
    }
    console.log(content.length)
  })
 // content += "\n"
  batchCount++
  writeFile.buildFile(content);
  console.log('###############', content);
}

console.log(buildCollection());
// const conteudoRem = `${utils.fillZerosLeft(' ', 15)}\n ${date.simpleDate()} \n echo Este é um script .rem gerado pelo Node.js pause`;
// writeFile.buildFile(conteudoRem);