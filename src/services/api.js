// holds all api calls to server

const Api = require('axios').create({
    baseURL: 'http://localhost:8000/api',
});

Api.defaults.withCredentials = true;

Api.defaults.headers.common.crossDomain = true;

Api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default Api;