function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "view2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.view2 = Ti.UI.createWindow({
        id: "view2",
        rightNavButton: "rightBtn"
    });
    $.__views.view2 && $.addTopLevelView($.__views.view2);
    $.__views.sectionFavoritePlaces = Ti.UI.createTableViewSection({
        id: "sectionFavoritePlaces",
        headerTitle: "Places"
    });
    var __alloyId38 = [];
    __alloyId38.push($.__views.sectionFavoritePlaces);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        title: "No Favorites",
        id: "__alloyId39"
    });
    $.__views.sectionFavoritePlaces.add($.__views.__alloyId39);
    $.__views.sectionFavoriteStylists = Ti.UI.createTableViewSection({
        id: "sectionFavoriteStylists",
        headerTitle: "Stylists"
    });
    __alloyId38.push($.__views.sectionFavoriteStylists);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        title: "No Favorites",
        id: "__alloyId40"
    });
    $.__views.sectionFavoriteStylists.add($.__views.__alloyId40);
    $.__views.sectionFavoriteHairStyle = Ti.UI.createTableViewSection({
        id: "sectionFavoriteHairStyle",
        headerTitle: "Hair Styles"
    });
    __alloyId38.push($.__views.sectionFavoriteHairStyle);
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        title: "No Favorites",
        id: "__alloyId41"
    });
    $.__views.sectionFavoriteHairStyle.add($.__views.__alloyId41);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId38,
        id: "table"
    });
    $.__views.view2.add($.__views.table);
    $.__views.rightBtn = Ti.UI.createButton({
        id: "rightBtn",
        title: "button"
    });
    $.__views.rightBtn && $.addTopLevelView($.__views.rightBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Collections.user;
    var parent = Alloy.Globals.parent;
    Alloy.Collections.favorites;
    var currentView = $.view2;
    Alloy.Globals.currentView = currentView;
    parent.rightButton.hide();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;