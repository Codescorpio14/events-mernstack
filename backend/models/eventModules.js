import mongoose from "mongoose";

const allEventSchema = mongoose.Schema({
  id: String,
  title: String,
  city: String,
  description: String,
  image: String,
  emails_registered: [String],
});

const eventCategorySchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  image: String,
});

export const EventCategory = mongoose.model(
  "EventCategory",
  eventCategorySchema
);
export const Event = mongoose.model("Event", allEventSchema);
