class SignUpHelper {
    verifyPassword = (password, confirmPassword) => {
        console.log(password, confirmPassword)
        if (    (password !== confirmPassword)
            || !(password.length >= 4)) {
            return false
        }
        return true
    }
}

export default SignUpHelper