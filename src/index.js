const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

// require('./config/')();
require('dotenv').config()
const database = require("./components/database")(mongoose);
const assets = require("./components/assets")(database.assetRepository);
require("./components/server")(express, bodyParser, assets);
