export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getUserToken = state => state.auth.token;
export const getLoadingUserStatus = state => state.auth.isLoadingCurrentUser;