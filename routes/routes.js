var express = require("express");
var router = express.Router();
var DashboardController = require("../controllers/DashboardController");
var AnalisePublicacaoController = require("../controllers/AnalisePublicacaoController");
var ProvidenciasController = require("../controllers/ProvidenciasController");

module.exports = function(io) {
    router.get("/dashboard", (req, res) => DashboardController.carregaPaginaDashboard(req, res, io));
    router.get("/analise-de-divergencia", (req, res) => DashboardController.carregaPaginaAnaliseDivergencia(req, res, io));
    router.get("/advcontrolador", (req, res) => DashboardController.carregaPaginaAdvControlador(req, res, io));
    router.get("/advExecutor", (req, res) => DashboardController.carregaPaginaAdvExecutor(req, res, io));
    router.get("/visualizar-providencias", (req, res) => DashboardController.carregaPaginaVisualizarProvidencias(req, res, io));

    router.post("/analise-publicacao", (req, res) => AnalisePublicacaoController.analisePublicacao(req, res, io));

    router.post("/cadastraProvidencias", (req, res) => ProvidenciasController.cadastrarProvidencias(req, res, io));

    return router;
};
