class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card mt-2 animated bounceInLetf">
               <img src="${user.avatar_url}" class="card-img-top"/>
               <div class="card-body">
                    <h3 class="card-title">${user.name} / ${user.login}</h3>
                    <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile</a>
                    <span class="badge badge-success">
                        Followers: ${user.follower}
                    </span>
                    <span class="badge badge-primary">
                        Followers: ${user.following}
                    </span>
                    <span class="badge badge-warning">
                        Company: ${user.company}
                    </span>
                    <span class="badge badge-info d-block">
                        Blog: ${user.blog}
                    </span>
               </div>
            </div>
        `
    }

    
}

module.exports = UI