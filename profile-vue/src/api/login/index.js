import fetch from '../fetch'

export function login(userInfo) {
  const data = userInfo
  return fetch({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function loadAllUser() {
  return fetch.get("/user/all_user")
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'get'
  });
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}
