class enderecoPage {
    adicionarEnderecoFaturamento(){
        cy.get('#billing_first_name').clear().type('Rebeca')
        cy.get('#billing_last_name').clear().type('RIbeiro')
        cy.get('#billing_company').clear().type('RIbeiro')
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type('rua 1')
        cy.get('#billing_address_2').clear().type('12')
        cy.get('#billing_city').clear().type('Sorocoba')
        cy.get('#select2-billing_state-container').click().type('São Paulo{enter}')
        cy.get('#billing_postcode').clear().type('12311132')
        cy.get('#billing_phone').clear().type('11111111111')
        cy.get('#billing_email').clear().type('email.teste@email.com.br')

}
}

export default new enderecoPage()