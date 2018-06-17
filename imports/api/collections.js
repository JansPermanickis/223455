import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

export const Dg = new Mongo.Collection('Dg');

if (Meteor.isServer) {


    Meteor.publish('Dg', function dgPublication() {
        return Dg.find({

      $or: [
        { private: { $ne: true} },
        {owner: this.userId },
      ],

        }, { sort: { createdAt: -1 } });
    });

	Meteor.methods({
		// Method for adding data (dienasgramata)
		 'addDg'(dgPost, date) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {

				var profile = Meteor.user().profile.name;

				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var currentdate = (day + "." + month + "." + year).toString();

					Dg.insert({
					dgPost: dgPost,
          date: date,
          createdAt: new Date(),
					currentdate:currentdate,
          author: profile,
          userId: Meteor.userId(),
				});




			}
		},
	});
}
