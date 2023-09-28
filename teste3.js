const fs = require("fs");

const contractDataFolder = "./latex_template/Dados_do_Contrato";
const dataFilesName = [
  "01_Dados_Contratante",
  "02_Dados_Cooperada",
  "03_Dados_Executora",
  "04_Dados_Interveniente",
  "05_Dados_Projeto",
];

for (let index = 0; index < dataFilesName.length; index++) {
  fs.readFile(`${contractDataFolder}/${dataFilesName[index]}.tex`, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading LaTeX file:", err);
      return;
    }

    // Create a regular expression pattern to match labels
    const labelPattern = /(?<=@\[)[A-Z][a-zA-Z_0-9]+(?=\])/g;
  
    // Replace labels with variables
    const labels = data.match(labelPattern);
  
    const variables = labels.reduce((acc, label) => {
      acc[label] = "";
      return acc;
    }, {});
  
    const jsonData = JSON.stringify(variables);
  
    fs.writeFile(`./${dataFilesName[index]}.json`, jsonData, "utf8", (writeErr) => {
      if (writeErr) {
        console.error("Error writing modified LaTeX file:", writeErr);
        return;
      }
      console.log("Labels replaced with variables. Modified LaTeX file saved.");
    });
  });
}


// \\newcommand\{\\([a-zA-Z]+)\}.*
// \\newcommand{\\$1}{ @[$1] }
