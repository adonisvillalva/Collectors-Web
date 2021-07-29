import axios from 'axios';
/*-----URL Bases de las API-----*/
const Api_Collectos = 'http://collectors.enragestudio.com/api/collectors?_format=json';
const Base_COllectors = 'http://collectors.enragestudio.com';
/*-----Funciones para obtener información-----*/
export function getCollectors(path){
    return axios.get(Base_COllectors + path);
}
export function getPost(nid){
    return axios({
        method: 'get',
        url: Api_Collectos,
        params: {nid}
    })
}