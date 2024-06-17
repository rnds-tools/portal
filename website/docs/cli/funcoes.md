---
sidebar_position: 2
title: Funções
---

Acesso às funções oferecidas pelo Ambiente de Desenvolvimento FHIR.
Estão documentadas em outras partes as funções pertinentes a [terminologias](ts)
a aquelas de [gestão](gestao) do ambiente.

As seções abaixo assumem que o aplicativo **rnds** está disponível e acessível
via linha de comandos.

:::note Instalação

Faça o _download_ do aplicativo **rnds** por meio do endereço
https://rnds.software/get conforme o seu sistema operacional (Linux, Windows ou Mac)

:::

### Registros de log

Exibe os últimos registros de log do ambiente. Também é possível indicar que
registros devem ser aguardados indefinidamente e exibidos, quando disponíveis,
conforme abaixo.

```
adf [--host=<server>] log [--watch]
```

Onde **<server/>** identifica o servidor e porta onde se encontra em
execução o Ambiente de Desenvolvimento.

Se a opção **--watch** é fornecida, então registros de log serão
aguardados indefinidamente. Para interromper esta espera
digite CTRL-C.
