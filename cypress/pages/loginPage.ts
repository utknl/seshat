
export class LoginPage {

    baseUrl = Cypress.env('baseUrl')

    navigate() {
        cy.visit(this.baseUrl)
        cy.clearAllCookies()
        cy.getElement('data-component-locator', 'NavLink').contains('Login').click()
        this.acceptCookie()
    }

    acceptCookie() {
        cy.getElement('data-testid', 'CookieBanner-AcceptCookiesButton').click()
    }

    setEmail(emailAddress: string) {
        cy.getElement('data-test-locator', 'input-email').type(emailAddress)
        cy.getElement('data-testid', 'LoginFormEmail-ContinueButton').click()
    }

    setPassword(password: string) {
        cy.getElement('data-test-locator', 'password-input').type(password)
        cy.getElement('data-testid', 'LoginFormPassword-ContinueButton').click()
    }

}
