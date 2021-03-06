# CiprianoCSS

## CiprianoCSS, um framework de CSS em português destinado a auxiliar iniciantes no desenvolvimento web a compreenderem como o CSS funciona em páginas html.  
  + #### Ferramenta em desenvolvimento, atente-se às atualizações de conteúdo!
  
  + #### Recentes atualizações:  
    - ##### Renomeação de diretórios e de códigos removendo acentos das vogais e alterando 'ç' para 'c' 
    - ##### Novo arquivo JavaScript "cipriano.js"
    - ##### Funcionalidade adicionada: auxilia na responsividade do menu em dispositivos móveis
    
  + #### Site de apresentação da estilização dos componentes do [CiprianoCSS: https://cipriano99.github.io/](https://cipriano99.github.io/)
  
### Iniciando com o CiprianoCSS
* ##### 1. Faça o download/fork do repositório;
* ##### 2. Crie seu arquivo "index.html" no diretório principal;
* ##### 3. Adicione os links de comunicação entre o HTML e o CSS dentro da tag head no HTML no(s) arquivo(s) criado(s):  
```html

  <link href="./ciprianocss/cipriano.css" type="text/css" rel="stylesheet" media="screen,projection" />
  <link href="./ciprianocss/responsivo.css" type="text/css" rel="stylesheet" media="screen,projection" />

```
* ##### 4. Adicione o link de comunicação do arquivo JavaScript com a página no final da tag body no HTML no(s) arquivo(s) criado(s):  
```html

    <script src="./ciprianojs/cipriano.js"></script>

```

### Estilização dos componentes

* ### Cores

  Preto, cinza, braco, rosa, vermelho, laranja, amarelo, verde, azul, dourado e marrom.

  + #### Pré-definições de cores de componentes:

    As cores estão escaladas em 3 níveis:  
      > Normal : "nome da cor"  
        Claro  : "nome da cor"-claro  
        Escuro : "nome da cor"-escuro  
        
       ##### Observação:
       >Cores que não possuem opção 'claro' ou 'escuro':  
        Preto, branco, dourado e marrom.  
  + #### Texto:

    Para definir a cor de um texto:  
      > class = "texto-(nome da cor)-(opcional: claro / escuro)"  
      
    Exemplos:
      > class = "texto-branco"  
        class = "texto-verde-claro"  
        class = "texto-azul-escuro"

  + #### Fundo(background):

    Para definir a cor de fundo:
      > class = "fundo-(nome da cor)-(opcional: claro / escuro)"  
        class = "fundo-branco"  
        class = "fundo-verde-claro"  
        class = "fundo-azul-escuro"

  + #### Divisor: (sem variações claro e escuro)
	
    Para definir a cor do divisor:
      >	class = "dividor-(nome da cor)"  
      	class = "divisor-azul"



#### Visualize a apresentação de toda a estilização dos componentes: [CiprianoCSS: https://cipriano99.github.io/](https://cipriano99.github.io/)
