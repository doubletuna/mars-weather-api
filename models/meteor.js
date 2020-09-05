const mongoose = require('mongoose')

const Schema = mongoose.Schema

const meteorSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    nametype: {
      type: String,
      required: true
    },
    recclass: {
      type: String,
      required: true
    },
    mass: {
      type: Number,
      required: true
    },
    fall: {
      type: String,
      required: true
    },
    year: {
      type: Date,
      required: true
    },
    reclat: {
      type: String,
      required: true
    },
    reclong: {
      type: String,
      required: true
    },
    reclat: {
      type: String,
      required: true
    },
    geolocation: {
      type: {
        type: String,
        required: true
      },
      coordinates: {
        type: Object,
        required: true
      }
    },
    forecastData: Schema.Types.Mixed
  },
  { timestamps: true }
)

module.exports = mongoose.model('Meteor', meteorSchema)
