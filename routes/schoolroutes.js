const express=require('express');
const schoolcontroller = require('../controllers/schoolcontroller');

const schoolroutes=express.Router();




/**
 * @swagger
 *  components:
 *    schemas:
 *      school:
 *        type: object
 *        required:
 *          - name
 *          - class
 *        properties:
 *          name:
 *           type: string
 *           description: School's name
 *          class:
 *           type: integer
 *           description: School's class
 *         
 */



/**
 * @swagger
 * tags:
 *     name: School
 *     description: The School managing API endpoint
 */



/**
 * @swagger
 * /api/school/create:
 *   post:
 *     summary: create new school
 *     security:
 *       - jwt: []
 *     tags: [School]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/school'    
 *     responses:
 *       200:
 *         description: Created School successfully
 *       500:
 *         description: Some Server Error
 */


schoolroutes.post('/create',schoolcontroller.create)

module.exports=schoolroutes