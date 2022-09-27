
// CommonJS -> responsável por importar ou exportar os módulos
const os = require('os')

const totalMem = parseInt(os.totalmem() / 1024 / 1024)
const freeMem = parseInt(os.freemem() / 1024 / 1024)

console.log(freeMem, totalMem)
console.clear

const memoria = {
    total: `${totalMem} Mb`,
    free: `${freeMem} Mb`
}

console.table(memoria)
console.log(`A memória livre é de: ${freeMem}Mb, de um total de ${totalMem}Mb`)