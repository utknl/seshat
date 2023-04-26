import { Actions } from "cypress/support/helpers/actions"
import { SearchPage } from "cypress/pages/searchPage"

describe('Users should be able to search on main page and filter the results based on the response', () => {

    let actions = new Actions()
    let searchPage = new SearchPage()
    let randomLanguage = actions.getRandomLanguage()
    let selectRandomFilter = actions.selectRandomFilter()

    it('should search a book for a topic on main page and verify the results are related with the topic', () => {
        searchPage.navigate()
        searchPage.searchTopic(randomLanguage)
        searchPage.getResultsSubHeader().should('contain', randomLanguage)
        searchPage.getAllBookCardTitles().should('contain', randomLanguage)
    })

    it('should apply random filters for a searched topic', () => {
        searchPage.navigate()
        searchPage.searchTopic(randomLanguage)
        searchPage.applyRandomFilter(selectRandomFilter)
    })

    it('should verify that basic filter combination return at least 5 pages of results', () => {
        searchPage.navigate()
        searchPage.searchTopic(randomLanguage)
        searchPage.applyMostPopularLanguageFilter()
        searchPage.getPaginationButtonNext().click()
        searchPage.getPaginationWrapper().children().should('have.length.at.least', 5)
    })

})