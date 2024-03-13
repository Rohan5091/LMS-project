import { Router } from 'express';
import { contactUs, userStats } from '../controllers/miscellanous.controller';
import { isLoggedIn } from '../middlewares/userAuth';


const router = Router();


router.route('/contact').post(contactUs);
router
  .route('/admin/stats/users')
  .get(isLoggedIn, authorizeRoles('ADMIN'), userStats);

export default router;