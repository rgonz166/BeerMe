module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      username: {
        type: DataTypes.STRING,
        defaultValue: "Anonymous"
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      beername: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      reviews: {
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
      timestamps:false
    });
    return Post;
  };
  