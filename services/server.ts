import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";

import users from "./src/routes/api/users";

// App Instance
const app: express.Application = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect('mongodb://mongodb')
    .then(() => {
      console.log('Mongo DB successfully connected!');
    })
    .catch(err => {
        console.error('Backend error:', err.stack);
        process.exit(1);
    });

  // Passport middleware
  app.use(passport.initialize());

  // Passport config
  require("./config/passport")(passport);
  
  // Routes
  app.use("/api/users", users);

const port = 6200;

app.listen(port, () => console.log(`The server is running on port ${port} !`));