import { Router } from 'express';
import { contactUs, getcontactUs, userStats } from '../controllers/miscellanous.controller.js';
import { isLoggedIn,authrizedRoll } from '../middlewares/userAuth.js';



const router = Router();

router.route('/contact')
.post(contactUs)
.get(getcontactUs);

router
  .route('/admin/stats/users')
  .get(isLoggedIn, authrizedRoll('ADMIN'), userStats);

export default router;