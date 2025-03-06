"use strict";
const User = require("./user"); //require the model

async function init() {
  await User.sync(); // sync the model
  // also sync any extra models here
}

init();

// Sequelize will auto-generate foreign key column names based on the table names
Post.belongsTo(User);

User.hasMany(Post);

module.exports = {
  User, // export the model
  // also export any extra models here
};
