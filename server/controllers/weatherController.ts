import { Request, Response } from 'express';
import Weather from '../models/Weather';

export const getWeather = async (req: Request, res: Response) => {
  try {
    const weather = await Weather.findAll();
    res.json(weather);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
};

// Add other controller functions (create, update, delete)
