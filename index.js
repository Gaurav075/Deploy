require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const githubdata={
    
        "login": "Gaurav075",
        "id": 125338113,
        "node_id": "U_kgDOB3iCAQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/125338113?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Gaurav075",
        "html_url": "https://github.com/Gaurav075",
        "followers_url": "https://api.github.com/users/Gaurav075/followers",
        "following_url": "https://api.github.com/users/Gaurav075/following{/other_user}",
        "gists_url": "https://api.github.com/users/Gaurav075/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Gaurav075/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Gaurav075/subscriptions",
        "organizations_url": "https://api.github.com/users/Gaurav075/orgs",
        "repos_url": "https://api.github.com/users/Gaurav075/repos",
        "events_url": "https://api.github.com/users/Gaurav075/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Gaurav075/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 22,
        "public_gists": 0,
        "followers": 2,
        "following": 2,
        "created_at": "2023-02-14T05:15:28Z",
        "updated_at": "2024-12-04T13:28:07Z"
}

app.get('/twitter',(req,res)=>{
    res.send('gauravdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>chai aur code</h2>")
})
app.get('/github',(req,res)=>{
    res.json(githubdata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})