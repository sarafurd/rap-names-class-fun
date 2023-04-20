const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage': {
        'age': 30,
        'children': 3,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England, UK'
    },
    'chance the rapper': {
        'age': 30,
        'children': 2,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois, USA'
    },
    'cardi b': {
        'age': 30,
        'children': 2,
        'birthName': 'Belcalis Marlenis Almánzar',
        'birthLocation': 'New York City, New York, USA'
    },
    'eminem': {
        'age': 50,
        'children': 1,
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': 'St. Joseph, Missouri, USA'
    }

}

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase()
    if (rappers[rappersName]) {
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['cardi b'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})