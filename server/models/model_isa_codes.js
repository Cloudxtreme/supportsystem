import Sequelize from 'sequelize';
import sequelize from './index_models';

let isacodes = sequelize.define('t_codes', {
  ipc_UIC: {
        type: Sequelize.UUID,
        primaryKey: true
    }
      ,ipc_type : Sequelize.STRING
      ,ipc_key: Sequelize.STRING
      ,ipc_value: Sequelize.STRING
      ,ipc_seq: Sequelize.STRING
    }, 
    { 
      timestamps: false,
      freezeTableName: true,
      hasTrigger: true,
      schema: 'isa',
    tablename: 't_codes'
});



let findActions = (req, res) => {
    isacodes.findAll({
      order: [['ipc_value', 'ASC']],
      where: {
          ipc_type: 'ACTION'
      }    

    })
    .then(function (data) {
      res.send(data)})
    .catch(function() 
      {res.send("error")})
  }



exports.findActions = findActions;
