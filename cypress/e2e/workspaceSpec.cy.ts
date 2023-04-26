import { HomePage } from "cypress/pages/homePage"
import { LoginPage } from "cypress/pages/loginPage"

describe('Logged in users should be able to create workspaces and add/remove books from those workspaces', () => {

    let loginPage = new LoginPage()
    let homePage = new HomePage()
    let emailAddress = Cypress.env('email')
    let password = Cypress.env('password')
    let workspaceName = Cypress.env('workspaceName')

    it('should create a workspace for logged in user', () => {
        loginPage.navigate()
        loginPage.setEmail(emailAddress)
        loginPage.setPassword(password)
        homePage.hoverOverOnRandomBook()
        homePage.clickOnDropdown()
        homePage.clickOnAddWorkspaceButton()
        homePage.setWorkspaceName(workspaceName)
        homePage.createWorkspace()
        homePage.navigateToWorkspace()
        homePage.deleteWorkspace()
    })

})