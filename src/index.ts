import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import crypto from "crypto";
import "./db";
import * as router from "./routes";

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const USERS = new Map();
USERS.set("wds", { id: 1, username: "wds", role: "admin" });
USERS.set("suba", { id: 2, username: "suba", role: "User" });

app.use("/api/v1/estimate", router.estimateRouter);
app.use("/api/v1/invoice", router.invoiceRouter);
app.use("/api/v1/payslip", router.payslipRouter);
app.use("/api/v1/staffdetails", router.staffDetailsRouter);
app.use("/api/v1/users", router.userRouter);

const SESSIONS = new Map();

app.post("/login", (req, res) => {
  const user = USERS.get(req.body.username);
  if (user === null) {
    res.status(401).json({ message: "unauthorised" });
    return;
  }
  const sessionId = crypto.randomUUID();
  SESSIONS.set(sessionId, { user });
  res
    .cookie("sessionId", sessionId, {
      secure: true,
      httpOnly: true,
      sameSite: "none",
    })
    .json({ message: `authed as ${req.body.username}` });
});
app.get("/", async (req, res) => {
  res.send("WELCOME TO DEHUSTLE API");
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
