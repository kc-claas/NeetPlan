import { Router } from 'express';
import { getUsers } from '../controllers/userController';

const router = Router();

router.get('/users', getUsers);

// Add other routes (POST, PUT, DELETE)

export default router;
