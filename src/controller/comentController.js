const User = require('../model/User')
const Coment = require('../model/Coment')

module.exports = {
    async store(req, res){
        const { comentario } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)

        if (!user){
            return res.status(400).json({ erro: 'Usuário inválido' })
        }

        const coment = await Coment.create({ user: user_id, comentario })

        return res.json(coment)
    }
}
