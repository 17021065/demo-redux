// Login
export const getLogin = state => state.login;

export const getLoginStatus = state => state.login.status;

export const getLoginMsg = state => state.login.msg;

export const getEmail = state => state.login.email;

export const getAccessToken = state => state.login.accessToken;

// Register

export const getRegister = state => state.register;

export const getRegisterStatus = state => state.register.status;

export const getRegisterMsg = state => state.register.msg;

// List
export const getProduct = state => state.product;

export const getProductStatus = state => state.product.status;

export const getProductList = state => state.product.list;

export const getSaveStatus = state => state.product.saveStatus;
