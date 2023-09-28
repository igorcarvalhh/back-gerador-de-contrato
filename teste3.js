const fs = require('fs');

// Read the LaTeX file
const texFile = "./latex_template/Dados_do_Contrato/02_Dados_Cooperada.tex";

fs.readFile(texFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading LaTeX file:', err);
    return;
  }

  // Define a mapping of labels to variables
  const labelToVariable = {
    'DataFimProjeto': '02/03/2003',
    'label2': 'variable2',
    // Add more label-variable mappings as needed
  };

  // Create a regular expression pattern to match labels
  const labelPattern = /(?<=@\[)[A-Z][a-zA-Z_0-9]+(?=\])/g

  // Replace labels with variables
  const labels = data.match(labelPattern);

  const variables = labels.reduce((acc, label) => {
    acc[label] = ""
    return acc
  }, {})

  const jsonData = JSON.stringify(variables);
  
  fs.writeFile('./dados-cooperada.json', jsonData, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing modified LaTeX file:', writeErr);
      return;
    }
    console.log('Labels replaced with variables. Modified LaTeX file saved.');
  });

});