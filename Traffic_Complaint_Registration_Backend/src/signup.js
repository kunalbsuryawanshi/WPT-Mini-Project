import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

//  User Sign Up -sign up details stored in db
async function userSignupInfo(req, res) {
  try {
    const url = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(url);

    const db = client.db("project");
    const table = db.collection("signup");

    let input = {
      username: req.query.username || "none",
      email: req.query.email || "none",
      createPassword: req.query.createPassword || "none",
      confirmPassword: req.query.confirmPassword || "none",
    };

    await table.insertOne(input);
    await client.close();

    res.json({ Signup: "Successful" });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

//  User Log In: when the user logins it is checked in signup collection
async function userLogin(req, res) {
  try {
    const url = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(url);

    const db = client.db("project");
    const table = db.collection("signup");

    let query = {
      username: req.query.username,
      email: req.query.email,
      createPassword: req.query.createPassword,
      confirmPassword: req.query.confirmPassword,
    };
    let userRef = await table.findOne(query);

    await client.close();

    if (userRef == null) {
      let errorMessage = `Invalid Username or Password !`;
      throw new Error(errorMessage);
    }

    res.json(userRef);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

// User Complaint Registration
async function userRegistrationInfo(req, res) {
  const url = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(url);

  const db = client.db("project");
  const table = db.collection("registration");

  let input = {
    name: req.query.name || "none",
    phoneNumber: req.query.phoneNumber || "none",
    email: req.query.email || "none",
    vehicalNumber: req.query.vehicalNumber || "none",
    location: req.query.location || "none",
    issue: req.query.issue || "none",
    describedIssue: req.query.describedIssue || "none",
  };

  await table.insertOne(input);
  await client.close();

  res.json({ Registration: "Successful" });
}

//  Registration Status
async function registrationTable(req, res) {
  const url = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(url);

  const db = client.db("project");
  const table = db.collection("registrationTable");

  let input = {
    name: req.query.name || "none",
    phoneNumber: req.query.phoneNumber || "none",
    email: req.query.email || "none",
    location: req.query.location || "none",
    issue: req.query.issue || "none",
  };

  await table.insertOne(input);
  await client.close();

  res.json({ Registration: "Successful" });
}

// User Status
async function getUserRecord(req, res) {
  const url = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(url);

  const db = client.db("project");
  const table = db.collection("signup");

  let list = await table.find().toArray();
  await client.close();
  res.json(list);
}

//  Registration Status
async function getRegistrationTable(req, res) {
  const url = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(url);

  const db = client.db("project");
  const table = db.collection("registrationTable");

  let list = await table.find().toArray();
  await client.close();
  res.json(list);
}

// Registration Crud
async function deleteRegistrationRecord(req, res) {
  const url = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(url);

  const db = client.db("project");
  const table = db.collection("registrationTable");

  let input = {
    name: req.query.name || "none",
    phoneNumber: req.query.phoneNumber || "none",
    email: req.query.email || "none",
    location: req.query.location || "none",
    issue: req.query.issue || "none",
  };
  await table.findOneAndDelete({ input });
  await client.close();
}

// Registration, Login, Signup------------------

//  http://localhost:4000/userSignupInfo
app.get("/userSignupInfo", userSignupInfo);

//  http://localhost:4000/userLogin
app.get("/userLogin", userLogin);

//  http://localhost:4000/userRegistrationInfo
app.get("/userRegistrationInfo", userRegistrationInfo);


// Registration   Status--------------------------

//  http://localhost:4000/getUserRecord
app.get("/getUserRecord", getUserRecord);


//  http://localhost:4000/getRegistrationTable
app.get("/getRegistrationTable", getRegistrationTable);


//  http://localhost:4000/deleteRegistrationRecord
app.get("/deleteRegistrationRecord", deleteRegistrationRecord);

//  http://localhost:4000/registrationTable
app.get("/registrationTable", registrationTable);
app.listen(4000);
