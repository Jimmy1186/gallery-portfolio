import dbConnect from "../../../utils/dbConnection";
dbConnect();
const art = require("../../../models/art");


export default async function handler(req, res) {
  const {method} = req;
  if(method != "GET") return;
  const gallery = await art.find()

  res.json(gallery)
}
