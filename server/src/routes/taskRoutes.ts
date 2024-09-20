import { Router } from 'express';
import { getTasks } from '../controllers/taskController';

const router = Router();

router.get('/tasks', getTasks);

// Add other routes (POST, PUT, DELETE)

export default router;
