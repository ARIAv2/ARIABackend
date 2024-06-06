import supabase from "../supabase.js";
export function replyToFrontendGET(type, message) {
    return (_, res) => {
        res.type(type).send(message);
    };
}
async function fetchData(userId) {
    const { data } = await supabase
        .from("modules")
        .select("credits, lettergrade")
        .eq("user_id", userId);
    let credits = data
        ? data[0].credits
        : "No data imported";
    console.log(credits);
    return credits;
}
export function replyToFrontendPOST(type) {
    return async (req, res) => {
        const fetchedData = await fetchData(req.body);
        res.type(type).send(`I received ${fetchedData}`);
    };
}
