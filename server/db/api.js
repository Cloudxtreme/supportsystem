/*eshint esversion: 6 */
import Sequelize from 'sequelize';
import express from 'express';

import isaplanning from '../models/model_isaplanning';
import codes from '../models/model_codes';
import isacodes from '../models/model_isa_codes';
import account from '../models/model_account';
import customers from '../models/model_customer';

let router = express.Router();


router.get('/isaplanning', isaplanning.allItems);
router.get('/isaplanning/:id', isaplanning.findItem);
router.put('/isaplanning/', isaplanning.updateItem);
router.delete('/isaplanning/:id', isaplanning.deleteItem);


router.get('/accounts', account.allItems);
router.get('/accounts.sorted/:sortBy/:sortOrder', account.allItemsSorted);
router.get('/accounts/:id', account.findItem);
router.put('/accounts/', account.updateItem);

router.get('/locations', codes.findLocations);
router.get('/teams', codes.findTeams);
router.get('/languages', codes.findLanguages);
router.get('/regions', codes.findRegions);

router.get('/isaactions', isacodes.findActions);
router.get('/emealncustomers', customers.findEmeaLNCustomers);


export default router;
