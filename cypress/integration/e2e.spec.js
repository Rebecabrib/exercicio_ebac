/// <reference types="cypress" />


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
        cy.addProdutos('Abominable Hoodie', 'S', 'Green', 1)
        cy.addProdutos('Abominable Hoodie', 'XS', 'Blue', 1)
        cy.addProdutos('Abominable Hoodie', 'XS', 'Green', 1)
        cy.addProdutos('Abominable Hoodie', 'S', 'Red', 1)
        cy.checkoutCart('Ver carrinho')
        cy.get('.woocommerce-billing-fields > h3').should('contain', 'Detalhes de faturamento')
        enderecoPage.adicionarEnderecoFaturamento()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        cy.get('.woocommerce-order-details').should('contain','Detalhes do pedido')
        cy.get(':nth-child(1) > .woocommerce-table__product-name > a').should('contain','Abominable Hoodie - S, Green')
        cy.get(':nth-child(2) > .woocommerce-table__product-name > a').should('contain','Abominable Hoodie - XS, Blue')
        cy.get(':nth-child(3) > .woocommerce-table__product-name > a').should('contain','Abominable Hoodie - XS, Green')
        cy.get(':nth-child(4) > .woocommerce-table__product-name > a').should('contain','Abominable Hoodie - S, Red')
        cy.get(':nth-child(1) > .woocommerce-table__product-name > .product-quantity').contains('× 1')
        cy.get(':nth-child(2) > .woocommerce-table__product-name > .product-quantity').contains('× 1')
        cy.get(':nth-child(3) > .woocommerce-table__product-name > .product-quantity').contains('× 1')
        cy.get(':nth-child(4) > .woocommerce-table__product-name > .product-quantity').contains('× 1')
        cy.get('tfoot > :nth-child(2) > td').should('contain', 'Transferência bancária')
        
    });


})
