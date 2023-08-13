import { connectToDB } from "../../../Utils/database";
import User from "../../../models/user";

export async function POST(request) {
  await connectToDB();
  const { email, username, image } = request;
  await User.create({ email, username, image });
}
