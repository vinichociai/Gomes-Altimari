
class DashboardController{

    async carregaPaginaDashboard(req, res){
        res.render("dashboard.ejs")
    }

    async carregaPaginaAnaliseDivergencia(req,res){
        res.render("analiseDivergencia.ejs")
    }

    async carregaPaginaAdvControlador(req,res){
        res.render("advControlador.ejs")
    }

    async carregaPaginaAdvExecutor(req,res){
        res.render("advExecutor.ejs")
    }

    async carregaPaginaVisualizarProvidencias(req,res){
        res.render("visualizarProvidencias.ejs")
    }
    
}

module.exports = new DashboardController()