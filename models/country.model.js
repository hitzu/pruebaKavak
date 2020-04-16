module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define('country', {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        code : {
            type : Sequelize.STRING
        },
        name : {
            type : Sequelize.STRING
        }
    },{
		timestamps: false
	})

    return Country
}
