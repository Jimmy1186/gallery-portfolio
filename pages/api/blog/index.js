import dbConnect from "../../../utils/dbConnection";
dbConnect();
import blog from "../../../models/blog";

export default async function handler(req, res) {
  const { method } = req;
  if (method == "POST") {
    blog.create(req.body, (err, data) => {
      if (err) return console.log(err);
      res.send("saved to db: " + data);
    });
  }
  if (method != "GET") return;
  const article = await blog.find();

  res.json(article);
}
