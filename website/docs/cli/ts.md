---
sidebar_position: 3
title: Terminologia
---

Váris funções estão disponíveis para acesso às terminologias
contempladas pelo Ministério da Saúde, algumas delas estão documentadas aqui.
Demais [funções](funcoes) incluem a validação de recursos, dentre outras.

As seções abaixo assumem que o aplicativo **rnds** está disponível e acessível
via linha de comandos.

:::note Instalação

Faça o _download_ do aplicativo **rnds** por meio do endereço
https://rnds.software/get conforme o seu sistema operacional (Linux, Windows ou Mac)

:::

### Iniciar o serviço

O Serviço de Terminologias da RNDS (STR) pode ser iniciado pelo comando abaixo, onde
o diretório de trabalho da RNDS é indicado. Este é o diretório empregado para a
operação do STR.

```
rnds ts start [--rnds.home=<dir>]
```

Se a opção indicando o diretório
de trabalho não é fornecida, então é tentado obter e usar o valor
da variável de ambiente **RNDS_HOME**. Se a variável não está definida ou
o diretório indicado não puder ser empregado, por exemplo, por
ausência de permissão de leitura/escrita, então será tentado o
diretório **.rnds** no _home dir_ do usuário em questão. Se
também não for possível, a última tentativa é o diretório
temporário do sistema em questão, por exemplo,
pode ser **/tmp**, **/var/tmp** ou **c:\\tmp**, dentre outras.

### Como informar a base de dados (terminologias)?

As terminologias são disponibilizadas
por meio de recursos FHIR como CodeSystem, ValueSet e NamingSystem. Estes
recursos são disponibilizados em um arquivo .zip ou mesmo em um dado diretório.
Abaixo segue como informar onde o serviço deve procurar por terminologias a serem carregadas. Observe que isto pode ser feito em dois momentos, quando se inicia (opção **start**) o serviço ou quando as terminologias empregadas são limpas e uma nova carga é realizada (opção **reload**).

#### Ao iniciar serviço (start)

```
rnds ts start --source=<estrategia>
```

onde _stratégia_ é definida conforme abaixo.

- (**none**) `rnds ts start --source=none` inicia o serviço sem execução da carga inicial de dados.
  Este é o mesmo comportando se a opção _source_ não é fornecida como em
  `rnds ts start`.

- (**diretório**) `rnds ts start --source=<dir>` onde _dir_ é o diretório no qual os recursos FHIR
  serão procurados. Por exemplo, `--source=c:/str/dados` (Windows) ou `--source=/home/dados/str` (Linux).

- (**url**) `rnds ts start --source=<url>` onde é indicado o arquivo zip disponibilizado remotamente no qual recursos FHIR serão procurados. Por exemplo,
  `--source=http://servidor/arquivo.zip` ou `--source=https://servidor-seguro.com/term.zip`. O arquivo
  será baixado e seu conteúdo empregado para iniciar o serviço.

#### Ao recarregar o serviço (reload)

Esta opção é similar ao cenário anterior exceto que,
neste caso, o serviço já está disponível e apenas o
carregamento deve ser realizado. Os mesmos parâmetros
indicados acima valem para a opção **reload**. Por exemplo,

```
rnds ts reload --source=none
```

para "limpar" as terminologias empregadas pelo serviço
em execução, ou ainda,

```
rnds ts reload --source=/home/str/dados/v1
```

para carregar as terminologias do diretório indicado, após
"limpar" aquelas empregadas no momento.

### Em caso de falha...

Se, por algum motivo, a carga de dados (terminologias) não puder ser realizada de forma satisfatória, por exemplo, a URL indicada não é válida, não está acessível, por exemplo, então a estratégia **none** é adequada como "plano B".

### Terminologias disponíveis

Exibe a lista de todas as terminologias contempladas com as
respectivas versões pelo Ambiente de Desenvolvimento.

```
rnds [--host=<server>] ts
```

Onde **<server\>** identifica o servidor e porta onde se encontra disponível o
Serviço de Terminologias da RNDS (STR).

### Consulta

Verifica a disponibilidade do código na terminologia.

```
rnds ts http://loinc.org LA38-6
```
