const express=require('express');
const sportcontroller=require('../controllers/sportcontroller');
const studentcontroller = require('../controllers/studentcontroller');


const sportroutes=express.Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      sport:
 *        type: object
 *        required:
 *          - sportgame
 *          - sportid
 *        properties:
 *          sportgame:
 *           type: string
 *           description: Sport's sportname
 *          sportid:
 *           type: integer
 *           description: Sport's sportid
 *         
 */



/**
 * @swagger
 * tags:
 *     name: Sport
 *     description: The Sport managing API endpoint
 */



/**
 * @swagger
 * /api/sportgame/create:
 *   post:
 *     summary: Create new sport
 *     security:
 *       - jwt: []
 *     tags: [Sport]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/sport'    
 *     responses:
 *       200:
 *         description: Created Sport successfully
 *       500:
 *         description: Some Server Error
 */

sportroutes.post('/create',sportcontroller.create)


/**
 * @swagger
 * /api/sportgame:
 *   get:
 *     summary: List of all sport
 *     security:
 *       - jwt: []
 *     tags: [Sport]
 *     responses:
 *      200:
 *          description: Sport List retrieved successfully
 *      500:
 *          description: Some Server Error
 */

sportroutes.get('/',sportcontroller.find);


/**
 * @swagger
 * /api/sportgame/{id}:
 *   get:
 *     summary: Retrieve sport
 *     security:
 *       - jwt: []
 *     tags: [Sport]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: Sport's id
 *     responses:
 *      200:
 *          description: sport retrieved successfully
 *      500:
 *          description: Some Server Error
 */

sportroutes.get('/:id',sportcontroller.getbyId)

module.exports=sportroutes