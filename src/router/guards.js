export function isLoggedIn() {
	return localStorage.getItem('_statefulTokens_');
}

export function initialize(router){
	
	router.beforeEach((to, from, next) => {
		
		if(to.matched.some(record => record.meta.authOnly)){
			if (!isLoggedIn()){
				next({
					path: '/',
				})
			} else {
				next();
			}
		} else if (to.matched.some(record => record.meta.guestOnly)){
			if (isLoggedIn()){
				next({
					path: '/dashboard',
				})
			} else {
				next();
			}
		} else {
			next();
		}
	});
}