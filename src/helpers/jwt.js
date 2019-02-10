import jwt from 'jsonwebtoken'
import { Cookies }from 'react-cookie'

function secret_key() {
    return 'alshkdgfioauywegbc9827tby4c8374bch9q8hbf29x8q763b49d8bq7h3hqv4'
}

export const generateToken = (user) => {
    const u = {
        name:       user.name,
        username:   user.username,
        id:         user.id
    }
    return jwt.sign(u, secret_key(), {
        expiresIn: 60 * 60 * 24
    })
}

export function currentUser(token = new Cookies().get("whatsappSession")) {
    const res = verifyToken(token)
    return res['name']
}

export async function verifyToken(token) {
    try {
        const res = await jwt.verify(token, secret_key())
        return res
    } catch (err) {
        console.log(err)
    }
}
