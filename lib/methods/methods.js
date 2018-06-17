// if (Meteor.isServer) {
// 	Meteor.methods({
//
// 		// Method for adding data (dienasgramata)
// 		 addDg: function(dgPost) {
// 			if(!Meteor.userId()) {
// 				throw new Meteor.Error('not authorized');
// 				return false;
// 			} else {
//
// 				var username = Meteor.user().username;
// 				var year = new Date().getFullYear();
// 				var month = new Date().getMonth() + 1;
// 				var day = new Date().getDate();
// 				var date = (day + "." + month + "." + year).toString();
//
//
//
// 				// var username = Meteor.user().username;
//
// 					Dg.insert({
// 					dgPost: dgPost,
// 					createdAt: new Date(),
// 					date:date,
// 					owner: this.userId,
// 					username: Meteor.users.findOne(this.userId).username,
// 				});
//
//
//
//
// 			}
// 		},
// 	});
// }
