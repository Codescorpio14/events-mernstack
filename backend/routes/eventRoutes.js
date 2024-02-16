import express from "express";
import { Event, EventCategory } from "../models/eventModules.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.send("This is a Mern Stack Practice Server");
});

// Get Events

router.get("/events", async (req, res) => {
  try {
    const eventData = await Event.find({});

    return res.status(200).send({ eventData });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

// Get Single Events

router.get("/events/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const eventData = await Event.findOne({ id });
    if (!eventData) {
      return res.status(404).send({ error: "Event not found" });
    }
    return res.status(200).send({ eventData });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

// Get Categories

router.get("/event-categories", async (req, res) => {
  try {
    const categoryData = await EventCategory.find({});

    return res.status(200).send({ categoryData });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

// Add Email

router.put("/events/:id", async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).send({
        message: "Please send a valid Email",
      });
    }

    const { id } = req.params;

    const result = await Event.findOneAndUpdate(
      { id },
      { $push: { emails_registered: req.body.email } },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ message: "Event not found" });
    }

    return res
      .status(200)
      .send({ message: "email Added successfully", data: result });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
