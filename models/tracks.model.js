module.exports = (sequelize, Sequelize) => {
    const Tracks = sequelize.define('tracks', {
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
        isrc : {
            type : Sequelize.STRING
        },
        albumid : {
            type: Sequelize.INTEGER,
            references: {
                model : 'albums',
                key: 'id'
            }
        },
        genre : {
            type : Sequelize.STRING
        },
        // userid : {
        //     type: Sequelize.INTEGER,
        //     references: {
        //         model : 'users',
        //         key: 'id'
        //     }
        // },
    },{
		timestamps: false
	})

    return Tracks
}
