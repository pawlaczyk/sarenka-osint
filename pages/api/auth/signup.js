import { connectToDatabase, insertDocument, findOne } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

const COLLECTION_NAME = "users";

async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const data = req.body;
  const { email, password } = data;

  // walidacja danych po stronie serwerea; hasło co najmniej 7 znaków
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid input - password should be at least 7 characters long",
    });
    return;
  }

  const client = await connectToDatabase();

  const existingUser = await findOne(client, COLLECTION_NAME, { email: email });

  if (existingUser) {
    // user już istneieje w bazie danych
    res.status(409).json({ message: "Conflict - user already exists" });
    return;
  }

  //   hashowanie hasła
  const hashedPassword = await hashPassword(password);

  //   dodawanie usera do bazy danych
  const result = insertDocument(client, COLLECTION_NAME, {
    email,
    password: hashedPassword,
    shodanUsername: "",
    shodanApiKey: "",
  });

  res.status(201).json({ message: "Created user!" });
}

export default handler;
