var express = require("express");
var router = express.Router();
var DashboardController = require("../controllers/DashboardController");
var AnalisePublicacaoController = require("../controllers/AnalisePublicacaoController");
var ProvidenciasController = require("../controllers/ProvidenciasController");
var AdvogadosController = require("../controllers/AdvogadosController");


module.exports = function(io) {
    router.get("/dashboard", (req, res) => DashboardController.carregaPaginaDashboard(req, res, io));
    router.get("/analise-de-divergencia", (req, res) => DashboardController.carregaPaginaAnaliseDivergencia(req, res, io));
    router.get("/gerenciar-providencias", (req, res) => DashboardController.carregaPaginaGerenciarProvidencias(req, res, io));
    router.get("/advExecutor", (req, res) => DashboardController.carregaPaginaAdvExecutor(req, res, io));
    router.get("/cadastrar-providencias", (req, res) => DashboardController.carregaPaginaCadastrarProvidencias(req, res, io));

    router.post("/analise-publicacao", (req, res) => AnalisePublicacaoController.analisePublicacao(req, res, io));

    router.post("/cadastraProvidencias", (req, res) => ProvidenciasController.cadastrarProvidencias(req, res, io));
    router.get("/advogados", (req, res) => AdvogadosController.mostraTodosAdvogados(req, res, io));
    router.get("/providencias", (req, res) => ProvidenciasController.listaTodasProvidencias(req,res))
    router.get("/providencias/filtro", (req, res) => ProvidenciasController.listaTodasProvidenciasFiltro(req,res))

    return router;
};
