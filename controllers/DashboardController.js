var Providencias = require("../models/ProvidenciasModel.js")
var Advogados = require("../models/AdvogadosModel.js")


class DashboardController{

    async carregaPaginaDashboard(req, res){
        res.render("dashboard.ejs")
    }

    async carregaPaginaCadastro(req, res){
        res.render("cadastro.ejs")
    }

    async carregaPaginaAnaliseDivergencia(req,res){
        res.render("analiseDivergencia.ejs")
    }

    async carregaPaginaGerenciarProvidencias(req,res){
        var providencias = await Providencias.listarTodasProvidencias()
        var advogados = await Advogados.mostraTodosAdvogados()
        res.render("gerenciarProvidencias.ejs", {providencias:providencias, advogados:advogados})
    }

    async carregaPaginaAdvExecutor(req,res){
        res.render("advExecutor.ejs")
    }

    async carregaPaginaCadastrarProvidencias(req,res){
        res.render("cadastrarProvidencias.ejs")
    }
    
}

module.exports = new DashboardController()