import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REG } from './actionType';

export function authLogin(payload) {
  return { type: AUTH_LOGIN, payload };
}

export function authReg(payload) {
  return { type: AUTH_REG, payload}
}

export function authLogout(payload) {
  return { type: AUTH_LOGOUT, payload}
}
