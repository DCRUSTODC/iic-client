import asyncHandler from "express-async-handler";
import Event from "../models/events.js";

const getEvents = asyncHandler(async (req, res) => {
  const event = await Event.find({});
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
  res.json(event);
});

const postEvent = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const event = new Event({
      name,
      description,
    });
    const createdEvent = await event.save();
    res.status(201).json(createdEvent);
  }
});

export { getEvents, postEvent };
