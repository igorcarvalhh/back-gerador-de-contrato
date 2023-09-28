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
| NumeroEnderecoContratante | descricao |
| ComplementoEnderecoContratante | descricao |
| BairroContratante | descricao |
| CidadeEnderecoContratante | descricao |
| NumCNPJContratante | descricao |
| TelefoneContratante | descricao |
| EmailContratante | descricao |
| DiretorUmContratante | descricao |
| DiretorDoisContratante | descricao |


## Dados Cooperada

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