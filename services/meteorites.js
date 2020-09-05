const Meteor = require('../models/meteor');
const _ = require('lodash');

exports.findMeteorites = (filter) => {

  let query = {};
  try {
    if (!_.isNil(filter)) {
      const { year, id, mass } = filter;

      if (!_.isNil(year)) {
        query["$expr"] = { "$eq": [{ "$year": "$year" }, year] };
      }

      if (!_.isNil(id)) {
        query["id"] = id;
      }

      if (!_.isNil(mass)) {
        query["mass"] = { $gt: mass };
      }
    }

    return Meteor.find(query).lean();
  } catch (error) {
    return Promise.reject(error);
  }

}