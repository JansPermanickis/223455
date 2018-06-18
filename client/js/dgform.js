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
     // const Date = target.Date.value;
     const dgPost = target.dgPost.value;
     const date = target.date.value;
     // const owner = target.owner.value;
     // const author = Dg.findOne({_id:this._id}).userId;
     // Insert a task into the collection


  Meteor.call('addDg', dgPost, date);

     // Clear form
     target.dgPost.value = '';
   },
 });


 Template.dgList.helpers({

   isOwner() {
     return this.owner === Meteor.userId();
   },
 });

 Template.dgList.events({
   'click .toggle-checked'() {
     // Set the checked property to the opposite of its current value
     Meteor.call('dg.setChecked', this._id, !this.checked);
   },
   'click .delete'() {
     Meteor.call('dg.remove', this._id);
   },
   'click .toggle-private'() {
     Meteor.call('dg.setPrivate', this._id, !this.private);
   },
 });



var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Lūdzu aizpildiet visus laukus", "danger", "growl-top-right");
	return false;
};
