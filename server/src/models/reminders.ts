import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

class Reminder extends Model {}

Reminder.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  taskId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reminderTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Reminder',
});

export default Reminder;
