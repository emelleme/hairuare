function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "singleRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.singleRow = Ti.UI.createTableViewRow({
        backgroundColor: "#0f0",
        selectedBackgroundColor: "#666",
        selectedColor: "white",
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
                color: "#BBB",
                offset: 0
            }, {
                color: "#CCC",
                offset: .5
            }, {
                color: "#BBB",
                offset: 1
            } ]
        },
        id: "singleRow"
    });
    $.__views.singleRow && $.addTopLevelView($.__views.singleRow);
    $.__views.__alloyId36 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId36"
    });
    $.__views.singleRow.add($.__views.__alloyId36);
    $.__views.title = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "13"
        },
        height: 35,
        left: "8dp",
        id: "title"
    });
    $.__views.__alloyId36.add($.__views.title);
    $.__views.rightBtn = Ti.UI.createImageView({
        height: 35,
        top: 0,
        right: 3,
        width: 20,
        id: "rightBtn",
        image: "images/right_arrow_white.png"
    });
    $.__views.singleRow.add($.__views.rightBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.text = args.title || "";
    $.singleRow.customView = args.customView || "";
    $.singleRow.customTitle = $.title;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;