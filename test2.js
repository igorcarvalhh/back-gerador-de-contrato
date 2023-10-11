const fs = require("fs");
// const labelToVariable = require("./dados-projeto.json")
// Read the LaTeX file

exports.insertLatexData = (labelToVariable) => {
  const texFiles = [
    "01_Dados_Contratante.tex",
    "02_Dados_Cooperada.tex",
    "03_Dados_Executora.tex",
    "04_Dados_Interveniente.tex",
    "05_Dados_Projeto.tex",
  ];

  for (let index = 0; index < texFiles.length; index++) {
    const texFile = texFiles[index];

    fs.readFile(
      `./latex_template/Dados_do_Contrato/${texFile}`,
      "utf8",
      (err, data) => {
        if (err) {
          console.error("Error reading LaTeX file:", err);
          return;
        }

        // Create a regular expression pattern to match labels
        const labelPattern = /@\[([A-Z][a-zA-Z_0-9]+)\]/g;

        // Replace labels with variables
        const replacedLatex = data.replace(labelPattern, (match, label) => {
          // Check if the label exists in the mapping
          if (labelToVariable[label] && labelToVariable[label] !== "") {
            return labelToVariable[label];
          }
          // If the label is not found in the mapping, leave it unchanged
          return match;
        });

        // Write the modified LaTeX content to a new file or do something else with it
        fs.writeFile(
          `./latex/Dados_do_Contrato/${texFile}`,
          replacedLatex,
          "utf8",
          (writeErr) => {
            if (writeErr) {
              console.error("Error writing modified LaTeX file:", writeErr);
              return;
            }
            console.log(
              "Labels replaced with variables. Modified LaTeX file saved."
            );
          }
        );
      }
    );
  }
};
