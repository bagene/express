const mongoose = require('mongoose');

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        require: true,
    },
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
UserSchema.method({
});

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Get user
   */
  get(gid) {
    return this.findById()
      .exec();
  },

  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef User
 */
module.exports = mongoose.model('users', UserSchema);