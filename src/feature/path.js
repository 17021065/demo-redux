// ROUTES
export const HOME = '/';
export const REGISTER = '/register';
export const REGISTER_SUCCESS = '/success/register';
export const LOGIN = '/login';
export const LOGIN_SUCCESS = '/success/login';
export const SUCCESS_URL = '/success/:type'
export const PRODUCT = '/product';
// APIS
export const API_ENDPOINT = 'http://localhost:8000'; 
export const REGISTRY_INTERFACE = API_ENDPOINT + '/v0/signup';
export const LOGIN_INTERFACE = API_ENDPOINT + '/v0/login';
export const CREATE_PRODUCT_INTERFACE = API_ENDPOINT +  '/v0/create_product';
export const GET_PRODUCT_INTERFACE = API_ENDPOINT + '/v0/get_list_product';
export const UPDATE_PRODUCT_INTERFACE = API_ENDPOINT + '/v0/update_product';
export const DELETE_PRODUCT_INTERFACE = API_ENDPOINT + '/v0/delete_product';