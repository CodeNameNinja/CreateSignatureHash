var CryptoJS = require("crypto-js");

// Get Date In Seconds.
var date = Math.floor(Date.now() / 1000);

const API_KEY = "ODhmLOX3kidyTRBXNg3dBrnCMMtktz6apyxqSbU2m/U=";

const API_SECRET = "TUseo1MTtxe+AnfLlMq/D+qPny7/mLKWJsomA+SC9Ec=";

const ENDPOINT = "Register";

// Hash Secret with SHA256.
// convert to utf-8
var secret = CryptoJS.enc.Utf8.parse(API_SECRET);

const signature =
  API_KEY +
  date +
  "http://52.173.105.196/posapi/v1/possetup/" +
  ENDPOINT +
  "/POST";

CreateSignatureHash = function (secret, date) {
  var hash = CryptoJS.HmacSHA256(date, secret);
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
  return hashInBase64;
};

var hash = CreateSignatureHash(secret, signature);

console.log(date);
console.log(hash);

// Create Express serve.
// const express = require("express");
// const app = express();

// app.get("/GetStat", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
