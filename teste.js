
// CommonJS -> responsável por importar ou exportar os módulos


// console.table(memoria)
// console.log(`A memória livre é de: ${freeMem}Mb, de um total de ${totalMem}Mb`)


const os = require('os')

setInterval(() => {

    const totalMem = parseInt(os.totalmem() / 1024 / 1024)
    const freeMem = parseInt(os.freemem() / 1024 / 1024)
    const memLivrePerc = (freeMem / totalMem) * 100

    const memoria = {
        total: `${totalMem} Mb`,
        free: `${freeMem} Mb`,
        percentual_livre: `${memLivrePerc.toFixed(2)}%`
    }

    console.clear()
    console.table(memoria)
    
}, 1000)