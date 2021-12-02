import dbConnect from "../../../utils/dbConnection";
dbConnect()
const blog = require("../../../models/blog");

export default async function handle(req,res){
    const {method} = req;
    if(method != "GET") return;
    const blogs = await blog.find()
  
    res.json(blogs)
}