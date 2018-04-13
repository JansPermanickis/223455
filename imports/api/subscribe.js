import { Meteor } from 'meteor/meteor'


if (Meteor.isClient) {
	Meteor.subscribe('Dg');
	Meteor.subscribe('Users');
}
