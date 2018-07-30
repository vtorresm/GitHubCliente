class Github {

    //Pasamos parametros de client Id y client Secret
    constructor(clientId, clientSecret) {
        this.client_id = clientId
        this.client_secret = clientSecret
    }

    async fetchUser(user) {
        const userDataRequest = 
                    await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
                    const userData = userDataRequest.json()
                    // console.userData = userDataRequest.json
                    // console.log(userDataRequest)
                    return userData
    }
}

module.exports = Github