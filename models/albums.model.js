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
        userid : {
            type: Sequelize.INTEGER,
            references: {
                model : 'users',
                key: 'id'
            }
        },
    },{
		timestamps: false
	})

    return Albums
}