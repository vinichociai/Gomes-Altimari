var express = require("express");
var app = express();
var router = express.Router();
var DashboardController = require("../controllers/DashboardController")

router.get("/dashboard", DashboardController.carregaPaginaDashboard)
router.get("/analise-de-divergencia", DashboardController.carregaPaginaAnaliseDivergencia)
router.get("/advcontrolador", DashboardController.carregaPaginaAdvControlador)
router.get("/advExecutor", DashboardController.carregaPaginaAdvExecutor)
router.get("/visualizar-providencias", DashboardController.carregaPaginaVisualizarProvidencias)


module.exports = router;