import { Request, Response } from "express";

export default {
    helloWorld: (req: Request, res: Response) => {
        res.json({
            greeting: 'Hello World!'
        })
    }
}
