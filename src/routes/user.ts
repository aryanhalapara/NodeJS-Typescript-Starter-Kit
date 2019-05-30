import { Request, Response } from 'express';

export class UserRoute {

    public getUserData(req: Request, res: Response) {
        res.status(200).send({ name: 'Aryan', empID: '123456' });
    }
}