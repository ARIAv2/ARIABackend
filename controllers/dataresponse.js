import supabase from "../supabase.js";

export function replyToFrontendGET(type, message) {
  return (_, res) => {
    res.type(type).send(message);
  };
}
async function fetchData(userId) {
  const { data, error } = await supabase
    .from("modules")
    .select("credits, lettergrade")
    .eq("user_id", userId);
  console.log(data[0].credits);
  return data[0].credits;
}
export function replyToFrontendPOST(type) {
  return async (req, res) => {
    const fetchedData = await fetchData(req.body);
    res.type("text").send(`I received ${fetchedData}`);
  };
}
