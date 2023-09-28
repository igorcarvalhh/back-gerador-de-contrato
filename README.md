# back-gerador-de-contrato


O label para referênciar uma variável nos aquivos .tex é um @ seguido do nome da variável entre chaves
```
@[NomeDaVariavel]
```
Regex do label
```
/@\[([A-Z][a-zA-Z_0-9]+)\]/g
```

O nome da variável deve seguir as seguintes regras:
- Composta apenas por letras maiúsculas e minúsculas, números e underline
- Deve ter mais de um caractere
- Sempre começa com uma letra maiúscula

Regex do nome da variável
```
/[A-Z][a-zA-Z_0-9]+/
```


## Variáveis do Contrato
Todos os dados do contrato ficam na pasta `Dados_do_Contrato`, os dados estão separados em 4 tipos em aquivos diferentes:
- Dados do contratante: `01_Dados_Contratante.tex`
- Dados das cooperadas: `02_Dados_Cooperada.tex`
- Dados das executoras: `03_Dados_Executora.tex`
- Dados dos intervenientes: `04_Dados_Interveniente.tex`
- Dados do projeto: `05_Dados_Projeto.tex`

### Dados Executora

| Nome da varável | Descrição |
|-----------------|-----------|
| NomeContratante | descricao |
| NomeContratanteResumido | descricao |
| EnderecoContratante | descricao |
| ComplementoEnderecoContratante | descricao |
| BairroContratante | descricao |
| CEPContratante | descricao |
| CidadeEnderecoContratante | descricao |
| EstadoEnderecoContratante | descricao |
| NumCNPJContratante | descricao |
| TelefoneContratante | descricao |
| EmailContratante | descricao |
| DiretorUmContratante | descricao |
| DiretorDoisContratante | descricao |

### Dados Cooperada

| Nome da varável | Descrição |
|-----------------|-----------|
| NomeCooperada | descricao |
| NomeCooperadaResumido | descricao |
| EnderecoCooperada | descricao |
| ComplementoEnderecoCooperada | descricao |
| BairroCooperada | descricao |
| CEPCooperada | descricao |
| CidadeEnderecoCooperada | descricao |
| EstadoEnderecoCooperada | descricao |
| NumCNPJCooperada | descricao |
| TelefoneCooperada | descricao |
| EmailCooperada | descricao |
| NomeRepresentanteCooperada | descricao |
| CargoRepresentanteCooperada | descricao |
| DiretorUmCooperada | descricao |
| DiretorDoisCooperada | descricao |

### Dados Executora

| Nome da varável | Descrição |
|-----------------|-----------|
| NomeExecutoraA | descricao |
| NomeExecutoraAResumido | descricao |
| EnderecoExecutoraA | descricao |
| ComplementoEnderecoExecutoraA | descricao |
| BairroExecutoraA | descricao |
| CEPExecutoraA | descricao |
| CidadeEnderecoExecutoraA | descricao |
| EstadoEnderecoExecutoraA | descricao |
| NumCNPJExecutoraA | descricao |
| TelefoneExecutoraA | descricao |
| EmailExecutoraA | descricao |
| NomeRepresentanteExecutoraA | descricao |
| CargoRepresentanteExecutoraA | descricao |
| DiretorUmExecutoraA | descricao |
| DiretorDoisExecutoraA | descricao |
| BancoExeutoraA | descricao |
| AgenciaExecutoraA | descricao |
| ContaCorrenteExecutoraA | descricao |
| TitularidadeExecutoraA | descricao |
| NomeExecutoraB | descricao |
| NomeExecutoraBResumido | descricao |
| EnderecoExecutoraB | descricao |
| ComplementoEnderecoExecutoraB | descricao |
| BairroExecutoraB | descricao |
| CEPExecutoraB | descricao |
| CidadeEnderecoExecutoraB | descricao |
| EstadoEnderecoExecutoraB | descricao |
| NumCNPJExecutoraB | descricao |
| TelefoneExecutoraB | descricao |
| EmailExecutoraB | descricao |
| NomeRepresentanteExecutoraB | descricao |
| CargoRepresentanteExecutoraB | descricao |
| DiretorUmExecutoraB | descricao |
| DiretorDoisExecutoraB | descricao |
| BancoExeutoraB | descricao |
| AgenciaExecutoraB | descricao |
| ContaCorrenteExecutoraB | descricao |
| TitularidadeExecutoraB | descricao |

### Dados Interveniente

| Nome da varável | Descrição |
|-----------------|-----------|
| IntervenienteANome | descricao |
| IntervenienteAEndereco | descricao |
| IntervenienteACNPJ | descricao |
| RepresentanteAIntervenienteA | descricao |
| RepresentanteAIntervenienteACI | descricao |
| RepresentanteAIntervenienteACPF | descricao |
| RepresentanteBIntervenienteA | descricao |
| RepresentanteBIntervenienteACI | descricao |
| RepresentanteBIntervenienteACPF | descricao |
| IntervenienteBNome | descricao |
| IntervenienteBEndereco | descricao |
| IntervenienteBCNPJ | descricao |
| RepresentanteAIntervenienteB | descricao |
| RepresentanteAIntervenienteBCI | descricao |
| RepresentanteAIntervenienteBCPF | descricao |
| RepresentanteBIntervenienteB | descricao |
| RepresentanteBIntervenienteBCI | descricao |
| RepresentanteBIntervenienteBCPF | descricao |

### Dados Projeto

| Nome da varável | Descrição |
|-----------------|-----------|
| NumeroContrato | descricao |
| DataDaCelebracao | descricao |
| DataCompletaCelebracao | descricao |
| NumeroProjeto | descricao |
| CodAneelProjeto | descricao |
| ApelidoProjeto | descricao |
| Consessoes | descricao |
| DataFimProjeto | descricao |
| PrazoProjetoEmMeses | descricao |
| PrazoProjetoEmMesesExtenso | descricao |
| DataFimFaseDE | descricao |
| DataFimFaseCS | descricao |
| DataFimFaseIM | descricao |
| TituloCompletoProjeto | descricao |
| ObjetoDoProjeto | descricao |
| ObjetivoDoProjeto | descricao |
| TituloCompletoProjetoDE | descricao |
| ObjetoDoProjetoDE | descricao |
| ObjetivoResumidoDoProjetoDE | descricao |
| TituloCompletoProjetoCS | descricao |
| ObjetoDoProjetoCS | descricao |
| ObjetivoResumidoDoProjetoCS | descricao |
| TituloCompletoProjetoIM | descricao |
| ObjetoDoProjetoIM | descricao |
| ObjetivoResumidoDoProjetoIM | descricao |
| NomeTestemunhaA | descricao |
| NomeTestemunhaB | descricao |
| CPFTestemunhaA | descricao |
| CPFTestemunhaB | descricao |
| ValorContrato | descricao |
| RepasseProponenteExecutoraA | descricao |
| RepasseProponenteExecutoraB | descricao |
| RepasseCooperadaExecutoraA | descricao |
| RepasseCooperadaExecutoraB | descricao |
| ValorTotalCP | descricao |
| DotacaoOrcamentaria | descricao |