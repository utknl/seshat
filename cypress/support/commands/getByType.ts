import { Types } from "../typings/types"

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Get a DOM element based on type value
             * 
             * @param input type text value
             */
            getByType: typeof getByType
        }
    }
}

const getByType = (input: Types) => {
    Cypress.log({
        displayName: 'getByType',
        message: input,
        consoleProps() {
            return {
                selector: input
            }
        }
    })
    return cy.get(`[type="${input}"]`, { log: false })
}

Cypress.Commands.add('getByType', getByType)