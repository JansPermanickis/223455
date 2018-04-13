import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { dg } from '../../imports/api/collections.js';
import { ReactiveDict } from 'meteor/reactive-dict';
 import '../html/dgForm.html';


 Template.dgForm.onCreated(function () {
     setHeader({title:"Create...", isBackVisible:true, logoutVisible:true});
 })
 Template.dg.helpers({
dg: function(){
console.info('1232');
    return Dg.find({});

  }

 });
