const baseUrl = 'http://localhost:3000/'
const signInUrl = baseUrl + 'signin'
const validateUrl = baseUrl + 'validate'
const allSkillsUrl = baseUrl + 'skills'
const allActivitiesUrl = baseUrl + 'activities'
const createUserUrl = baseUrl + 'create-user'
const chartDataUrl = baseUrl + 'chart-data'

class API {
    static signIn = (username, password) => this.post(signInUrl, { username, password })

    static validates = () => this.get(validateUrl)

    static getAllSkills = () => this.get(allSkillsUrl)

    static getAllActivities = () => this.get(allActivitiesUrl)

    static createUser = (user) => this.post(createUserUrl, user)

    static getActivity = (activityId) => this.get(allActivitiesUrl + '/' + activityId)

    static getSkill = (skillId) => this.get(allSkillsUrl + '/' + skillId)

    static getRadalChartData = () => this.get(chartDataUrl)

    static bookActivity = (activityId) => this.get(allActivitiesUrl + '/' + activityId + '/' + 'book')

    static newActivity = (activityObject) => this.post(allSkillsUrl + '/' + 'create')

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