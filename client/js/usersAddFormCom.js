import '../html/usersAddFormCom.html';
import { usersAddFormSchema } from '/imports/api/users/usersAddFormSchema.js';
import {Template} from 'meteor/templating';

Template.usersAddFormCom.helpers({
  getUsersAddFormSchema (){
    return usersAddFormSchema;
  }
})
