/*Essa função separa a string do tempo, transforma horas e
 minutos em segundos e retorna a soma dos segundos*/
export function timeInSeconds (time: string){
    const [hours = '0', min = '0', sec = '0']
    = time.split(':')

    const hoursInSec = Number(hours) * 3600
    const minInSec = Number(min) * 60

    return hoursInSec + minInSec + Number(sec)
}