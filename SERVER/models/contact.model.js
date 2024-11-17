import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is required"],
  },
  message: {
    type: String,
    required: [true, "Answer is required"],
  },
  name: {
    type: String,
    required: [true, "Answer is required"],
  },
});
 
const ContactUs = model("ContactUs", contactSchema);
 
export { ContactUs };
