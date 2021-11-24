/*-----Declaración de variables-----*/
const date = new Date("2021,12,24,12:00:00");
export function getDateFinal(){
    const dateFinal = new Date(date - Date.now())
    return dateFinal;
}
export function getDays(date){
    if(!date) return "00";
    let days = date.getDate();
    return `${days}`;
}
export function getHours(date){
    if(!date) return "00";
    let hours = date.getHours();
    return `${hours}`;
}
export function getMin(date){
    if(!date) return "00";
    let min = date.getMinutes();
    return `${min}`;
}
export function getSeconds(date){
    if(!date) return "00";
    let sec = date.getSeconds();
    return `${sec}`;
}