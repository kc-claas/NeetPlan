import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

class Weather extends Model {}

Weather.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  temperature: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Weather',
});

export default Weather;
