const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mysql = require("mysql2");
const session = require("express-session");
const path = require("path");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { urlencoded } = require("body-parser");
const saltRounds = 10;

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "manazone254",
  database: "footballsystem",
});

const app = express();
const PORT = process.env.PORT || 5000;

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using express to parse JSON bodies into JS objects
app.use(express.json());

// enabling CORS for all requests
app.use(cors({
   origin: ["http://localhost:3000"],
   methods: ["GET", "POST", "PUT", "DELETE"],
   credentials: true,
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
// adding morgan to log HTTP requests
app.use(morgan("combined"));
//use sessions to determine if user is logged in
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);


// Route for creating the post
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
//hashing password
  bcrypt.hash(password, saltRounds, function (err, hash) {
    //insert the data into the database
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });
});

app.get("/login", (req, res) => {
   if (req.session.user) {
     res.send({ loggedIn: true, user: req.session.user });
   } else {
     res.send({ loggedIn: false });
   }
 });

 app.post("/login", (req, res) => {
   const username = req.body.username;
   const password = req.body.password;
 
   db.query(
     "SELECT * FROM users WHERE username = ?;",
     username,
     (err, result) => {
       if (err) {
         res.send({ err: err });
       }
 
       if (result.length > 0) {
         bcrypt.compare(password, result[0].password, (error, response) => {
           if (response) {
             req.session.user = result;
             console.log(req.session.user);
             res.send(result);
           } else {
             res.send({ message: "Wrong username/password combination!" });
           }
         });
       } else {
         res.send({ message: "User doesn't exist" });
       }
     }
   );
 });

//logout 
app.get('/logout', async (request, response) => {
  if (response) {
      delete request.session.user;
      response.json({result: 'SUCCESS'});
  } else {
      response.json({result: 'ERROR', message: 'User is not logged in.'});
  }
});


app.listen(PORT, () =>
  console.log(`Server started on port: http://localhost:${PORT}`)
);
