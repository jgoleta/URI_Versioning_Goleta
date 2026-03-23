export const validateUser = (req, res, next) => {
  const { username, emailAddress } = req.body;
  if (!username || !emailAddress) {
    return res
      .status(400)
      .json({ error: "username and emailAddress are required." });
  }
  next();
};

//validators for v2 since v1 uses emailAddress while v2 uses email to match the response format.
export const validateUserV2 = (req, res, next) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ error: "username and email are required." });
  }
  next();
};
