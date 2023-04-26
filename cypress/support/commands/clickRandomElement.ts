export { clickRandomElement }

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Get JQuery elements and click one of them randomly.
             * Implemented to get rid of the boilerplate code in searchPage.ts
             * 
             * @input
             * elements: JQuery<HTMLElement>
             */
            clickRandomElement: typeof clickRandomElement
        }
    }
}

const clickRandomElement = (elements: JQuery<HTMLElement>) => {
    let randomDropdown = Math.floor(Math.random() * elements.length)
    cy.wrap(elements[randomDropdown]).click()
}

Cypress.Commands.add('clickRandomElement', clickRandomElement)