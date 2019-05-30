
import { Request, Response } from 'express';
import { pool } from '../config/DBCONFIG';

export class AdminRoute {

    public getAdminList(req: Request, res: Response) {
        let response: any;
        pool.getConnection(function (err, connection) {
            if (err) {
                res.send(err);
            } else {
                connection.query('SELECT * FROM empdetails;', (err, result) => {
                    if (!err) {
                        response = result;
                        res.setHeader('Content-Type', 'application/json');
                        res.status(200).send(JSON.stringify(response));
                    } else {
                        res.status(500).send(err);
                    }
                });
            }
            connection.release();
        });
    }

    public getData(req: Request, res: Response) {
        res.status(200).send({ name: 'Aryan', empID: '123456' });
    }

    public getBankDetails(req: Request, res: Response) {
        res.status(200).send({ name: 'ABC', branch: 'Branch 1' });
    }
}