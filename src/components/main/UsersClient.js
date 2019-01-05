import axios from 'axios'

export class UsersClient {

    static async fetchUsers() {
        let options = {
            method: 'get',
            url: 'http://whatsapp-users.herokuapp.com/users',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return await axios(options)
    }
}
