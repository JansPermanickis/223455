import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Dg } from '../../imports/api/collections.js';
import { ReactiveDict } from 'meteor/reactive-dict';
 import '../html/dgForm.html';
 import '../../imports/api/publish';
 import '../../imports/api/subscribe';

 Template.dg.onCreated(function () {
     setHeader({title:"Create...", isBackVisible:true, logoutVisible:true});
 })
 Template.dg.helpers({
   getDg: function(){
     var t = Dg.find({userId: Meteor.userId()}, {sort: {createdAt:-1}})
     console.info(t);
    return t ;
  },
 });
