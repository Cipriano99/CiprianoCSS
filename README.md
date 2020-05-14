# CiprianoCSS


Cores:
  preto
  cinza
  braco
  rosa
  vermelho
  laranja
  verde
  azul
  amarelo
  dourado
  marrom


Pré-definições de cores de componentes:
  As cores estão escaladas em 3 níveis:
    Normal : "nome da cor"
    Claro  : "nome da cor"-claro 
    Escuro : "nome da cor"-escuro

  Texto:
    Para definir a cor de um texto:
      class = "texto-(nome da cor)-(opcional: claro / escuro)"
      class = "texto-branco"
      class = "texto-verde-claro"
      class = "texto-azul-escuro"
    
    
  Fundo(background):
    Para definir a cor de fundo:
      class = "fundo-(nome da cor)-(opcional: claro / escuro)"
      class = "fundo-branco"
      class = "fundo-verde-claro"
      class = "fundo-azul-escuro"

  Cores únicas - não possuem opção 'claro' ou 'escuro':
    preto
    branco
    amarelo
    dourado
    marrom




Alinhamento de texto:
  Centralizar texto:
    class = "texto-centralizado"
  Texto na direita:
    class = "texto-direita"
  Texto na esquerda (padrão):
    class = "texto-esquerda"

Fontes de texto:
  Serif
    class = "texto-fonte-serif"
  Sans-Serif
    class = "texto-fonte-sans"
  Monospace
    class = "texto-fonte-monospace"
  Cursive
    class = "texto-fonte-cursive"
  Fantasy
    class = "texto-fonte-cursive"
  Fonte do sistema
    class = "texto-fonte-sistema"
    
Estilo de fonte
  Itálico
    class = "texto-fonte-italico"
  Negrito
    class = "texto-fonte-negrito"
  Normal
    class = "texto-fonte-normal"

Tamanho de fonte
  Pequena
    class = "texto-fonte-pequena"
  Media
    class = "texto-fonte-media"
  Grande
    class = "texto-fonte-grande"
  Muito grande
    class = "texto-fonte-muito-grande"




Bordas
  Borda simples:
    class = "borda-fina"
    class = "borda-media"
    class = "borda-larga"
  Borda dupla:
    class = "borda-fina-dupla"
    class = "borda-media-dupla"
    class = "borda-larga-dupla"
  Borda pontilhada:
    class = "borda-fina-pontilhada"
    class = "borda-media-pontilhada"
    class = "borda-larga-pontilhada"
    
  Borda arredondada:
    class = "borda-pouco-arredondada"
    class = "borda-arredondada"
    class = "borda-muito-arredondada"


Sombra:
  class = "sombra"


Estilo de lista:
   class = "estilo-lista-nenhum"
   class = "estilo-lista-circulo"
   class = "estilo-lista-quadrado"
   class = "estilo-lista-decimal"
   class = "estilo-lista-simbiolo"
   
Centralizar itens:
  class = "centralizado"
  

Preenchimento de tela:
  Largura
    class = "largura-pequena"
    class = "largura-media"
    class = "largura-grande"
    class = "largura-total"

  Altura
    class = "altura-pequena"
    class = "altura-media"
    class = "altura-grande"
    class = "altura-total"

Imagem de fundo centralizada
  class = "imagem-fundo-centralizada" (URL editável no arquivo cipriano.css)


Texto em colunas:
  class = "texto-coluna-simples"
  class = "texto-coluna-dupla"
  class = "texto-coluna-tripla"
  class = "texto-coluna-quadrupla"

Divisor de colunas:
  class = "divisor-coluna-(nome da cor)"


Configurações Úteis 
  Esconder componente:
    class = "esconder"
  Mostrar componente:
    class = "mostrar"
    
  Fixar na esquerda:
    class = "esquerda"
  Fixar na direira:
    class = "direita"

  Container:
    class = "container"
    
  Divisor:
    class = "divisor"


Colunas:
  Linha possue dimensão de tamanho 12, ou seja, sub-divisível em 12 partes e o somatório dos componentes (tamanho) devem ser no total de 12:
    class = "coluna tamanho(1 a 12)"


Mídias
  Imgens e vídeos responsivos:
    class = "imagem-responsiva"
    class = "video-responsivo"

  Quadro de vídeo:
    class = "video-container"
    
    
Tabelas
  Centralizar texto
    class = "texto-centralizado"
  
  Estilo de tabela:
    class = "listrada"
    class = "realçado"
