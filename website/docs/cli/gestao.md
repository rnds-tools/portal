---
sidebar_position: 1
title: Gestão do Ambiente
---

O aplicativo **adf** é responsável pelo gerenciamento de instâncias do Ambiente
de Desenvolvimento FHIR e também pode ser empregado para submeter requisições,
dentre outras funções.

:::note Instalação

Faça o _download_ do aplicativo **adf** por meio do endereço
https://rnds.software/get conforme o seu sistema operacional (Linux, Windows ou Mac)

:::

### Instalar

O comando abaixo obtém a versão mais recente, caso já não esteja disponível.

```
adf install
```

Alternativamente, o comando abaixo instala a versão **1.0.0**, conforme indicado.

```
adf install 1.0.0
```

Qualquer versão disponível pode ser definida como corrente (`adf use`).

Observe que se a versão indicada já estiver disponível será feita uma restauração,
se for o caso.

### Remover

Para remover a versão corrente execute o comando abaixo.
Após esta operação a versão corrente torna-se aquela mais recente disponível. Para saber qual a versão corrente use o comando `adf use`.

```
adf uninstall
```

Ou para remover uma versão específica, execute o comando

```
adf uninstall 1.0.0
```

### Versões instaladas

Exibe a lista de versões disponíveis localmente. A versão corrente,
empregada por padrão, caso nenhuma outra seja especificamente indicada, é
fornecida entre asteriscos, por exemplo, \*1.1.0\*.

```
adf list
```

### Definir a versão corrente a ser usada

Enquanto `adf list` exibe as versões instaladas, o comando

```
adf use
```

exibe qual a versão corrente, ou seja, aquela a ser utilizada. Para definir
a versão **1.0.1** como a versão corrente, dentre aquelas disponíveis, use o comando abaixo:

```
adf use 1.0.1
```

### Ajuda

Informações sobre as opções podem ser obtidas com o comando

```
adf help
```

Ou ainda 

```
adf -h
adf --help
```

Para obter detalhes específicos de um comando use

```
adf <command> -h
adf <command> --help

```

Por exemplo, para detalhar o comando que lista as versões instaladas use `adf help list`.

### Iniciar/parar o ambiente

Inicia empregando a versão corrente na porta padrão (**8087**).

```
adf start
```

Alternativamente pode ser utilizada uma versão e/ou porta específicas para início,
conforme abaixo.

```
adf start [<version>] [--port <number>]
```

O comando abaixo, por outro lado, interrompe a execução do ambiente:

```
adf stop
```

Enquanto aquele abaixo interrompe uma instância específica. Observe que 
se apenas uma instância de uma versão está em execução, então
apenas a versão é suficiente. Caso contrário, será necessário 
indicar o valor para o _flag_ **ps** ou **port**. Em tempo,
qualquer um destes dois últimos é suficiente para interromper
a instância desejada.

```
adf stop [<version>] [--ps <number>] [--port <number>]
```

O parâmetro **number** indica o número único atribuído a uma instância específica
e pode ser obtido com o comando `adf ps`.

### Instâncias em execuçãao

Lista as instâncias do ambiente em execução

```
adf ps
```

### Reiniciar o ambiente

Reinicia a única instância em execução.

```
adf restart
```

Se mais de uma instância é executada na máquina em questão, então o
comando correspondente deve ser

```
adf restart [--run <number>] [--port <number>]
```

Onde **<number\>** indica o número da instância conforme fornecido por `adf run` ou a porta empregada pela instância a ser reiniciada.

### Registros de log

Exibe os últimos registros de log do ambiente. Também é possível indicar que
registros devem ser aguardados indefinidamente e exibidos, quando disponíveis.

```
adf log [--watch]
```

### Exibe configuração

```
adf configure
```

### Validar instância

Valida uma instância de um recurso considerando os perfis eventualmente fornecidos.

```
adf validate <resource file> [<profile>*]
```

Observe que se o recurso possui um valor para a propriedade **meta.profile**,
então a verificação em conformidade com este valor também é realizada.

### Adiciona perfil

Acrescenta perfil à lista de perfis disponíveis para eventuais validações.

```
adf add <profile>
```

Adicionalmente pode-se especificar todo um diretório contendo perfis a serem consultados recursivamente.

```
adf add --dir <directory>
```

### Remove perfil

- `adf remove <profile>`
  (remove o profile da lista daqueles que serão considerados pelo servidor para validação e outras atividades)
