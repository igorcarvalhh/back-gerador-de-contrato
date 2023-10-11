const { PrismaClient } = require("@prisma/client")
const projectData = require("../05_Dados_Projeto.json")
const executoraData = require("../03_Dados_Executora.json")
const proponenteData = require("../01_Dados_Contratante.json")
const { createContract } = require("../test")
const fs  = require('fs')

const prisma = new PrismaClient()

async function getDataFromHash(hash) {
    const contrato = await prisma.contrato.findUnique({
        where: {  hash: hash  },
        include: {
            projeto: {
                include: {
                    fases: true
                }
            },
            participantes: {
                include: {
                    empresa: true
                }
            }
        }
    })
    return contrato
}

function formatContractData(contrato) {
    projectData.NomeTestemunhaA = contrato.nomeTestemunhaA
    projectData.NomeTestemunhaB = contrato.cpfTestemunhaA
    projectData.CPFTestemunhaA = contrato.nomeTestemunhaB
    projectData.CPFTestemunhaB = contrato.cpfTestemunhaB

    projectData.NumeroContrato = contrato.numeroContrato
    projectData.DataDaCelebracao = new Date().toLocaleDateString("pt-br");
    projectData.DataCompletaCelebracao = new Date().toLocaleDateString("pt-br", {day:"numeric", month: "long", year: "numeric"});
    projectData.NumeroProjeto = contrato.numeroProjeto // vem da requisicao
    projectData.CodAneelProjeto = contrato.projeto.fases.map(fase=>fase.codigoAneel).join(", ")
    projectData.ApelidoProjeto = contrato.projeto.apelido
    projectData.TituloCompletoProjeto = contrato.projeto.tituloCompleto
    projectData.ObjetivoDoProjeto = contrato.projeto.objetivo
    projectData.Consessoes = contrato.consessoes

    executoraData.NomeExecutoraA = contrato.participantes[1].empresa.nome
    executoraData.NomeExecutoraAResumido = contrato.participantes[1].empresa.nomeResumido
    executoraData.EnderecoExecutoraA = contrato.participantes[1].empresa.endereco
    executoraData.ComplementoEnderecoExecutoraA = contrato.participantes[1].empresa.complemento
    executoraData.BairroExecutoraA = contrato.participantes[1].empresa.bairro
    executoraData.CEPExecutoraA = contrato.participantes[1].empresa.cep
    executoraData.CidadeEnderecoExecutoraA = contrato.participantes[1].empresa.cidade
    executoraData.EstadoEnderecoExecutoraA = contrato.participantes[1].empresa.estado
    executoraData.NumCNPJExecutoraA = contrato.participantes[1].empresa.cnpj
    executoraData.TelefoneExecutoraA = contrato.participantes[1].empresa.telefone
    // executoraData.EmailExecutoraA = contrato.participantes[1].empresa.
    // executoraData.NomeRepresentanteExecutoraA = contrato.participantes[1].empresa.
    // executoraData.CargoRepresentanteExecutoraA = contrato.participantes[1].empresa.
    // executoraData.DiretorUmExecutoraA = contrato.participantes[1].empresa.
    // executoraData.DiretorDoisExecutoraA = contrato.participantes[1].empresa.
    // executoraData.BancoExeutoraA = contrato.participantes[1].empresa.
    // executoraData.AgenciaExecutoraA = contrato.participantes[1].empresa.
    // executoraData.ContaCorrenteExecutoraA = contrato.participantes[1].empresa.
    // executoraData.TitularidadeExecutoraA = contrato.participantes[1].empresa.


    proponenteData.NomeContratante = contrato.participantes[0].empresa.nome
    proponenteData.NomeContratanteResumido = contrato.participantes[0].empresa.nomeResumido
    proponenteData.EnderecoContratante = contrato.participantes[0].empresa.endereco
    proponenteData.NumeroEnderecoContratante = contrato.participantes[0].empresa.numeroEndereco
    proponenteData.ComplementoEnderecoContratante = contrato.participantes[0].empresa.complemento
    proponenteData.BairroContratante = contrato.participantes[0].empresa.bairro
    proponenteData.CEPContratante = contrato.participantes[0].empresa.cep
    proponenteData.CidadeEnderecoContratante = contrato.participantes[0].empresa.cidade
    proponenteData.EstadoEnderecoContratante = contrato.participantes[0].empresa.estado
    proponenteData.NumCNPJContratante = contrato.participantes[0].empresa.cnpj
    proponenteData.TelefoneContratante = contrato.participantes[0].empresa.telefone
    // executoraData.EmailContratante = contrato.participantes[1].empresa.
    // executoraData.NomeRepresentanteContratante = contrato.participantes[1].empresa.
    // executoraData.CargoRepresentanteContratante = contrato.participantes[1].empresa.
    // executoraData.DiretorUmContratante = contrato.participantes[1].empresa.
    // executoraData.DiretorDoisContratante = contrato.participantes[1].empresa.
    // executoraData.BancoExeutoraA = contrato.participantes[1].empresa.
    // executoraData.AgenciaContratante = contrato.participantes[1].empresa.
    // executoraData.ContaCorrenteContratante = contrato.participantes[1].empresa.
    // executoraData.TitularidadeContratante = contrato.participantes[1].empresa.

    return {...projectData, ...executoraData, ...proponenteData}
}

exports.generateContract = async (hash, data) => {

    console.log("Get data from database")
    const contractData = await getDataFromHash(hash)
    
    console.log(contractData)
    fs.writeFile("./extracted_data.json", JSON.stringify(contractData),"utf8", (writeErr) => {
        if (writeErr) {
          console.error("Error writing modified LaTeX file:", writeErr);
          return;
        }
        console.log("Labels replaced with variables. Modified LaTeX file saved.");
      })

    console.log("Formating data...")
    const formatedContractData = formatContractData({...data, ...contractData})
    
    console.log("Creating contract...")
    const contractPath = await createContract(formatedContractData)

    console.log("Contract sucessefully created")
    console.log("Contract path: " + contractPath)
    if(contractData) return contractPath

    return {erro: "nenhum contrato encontrado"}
}

