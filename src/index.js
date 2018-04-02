const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

//require('./config/')();
require('./components/database')(mongoose);
require('./components/server')(express, bodyParser);

