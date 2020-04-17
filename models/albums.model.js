module.exports = (sequelize, Sequelize) => {
    const Albums = sequelize.define('albums', {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title : {
            type : Sequelize.STRING
        },
        artist : {
            type : Sequelize.STRING
        }, 
        label : {
            type : Sequelize.STRING,
            allowNull: true
        },
        upc : {
            type : Sequelize.STRING
        },
        genre : {
            type : Sequelize.STRING
        },
        status : {
            type : Sequelize.BOOLEAN
        }
    },{
		timestamps: false
	})

    return Albums
}