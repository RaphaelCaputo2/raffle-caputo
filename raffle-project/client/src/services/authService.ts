import axios from 'axios';
import jwtDecode from 'jwt-decode';

interface User {
  email: string;
  password: string;
}

interface DecodedToken {
  exp: number;
  iat: number;
  sub: string;
}

let token: string | null = null;

export function setToken(newToken: string | null) {
  token = newToken;
}

export async function login(user: User) {
  const response = await axios.post('/api/auth/login', user);
  const { data } = response;
  if (data.token) {
    token = data.token;
    localStorage.setItem('token', token);
  }
  return data;
}

export function logout() {
  token = null;
  localStorage.removeItem('token');
}

export function getToken() {
  return token;
}

export function getUserFromToken() {
  return token ? jwtDecode<DecodedToken>(token).sub : null;
}

export function tokenExpiration() {
  const decodedToken = token ? jwtDecode<DecodedToken>(token) : null;
  return decodedToken ? decodedToken.exp : null;
}

export function isTokenExpired() {
  const expiration = tokenExpiration();
  return expiration ? Date.now() > expiration * 1000 : true;
}

export function requireAuth(nextState: any, replace: any) {
  if (isTokenExpired()) {
    replace({ pathname: '/login' });
  }
}