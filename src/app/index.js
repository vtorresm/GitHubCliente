const UI = require('./ui')
const Github = require('./github')

//Requerimos las claves de config.json
const { client_id, client_secret } = require('./config.json')

const github = new Github(client_id, client_secret)

const ui = new UI()

// console.log(github.fetchUser('vtorresm'))

const userForm = document.getElementById('userForm')

userForm.addEventListener('submit', (e) => {
    // console.log('Enviando...')
    const textSearch = document.getElementById('textSearch').value
    // console.log(textSearch)
    // Comprobar si se escribio algo en el search
    if(textSearch !== '') {
        github.fetchUser(textSearch)
            .then(data => {
                if(data.message === 'Not Found') {
                    console.log('Usuario no existe')
                }else {
                    ui.showProfile(data)
                }
            })
    }
    e.preventDefault()
})
