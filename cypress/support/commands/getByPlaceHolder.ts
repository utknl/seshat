Cypress.Commands.add('getByPlaceHolder', (input: string) => {

    Cypress.log({
        displayName: 'getByPlaceHolder',
        message: input,
        consoleProps() {
            return {
                selector: input
            }
        }
    })

    return cy.get('[placeholder="${input}"]')
})