function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "appointment";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.appointmentView = Ti.UI.createView({
        id: "appointmentView",
        rightNavButton: "rightBtn"
    });
    $.__views.appointmentView && $.addTopLevelView($.__views.appointmentView);
    $.__views.sectionFavoritePlaces = Ti.UI.createTableViewSection({
        id: "sectionFavoritePlaces",
        headerTitle: "Places"
    });
    var __alloyId1 = [];
    __alloyId1.push($.__views.sectionFavoritePlaces);
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        title: "No Favorites",
        id: "__alloyId2"
    });
    $.__views.sectionFavoritePlaces.add($.__views.__alloyId2);
    $.__views.sectionFavoriteStylists = Ti.UI.createTableViewSection({
        id: "sectionFavoriteStylists",
        headerTitle: "Stylists"
    });
    __alloyId1.push($.__views.sectionFavoriteStylists);
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        title: "No Favorites",
        id: "__alloyId3"
    });
    $.__views.sectionFavoriteStylists.add($.__views.__alloyId3);
    $.__views.sectionFavoriteHairStyle = Ti.UI.createTableViewSection({
        id: "sectionFavoriteHairStyle",
        headerTitle: "Hair Styles"
    });
    __alloyId1.push($.__views.sectionFavoriteHairStyle);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        title: "No Favorites",
        id: "__alloyId4"
    });
    $.__views.sectionFavoriteHairStyle.add($.__views.__alloyId4);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId1,
        id: "table"
    });
    $.__views.appointmentView.add($.__views.table);
    $.__views.rightBtn = Ti.UI.createButton({
        id: "rightBtn",
        title: "button"
    });
    $.__views.appointmentView.add($.__views.rightBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Collections.user;
    Alloy.Globals.parent;
    var currentView = $.appointmentView;
    Alloy.Globals.currentView = currentView;
    var forms = require("forms");
    var fields = [ {
        title: "Date",
        type: "date",
        id: "date"
    }, {
        title: "time",
        type: "text",
        id: "time"
    }, {
        title: "Phone or Email",
        type: "phone",
        id: "phone"
    }, {
        title: "Requested Service (e.g. Haircut)",
        type: "text",
        id: "service"
    }, {
        title: "Submit",
        type: "submit",
        id: "registerUser"
    } ];
    var currentView = Ti.UI.createWindow();
    var form = forms.createForm({
        style: forms.STYLE_LABEL,
        fields: fields
    });
    form.addEventListener("registerUser", function(e) {
        Ti.API.debug(e);
    });
    currentView.add(form);
    currentView.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;