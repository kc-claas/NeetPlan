import { Request, Response } from 'express';
import Reminder from '../models/Reminder';

export const getReminders = async (req: Request, res: Response) => {
  try {
    const reminders = await Reminder.findAll();
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reminders' });
  }
};

// Add other controller functions (create, update, delete)
