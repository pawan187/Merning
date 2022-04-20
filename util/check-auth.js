const { AuthenticationError } = require("apollo-server");

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
