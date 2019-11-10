const baseUrl = 'http://localhost:3000/'
const signInUrl = baseUrl + 'signin'
const validateUrl = baseUrl + 'validate'
const allSkillsUrl = baseUrl + 'skills'
const allActivitiesUrl = baseUrl + 'activities'
const createUserUrl = baseUrl + 'create-user'

class API {
    static signIn = (username, password) => this.post(signInUrl, { username, password })

    static validates = () => this.get(validateUrl)

    static getAllSkills = () => this.get(allSkillsUrl)

    static getAllActivities = () => this.get(allActivitiesUrl)

    static createUser = (user) => this.post(createUserUrl, user)

    static get = (url) =>
        fetch(url, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then(resp => resp.json())


    static post = (url, data) =>
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())
}

export default API