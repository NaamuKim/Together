const { Router } = require('express');
const { requireLoggedIn } = require('../../middlewares/auth');
const controller = require('./controller');

const router = Router();

router.patch('/followings/:userid' ,requireLoggedIn, controller.followings);
router.patch('/followers/:userid', requireLoggedIn, controller.followers);
router.get('/followers', requireLoggedIn, controller.getfollowers);
router.get('/followings', requireLoggedIn, controller.getfollowings);
router.post('/comments/:id', requireLoggedIn, controller.addComments);
router.delete('/comments/:id',requireLoggedIn, controller.removeComments);

module.exports = router;
