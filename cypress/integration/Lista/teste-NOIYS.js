/// <reference types="cypress" />

describe('Teste loco', () => {

    it('Escrevendo um post com sucesso', () =>{
        cy.visit('http://www.noiys.com/');
        cy.get('#statusText').type('i like apples');
        cy.get('.btn-primary').click();
    });

    it('Escrevendo um post e verificando se está no perfil', () =>{
        cy.visit('http://www.noiys.com/');
        var textoTeste = escreverPost();
        cy.get('#tab-me').click();
        cy.wait(2000);
        cy.get('#me_statuses').should('contain.text', textoTeste);
    });

    it('Teste negativo: se nao estiver nada escrito, verificar se nao cria o post', () => {
        cy.visit('http://www.noiys.com/');
        cy.get('.btn-primary').click();
        cy.get('.btn-warning').should('contain.text', 'Not Posted ...')
    });

    it('dando like no proprio post', ()=> {
        cy.visit('http://www.noiys.com/');
        var textoTeste = escreverPost();
        cy.get('#tab-me').click();
        cy.get('.button-vote').click();
    });

    it('Favoritando post', ()=> {
        cy.visit('http://www.noiys.com/');
        var textoTeste = escreverPost();
        cy.get('#tab-me').click();
        cy.wait(2000)
        cy.get('.button-star').first().click();
        cy.get('#tab-stars').click();
        cy.wait(2000)
        cy.get('#me_statuses').should('contain.text', textoTeste);
    });
    
    it('respondendo post', ()=> {
        cy.visit('http://www.noiys.com/');
        var textoTeste = escreverPost();
        cy.get('#tab-me').click();
        cy.wait(2000)
        cy.get('.button-reply').first().click();
        cy.get('#statusText').type('RESPOSTA');
        cy.get('.btn-primary').click();
        cy.wait(2000)
    });
    
    it('verificando se ainda existe o texto introdutorio para novos usuarios', ()=>{
        cy.visit('http://www.noiys.com/');
        cy.wait(2000);
        cy.get('#tab-search').click();
        cy.wait(2000);
        cy.get('#search_statuses_text').type('#NewNoiysers');
        cy.get('#search_statuses_button').click();
        cy.wait(2000);
        cy.get('#search_statuses_result').should('contain.text', 'MAKING AND USING NOTES');
    });

});

function escreverPost() {

    let hours = new Date().getHours().toString();
    let minutes = new Date().getMinutes().toString();
    let sec = new Date().getSeconds().toString();
    let texto = hours + ':' + minutes + ':' + sec + ' TESTE DE TEXTO';

    cy.visit('http://www.noiys.com/');
    cy.get('#statusText').type(texto);
    cy.get('.btn-primary').click();

    return texto;
}