function Controller() {
    function getPlaceList(e) {
        var model = Backbone.Model.extend();
        var newPlace = new model({
            name: e.name,
            street: e.location.street
        });
        library.add(newPlace);
        var args = {
            title: e.name,
            address: e.location.street,
            customView: "business",
            image: e.picture.data.url,
            businessId: e.id
        };
        section.add(Alloy.createController("placesrow", args).getView());
    }
    function businessSelect(e) {
        var currentView = Alloy.Globals.currentView;
        if (currentView.id != e.row.customView) {
            parent.contentview.remove(currentView);
            var args = {
                title: e.name,
                address: e.row.address,
                image: e.row.image,
                businessId: e.row.businessId
            };
            currentView = Alloy.createController("business", args).getView();
            parent.contentview.add(currentView);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "view3";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.view3 = Ti.UI.createView({
        id: "view3"
    });
    $.__views.view3 && $.addTopLevelView($.__views.view3);
    $.__views.placesView = Ti.UI.createTableView({
        id: "placesView"
    });
    $.__views.view3.add($.__views.placesView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Collections.user;
    var parent = Alloy.Globals.parent;
    var currentView = $.view3;
    Alloy.Globals.currentView = currentView;
    var library = Alloy.Collections.place;
    Ti.API.log("info", "go");
    var model = Backbone.Model.extend();
    tableData = [];
    facebook.requestWithGraphPath("search?q=barber%20shop&type=place&center=39.988032,-75.1278176&fields=picture,category,location,phone,id,name,link", {}, "GET", function(e) {
        if (e.success) {
            var r = JSON.parse(e.result);
            section = Ti.UI.createTableViewSection();
            var customView = Ti.UI.createView({
                height: "auto",
                backgroundColor: "#0f0",
                backgroundGradient: {
                    type: "linear",
                    startPoint: {
                        x: "0%",
                        y: "0%"
                    },
                    endPoint: {
                        x: "0%",
                        y: "100%"
                    },
                    colors: [ {
                        color: "#EEE",
                        offset: 0
                    }, {
                        color: "#CCC",
                        offset: 1
                    } ]
                }
            });
            var customLabel = Ti.UI.createLabel({
                top: 8,
                bottom: 8,
                left: 10,
                right: 10,
                height: "auto",
                text: "Nearby",
                font: {
                    fontSize: 12,
                    fontWeight: "bold"
                },
                color: "#666666"
            });
            section.headerView = customView;
            customView.add(customLabel);
            r.data.forEach(getPlaceList);
            tableData.push(section);
            $.placesView.setData(tableData);
        } else e.error ? alert(e.error) : alert("Unknown response");
    });
    $.placesView.addEventListener("click", function(e) {
        businessSelect(e);
    });
    model = library.at(0);
    library.remove(model);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;