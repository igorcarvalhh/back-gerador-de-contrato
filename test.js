// latexmk -synctex=1 -interaction=nonstopmode -file-line-error -pdf -outdir=./ -auxdir=./temp
// latexmk -synctex=1 -interaction=nonstopmode -file-line-error -pdf -auxdir=./tmp
// .aux, .fdb_latexmk, .fls, .log, .out
// copiar arquivos latex
// adicionar informações
// compilar para pdf
// enviar o pdf
// remover arquivos temporários
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { insertLatexData } = require("./test2");

function execShellCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        // console.warn(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
}

exports.createContract = async (data) => {
  const sourceFolder = "./latex_template";
  const destinationFolder = "./latex";
  const copyCommand = `cp -r ${sourceFolder} ${destinationFolder}`;
  const texFile = "./latex/ContratoPeD.tex";

  await execShellCommand(copyCommand).then(() =>
    console.log("copiou latex-template")
  );

  insertLatexData(data)

  await execShellCommand(
    `latexmk -interaction=nonstopmode -file-line-error -pdf -outdir=./latex -auxdir=./latex -f ${texFile} `
  ).then(() => console.log("compilou latex"));

  return "./latex/ContratoPeD.pdf"
};
//   exec(copyCommand, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error copying folder: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.error(`Error copying folder: ${stderr}`);
//       return;
//     }
//     console.log(`Folder copied successfully: ${sourceFolder} -> ${destinationFolder}`);
//   });

//   exec(`latexmk -interaction=nonstopmode -file-line-error -pdf -outdir=./latex -auxdir=./latex -f ${texFile} ` , (error, stdout, stderr) => {

//     const auxExtensions = ['.aux', '.log', '.fdb_latexmk', '.fls', '.out'];
//     auxExtensions.forEach((extension) => {
//       const auxFile = path.join("./latex", path.basename(texFile, '.tex') + extension);
//       fs.unlink(auxFile, (err) => {
//         if (err) {
//           console.error(`Error deleting ${auxFile}: ${err}`);
//         } else {
//           console.log(`Deleted: ${auxFile}`);
//         }
//       });
//     });

//     console.log('LaTeXmk command completed successfully.');

//     exec("mv ./latex/ContratoPeD.pdf ./", (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Error moving folder: ${error.message}`);
//         return;
//       }
//       if (stderr) {
//         console.error(`Error moving folder: ${stderr}`);
//         return;
//       }
//       console.log(`Folder moved successfully: ${destinationFolder}`);

//       const deleteCommand = `rm -r ${destinationFolder}`;

//       exec(deleteCommand, (error, stdout, stderr) => {
//         if (error) {
//           console.error(`Error removing folder: ${error.message}`);
//           return;
//         }
//         if (stderr) {
//           console.error(`Error removing folder: ${stderr}`);
//           return;
//         }
//         console.log(`Folder removed successfully: ${destinationFolder}`);
//         return "./ContratoPeD.pdf";
//       });
//     });
//   });

// }
