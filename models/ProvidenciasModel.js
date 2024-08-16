var knex = require("../database/connection")

class Providencias{

    async cadastrarProvidencias(providencias){
        try {
            await knex.insert(providencias).table("providencias")

            return{status:true}
            
        } catch (error) {
            console.log(error)
            return {status:false}
        }
    }



}


module.exports = new Providencias()