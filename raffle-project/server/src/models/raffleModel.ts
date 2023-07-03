import { DataTypes } from 'sequelize';
import { dbConfig } from '../config/dbConfig';

const Raffle = dbConfig.define('Raffle', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalTickets: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  remainingTickets: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

export default Raffle;