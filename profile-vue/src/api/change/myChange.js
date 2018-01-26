import fetch from '../fetch'

export function listAll(type,userId) {

  return fetch.post("/application/list",{type,userId})
}
export function listDetail(id) {
  return fetch.post("/application/query_change",{change_id:id})
}
export function update(id) {
  return fetch.post("/application/update_change",id)
}

export function save(id) {
  return fetch.post("/application/save_change",id)
}

export function getCategory(id) {
  return fetch.post("/application/one",{application_id:id})

}
export function updateCategory (item,changeId,env) {

  item.isValid = 1;

  return fetch.post("/application/update_category",{"applicationVoJson":item,"changeId":changeId,"env":env});
}

export function removeMavenCache (applicationId,env) {
  return fetch.post("/api/remove_maven_cache",{"applicationId":applicationId,"env":env})
  }

export function modifyDubboVersion (applicationId,env,dubboVersion) {
  console.log(env)
  return   fetch.post("/change/modify_application_dubbo_version",
    {"applicationId":applicationId,"env":env,"dubboVersion":dubboVersion});
}
export function finishChange(id) {
  return fetch.post("/application/finish_application",{"applicationId":id})
}
export function publishChange(id) {
  return fetch.post("/application/publish",{"application_id":id,"application_type":2})
}
export function testPass(applicationId,type){
  return fetch.post("/application/test_pass",{"application_id":applicationId,"application_type":type});
}
export function queryApi(id) {
  return fetch.post("/api/query_api",{"application_id":id})
}
