const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.model.js")(sequelize, Sequelize);
db.Album = require("./albums.model")(sequelize, Sequelize);
db.Track = require("./tracks.model")(sequelize, Sequelize);
db.Country = require("./country.model")(sequelize, Sequelize);

// db.Album.belongsTo(db.User,{
//   foreignKey : "userid",
//   as : "users"
// })
// db.Track.belongsTo(db.Album)
db.Track.belongsTo(db.Album,{
  foreignKey : "albumid",
  as : "album"
})
db.Track.belongsTo(db.User,{
  foreignKey : "userid"
})
db.Album.belongsTo(db.User,{
  foreignKey : "userid"
})


module.exports = db;

