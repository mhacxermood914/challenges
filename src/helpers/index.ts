/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
const setToken = (token: string, expires_at:string):void => {
  localStorage.setItem('token', JSON.stringify({ token, expires_at }));
};

export { setToken };
