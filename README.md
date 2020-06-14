# CiprianoCSS

## CiprianoCSS, um framework de CSS em português destinado a auxiliar iniciantes no desenvolvimento web a compreenderem como o CSS funciona em páginas html.  
  + #### Ferramenta em desenvolvimento, atente-se às atualizações de conteúdo!
  + #### Alterações importantes:
	  * ##### Site de apresentação da estilização dos componentes do [CiprianoCSS: https://cipriano99.github.io/](https://cipriano99.github.io/)
  
### Iniciando com o CiprianoCSS
* ##### 1. Faça o download/fork do repositório;
* ##### 2. Crie seu arquivo "index.html" no diretório principal;
* ##### 3. Adicione os links de comunicação entre o HTML e o CSS no(s) arquivo(s) criado(s) dentro da tag head:  
```html

  <link href="./ciprianocss/cipriano.css" type="text/css" rel="stylesheet" media="screen,projection" />
  <link href="./ciprianocss/responsivo.css" type="text/css" rel="stylesheet" media="screen,projection" />

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

* ### Texto  

  + #### Alinhamento de texto:

    Centralizar texto:  
      >class = "texto-centralizado"
      
    Texto na direita:  
      >class = "texto-direita"
      
    Texto na esquerda (padrão):  
      >class = "texto-esquerda"

  + #### Fontes de texto:

    Serif  
      >class = "texto-fonte-serif"
      
    Sans-Serif  
      >class = "texto-fonte-sans"
      
    Monospace  
      >class = "texto-fonte-monospace"
      
    Cursive  
      >class = "texto-fonte-cursive"
      
    Fantasy  
      >class = "texto-fonte-fantasy"
      
    Fonte do sistema  
      >class = "texto-fonte-sistema"

  + #### Formatação de texto

    Texto maiúsculo:  
      >class = "texto-maiusculo"
      
    Texto minúsculo:  
      >class = "texto-minusculo"
      
    Primeira letra mauiúsculo:  
      >class = "texto-primeira-letra-maiuscula"

  + #### Estilo de fonte

    Itálico:  
      >class = "texto-fonte-italico"
      
    Negrito:  
      >class = "texto-fonte-negrito"
      
    Normal:  
      >class = "texto-fonte-normal"

  + #### Tamanho de fonte

    Pequena:  
      >class = "texto-fonte-pequena"
      
    Media:  
      >class = "texto-fonte-media"
      
    Grande:  
      >class = "texto-fonte-grande"
      
    Muito grande:  
      >class = "texto-fonte-muito-grande"

  + #### Texto em colunas:

    Coluna simples (padrão)

  	  >class = "texto-coluna-simples"

    Coluna dupla
      >class = "texto-coluna-dupla"

    Coluna tripla
      >class = "texto-coluna-tripla"

	  Coluna quadrupla
      >class = "texto-coluna-quadrupla"

  + ##### Divisor de colunas: (sem variações claro e escuro)

    >class = "divisor-coluna-(nome da cor)"

* ### Bordas

  + #### Borda simples:  

    > class = "borda-fina"  
      class = "borda-media"  
      class = "borda-larga"  

  + #### Borda dupla:  

    > class = "borda-fina-dupla"  
      class = "borda-media-dupla"  
      class = "borda-larga-dupla"  

  + #### Borda pontilhada:  

    > class = "borda-fina-pontilhada"  
      class = "borda-media-pontilhada"  
      class = "borda-larga-pontilhada"  

  + #### Borda arredondada:  

    > class = "borda-pouco-arredondada"  
      class = "borda-arredondada"  
      class = "borda-muito-arredondada"

* ### Sombra:

  > class = "sombra"

* ### Listas

  + #### Estilo de lista:  

    > class = "estilo-lista-nenhum"  
      class = "estilo-lista-circulo"  
      class = "estilo-lista-quadrado"  
      class = "estilo-lista-decimal"  
      

  + #### Orientação de lista:  

    > class = "orientação-lista-horizontal"
      
     ##### Observação:
     >Por padrão, as lista possuem orientação vertical.

* ### Links
	
	> class="link-sem-estilo"

* ### Alinhamento de itens
  + #### Centralizar item:

	  > class = "item-centralizado"

  + #### Direita:

	  > class = "direita"

  + #### Esquerda:

	  > class = "esquerda"

  + #### Espaçamento entre itens:

	  > class = "espaçamento-entre-itens"

  + #### Espaçamento ao redor dos itens:

	  > class = "espaçamento-ao-redor"

* ### Preenchimento de tela

  + #### Preenchimento horizontal

    Preenchimento 25%
      >class = "largura-pequena"

    Preenchimento 50%
      >class = "largura-media"
	
	  Preenchimento 75%
      >class = "largura-grande"

    Preenchimento 100%
      >class = "largura-total"

    Preenchimento Automático
      >class = "largura-automatica"  

  + #### Preenchimento vertical

    Preenchimento 25%
      >class = "altura-pequena"

    Preenchimento 50%
      >class = "altura-media"

    Preenchimento 75%
      >class = "altura-grande"

    Preenchimento 100%
      >class = "altura-total"

    Preenchimento Automático
      >class = "altura-automatica"

* ### Imagem de fundo

  >class = "imagem-fundo" (URL editável no arquivo cipriano.css)

  + #### Imagem fixa:

    > class = "imagem-fundo-fixa" (URL editável no arquivo cipriano.css)

* ### Colunas:  
  Linha possue dimensão de tamanho 12, ou seja, sub-divisível em 12 partes e o somatório dos componentes (tamanho) devem ser no total de 12:
    >class = "coluna tamanho(1 a 12)"

     ##### Observação:
     >Visualise exeplos no arquivo "index.html".

* ### Mídias
	+ #### Imgens e vídeos responsivos:
    > class = "imagem-responsiva"  
    class = "video-responsivo"

  + #### Quadro de vídeo:
    >class = "video-container"

* ### Tabelas

  + #### Estilo de tabela:
    >class = "listrada"  
    class = "realçado"

* ### Container:
    >class = "container"
