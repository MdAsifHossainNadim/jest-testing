const fetch = (url, postObject) => {
    return {
        json: () => {
            return JSON.parse( postObject.body )
        }
    };
}

module.exports = fetch;
