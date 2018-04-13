import { Meteor } from 'meteor/meteor'


if (Meteor.isServer) {
  Meteor.publish('Dg', function() {
  		if(!this.userId){
  			return false;
  			throw new Meteor.Error('not authorized');
  		} else {
  			return Dg.find();
  		}
  	});

    Meteor.publish('Users', function() {
  		if(!this.userId){
  			return false;
  			throw new Meteor.Error('not authorized');
  		} else {
  			return Meteor.users.find();
  		}
  	});



}
