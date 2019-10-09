module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      beerName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },{
        timestamps:true
      });
    return Post;
  };