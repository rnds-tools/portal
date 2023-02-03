---
sidebar_position: 1
title: Gestão do Ambiente
---

O aplicativo **rnds** é responsável pelo gerenciamento de instâncias do Ambiente
de Execução e também pode ser empregado para submeter requisições para o Ambiente,
dentre outras funções.

:::note Instalação

Faça o _download_ do aplicativo **rnds** por meio do endereço
https://rnds.software/get conforme o seu sistema operacional (Linux, Windows ou Mac)

:::

### Instalar/remover versão (atualização)

O comando abaixo obtém a versão mais recente, caso já não esteja disponível, e a define para ser usada como corrente (`rnds use`).

```
rnds install
```

Alternativamente, o comando abaixo instala a versão **1.0.0**, conforme indicado.

```
rnds install 1.0.0
```

Observe que se a versão indicada já estiver disponível localmente, então será
feita uma verificação na instalação disponível. Em caso de alguma diferença, a
versão original, sem alterações, será baixada e instalada, sobrescrevendo a versão inicialmente disponível.

A remoção é similar. Para remover a versão corrente execute o comando abaixo.
Após esta operação a versão corrente torna-se aquela mais recente disponível. Para saber qual a versão corrente use o comando `rnds use`.

```
rnds uninstall
```

Ou para remover uma versão específica, execute o comando

```
rnds uninstall 1.0.0
```

### Versões instaladas

Exibe a lista de versões disponíveis localmente. A versão corrente,
empregada por padrão, caso nenhuma outra seja especificamente indicada, é
fornecida entre asteriscos, por exemplo, \*1.1.0\*.

```
rnds list
```

### Definir a versão corrente a ser usada

Enquanto `rnds list` exibe as versões instaladas, o comando

```
rnds use
```

exibe qual a versão corrente, ou seja, aquela a ser utilizada. Para definir
a versão **1.0.1** como a versão corrente, dentre aquelas disponíveis, use o comando abaixo:

```
rnds use 1.0.1
```

### Ajuda

Informações sobre as opções podem ser obtidas com o comando

```
rnds help
```

Para mais detalhes específicos de um comando use

```
rnds help [<command>]
```

Por exemplo, para detalhar o comando que lista as versões instaladas use `rnds help list`.

### Iniciar/parar o ambiente

Inicia o Ambiente de Desenvolvimento empregando a versão corrente na porta padrão (**8087**).

```
rnds start
```

Alternativamente pode ser utilizada uma versão e/ou porta específicas para início,
conforme abaixo.

```
rnds start [<version>] [--port <number>]
```

O comando abaixo, por outro lado, interrompe a execução do ambiente:

```
rnds stop
```

Enquanto aquele abaixo interrompe uma instância específica

```
rnds start [<version>] [--run <number>] [--port <number>]
```

O parâmetro **number** indica o número único atribuído a uma instância específica
e pode ser obtido com o comando `rnds run`.

### Instâncias em execuçãao

Lista as instâncias do ambiente em execução

```
rnds run
```

### Reiniciar o ambiente

Reinicia a única instância em execução.

```
rnds restart
```

Se mais de uma instância é executada na máquina em questão, então o
comando correspondente deve ser

```
rnds restart [--run <number>] [--port <number>]
```

Onde **<number\>** indica o número da instância conforme fornecido por `rnds run` ou a porta empregada pela instância a ser reiniciada.

### Registros de log

Exibe os últimos registros de log do ambiente. Também é possível indicar que
registros devem ser aguardados indefinidamente e exibidos, quando disponíveis.

```
rnds log [--watch]
```

### Exibe configuração

```
rnds configure
```

### Validar instância

Valida uma instância de um recurso considerando os perfis eventualmente fornecidos.

```
rnds validate <resource file> [<profile>*]
```

Observe que se o recurso possui um valor para a propriedade **meta.profile**,
então a verificação em conformidade com este valor também é realizada.

### Adiciona perfil

Acrescenta perfil à lista de perfis disponíveis para eventuais validações.

```
rnds add <profile>
```

Adicionalmente pode-se especificar todo um diretório contendo perfis a serem consultados recursivamente.

```
rnds add --dir <directory>
```

### Remove perfil

- `rnds remove <profile>`
  (remove o profile da lista daqueles que serão considerados pelo servidor para validação e outras atividades)
