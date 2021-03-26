
const express = require('express');
const cors = require('cors');



class Server{

    constructor(){
        
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();

    }

    middlewares() {

        //Cors
        this.app.use(cors());

        //Lectura Y parseo del body
        this.app.use( express.json() )
        
        //directorio
        this.app.use( express.static( 'public' ) );

    }

    routes(){

        this.app.use(this.usuariosPath, require( '../routers/usuariosRouter' ));

    }

    listen(){

        this.app.listen( this.port , () =>{
            console.log('Servidor corriendo en puerto', this.port );
        } )

    }

}

module.exports = Server;