var knex = require("../database/connection")

class Advogados{

    async mostraTodosAdvogados(){
        try {
            var result = await knex.select("advogados.*").table("advogados")

            return result
            
        } catch (error) {
            console.log(error)
            return []
        }
    }



}


module.exports = new Advogados()