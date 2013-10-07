// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var Cloud = require('ti.cloud');
Cloud.debug = true;  // optional; if you add this line, set it to false for production

Alloy.Globals.Facebook = require('facebook');
var facebook = Alloy.Globals.Facebook;
facebook.appid = 167579163427245;
facebook.permissions = ['email','read_stream'];

Alloy.Globals.userModel = function(){
	Backbone.Collection.extend({
	comparator: function(model){
		return model.get('name');
		}
	});
}
// var tempUser = new Alloy.Globals.userModel([
// 	{name: 'Me', id:'12345',picUrl:'http://placehold.it/200x200',hairScore:0}
// ]);
// Alloy.Collections.user = tempUser;


var placeCollection = Backbone.Collection.extend({
	comparator: function(model){
		return model.get('name');
	}
});



var businessModel = Backbone.Collection.extend({
	comparator: function(model){
		return model.get('name');
	}
});

var favoritesModel = Backbone.Collection.extend({
	comparator: function(model){
		return model.get('id');
	}
});

tempFavorites = new favoritesModel([
	 {
	details : "2 Brown Street\nPhiladelphia, PA\n267-702-6516",
	favorite : 1,
	favoriteImage : "images/profileFavorites_on.png",
	id : 492374807510902,
	name : "Boo Boo's Hair Salon",
	phone : "267-702-6516",
	picUrl : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1086923_492374807510902_799116460_q.jpg",
	street : "2 Brown Street\nPhiladelphia, PA",
   }
]);

var tempBusiness = new businessModel([
	{name: 'Hair Salon', id:'1234', picUrl:'http://placehold.it/200x200'}
]);




// Create a new collection
var library = new placeCollection([
	{name: 'Sample Place', street:'123 Brown St.'}
]);

Alloy.Collections.place = library;

Alloy.Collections.activeBusiness = tempBusiness;
Alloy.Collections.favorites = tempFavorites;