import '../html/usersAddFormCom.html';
import { usersAddFormSchema } from '/imports/api/users/usersAddFormSchema.js';
import {Template} from 'meteor/templating';

Template.usersAddFormCom.helpers({
  getUsersAddFormSchema (){
    return usersAddFormSchema;
  },
  getSubmitButtonText (){
    return "Create";
  }
});


Template.usersAddFormCom.onRendered(function() {
  var usersAddFormHooks = {
  // Called when any submit operation succeeds
  onSuccess: function(formType, result) {
    console.log('The users was created successfully');
    Router.go('/users/list');
  },

  // Called when any submit operation fails
  onError: function(formType, error) {
    console.log(error.reason);
    console.log('The users was not created');
  },

};
  AutoForm.addHooks('usersAddForm', usersAddFormHooks, true);
});
