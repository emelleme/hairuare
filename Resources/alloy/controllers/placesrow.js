function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "placesrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        selectedBackgroundColor: "#666",
        selectedColor: "white",
        backgroundColor: "#F9F9F9",
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
                color: "#FFF",
                offset: "0.0"
            }, {
                color: "#EEE",
                offset: "1.0"
            } ]
        },
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.icon = Ti.UI.createImageView({
        width: "38dp",
        left: "5dp",
        id: "icon"
    });
    $.__views.row.add($.__views.icon);
    $.__views.__alloyId22 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId22"
    });
    $.__views.row.add($.__views.__alloyId22);
    $.__views.title = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "16"
        },
        left: "48dp",
        id: "title"
    });
    $.__views.__alloyId22.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.icon.image = args.image;
    $.title.text = args.title || "";
    $.row.customView = args.customView || "";
    $.row.customTitle = $.title;
    $.row.businessId = args.businessId || "";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;