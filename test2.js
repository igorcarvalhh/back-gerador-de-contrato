const fs = require('fs');
const labelToVariable = require("./dados-projeto.json")
// Read the LaTeX file
const texFile = "./latex_template/Dados_do_Contrato/05_Dados_Projeto.tex";
fs.readFile(texFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading LaTeX file:', err);
    return;
  }

  // Create a regular expression pattern to match labels
  const labelPattern = /@\[([A-Z][a-zA-Z_0-9]+)\]/g

  // Replace labels with variables
  const replacedLatex = data.replace(labelPattern, (match, label) => {
    // Check if the label exists in the mapping
    if (labelToVariable[label] !== "") {
      return labelToVariable[label]
    }
    // If the label is not found in the mapping, leave it unchanged
    return match;
  });

  // Write the modified LaTeX content to a new file or do something else with it
  fs.writeFile('modified_latex_file.tex', replacedLatex, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing modified LaTeX file:', writeErr);
      return;
    }
    console.log('Labels replaced with variables. Modified LaTeX file saved.');
  });
});