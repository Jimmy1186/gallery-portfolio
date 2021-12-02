const mongoose = require("mongoose");

const artSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  year: {
    type: Number,
  },
  description: {
    type: String,
  },
  source: {
    type: String,
  },
  artist: {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    artistwidth: {
      type: Number,
    },
    artistheight: {
      type: Number,
    },
  },
  images: {
    gallerywidth: {
      type: Number,
    },
    galleryheight: {
      type: Number,
    },
    bigwidth: {
      type: Number,
    },
    bigheight: {
      type: Number,
    },
    smallwidth: {
      type: Number,
    },
    smallheigh: {
      type: Number,
    },
    thumbwidth: {
      type: Number,
    },
    thumbheight: {
      type: Number,
    },
    thumbnail: {
      type: String,
    },
    hero: {
      small: {
        type: String,
      },
      large: {
        type: String,
      },
    },
    gallery: {
      type: String,
    },
  },
});
module.exports = mongoose.models.art || mongoose.model('art', artSchema);
// module.exports = mongoose.model("art", artSchema);
// module.exports = mongoose.models.art || mongoose.model("art", artSchema)
