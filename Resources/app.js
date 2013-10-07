var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var Cloud = require("ti.cloud");

Cloud.debug = true;

Alloy.Globals.Facebook = require("facebook");

var facebook = Alloy.Globals.Facebook;

facebook.appid = 0x9869908201ad;

facebook.permissions = [ "email", "read_stream" ];

Alloy.Globals.userModel = function() {
    Backbone.Collection.extend({
        comparator: function(model) {
            return model.get("name");
        }
    });
};

var placeCollection = Backbone.Collection.extend({
    comparator: function(model) {
        return model.get("name");
    }
});

var businessModel = Backbone.Collection.extend({
    comparator: function(model) {
        return model.get("name");
    }
});

var favoritesModel = Backbone.Collection.extend({
    comparator: function(model) {
        return model.get("id");
    }
});

tempFavorites = new favoritesModel([ {
    details: "2 Brown Street\nPhiladelphia, PA\n267-702-6516",
    favorite: 1,
    favoriteImage: "images/profileFavorites_on.png",
    id: 492374807510902,
    name: "Boo Boo's Hair Salon",
    phone: "267-702-6516",
    picUrl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1086923_492374807510902_799116460_q.jpg",
    street: "2 Brown Street\nPhiladelphia, PA"
} ]);

var tempBusiness = new businessModel([ {
    name: "Hair Salon",
    id: "1234",
    picUrl: "http://placehold.it/200x200"
} ]);

var library = new placeCollection([ {
    name: "Sample Place",
    street: "123 Brown St."
} ]);

Alloy.Collections.place = library;

Alloy.Collections.activeBusiness = tempBusiness;

Alloy.Collections.favorites = tempFavorites;

Alloy.createController("index");