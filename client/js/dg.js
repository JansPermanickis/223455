import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Dg } from '../../imports/api/collections.js';
import { ReactiveDict } from 'meteor/reactive-dict';
 import '../html/dgForm.html';
 import '../../imports/api/publish';
 import '../../imports/api/subscribe';

 Template.dgForm.onCreated(function () {
     setHeader({title:"Create...", isBackVisible:true, logoutVisible:true});
 })
 Template.dg.helpers({
   getDg: function(){
var test = Dg.find({}, {sort: {createdAt:-1}})
     console.info(test);

    return test ;
    }
 });
