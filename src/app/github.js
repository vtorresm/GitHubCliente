class Github {
  //Pasamos parametros de client Id y client Secret
  constructor(clientId, clientSecret) {
    if (!clientId || !clientSecret) {
      return console.warn('Please use a client_id and a client_secret');
    }
    this.client_id = clientId;
    this.client_secret = clientSecret;
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async fetchUser(user) {
    const userDataRequest = await fetch(
      `http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repositoriesRequest = await fetch(
      `http://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repos_count}&sort=${this.repos_sort}`
    );
    const userData = await userDataRequest.json();
    const repositories = await repositoriesRequest.json();
    // console.userData = userDataRequest.json
    // console.log(userDataRequest)
    return {
      userData,
      repositories,
    };
  }
}

module.exports = Github;
