import jwt from 'jsonwebtoken'

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
        expiresIn: 100 * 100
    })
}

export async function verifyToken(token) {
    try {
        const res = await verify(token)
        return new Date(await res['exp'] * 1000 ) - new Date() > 0
    } catch (err) {
        console.log(err)
    }
}

export async function currentUser(token) {
    const res = await verify(token)
    return res['name']
}

async function verify(token) {
    try {
        const res = await jwt.verify(token, secret_key())
        return res
    } catch (err) {
        console.log(err)
    }
}
