const date = require('./date');
const fs = require('fs');
const path = require('path');

function buildFilePath(filename) {
    const caminhoArquivo = path.join(__dirname, 'files', filename);
    fs.mkdir(path.dirname(caminhoArquivo), { recursive: true }, (err) => {
        if (err) {
          console.error(`Erro ao criar a pasta: ${err}`);
          return;
        }
    })
    console.log('####', caminhoArquivo)
    return caminhoArquivo;
}

function buildFile(content, fileName = `input_${date.fullDate()}_${Date.now()}.rem`) {
  try {
    fs.writeFileSync(buildFilePath(fileName), content, 'utf8');
    console.log(`Arquivo ${fileName} gerado com sucesso!`);
  } catch (erro) {
    console.error(`Erro ao gerar o arquivo: ${erro.message}`);
  }
}

module.exports = {
    buildFile
}