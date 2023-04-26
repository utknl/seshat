import { clickRandomElement } from "@support/commands/clickRandomElement"
import { Filters } from "@support/typings/filters"

export class SearchPage {

    baseUrl = Cypress.env('baseUrl')

    navigate() {
        cy.visit(this.baseUrl)
        cy.clearAllCookies()
    }

    searchTopic(topic: string) {
        cy.getElement('data-testid', 'LandingPage-SearchBar').type(topic)
        cy.getElement('data-testid', 'searchBarButton').should('be.visible').click()
        this.acceptCookie()
    }

    acceptCookie() {
        cy.getElement('data-testid', 'CookieBanner-AcceptCookiesButton').click()
    }

    getResultsSubHeader() {
        return cy.getElement('data-test-locator', 'ResultsSubHeader')
    }

    getAllBookCardTitles() {
        return cy.getElement('data-testid', 'BookCard-Title')
    }

    getFilterAllLanguages() {
        return cy.getElement('data-component-locator', 'LanguageFilterSearch-Books')
    }

    getFilterSearchBy() {
        return cy.getElement('data-testid', 'FilterSearchBy')
    }

    getFilterPublicationDate() {
        return cy.getElement('data-testid', 'FilterPublicationDate')
    }

    getFilterTopic() {
        return cy.getElement('data-testid', 'FilterFacetTopic')
    }

    getFilterPublisher() {
        return cy.getElement('data-testid', 'FilterFacetPublisher')
    }

    getFilterAuthor() {
        return cy.getElement('data-testid', 'FilterFacetAuthor')
    }

    getFilterFormat() {
        return cy.getElement('data-testid', 'FilterFormat')
    }

    getPaginationButtonNext() {
        return cy.getElement('data-component-locator', 'paginationButtonNext')
    }

    getPaginationWrapper() {
        return cy.getElement('data-component-locator', 'pagination-wrapper')
    }

    applyRandomFilter(filter: Filters) {
        filter == "All languages" ? this.applyLanguageFilter() :
            filter == "Search by" ? this.applySearchByFilter() :
                filter == "Publication date" ? this.applyPublicationDateFilter() :
                    filter == "Topic" ? this.applyTopicFilter() :
                        filter == "Publisher" ? this.applyPublisherFilter() :
                            filter == "Author" ? this.applyAuthorFilter() :
                                filter == "Format" ? this.applyFormatFilter() :
                                    cy.log('Couldn`t apply any filter')
    }

    applyLanguageFilter() {
        this.getFilterAllLanguages().click()
        cy.getElement('data-testid', 'DropdownItem')
            .then((elements) => {
                clickRandomElement(elements)
            })
    }

    applyMostPopularLanguageFilter() {
        this.getFilterAllLanguages().click()
        cy.getElement('data-testid', 'DropdownItem')
            .then((elements) => {
                cy.wrap(elements[1]).click()
            })

    }

    applySearchByFilter() {
        this.getFilterSearchBy().click()
        cy.getElement('data-component-locator', 'FilterListItem')
            .then((elements) => {
                clickRandomElement(elements)
            })
    }

    applyPublicationDateFilter() {
        this.getFilterPublicationDate().click()
        cy.getElement('data-component-locator', 'FilterListItem')
            .then((elements) => {
                clickRandomElement(elements)
            })
    }

    applyTopicFilter() {
        this.getFilterTopic().click()
        cy.getElement('data-component-locator', 'FilterListItem')
            .then((elements) => {
                clickRandomElement(elements)
            })
    }

    applyPublisherFilter() {
        this.getFilterPublisher().click()
        cy.getElement('data-component-locator', 'FilterListItem')
            .then((elements) => {
                clickRandomElement(elements)
            })
    }

    applyAuthorFilter() {
        this.getFilterAuthor().click()
        cy.getElement('data-component-locator', 'FilterListItem')
            .then((elements) => {
                clickRandomElement(elements)
            })
    }

    applyFormatFilter() {
        this.getFilterFormat().click()
        cy.getElement('data-component-locator', 'FilterListItem')
            .then((elements) => {
                clickRandomElement(elements)
            })
    }

}