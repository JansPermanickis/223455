import {Tracker} from 'meteor/tracker'
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const usersAddFormSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Your name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    password: {
    type: String,
    label: "Enter a password",
    autoform:{
      type: 'password'
    },
    min: 4
  },
  confirmPassword: {
    type: String,
    label: "Enter the password again",
    autoform:{
      type: 'password'
    },
    min: 4,
    custom: function () {
      if (this.value !== this.field('password').value) {
        return "passwordMismatch";
      }
    }
  },

  roles:{
    optional: true,
    type: Array,
    label: "Roles",
    autoform:{
      type: 'boolean-checkbox',
      options:[
        {label: 'Student', value: 'student'},
        {label: 'Teacher', value: 'teacher'},
        {label: 'Admin', value: 'admin'}
      ]
    }
  },
  'roles.$': {
    type: String,
    allowedValues: ['admin', 'disp']
  }

}, { tracker: Tracker });
