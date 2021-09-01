
## Agradecimento

Primeiramente, obrigado por me darem uma chance de provar meu valor para o time. Eu me identifiquei bastante com o que a Fernanda me comunicou e estou feliz por ter a chance de fazer parte de uma empresa que parece ser bem unida e que visa um produto de qualidade XD.

## Contextualizando

Vou cobrir o quick start por seções (Introduction, Setting up, etc), lembrando sempre que meu feedback é discutir ideias, não pessoas. Logo, espero que qualquer crítica não afete o orgulho ou ofenda ninguém.

Por fim, vou falar dos cases que a Fernanda me enviou por email.

# Quick start feedback

## Introduction

Pontos positivos:

- O problema e a resolução foram introduzidos muito bem, eu comecei a olhar o quick start sem nem espiar o código pra me sentir como uma pessoa não técnica tentando usar o produto e nesse início, os meus questionamentos iam sendo respondidos linha por linha.

- Como assim vocês criaram uma linguagem própria?? Isso me dá uma perspectiva que a startup é totalmente brilhante no que faz.

Pontos negativos:

- AO meu ver, esse é o primeiríssimo contato com o produto de fato da Croct, mas eu não sinto que estou lendo uma notícia da Croct ou na homepage deles. Acho que uma boa personalização iria deixar tudo bem mais colorido e agradável ao usuário, nem que fossem alguns gifs demonstrando o funcionamento da aplicação ou coisa parecida.

## Setting Up

Pontos positivos:

- Os passos são muito intuitivos e simples, o gif deu a animada que eu tinha criticado anteriormente.

## Evaluating Expressions

### Evaluating Expressions on the Playground

Pontos positivos:

- Estou pasmo com o funcionamente tanto de eu poder escrever como uma pessoa que não sabe programar quanto com a resposta inteligente da tecnologia, muito show mesmo.

Pontos negativos:

- Nas notícias, falava um pouco a respeito de a Croct não usar o IP do usuário ao identificar a localização dele, mas nessa seção tem a frase "This time, the evaluation result should show your approximate location based on your IP address.", o que pode ser confuso pro usuário, não sei se estou sendo chato, mas foi o que me veio a mente 😅

### Identifying Users

Eu modifiquei uma linha no snnipet e achei que ficou legal:

```js

<button onclick="identify()">
Identify
</button>

<button onclick="getUserId()">
Get user ID
</button>

<button onclick="anonymize()">
Anonymize
</button>

<script>  
  function identify() {
    // parte que modifiquei
    croct.evaluate("user is not identified")
    .then((isNotIdentified) => {
      if(isNotIdentified) {
        croct.identify(prompt('Please enter your ID:'));
      } else {
        alert('You are already identified >:l')
      }
    })
  }

  function getUserId() {
    alert(croct.getUserId());
  }
  
  function anonymize() {
    croct.anonymize();
  }
</script> 


```