import express from "express";
import routes from "./src/routes/crmRoutes";
import bodyParser from 'body-parser';
import connection from './conn'
require('dotenv').config()


const app = express();
const PORT = 5000;

connection();

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_CONNECTION , {
//   useNewUrlParser : true,
//   useUnifiedTopology : true
// });


//serving static files 
//app.use(express.static('public'));

//bodyParse setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/',(req,res) => {
  res.send(`Node & Express running on port ${PORT}`)
})

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);