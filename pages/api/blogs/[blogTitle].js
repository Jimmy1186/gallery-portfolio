import dbConnect from "../../../utils/dbConnection";
dbConnect()
const blog = require("../../../models/blog");

const blogTitle = async (req,res)=>{
    const {blogTitle} = req.query;
    const blogs = await blog
    .find({title:`${blogTitle}`})
    .clone()
    .catch(err=>{return {  notFound: true }})

    res.json(blogs)
}
export default blogTitle