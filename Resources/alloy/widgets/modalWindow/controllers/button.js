function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "modalWindow/" + s : s.substring(0, index) + "/modalWindow/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("modalWindow");
    this.__widgetId = "modalWindow";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "button";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.modalwindow_button_default = Ti.UI.createButton({
        backgroundRepeat: false,
        width: "100dip",
        height: "35dip",
        bottom: "5dip",
        borderRadius: "10dip",
        backgroundImage: "/modalWindow/button.png",
        color: "#000",
        backgroundColor: "#aaa",
        visible: true,
        id: "modalwindow_button_default"
    });
    $.__views.modalwindow_button_default && $.addTopLevelView($.__views.modalwindow_button_default);
    $.__views.modalwindow_button_ok = Ti.UI.createButton({
        backgroundRepeat: false,
        width: "100dip",
        height: "35dip",
        bottom: "5dip",
        borderRadius: "10dip",
        backgroundImage: "/modalWindow/button.png",
        color: "#fff",
        backgroundColor: "#080",
        visible: true,
        id: "modalwindow_button_ok"
    });
    $.__views.modalwindow_button_ok && $.addTopLevelView($.__views.modalwindow_button_ok);
    $.__views.modalwindow_button_cancel = Ti.UI.createButton({
        backgroundRepeat: false,
        width: "100dip",
        height: "35dip",
        bottom: "5dip",
        borderRadius: "10dip",
        backgroundImage: "/modalWindow/button.png",
        color: "#fff",
        backgroundColor: "#800",
        visible: true,
        id: "modalwindow_button_cancel"
    });
    $.__views.modalwindow_button_cancel && $.addTopLevelView($.__views.modalwindow_button_cancel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;