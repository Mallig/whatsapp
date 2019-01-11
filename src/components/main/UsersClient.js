import axios from 'axios'

export class UsersClient {

    static async fetchUsers() {
        const options = {
            method: 'get',
            url: 'http://whatsapp-users.herokuapp.com/users',
            // url: 'http://localhost:9494/users',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await axios(options)
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    }
}
