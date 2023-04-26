import { Filters } from "@support/typings/filters"

export class Actions {

    getRandomLanguage = () => {
        let languageList = ['English', 'German', 'Spanish', 'French', 'Portuguese', 'Turkish', 'Polish', 'Chinese', 'Korean', 'Japanese']
        return languageList[Math.floor(Math.random() * languageList.length)]
    }

    selectRandomFilter = () => {
        let filterList = ['All languages', 'Search by', 'Publication date', 'Topic', 'Publisher', 'Author', 'Format']
        return filterList[Math.floor(Math.random() * filterList.length)] as Filters
    }

}