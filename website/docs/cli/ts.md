---
sidebar_position: 3
title: Terminologia
---

Abaixo seguem funções disponíveis para acesso a terminologias,
inclusive aquelas contempladas pelo Ministério da Saúde.
Demais [funções](funcoes) incluem a validação de recursos, dentre outras.

As seções abaixo assumem que o aplicativo **adf** está disponível e acessível
via linha de comandos.

:::note Instalação

Faça o _download_ do aplicativo **adf** por meio do endereço
https://rnds.software/get conforme o seu sistema operacional (Linux, Windows ou Mac)

:::

### Iniciar o serviço

O Serviço de Terminologias (ST) pode ser iniciado pelo comando abaixo, onde
o diretório de trabalho é indicado. Este é o diretório empregado para a
operação do ST.

```
adf ts start [--adf.home=<dir>]
```

Se a opção indicando o diretório
de trabalho não é fornecida, então é tentado obter e usar o valor
da variável de ambiente **ADF_HOME**. Se a variável não está definida ou
o diretório indicado não existir ou estar inacessível, por exemplo, por
ausência de permissão de leitura/escrita, então será tentado o
diretório **.adf** no _home dir_ do usuário em questão. Se
também não for possível, a última tentativa é o diretório
temporário do sistema em questão, por exemplo,
pode ser **/tmp**, **/var/tmp** ou **c:\\tmp**, dentre outras.

### Como informar a base de dados (terminologias)?

As terminologias são disponibilizadas
por meio de recursos FHIR como CodeSystem, ValueSet e NamingSystem. Estes
recursos são disponibilizados em um arquivo .zip ou mesmo em um dado diretório.
Abaixo segue como informar onde o serviço deve procurar por terminologias a serem carregadas.
Observe que isto pode ser feito em dois momentos, quando se inicia (opção **start**)
o serviço ou quando as terminologias empregadas são limpas e uma nova carga é realizada (opção **reload**).

#### Ao iniciar serviço (start)

```
adf ts start --source=<estrategia>
```

onde _stratégia_ é definida conforme abaixo.

- (**none**) `adf ts start --source=none` inicia o serviço sem execução da carga inicial de dados.
  Este é o mesmo comportando se a opção _source_ não é fornecida como em
  `adf ts start`.

- (**diretório**) `adf ts start --source=<dir>` onde _dir_ é o diretório no qual os recursos FHIR
  serão procurados. Por exemplo, `--source=c:/str/dados` (Windows) ou `--source=/home/dados/str` (Linux).

- (**url**) `adf ts start --source=<url>` onde é indicado o arquivo zip disponibilizado remotamente no qual recursos FHIR serão procurados. Por exemplo,
  `--source=http://servidor/arquivo.zip` ou `--source=https://servidor-seguro.com/term.zip`. O arquivo
  será baixado e seu conteúdo empregado para iniciar o serviço.

#### Ao recarregar o serviço (reload)

Esta opção é similar ao cenário anterior exceto que,
neste caso, o serviço já está disponível e apenas o
carregamento deve ser realizado. Os mesmos parâmetros
indicados acima valem para a opção **reload**. Por exemplo,

```
adf ts reload --source=none
```

para "limpar" as terminologias empregadas pelo serviço
em execução, ou ainda,

```
adf ts reload --source=/home/str/dados/v1
```

para carregar as terminologias do diretório indicado, após
"limpar" aquelas empregadas no momento.

### Em caso de falha...

Se, por algum motivo, a carga de dados (terminologias) não puder ser realizada de forma satisfatória, por exemplo, a URL indicada não é válida ou não está acessível, dentre outros cenários, então a estratégia **none** é empregada.

### Terminologias disponíveis

Exibe a lista de todas as terminologias contempladas com as
respectivas versões.

```
adf [--host=<server>] ts
```

Onde **<server/>** identifica o servidor e porta onde se encontra disponível o
Serviço de Terminologias (ST).

### Consulta

Verifica a disponibilidade do código na terminologia.

```
adf ts http://loinc.org LA38-6
```
