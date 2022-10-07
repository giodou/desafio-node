const express = require('express')

const app = express()
const port = 3000

const usersRepository = require('./repositories/usersRepository');

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

const getRandomName = () => {
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

    const randomName = listNamesToInsert[Math.floor(Math.random() * listNamesToInsert.length)];

    return randomName;
}

const insertRamdomNameInDb = async () => {
    const user = await usersRepository.insertUser({
        name: getRandomName()
    })
}

const getListaNamesFromDb = async () => {
    return await usersRepository.getUsers();
}