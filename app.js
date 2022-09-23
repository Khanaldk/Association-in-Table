const express=require('express');
const bodyparser=require('body-parser');
const routes=require('./routes/indexroutes')
const swaggeruiexpress=require('swagger-ui-express');
const swaggerjsdoc=require('swagger-jsdoc');
const swaggerDocs=require('./docs/swagger.docs')



const app=express();
app.use(bodyparser.json());
app.use('/api-docs/',swaggeruiexpress.serve,swaggeruiexpress.setup(swaggerjsdoc(swaggerDocs)))

app.use('/api',routes)

const port=8000;

app.listen(port,(req,res)=>
{
    console.log(`Listening to port ${port}`);
})

