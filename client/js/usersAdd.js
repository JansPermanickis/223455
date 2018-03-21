import '../html/usersAdd.html';
import {Template} from 'meteor/templating';
import './usersAddFormCom.js'

Template.usersAdd.onCreated(function () {
    setHeader({title:"Add user", isBackVisible:true, logoutVisible:true});
})
