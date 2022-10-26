class HttpService {

    GET = async (url) => {
        return fetch(url)
            .then(res => res.json())
            .then(data => data)
    }
}

export default new HttpService()