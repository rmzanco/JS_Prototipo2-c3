# Protótipo 2 - SNP Debug 

[![license](https://img.shields.io/badge/license-Mozilla-brightgreen.svg?style=flat)](https://github.com/rmzanco/JS_Prototipo2-c3/blob/trunk/LICENSE)



Este repositório contém um sample basico de c3, voltado para o experimento de tecnologias em estudo para o projeto SNP Debug.

## Requisitos

* Input de arquivo em texto ordenado (.txt), similar ao mapa de SNPs;
* Funcionamento da tecnologia em questão (biblioteca) para aceitar os dados processados;
* Saída dos dados inputados em forma de gráfco.

## Tecnologias Utilizadas no Protótipo

* Front-end: padrão Web (HTML/CSS/JS)
* Back-end: N/A (Apenas manipulação de dados .txt em Javascript) 
* Pure JS (Javascript puro - ECMAScript 6);
* c3.js - Biblioteca simplificada originada do d3.js.
    * Vantagens:
        * Manipulação de dados em alto nível em relação ao d3, baixa necessidade de codificação dos gráficos e mais foco nos dados;
        * Biblioteca de fácil utilização (basta apenas baixar o pacote, ou importar via unpkg, e injetar a dependencia no HTMl)
    * Desvantagens:
        * Devido ao alto nível de manipulação de dados, a c3 fica restrita apenas a manipulação dos dados. com o d3 por exemplo, alem de ter os plots desejados ainda podemos alterar as condições do gráfico, podendo fazer checagens para a pipeline desejada dos SNPs (Debug do SNP).

### Tasks 

- [x] Implementar Input;
- [x] Importar a biblioteca c3;
- [x] Plotar gráfico Sample;
- [x] Implementar conversão de txt em JSON;
- [x] Injetar dados em JSON no chart;

### Links Para injeção de dependências

#### UNPKG

* c3.css | v0.7.20 : https://unpkg.com/c3@0.7.20/c3.css
* c3.min.js | v0.7.20 : https://unpkg.com/c3@0.7.20/c3.min.js
* d3-5.8.2.min.js | v5.8.2 : https://unpkg.com/d3@5.8.2/dist/d3.min.js

#### Pacote c3

* c3.zip | v0.7.20 : https://github.com/c3js/c3/archive/refs/tags/v0.7.20.zip