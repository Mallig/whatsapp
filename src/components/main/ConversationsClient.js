import axios from 'axios'

export class ConversationsClient {

    static async fetchConversation(user_1, user_2) {
        const options = {
            method: 'get',
            url: `http://whatsapp-conversations.herokuapp.com/${user_1}/${user_2}`,
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
