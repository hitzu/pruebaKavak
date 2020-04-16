module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("users", {
	  id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	  },
	  name: {
		type: Sequelize.STRING
	  },
	  email: {
		type: Sequelize.STRING
	  },
	  countryCode : {
		type: Sequelize.STRING
	  },
	  status : {
		type : Sequelize.BOOLEAN,
		defaultValue : 1
	  },
	},{
		timestamps: false
	}
	);
  
	return User;
  };