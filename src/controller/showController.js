const Coment = require('../model/Coment')

module.exports ={
    async show(req, res){
        const { user_id } = req.headers

        const coment = await Coment.find({ user: user_id })

        return res.json(coment)
    }

}