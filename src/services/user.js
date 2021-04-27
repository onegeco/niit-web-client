import Api from './api';

import csrf from './csrf';

export default {
	async login(form) {
		await csrf.getCookie();
		return Api.post('/login', form);
	},

	logout() {
		return Api.post('/logout');
	},

	user() {
        return Api.get('/student');
    },
}