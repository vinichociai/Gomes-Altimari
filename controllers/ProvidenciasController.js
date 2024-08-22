var Providencias = require("../models/ProvidenciasModel.js")

class ProvidenciasController{
    async cadastrarProvidencias(req, res, io){
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

    async listaTodasProvidencias(req, res){

        var providencias = await Providencias.listarTodasProvidencias()

        if(providencias == undefined){
            res.status(403).json({ success: false, message: "Houve um erro ao recuperar as providências" });
        }

        res.json(providencias)
    }

    async listaTodasProvidenciasFiltro(req, res){
        var dataConclusao = req.query.dataConclusao || null;
        var advogado = req.query.advogado || null;
        var compromissoTarefa = req.query.compromissoTarefa || null;
        var status = req.query.status || null;

        var providencias = await Providencias.listarTodasProvidencias(dataConclusao, advogado, compromissoTarefa, status)

        if(providencias == undefined){
            res.status(403).json({ success: false, message: "Houve um erro ao recuperar as providências" });
        }

        res.json(providencias)
    }


}

module.exports = new ProvidenciasController()