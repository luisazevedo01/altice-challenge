class HttpService {
  /**
   * Http GET method
   * @param {string} url
   * @returns {Promise<any>}
   */
  GET = async (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  };
}

export default new HttpService();

