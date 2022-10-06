const express = require('express')

const app = express()
const port = 3000

const connection = require('./connection')

app.listen(port, () => {
    console.log('Rodando na porta', port);
})

app.get('/', async (req, res) => {
    await insertRamdomNameInDb();

    const names = await getListaNamesFromDb()

    const html = await getHtmlNamesResult(names)

    res.send(html)
})

const getHtmlNamesResult = (data) => {

    let html = '<h1>Full Cycle rocks!!.</h1>';
        html += '<hr>'
        html += '<h4>Lista de nomes cadastrada no banco de dados.</h4>'

    data.forEach(register => {
        html += `<p>ID: ${register.id}, NOME: ${register.name}</p>`
    })

    return html
}

const listNamesToInsert = [
    'Giovane',
    'Pedro',
    'Marcio',
    'Wesyley',
    'Gisele',
    'Maria',
    'José',
    'Joelma',
]

const getRandomName = () => {
    var randomName = listNamesToInsert[Math.floor(Math.random() * listNamesToInsert.length)];

    return randomName;
}

const insertRamdomNameInDb = async () => {
    var sql = "INSERT INTO users (name) VALUES (?)";

    const [randomName] = [getRandomName()]

    await connection.query(sql, randomName, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

}

const getListaNamesFromDb = () => {
    return new Promise(function (resolve, reject) {
        connection.query(
            "SELECT * FROM users",
            function (err, rows) {
                if (rows === undefined) {
                    reject(new Error("Error rows is undefined"));
                } else {
                    resolve(rows);
                }
            }
        )
    })
}