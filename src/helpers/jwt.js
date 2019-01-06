import jwt from 'jsonwebtoken'

export const generateToken = (user) => {
    const u = {
        name:       user.name,
        username:   user.username,
        id:         user.id
    }

    return jwt.sign(u, 'nbsvoer8bc7qhpn9348tuvn39clnwoxn837t9gn3fuhsn8924fng3578b', {
        expiresIn: 60 * 60 * 24
    })
}
