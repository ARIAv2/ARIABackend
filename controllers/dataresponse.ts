import { Request, Response } from "express";
import supabase from "../supabase.js";

export function replyToFrontendGET(type: string, message: string) {
  return (_: Request, res: Response) => {
    res.type(type).send(message);
  };
}
async function fetchData(userId: string): Promise<string | number | null> {
  const { data } = await supabase
    .from("modules")
    .select("credits, lettergrade")
    .eq("user_id", userId);
  let credits: string | number | null = data
    ? data[0].credits
    : "No data imported";
  console.log(credits);
  return credits;
}
export function replyToFrontendPOST(type: string) {
  return async (req: Request, res: Response) => {
    const fetchedData = await fetchData(req.body);
    res.type(type).send(`I received ${fetchedData}`);
  };
}
