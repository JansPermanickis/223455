import { Mongo } from 'meteor/mongo';

export const Dg = new Mongo.Collection('Dg');

if (Meteor.isServer) {
    Meteor.publish('Dg', function dgPublication() {
        return Dg.find({}, { sort: { createdAt: -1 } });
    });
}
