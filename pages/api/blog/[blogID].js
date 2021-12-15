import dbConnect from "../../../utils/dbConnection";
dbConnect();
import blog from "../../../models/blog";


export default async (req, res) => {
  const { blogID } = req.query;

  const article = await blog
    .find({ _id: `${blogID}` })
    .clone()
    .catch(function (err) {
      return {
        notFound: true,
      }
    });

    const nextID = await blog
    .find({_id: {$gt: blogID}}).sort({_id: 1 }).limit(1)
    .clone()
    .catch(function (err) {
      return {
        notFound: true,
      }
    });

    const prevID = await blog
    .find({_id: {$lt: blogID}}).sort({_id: -1 }).limit(1)
    .clone()
    .catch(function (err) {
      return {
        notFound: true,
      }
    });

    let data = {article,nextID,prevID}

  res.json(data);
};