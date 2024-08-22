var Advogados = require("../models/AdvogadosModel.js")

class AdvogadosController{
    async mostraTodosAdvogados(req, res){
       var advogados = await Advogados.mostraTodosAdvogados()

       if(advogados != undefined ){
            res.json(advogados)
        }else{
            res.status(403).json({ success: false, message: "Houve um erro ao recuperar os advogados" });

        }

    }

}

module.exports = new AdvogadosController()