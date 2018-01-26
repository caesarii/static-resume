import fetch from '../fetch'

export function listApi(id) {

  return fetch.get("/api/get_apivo_by_id",{ params: {apiId:id}})
}
export function updateApiMockData(id) {
  return fetch.get("/api/update_mockdata_by_id",{params:{apiId:id}})
}

export function saveApi(data,id) {
  return fetch.post("/api/save_api",data,{headers:{applicationId:id}})

}
export function updateApiMockDataByContent (apiId,mockData) {
  return fetch.post("/api/update_mockdata_by_id_and_mock_data",{apiId:apiId,mockData:mockData});
}

export function  onFilter(method,env) {
  var url = "/api/filter_on"
  return fetch.post(url, {filterName:"all",method:method,env:env});
}
export function offFilter (method,env) {
  var url = "/api/filter_off"
  return fetch.post(url,{filterName:"all",method:method,env:env});
}
//删除api的方法
export function deleteId(data,id) {
  return fetch.get("/interface/del_interface",{params:{interfaceId:data.id,lastVer:data.lastVer,apiId:data.apiId},headers:{applicationId:id}})
}
