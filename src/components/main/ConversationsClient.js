import axios from 'axios'

export class ConversationsClient {

    static async fetchConversation(userOne, userTwo) {
        const options = {
            method: 'get',
            // url: `http://whatsapp-conversations.herokuapp.com/${userOne}/${userTwo}`,
            // url: `http://localhost:9292/${userOne}/${userTwo}`,
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

    static async fetchLatestConversations(user_id) {
        const options = {
            method: 'get',
            // url: `http://whatsapp-conversations.herokuapp.com/${userOne}/${userTwo}`,
            // url: `http://localhost:9292/${userOne}/${userTwo}`,
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
