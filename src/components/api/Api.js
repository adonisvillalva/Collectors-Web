import axios from 'axios';
/*-----URL Bases de las API-----*/
const Base_Collectors = 'http://api.collectors-empire.com/';
/*-----Funciones para obtener información-----*/
export function getCollectors(path){
    return axios.get(Base_Collectors + path);
}
export function getPost(nid){
    return axios({
        method: 'get',
        url: Api_Collectos,
        params: {nid}
    })
}
export function getURL(){
    return Base_Collectors;
}