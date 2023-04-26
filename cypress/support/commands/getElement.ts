export { getElement }

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Get a DOM element based on its attribute and value.
             * It's a best practise to use cypress suggested attributes all the time like:
             * 
             * data-cy
             * 
             * data-test
             * 
             * data-testid
             * 
             * @example
             * [attribute=value] -> [data-testid=‘search’]
             * 
             */
            getElement: typeof getElement
        }
    }
}

const getElement = (attribute: string, value: string) => {
    return cy.get(`[${attribute}=${value}]`, { log: false })
}

Cypress.Commands.add('getElement', getElement)