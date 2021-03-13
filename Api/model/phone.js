var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

const phoneSchema = new Schema({
    name: {
        type: String,
        unique: true,
      },
      type: {
        type: String,
      },
      price: {
        type: Number,
      },
      rating: {
        type: Number,
      },
      warranty_years: {
        type: Number,
      },
      available: {
        type: Boolean,
        default: 1,
      }
    },
    { timestamps: { createdAt: "created_at" } }

)

//const phonemodel = mongoose.model('phones', phoneSchema);s
module.exports = mongoose.model('phones', phoneSchema);