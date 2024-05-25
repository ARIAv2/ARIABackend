import { Request, Response } from "express";

export function replyToFrontendGET(type: string, message: string) {
  return (_: Request, res: Response) => {
    res.type(type).send(message);
  };
}

export function replyToFrontendPOST(type: string) {
  return (req: Request, res: Response) => {
    res
      .type(type)
      .send(`I received your POST request! Thanks for saying: ${req.body}`);
  };
}
