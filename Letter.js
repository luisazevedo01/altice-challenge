import HttpService from "./HttpService";

class Letter {
    api = ''

    constructor() {
        this.api = 'https://jsonplaceholder.typicode.com'
    }

    /**
     * 
     * @param {string} url ( expected: '/users' | | '/posts' )
     * @returns {Promise<Array>} List
     */
    get(url) {
        try {
            return HttpService.GET(this.api + url)
        } catch {
            throw new Error('Error fetching... [ Letter.js ]')
        }
    }
}

export default new Letter()