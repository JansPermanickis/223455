import { Meteor } from 'meteor/meteor';
import { usersAddFormSchema } from '/imports/api/users/usersAddFormSchema.js';
import {Roles} from 'meteor/alanning:roles'
import {Accounts} from 'meteor/accounts-base';
// Roles.addUsersToRoles(dsDTzGbB8BzoHZ6ys, 'admin');

Meteor.methods({
  'users.add'(data){
    usersAddFormSchema.validate(data)
    var loggedInUser = Meteor.user();
    if(!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], 'default-group')){
      throw new Meteor.Error(403, "Access denied");
    }

    if(Meteor.users.findOne({'emails.address': data.email})){
      throw new Meteor.Error(500, "This email already registred!");
    }

    var id;

    id = Accounts.createUser({
      email: data.email,
      password: data.password,
      profile: { name: data.name }
    });


  },

});
