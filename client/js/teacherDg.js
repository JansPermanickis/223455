import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Dg } from '../../imports/api/collections.js';
import { ReactiveDict } from 'meteor/reactive-dict';
 import '../html/dgForm.html';
 import '../../imports/api/publish';
 import '../../imports/api/subscribe';


 Template.TeacherDg.helpers({
   getTeacherDg: function(){
     var t = Dg.find({}, {sort: {createdAt:-1}})
     console.info(t);
    return t ;
  },
 });
