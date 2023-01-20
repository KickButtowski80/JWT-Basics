const CustomAPIError = require('../errors/custom-error')

const login = async (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password) {
        return next(new CustomAPIError('🚑...either username or password not provided', 400))
    }
    res.send('🤡Fake Login/Register/Signup Route')
}


const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({
        msg: `Hello, Jhone Doe`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
    })
}

const test = async (req, res) => {
    res.send('it is a test route 🧑‍🚀')
}

module.exports = {
    login,
    dashboard,
    test
}