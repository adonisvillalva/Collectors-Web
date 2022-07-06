import axios from 'axios';
/*-----URL Bases de las API-----*/
const Base_Collectors = 'https://api.collectors-empire.com/';
/*-----Funciones para obtener información-----*/
export function getCollectors(path){
    return axios.get(Base_Collectors + path);
}
export function getURL(){
    return Base_Collectors;
}