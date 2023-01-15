/// <reference types="cypress" />

import produtosPage from '../support/page_objects/produtos.page'
import enderecoPage from '../support/page_objects/endereco.page'


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => { 
        produtosPage.adicionarProduto1();
        cy.get('.woocommerce-message').should('contain', '“Agasalho jhony quest” foi adicionado no seu carrinho.');
        produtosPage.adicionarProduto2();
        cy.get('.woocommerce-message').should('contain', '“Awesome Fresh Computer” foi adicionado no seu carrinho.');
        produtosPage.adicionarProduto3();
        cy.get('.woocommerce-message').should('contain', '“Awesome Fresh Hat” foi adicionado no seu carrinho.');
        produtosPage.adicionarProduto4();
        cy.get('.woocommerce-message').should('contain', '“Awesome Frozen Pizza” foi adicionado no seu carrinho.');
        cy.get('.dropdown-toggle > .text-skin').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('.woocommerce-billing-fields > h3').should('contain', 'Detalhes de faturamento')
        enderecoPage.adicionarEnderecoFaturamento()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        cy.get('.woocommerce-order').contains('Agasalho jhony quest × 1')
        cy.get('.woocommerce-order').contains('Awesome Fresh Computer × 1')
        cy.get('.woocommerce-order').contains('Awesome Fresh Hat × 1')
        cy.get('.woocommerce-order').contains('Awesome Frozen Pizza × 1')
        cy.get('.woocommerce-order').contains('Transferência bancária')



 
    });


})