var Providencias = require("../models/ProvidenciasModel.js")

class ProvidenciasController{
    async cadastrarProvidencias(req, res, io){
        console.log("teste")
        var providencias = req.body.selectedProvidencias
        console.log(providencias)

        var cadastrouProvidencia = await Providencias.cadastrarProvidencias(providencias)

        if(cadastrouProvidencia.status){
            console.log("salvou providencias")
            res.status(200).json({ success: true, message: "Providências salvas com sucesso." });
        }else{
            res.status(403).json({ success: false, message: "Houve um erro ao cadastrar as providências." });

        }
    }

}

module.exports = new ProvidenciasController()