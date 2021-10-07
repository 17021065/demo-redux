const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const toB64 = ( str ) => {
  return window.btoa(unescape(encodeURIComponent( str )));
}

const toUTF8 = ( str ) => {
  return decodeURIComponent(escape(window.atob( str )));
}

const checkObjectEmpty = obj => {
  return obj 
  && Object.keys(obj).length === 0
  && Object.getPrototypeOf(obj) === Object.prototype;
}

const breakEmail = email => email.split('@')[0];

export {validateEmail, toB64, toUTF8, checkObjectEmpty, breakEmail};