import '../html/usersList.html'
import {Template} from 'meteor/templating';
import './usersListCom.js'

Template.usersList.onCreated(function () {
    setHeader({title:"Users List", isBackVisible:true, logoutVisible:true});
})
