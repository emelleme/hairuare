function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "modalWindow/" + s : s.substring(0, index) + "/modalWindow/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("modalWindow");
    this.__widgetId = "modalWindow";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "buttons_container";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.buttons_container = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        bottom: "5dip",
        visible: true,
        id: "buttons_container"
    });
    $.__views.buttons_container && $.addTopLevelView($.__views.buttons_container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;