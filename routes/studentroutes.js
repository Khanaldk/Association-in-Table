const express=require('express');
const studentcontroller=require('../controllers/studentcontroller')

const studentroutes=express.Router();



/**
 * @swagger
 *  components:
 *    schemas:
 *      student:
 *        type: object
 *        required:
 *          - name
 *          - age
 *        properties:
 *          name:
 *           type: string
 *           description: Student's name
 *          age:
 *           type: integer
 *           description: Student's age
 *         
 */



/**
 * @swagger
 * tags:
 *     name: Student
 *     description: The Student managing API endpoint
 */



/**
 * @swagger
 * /api/student/create:
 *   post:
 *     summary: Create new student
 *     security:
 *       - jwt: []
 *     tags: [Student]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/student'    
 *     responses:
 *       200:
 *         description: Created Student successfully
 *       500:
 *         description: Some Server Error
 */

studentroutes.post('/create',studentcontroller.create);

/**
 * @swagger
 * /api/student/show:
 *   get:
 *     summary: List of all student
 *     security:
 *       - jwt: []
 *     tags: [Student]
 *     responses:
 *      200:
 *          description: Student List retrieved successfully
 *      500:
 *          description: Some Server Error
 */

studentroutes.get('/show',studentcontroller.findall);


/**
 * @swagger
 * /api/student/{id}:
 *   get:
 *     summary: Retrieve student
 *     security:
 *       - jwt: []
 *     tags: [Student]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: Student's id
 *     responses:
 *      200:
 *          description: student retrieved successfully
 *      500:
 *          description: Some Server Error
 */


studentroutes.get('/:id',studentcontroller.getbyId)


/**
 * @swagger
 * /api/student/{id}:
 *   patch:
 *     summary: Update Student
 *     security:
 *       - jwt: []
 *     tags: [Student]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: Student's id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/student'
 *     responses:
 *      200:
 *          description: Student updated successfully
 *      500:
 *          description: Some Server Error
 */

// studentroutes.patch('/:id',studentcontroller.update);





module.exports=studentroutes