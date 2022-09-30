
// CommonJS -> responsável por importar ou exportar os módulos


// console.table(memoria)
// console.log(`A memória livre é de: ${freeMem}Mb, de um total de ${totalMem}Mb`)


const os = require('os')
const {byteToGB} = require('../Node-Aula-02/convertUnitStorage')
const {byteToMB} = require('../Node-Aula-02/convertUnitStorage')
const fs = require('fs')

setInterval(() => {

    // const totalMem = parseInt(os.totalmem() / 1024 / 1024)
    const totalMem = parseInt(byteToMB(os.totalmem()))
    const freeMem = parseInt(byteToMB(os.freemem()))
    const memLivrePerc = (freeMem / totalMem) * 100

    const memoria = {
        total: `${totalMem} Mb`,
        free: `${freeMem} Mb`,
        percentual_livre: `${memLivrePerc.toFixed(2)}%`
    }

    console.clear()
    console.table(memoria)
    fs.appendFile('../Node-Aula-02/log.txt', 
    'Inserindo log...', 
    'utf-8', 
    ()=>console.log('Log inserido')
    )
    
}, 1000)