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

export async function verifyToken(token) {
    try {
      const res = await verify(token)
      return new Date(res['exp'] * 1000) - new Date() > 0
    } catch (err) {
    }
}

export async function currentUser(token = new Cookies().get("whatsappSession")) {
    try {
      const res = await verify(token)
      return res['name']
    } catch (err) {
    }
}

async function verify(token) {
    try {
        const res = await jwt.verify(token, secret_key())
        return res
    } catch (err) {
    }
}
