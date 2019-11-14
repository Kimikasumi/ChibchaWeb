import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import adminRoutes from './routes/adminRoutes';
import registradorRoutes from './routes/registradorRoutes';
class Server{

    public app: Application;
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes():void{
        this.app.use('/admin',adminRoutes);
        this.app.use('/regDominio', registradorRoutes)
    }

    start():void{
        this.app.listen(this.app.get('port'));
        console.log('Server on port ', this.app.get('port'))
    }
}

const server = new Server();
server.start();