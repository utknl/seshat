import { hoverOnRandomElement } from "@support/commands/hoverOnRandomElement"

export class HomePage {

    getBooksOnPage() {
        return cy.getElement('data-test-locator', 'new-book-grid-item-link')
    }

    getDropdownIcon() {
        return cy.getElement('data-testid', 'Menu-Options')
    }

    getAddToNewWorkspaceButton() {
        return cy.getElement('data-testid', 'ResourceActivity-AddToNewWorkspace')
    }

    getCreateNewWorkspaceField() {
        return cy.getElement('data-testid', 'ResourceActivity-WorkspaceTitleInput')
    }

    getCreateNewWorkspaceButton() {
        return cy.getElement('data-testid', 'ResourceActivity-CreateWorkspaceButton')
    }

    getSidebarWorkspace() {
        return cy.getElement('data-testid', 'Sidebar-WorkspaceItem')

    }

    hoverOverOnRandomBook() {
        this.getBooksOnPage().then((elements) => {
            hoverOnRandomElement(elements)
        })
    }

    clickOnDropdown() {
        this.getDropdownIcon().click()
    }

    clickOnAddWorkspaceButton() {
        this.getAddToNewWorkspaceButton().should('be.visible').click()
    }

    setWorkspaceName(workspaceName: string) {
        this.getCreateNewWorkspaceField().type(workspaceName)
    }

    createWorkspace() {
        this.getCreateNewWorkspaceButton().click()
    }

    navigateToWorkspace() {
        this.getSidebarWorkspace().click()
    }

    deleteWorkspace() {
        cy.getElement('data-testid', 'iconButton-moreOptions').click()
        cy.getElement('data-testid', 'MoreOptions-Delete').click()
        cy.getElement('data-testid', 'Error-Modal-Submit').click()
    }

}
