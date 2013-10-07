function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "modalWindow/" + s : s.substring(0, index) + "/modalWindow/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function addButton(type, title, callback) {
        type = type.toLowerCase() || BUTTON_TYPE_DEFAULT;
        title = title || "Ok";
        var button = Alloy.createWidget("modalWindow", "button").getView("modalwindow_button_" + type);
        if (button && buttonsContainer) {
            button.title = title;
            var clickFn = closeModal;
            callback && (clickFn = function(e) {
                var dontClose = false;
                callback && false == callback(e) && (dontClose = true);
                dontClose || closeModal();
            });
            if (listeners[type]) try {
                button.removeEventListener("click", listeners[type]);
            } catch (e) {}
            listeners[type] = clickFn;
            button.addEventListener("click", clickFn);
            try {
                buttonsContainer.add(button);
            } catch (e) {}
        }
    }
    function resetButtons() {
        if (buttonsContainer) try {
            $.modalwindow_body.remove(buttonsContainer);
            buttonsContainer = null;
        } catch (e) {}
        buttonsContainer = Alloy.createWidget("modalWindow", "buttons_container").getView("buttons_container");
        buttonsContainer && $.modalwindow_body.add(buttonsContainer);
    }
    function closeModal() {
        resetButtons();
        open = false;
        $.window.close();
    }
    new (require("alloy/widget"))("modalWindow");
    this.__widgetId = "modalWindow";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window = Ti.UI.createWindow({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#55000000",
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.__alloyId0 = Ti.UI.createView({
        left: "10dip",
        right: "10dip",
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderRadius: "10dip",
        borderColor: "black",
        borderWidth: "1dip",
        backgroundColor: "transparent",
        id: "__alloyId0"
    });
    $.__views.window.add($.__views.__alloyId0);
    $.__views.modalwindow_header = Ti.UI.createView({
        backgroundColor: "#aaa",
        width: Ti.UI.FILL,
        height: "30dip",
        backgroundRepeat: true,
        visible: true,
        id: "modalwindow_header"
    });
    $.__views.__alloyId0.add($.__views.modalwindow_header);
    $.__views.modalwindow_title = Ti.UI.createLabel({
        color: "black",
        left: "5dip",
        font: {
            fontSize: 16
        },
        visible: true,
        id: "modalwindow_title"
    });
    $.__views.modalwindow_header.add($.__views.modalwindow_title);
    $.__views.modalwindow_close = Ti.UI.createImageView({
        width: "30dip",
        height: "30dip",
        top: 0,
        right: 0,
        image: "/modalWindow/close.png",
        id: "modalwindow_close"
    });
    $.__views.modalwindow_header.add($.__views.modalwindow_close);
    $.__views.modalwindow_body = Ti.UI.createView({
        backgroundColor: "white",
        top: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        visible: true,
        id: "modalwindow_body"
    });
    $.__views.__alloyId0.add($.__views.modalwindow_body);
    $.__views.modalwindow_message = Ti.UI.createLabel({
        color: "black",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "10dip",
        bottom: "10dip",
        left: "10dip",
        right: "10dip",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        visible: true,
        id: "modalwindow_message"
    });
    $.__views.modalwindow_body.add($.__views.modalwindow_message);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var open = false;
    var BUTTON_TYPE_OK = "ok";
    var BUTTON_TYPE_CANCEL = "cancel";
    var BUTTON_TYPE_DEFAULT = "default";
    $.modalwindow_close.addEventListener("click", closeModal);
    var listeners = [];
    var buttonsContainer = null;
    exports.alert = function(message, callback) {
        if (open) return;
        open = true;
        $.modalwindow_title.text = "Alert";
        $.modalwindow_message.text = message;
        resetButtons();
        addButton(BUTTON_TYPE_OK, "Ok", callback);
        $.window.open();
    };
    exports.confirm = function(message, yesCallback, noCallback) {
        if (open) return;
        open = true;
        $.modalwindow_title.text = "Confirm";
        $.modalwindow_message.text = message;
        resetButtons();
        addButton(BUTTON_TYPE_OK, "Yes", yesCallback);
        addButton(BUTTON_TYPE_CANCEL, "No", noCallback);
        $.window.open();
    };
    exports.message = function(title, message, buttons) {
        if (!buttons.length || buttons.length > 4) return;
        if (open) return;
        open = true;
        $.modalwindow_title.text = title;
        $.modalwindow_message.text = message;
        resetButtons();
        for (var b = 0; buttons.length > b; b++) {
            var btnOpt = buttons[b];
            addButton(btnOpt.type, btnOpt.text, btnOpt.callback);
        }
        $.window.open();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;