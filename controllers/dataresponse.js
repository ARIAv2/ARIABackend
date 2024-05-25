export function replyToFrontendGET(type, message) {
    return (_, res) => {
        res.type(type).send(message);
    };
}
export function replyToFrontendPOST(type) {
    return (req, res) => {
        res
            .type(type)
            .send(`I received your POST request! Thanks for saying: ${req.body}`);
    };
}
