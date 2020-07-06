const colors = require('colors');
const fs = require('fs');

const crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`No es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        console.log(data.magenta);

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err) reject(err);

            resolve(`tabla${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo
}