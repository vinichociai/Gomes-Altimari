var Providencias = require("../models/ProvidenciasModel.js")
var Advogados = require("../models/AdvogadosModel.js")


class DashboardController{

    async carregaPaginaDashboard(req, res){
        var idAdvogadoVinculado
        if(req.session.user){
            idAdvogadoVinculado = req.session.user
        }else{
            idAdvogadoVinculado = 0
        }
        res.render("dashboard.ejs", {idAdvogadoVinculado: idAdvogadoVinculado})
    }

    async carregaPaginaAnaliseDivergencia(req,res){
        var idAdvogadoVinculado
        if(req.session.user){
            idAdvogadoVinculado = req.session.user
        }else{
            idAdvogadoVinculado = 0
        }
        res.render("analiseDivergencia.ejs", {idAdvogadoVinculado:idAdvogadoVinculado})
    }

    async carregaPaginaGerenciarProvidencias(req,res){
        var providencias = await Providencias.listarTodasProvidencias()
        var advogados = await Advogados.mostraTodosAdvogados()
        var idAdvogadoVinculado

        if(req.session.user){
            idAdvogadoVinculado = req.session.user
        }else{
            idAdvogadoVinculado = 0
        }
        res.render("gerenciarProvidencias.ejs", {providencias:providencias, advogados:advogados, idAdvogadoVinculado:idAdvogadoVinculado })
    }

    async carregaPaginaAdvExecutor(req,res){
        var idAdvogadoVinculado
        if(req.session.user){
            idAdvogadoVinculado = req.session.user
        }else{
            idAdvogadoVinculado = 0
        }
        res.render("advExecutor.ejs", {idAdvogadoVinculado:idAdvogadoVinculado})
    }

    async carregaPaginaCadastrarProvidencias(req,res){
        var idAdvogadoVinculado
        if(req.session.user){
            idAdvogadoVinculado = req.session.user
        }else{
            idAdvogadoVinculado = 0
        }
        res.render("cadastrarProvidencias.ejs", {idAdvogadoVinculado:idAdvogadoVinculado})
    }
    
}

module.exports = new DashboardController()