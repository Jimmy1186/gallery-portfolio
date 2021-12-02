import dbConnect from "../../../utils/dbConnection";
dbConnect();
const art = require("../../../models/art");


export default async (req, res) => {
  const { artId } = req.query;

  const gallery = await art
    .find({ _id: `${artId}` })
    .clone()
    .catch(function (err) {
      return {
        notFound: true,
      }
    });

    const nextID = await art
    .find({_id: {$gt: artId}}).sort({_id: 1 }).limit(1)
    .clone()
    .catch(function (err) {
      return {
        notFound: true,
      }
    });

    const prevID = await art
    .find({_id: {$lt: artId}}).sort({_id: -1 }).limit(1)
    .clone()
    .catch(function (err) {
      return {
        notFound: true,
      }
    });

    let data = {gallery,nextID,prevID}

  res.json(data);
};
