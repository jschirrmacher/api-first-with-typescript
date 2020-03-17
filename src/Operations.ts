import { Request, Response } from "express";

export default {
    helloWorld: (req: Request, res: Response) => {
        const name = req.query.username || 'World'
        res.json({
            greeting: `Hello ${name}!`
        })
    },

    getAnswer: (req: Request, res: Response) => {
        res.json({
            answer: 'I don\'t know'
        })
    }
}
