import mongoose from "mongoose";

//Define the User schema with username and emailAddress fields
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

//Customize toJSON to remove __v, createdAt, and updatedAt when displaying user data Reference: https://medium.com/@mbasamahmad/hiding-mongooses-sensitive-data-with-tojson-in-node-js-6e90459ffb4e
userSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    delete ret.__v;
    delete ret.createdAt;
    delete ret.updatedAt;
    return ret;
  },
});

export default mongoose.model("User", userSchema);
