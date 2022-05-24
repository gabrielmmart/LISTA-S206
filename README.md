# LISTA-S206

- Repositório de testes para o site NOYIS, S206 - LAB.

# Instalação do ambiente de desenvolvimento:

1.Git Bash (Git for Windows - mais leve) https://gitforwindows.org/

2. Nodejs (node): https://nodejs.org/en/

3. IDE VSCode (code): https://code.visualstudio.com/ OBS: Pode usar qualquer IDE. Eclipse, InteliJ...fica a seu critério.

4. JDK (java): https://www.oracle.com/java/technologies/javase-downloads.html

5. Maven (mvn) https://maven.apache.org

# Instalação - Cypress (Teste de UI):

Faça a instalação do cypress via linha de comando. Abra o terminal e digite

    npm install cypress

Caso não queira utilizar o cypress pelo NPM, pode fazer o download direto do site: https://www.cypress.io/

    Link para download direto: https://download.cypress.io/desktop

Basta baixar, extrair, executar o Cypress.exe e apontar para o diretório do projeto desejado na interface do cypress. Utilize a IDE para editar o código.

# Execução dos testes:

Para abrir o cypress no diretório do projeto, abra o git bash e digite:

    ./node_modules/.bin/cypress open
    
Procure pela pasta "Lista" e abra o arquivo "teste-NOIYS.js", que contém os testes.
