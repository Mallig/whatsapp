import jwt from 'jsonwebtoken'

export const generateToken = (user) => {
    const u = {
        name:       user.name,
        username:   user.username,
        id:         user.id
    }
    return jwt.sign(u, 'alshkdgfioauywegbc9827tby4c8374bch9q8hbf29x8q763b49d8bq7h3hqv4v', {
        expiresIn: 60 * 60 * 24
    })
}

export async function verifyToken(token) {
    try {
        const res = await jwt.verify(token, 'alshkdgfioauywegbc9827tby4c8374bch9q8hbf29x8q763b49d8bq7h3hqv4v')
        return new Date(res['exp'] * 1000) - new Date() > 0
    } catch (err) {
        console.log(err)
    }
}
