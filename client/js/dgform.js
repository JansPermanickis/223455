import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { dg } from '../../imports/api/collections.js';
import '../../lib/methods/methods.js';
import { ReactiveDict } from 'meteor/reactive-dict';
 import '../html/dgForm.html';
import '../../imports/api/publish';
import '../../imports/api/subscribe';

Template.dgForm.rendered = function() {

}

 Template.dgForm.events({
   'submit .dg-post': function() {
     // Prevent default browser form submit
     event.preventDefault();

     // Get value from form element
     const target = event.target;
     const dgPost = target.dgPost.value;

     // Insert a task into the collection
     Meteor.call('addDg', dgPost);

     // Clear form
     target.dgPost.value = '';
   },
 });






var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Lūdzu aizpildiet visus laukus", "danger", "growl-top-right");
	return false;
};
