//table created for beers_db

module.exports = function(sequelize, DataTypes) {
  var Beers = sequelize.define("Beers", {
    nameBeer: {//name of the beer
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category:{//type of beer
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    },
    reviews: {//review of the beer
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    comments:{//additional comments of the beer that other users can add
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }, 
    rating:{
      type: DataTypes.DECIMAL, 
      allowNull:false,
      validate: {
        len: [1]
      }
    }

  }
  );
  return Beers;
};
