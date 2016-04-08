import Sequelize from 'sequelize';
import sequelize from './index_models';

let customers = sequelize.define('LNBaanCustomers', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    }
    ,ProductLine : Sequelize.STRING
    ,CustomerID : Sequelize.INTEGER
    ,CustomerName: Sequelize.STRING
    ,CustomerRegion: Sequelize.STRING
    }, {
    timestamps: false
});



let findEmeaCustomers = (req, res) => {
    customers.findAll({
      order: [['CustomerName', 'ASC']],
      where: {
          CustomerRegion: 'EMEA'
      }    

    })
    .then(function (data) {
      res.send(data)})
    .catch(function(err) 
      {res.send("error: "+err)})
  }

let findEmeaLNCustomers = (req, res) => {
    customers.findAll({
      order: [['CustomerName', 'ASC']],
      where: {
          CustomerRegion: 'EMEA', ProductLine: 'LN ERP'
      }    

    })
    .then(function (data) {
      res.send(data)})
    .catch(function(err) 
      {res.send("error: "+err)})
  }


exports.findEmeaCustomers = findEmeaCustomers;
exports.findEmeaLNCustomers = findEmeaLNCustomers;
