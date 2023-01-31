import userSchema from "../schema/user.schema";

// Login function
export const logIn = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

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

    if (isUserSignIn)
      return res.json({ error: { message: " User is already registered" } });

    const userData = await userSchema.create({ email, password, name });
    res.json(userData);
  } catch (error) {}
};
