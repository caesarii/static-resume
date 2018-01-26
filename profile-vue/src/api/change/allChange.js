import fetch from '../fetch'

export function listAll(type) {

  return fetch.post("/application/list",{type})
}

export function listDetail(id) {
  return fetch.post("/application/query_change",{change_id:id})
}


export function queryApi(id,env) {
  return fetch.post("/api/query_api",{"application_id":id,"env":env})
}
