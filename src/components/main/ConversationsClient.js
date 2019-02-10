import axios from 'axios'

export class ConversationsClient {

    static async fetchConversation(userOne, userTwo) {
        const options = {
            method: 'get',
            url: `http://localhost:5000/conversation/${userOne}/${userTwo}`,
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

    static async fetchConversationById(id) {
        const options = {
            method: 'get',
            url: `http://localhost:5000/conversation/${id}/id`,
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

    static async fetchLatestConversations(user_id) {
        const options = {
            method: 'get',
            url: `http://localhost:5000/conversation/${user_id}/latest`,
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
