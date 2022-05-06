import {configureStore} from '@reduxjs/toolkit';
import users from './user/redu';
import authUser from './user/auth';
const store = configureStore({
   reducer :{
     user : users,
     auth : authUser
   },

});
export default store;