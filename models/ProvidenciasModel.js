var knex = require("../database/connection")

class Providencias {

    async cadastrarProvidencias(providencias) {
        try {
            await knex.insert(providencias).table("providencias")

            return { status: true }

        } catch (error) {
            console.log(error)
            return { status: false }
        }
    }

    async listarTodasProvidencias(dataConclusao, advogado, tarefaOuCompromisso, pendenteOuConcluido) {
        try {
            console.log(pendenteOuConcluido)
            var result =
                 knex.select("providencias.*", "advogados.nomeCompleto")
                    .table("providencias")
                    .leftJoin("advogados", "advogados.id", "providencias.idAdvogadoVinculado");


            if(advogado && advogado != 0){
                result = result.where("providencias.idAdvogadoVinculado", advogado)
            }

            if(tarefaOuCompromisso && tarefaOuCompromisso == 1){
                result = result.where("providencias.ehCompromisso", 0)
            }

            if(tarefaOuCompromisso && tarefaOuCompromisso == 2){
                result = result.where("providencias.ehCompromisso", 1)
            }

            if(pendenteOuConcluido && pendenteOuConcluido == 1){
                console.log("concluido")
                result = result.where("providencias.concluido", 1)
            }

            if(pendenteOuConcluido && pendenteOuConcluido == 2){
                result = result.where("providencias.concluido", 0)
            }

            if (dataConclusao && dataConclusao == 1) {
                result = result.orderBy("providencias.dataConclusao", "asc")
            }

            if( dataConclusao && dataConclusao == 2){
                result = result.orderBy("providencias.dataConclusao", "desc")
            }



            const query = await result;
            return query

        } catch (error) {
            console.log(error)
            return []
        }
    }



}


module.exports = new Providencias()