function Controller() {
    function __alloyId20() {
        __alloyId20.opts || {};
        var models = __alloyId19.models;
        var len = models.length;
        var children = $.__views.business.children;
        for (var d = children.length - 1; d >= 0; d--) $.__views.business.remove(children[d]);
        for (var i = 0; len > i; i++) {
            var __alloyId5 = models[i];
            __alloyId5.__transform = {};
            var __alloyId6 = Ti.UI.createView({
                top: 101,
                layout: "vertical",
                borderColor: "#fff"
            });
            $.__views.business.add(__alloyId6);
            var __alloyId8 = Ti.UI.createView({
                height: 110,
                borderColor: "#fff"
            });
            __alloyId6.add(__alloyId8);
            var __alloyId9 = Ti.UI.createView({
                height: "auto",
                layout: "vertical",
                left: 25,
                top: 0,
                bottom: 10,
                right: 10
            });
            __alloyId8.add(__alloyId9);
            var __alloyId10 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                left: 60,
                font: {
                    fontSize: 15,
                    fontWeight: "bold"
                },
                color: "#444",
                textAlign: "left",
                text: "undefined" != typeof __alloyId5.__transform["name"] ? __alloyId5.__transform["name"] : __alloyId5.get("name"),
                height: "auto"
            });
            __alloyId9.add(__alloyId10);
            var __alloyId11 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                left: 60,
                font: {
                    fontSize: 11
                },
                color: "#aaa",
                textAlign: "left",
                text: "undefined" != typeof __alloyId5.__transform["details"] ? __alloyId5.__transform["details"] : __alloyId5.get("details"),
                top: "5",
                height: "auto"
            });
            __alloyId9.add(__alloyId11);
            var __alloyId12 = Ti.UI.createImageView({
                left: 10,
                top: 5,
                height: 50,
                width: 50,
                image: "undefined" != typeof __alloyId5.__transform["picUrl"] ? __alloyId5.__transform["picUrl"] : __alloyId5.get("picUrl")
            });
            __alloyId8.add(__alloyId12);
            var __alloyId13 = Ti.UI.createView({
                top: 185,
                width: Ti.UI.FILL,
                layout: "vertical"
            });
            $.__views.business.add(__alloyId13);
            var __alloyId15 = Ti.UI.createView({
                height: 50,
                borderColor: "#fff"
            });
            __alloyId13.add(__alloyId15);
            var __alloyId16 = Ti.UI.createImageView({
                left: 0,
                height: 38,
                image: "images/profileCamera.png"
            });
            __alloyId15.add(__alloyId16);
            cameraAction ? __alloyId16.addEventListener("click", cameraAction) : __defers["__alloyId16!click!cameraAction"] = true;
            var __alloyId17 = Ti.UI.createImageView({
                borderRadius: 0,
                layout: "vertical",
                height: 38,
                left: 85,
                image: "images/profileFavorites.png"
            });
            __alloyId15.add(__alloyId17);
            favAction ? __alloyId17.addEventListener("click", favAction) : __defers["__alloyId17!click!favAction"] = true;
            var __alloyId18 = Ti.UI.createImageView({
                borderRadius: 0,
                layout: "vertical",
                height: 38,
                left: 170,
                image: "images/profilePhone.png"
            });
            __alloyId15.add(__alloyId18);
            phoneAction ? __alloyId18.addEventListener("click", phoneAction) : __defers["__alloyId18!click!phoneAction"] = true;
        }
    }
    function getUserInfo(e) {
        var model = Backbone.Model.extend();
        if (favorites.get(bId)) var favImage = "images/profileFavorites_on.png"; else var favImage = "images/profileFavorites.png";
        var newBusiness = new model({
            id: e.id,
            name: e.name,
            picUrl: e.picture.data.url,
            website: e.website,
            street: e.location.street + "\n" + e.location.city + ", " + e.location.state,
            details: e.location.street + "\n" + e.location.city + ", " + e.location.state + "\n" + e.phone,
            phone: e.phone,
            favorite: true,
            favoriteImage: favImage
        });
        business.add(newBusiness);
        var mapview = Titanium.Map.createView({
            mapType: Titanium.Map.STANDARD_TYPE,
            center: {
                x: e.location.latitude,
                y: e.location.longitude
            },
            animate: true,
            userLocation: false,
            layout: "vertical",
            left: 0,
            top: 0,
            height: 80,
            width: Ti.UI.FILL
        });
        var userLocation = {
            latitude: e.location.latitude,
            longitude: e.location.longitude,
            latitudeDelta: .1,
            longitudeDelta: .1,
            animate: true
        };
        mapview.setLocation(userLocation);
        var mapAnnotation = Ti.Map.createAnnotation({
            latitude: e.location.latitude,
            longitude: e.location.longitude,
            title: e.name,
            subtitle: e.phone,
            animate: true
        });
        mapAnnotation.pincolor = Ti.Map.ANNOTATION_PURPLE;
        mapview.addAnnotation(mapAnnotation);
        $.business.add(mapview);
    }
    function cameraAction() {
        alert("TODO:Camera Functions");
    }
    function favAction() {
        var d = business.at(0);
        if (true == d.get("favorite")) {
            business.get(bId).set({
                favoriteImage: "images/profileFavorites.png",
                favorite: false
            });
            b = favorites.get(bId);
            favorites.remove(b);
        } else {
            business.get(bId).set({
                favoriteImage: "images/profileFavorites_on.png",
                favorite: true
            });
            var biz = business.get(bId);
            favorites.add(biz.toJSON());
        }
    }
    function phoneAction() {
        var tel = business.get(bId).get("phone");
        Titanium.Platform.openURL("tel:+" + tel);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "business";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.business = Ti.UI.createView({
        id: "business"
    });
    var __alloyId19 = Alloy.Collections["activeBusiness"] || activeBusiness;
    __alloyId19.on("fetch destroy change add remove reset", __alloyId20);
    $.__views.business && $.addTopLevelView($.__views.business);
    exports.destroy = function() {
        __alloyId19.off("fetch destroy change add remove reset", __alloyId20);
    };
    _.extend($, $.__views);
    Alloy.Collections.user;
    var parent = Alloy.Globals.parent;
    var business = Alloy.Collections.activeBusiness;
    var favorites = Alloy.Collections.favorites;
    var currentView = $.business;
    var args = arguments[0] || {};
    var bId = args.businessId || "";
    if ("" == bId) var bId = 492374807510902;
    fav = favorites.at(0);
    Alloy.Globals.currentView = currentView;
    parent.searchButton.hide();
    parent.rightButton.show();
    facebook.loggedIn && facebook.requestWithGraphPath(bId + "?fields=picture,category,location,phone,id,name,link,hours", {}, "GET", function(e) {
        if (e.success) {
            var r = JSON.parse(e.result);
            model = business.at(0);
            business.remove(model);
            getUserInfo(r);
        } else e.error ? alert(e.error) : alert("Unknown response");
    });
    __defers["__alloyId16!click!cameraAction"] && __alloyId16.addEventListener("click", cameraAction);
    __defers["__alloyId17!click!favAction"] && __alloyId17.addEventListener("click", favAction);
    __defers["__alloyId18!click!phoneAction"] && __alloyId18.addEventListener("click", phoneAction);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;