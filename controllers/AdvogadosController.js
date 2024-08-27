var Advogados = require("../models/AdvogadosModel.js")
const bcrypt = require("bcryptjs")

class AdvogadosController{
    async mostraTodosAdvogados(req, res){
       var advogados = await Advogados.mostraTodosAdvogados()

       if(advogados != undefined ){
            res.json(advogados)
        }else{
            res.status(403).json({ success: false, message: "Houve um erro ao recuperar os advogados" });

        }

    }

    async autenticarLogin(req, res){
        try {
            var emailLogin = req.body.emailLogin
            var senhaLogin = req.body.senhaLogin
            
            var advogado = await Advogados.validacaoEmail(emailLogin)

            if(advogado){
/*                 var validacaoDeSenha = bcrypt.compareSync(senhaLogin, advogado.senha)
 */    
                if(senhaLogin == advogado.senha){
                        req.session.user = {
                        id: advogado.id,
                        emai: advogado.email,
                        nome: advogado.nomeCompleto
                    }
    
                    res.redirect("/dashboard")
                
                }else{
                    res.send("senha errada")
                }
            }else{
                res.send("email nao cadastrado")
            }
            
        } catch (error) {
            console.log(error+" erro interno de servidor")
            return
        }
    }

}

module.exports = new AdvogadosController()