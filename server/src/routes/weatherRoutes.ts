import { Router } from 'express';
import { getWeather } from '../controllers/weatherController';

const router = Router();

router.get('/weather', getWeather);

// Add other routes (POST, PUT, DELETE)

export default router;
