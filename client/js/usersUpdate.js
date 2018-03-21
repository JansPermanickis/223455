import '../html/usersUpdate.html';
import {Template} from 'meteor/templating';
import './usersUpdateFormCom.js'

Template.usersUpdate.onCreated(function () {
    setHeader({title:"Users Update", isBackVisible:true, logoutVisible:true});
})
