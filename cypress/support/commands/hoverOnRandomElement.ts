export { hoverOnRandomElement }

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Get JQuery elements and hover over one of them randomly.
             * 
             * @input
             * elements: JQuery<HTMLElement>
             */
            hoverOnRandomElement: typeof hoverOnRandomElement
        }
    }
}

const hoverOnRandomElement = (elements: JQuery<HTMLElement>) => {
    let randomDropdown = Math.floor(Math.random() * elements.length)
    cy.wrap(elements[randomDropdown]).trigger('mouseover')
    
}

Cypress.Commands.add('hoverOnRandomElement', hoverOnRandomElement)