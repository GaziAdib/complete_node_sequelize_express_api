module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        title: {
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        }

    })

    return Product
}