const jwt = require("jsonwebtoken");
const { userServices } = require("../services/userServices")
const { roleServices } = require("../services/roleServices")

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = async (req, res, next) => {
  try {
    const checkExisted = await userServices.findOneById(req.userId)
    if (checkExisted) {
      const roles = await roleServices.findMany(checkExisted.roles)
      for (let i = 0; i < getRoles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({ message: "Require Admin Role!" });
      return;
    }
  } catch (err) {
    throw (err)
  }
}

const authJwt = {
  verifyToken,
  isAdmin,
};
module.exports = authJwt;