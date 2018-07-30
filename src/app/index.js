const UI = require('./ui')
const Github = require('./github')

//Requerimos las claves de config.json
const { client_id, client_secret } = require('./config.json')

const github = new Github(client_id, client_secret)

const ui = new UI()

// console.log(github.fetchUser('vtorresm'))

const userForm = document.getElementById('userForm')

userForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log('Enviando...')
    const textSearch = document.getElementById('textSearch').value
    // console.log(textSearch)
    // Comprobar si se escribio algo en el search
    if(textSearch !== '') {
        github.fetchUser(textSearch)
            .then(data => {
                if(data.userData.message === 'Not Found') {
                    // console.log('Usuario no existe')
                    ui.showMessage('User not found', 'alert alert-danger mt-2 col-md-12')
                }else {
                    ui.showProfile(data.userData)
                    ui.showRepositories(data.repositories)
                }
            })
    }else {
        ui.reset()
    }
})
