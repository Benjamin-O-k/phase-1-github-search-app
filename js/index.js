// fetch('https://api.github.com/search/users?q=octocat')
// .then(response => response.json())
// .then(data => {
//   console.log(data.items);
// })


// JavaScript code for GitHub API search functionality
let search = document.querySelector('#github-form');
search.addEventListener('click', (e) =>{
    e.preventDefault();
    let username = document.querySelector('#search').value;
    fetch(`https://api.github.com/search/users?q=${username}`)
    .then(response => response.json())
    .then(data => {
        let users = data.items;
        let userList = document.querySelector('#user-list');
        userList.innerHTML = '';//Removes current search
        users.forEach(user => {
            let li = document.createElement('li');
            li.innerHTML = `<a href="${user.html_url}">${user.login}</a>`;
            userList.appendChild(li);
        })
    })
})


let user = document.querySelector('li');
user.addEventListener('click', (e) => {
    e.preventDefault();
    let name = e.target.value
    fetch(`https://api.github.com/users/octocat/repos`)
    .then(response => response.json())
    .then(data => {
        let repos = data;
        let repoList = document.querySelector('#repo-list');
        repoList.innerHTML = '';//Removes current search
        repos.forEach(repo => {
            let li = document.createElement('li');
            li.innerHTML = `<a href="${repo.html_url}">${repo.name}</a>`;
            repoList.appendChild(li);
        })
    })
})
