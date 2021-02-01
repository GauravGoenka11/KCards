import express from 'express'
// write data.js in server side we have to write the extension 
import data from './data.js'
const app=express();

app.get('/api/products',(req,res)=>{
    res.send(data.products);
})
app.get('/',(req,res)=>{
    res.send('Server is ready');
});

const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`)
})