import Wrapper, { Exception } from "next-api-wrapper";
import { dbConnect } from "../../../lib";
import User from "../../../models/userModel";

export default Wrapper({
  POST: async (req) => {
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
      throw new Exception("Valid inputs required.", 422);
    }

    await dbConnect();

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Exception("User already exists.", 409);
    }

    const user = await User.create({ name, email, password });

    return { data: user };
  },
});
