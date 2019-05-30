import express from 'express';
import CORS from 'cors';
import bodyParser from 'body-parser';
import https from 'https';
import fs from 'fs';
import { AppRoute } from './routes/router';

const port = process.env.PORT || 5005;
class App {

    private app: express.Application;
    private appRoute: AppRoute = new AppRoute();

    constructor() {
        this.app = express();
        this.config();
        this.appRoute.routes(this.app);
    }
    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(CORS());
        this.app.use('', (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        })
        this.app.listen(port, () => {
            console.log('Server is listening on port..' + port);
        });
        // https.createServer(this.app).listen(port, () => {
        //     console.log('Server listening on port..' + port);
        // });
    }
}
new App();
