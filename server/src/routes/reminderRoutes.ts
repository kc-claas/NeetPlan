import { Router } from 'express';
import { getReminders } from '../controllers/reminderController';

const router = Router();

router.get('/reminders', getReminders);

// Add other routes (POST, PUT, DELETE)

export default router;
