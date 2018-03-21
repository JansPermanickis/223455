
Router.configure({
    layoutTemplate: 'usersAdd'
});

Router.configure({
    layoutTemplate: 'usersList'
});

Router.configure({
    layoutTemplate: 'usersUpdate'
});

Router.configure({
    layoutTemplate: 'blankLayout'
});

Router.configure({
    layoutTemplate: 'kekLayout'
});

Router.map(function(){

//login route
this.route('login', {
  path: '/',
  template: 'login'
});

//home  route- poka nichevo ni delajet wotafak
this.route('home', {
  path: '/home',
  template: 'home'
});


// detail route
this.route('detail', {
  path: '/detail',
  template: 'detail'
});

this.route('create', {
  path: '/create',
  template: 'inputForm'
});

this.route('usersAdd', {
  path: '/users/add',
  template: 'usersAdd'
});

this.route('usersList', {
  path: '/users/list',
  template: 'usersList'
});

this.route('usersUpdate', {
  path: '/users/update',
  template: 'usersUpdate'
});


});
