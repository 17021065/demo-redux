import axios from 'axios';
import { CREATE_PRODUCT_INTERFACE, DELETE_PRODUCT_INTERFACE, GET_PRODUCT_INTERFACE, LOGIN_INTERFACE, REGISTRY_INTERFACE, UPDATE_PRODUCT_INTERFACE } from './path';

const Api = () => { 
  const authentication = (email, password) => 
    axios.post(LOGIN_INTERFACE, {
      email: email, 
      password: password,
    })
    .then(res => {
      if(res.data.status == 200) return {
        status: res.data.status,
        email: res.data.user.email,
        uid: res.data.user._id,
        accessToken: res.data.access_token,
      }
      else return {status: res.data.status,}
    })
    .catch(err => {
      throw err
    })

  const registry = (email, password) => 
    axios.post(REGISTRY_INTERFACE, {
      email: email, 
      password: password,
    })
    .then(res => {
      return res.data.status;
    })
    .catch(err => {
      throw err
    })
  
  const getProduct = () =>     
    axios.get(GET_PRODUCT_INTERFACE)
    .then(res => {
      const list = [];
      res.data.items.forEach(item => {
        list.push({
          isNew: false,
          isUpdate: false,
          isDelete: false,
          ...item,
        })
      });
      return {
        status: res.data.status,
        list: list,
      };
    })
    .catch(err => {
      throw err
    })

  const addProduct = (data) => 
    axios.post(CREATE_PRODUCT_INTERFACE, data)
    .then(res => {
      return res.data.status
    })
    .catch(err => {
      throw err
    })

  const updateProduct = (data) => 
    axios.post(UPDATE_PRODUCT_INTERFACE, data)
    .then(res => {
      return res.data.status
    })
    .catch(err => {
      throw err
    })
  
  const deleteProduct = (data) => 
    axios.post(DELETE_PRODUCT_INTERFACE, data)
    .then(res => {
      return res.data.status
    })
    .catch(err => {
      throw err
    })

  return {
    authentication: authentication,
    registry: registry,
    getProduct: getProduct,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
  }
}

export default Api();