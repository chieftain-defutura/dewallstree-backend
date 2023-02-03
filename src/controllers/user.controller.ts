import userSchema from "../schema/user.schema";

const SESSIONS = new Map();
// Login function
export const logIn = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const session = SESSIONS.get(req.cookies.sessionId);
  console.log(session, req.body);
  try {
    const isUser = await userSchema.findOne({ email });

    if (!isUser)
      return res.json({ error: { message: "User is not registered" } });

    if (isUser.password !== password)
      return res.json({ error: { message: "Invalid Password" } });

    res.json({ result: isUser });
  } catch (error) {
    console.log("something went wrong");
  }
};

///signin function
export const signIn = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const isUserSignIn = await userSchema.findOne({ email });
    console.log(isUserSignIn);
    if (isUserSignIn)
      return res.json({ error: { message: " User is already registered" } });

    const userData = await userSchema.create({ email, password, name });
    const sessionId = crypto.randomUUID();
    SESSIONS.set(sessionId, { name, email, password });
    res
      .cookies("sessionId", sessionId, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
      })
      .json({ result: { name, email, password } });
    // res.json(userData);
  } catch (error) {
    console.log(error);
  }
};

export const deleteStaffDetails = async (req, res) => {
  try {
    const session = SESSIONS.get(req.cookies.sessionId);
    console.log(session, req.body);

    await userSchema.deleteOne(session);

    res.send({ message: "StaffDetails deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: { message: "something went wrong" } });
  }
};
