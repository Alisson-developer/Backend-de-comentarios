const User = require('../model/User')

module.exports = {
    async store(req, res){
        const { name } = req.body
        const { email } = req.body

        let user = await User.findOne({ email })

        if(!user){
            user = await User.create({ name, email })
        }
        

        return res.json(user)
    }
}
