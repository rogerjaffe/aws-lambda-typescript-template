const jsonwebtoken = require("jsonwebtoken");
jest.createMockFromModule("jsonwebtoken");
// jsonwebtoken.verify = jest.fn(() => 50);
module.exports = jsonwebtoken;
