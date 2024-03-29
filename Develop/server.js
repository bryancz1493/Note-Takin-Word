const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname)));
app.use(express.json());