const express = require('express');
const cors = require('cors');
const routes = require ('./routes');

const app = express();


app.use(cors());
app.use(express.json()); //transformar json em algo entendível pela aplicação 
app.use(routes);


/**
 * Rota / Recurso
*/


/**
 * Métodos HTTP:
 * 
 * GET: buscar/listar informação do back-end 
 * POST: criar informação no back-end
 * PUT: alterar informação no back-end
 * DELETE: deletar informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route: parâemtros utilizados para identificar recursos (/:id)
 * Request Body: corpo da requisição utilizado para criar ou alterar recursos
 * 
 * 
 *  */ 

 /**
  * Driver:  SELECT * FROM users
  * Query Builder: table('users)
  */


app.listen(3333);