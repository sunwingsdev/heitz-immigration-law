// src/utils/generateTimeSlots.js
import { format, addMinutes } from "date-fns";

const generateTimeSlots = (start, end, interval) => {
  const startTime = new Date();
  startTime.setHours(start.split(":")[0], start.split(":")[1], 0, 0);

  const endTime = new Date();
  endTime.setHours(end.split(":")[0], end.split(":")[1], 0, 0);

  const slots = [];
  let currentTime = startTime;

  while (currentTime <= endTime) {
    slots.push(format(currentTime, "hh:mm a"));
    currentTime = addMinutes(currentTime, interval);
  }

  return slots;
};

export default generateTimeSlots;
