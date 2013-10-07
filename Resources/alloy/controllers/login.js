function Controller() {
    function updateLoginStatus() {
        facebook.loggedIn && Cloud.SocialIntegrations.externalAccountLogin({
            type: "facebook",
            token: facebook.accessToken
        }, function(e) {
            if (e.success) {
                Ti.API.log("info", "Logged In!");
                updateUser();
            } else error(e);
        });
    }
    function updateUser() {
        facebook.requestWithGraphPath("me?fields=name,id,picture,email", {}, "GET", function(e) {
            if (e.success) {
                var r = JSON.parse(e.result);
                Cloud.Users.update({
                    email: r.email,
                    custom_fields: {
                        picUrl: r.picture.data.url,
                        fullName: r.name
                    }
                }, function(ee) {
                    if (ee.success) {
                        ee.users[0];
                        $.loginScreen.close();
                        $.loginSceen = null;
                        homeScreen = new Alloy.createController("index").getView();
                        homeScreen.open({
                            transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
                        });
                    } else alert("Error!!:\n" + (e.error && e.message || JSON.stringify(e)));
                });
            } else e.error ? alert(e.error) : alert("Unknown response");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.loginScreen = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "loginScreen",
        title: "Login Window",
        tabBarHidden: "false"
    });
    $.__views.loginScreen && $.addTopLevelView($.__views.loginScreen);
    $.__views.logo = Ti.UI.createImageView({
        width: Ti.UI.FILL,
        layout: "vertical",
        top: "20",
        id: "logo",
        image: "images/logo.jpg"
    });
    $.__views.loginScreen.add($.__views.logo);
    $.__views.testLabel = Ti.UI.createLabel({
        text: "HairUAre",
        id: "testLabel"
    });
    $.__views.loginScreen.add($.__views.testLabel);
    $.__views.fbButton = Alloy.Globals.Facebook.createLoginButton({
        id: "fbButton",
        ns: "Alloy.Globals.Facebook"
    });
    $.__views.loginScreen.add($.__views.fbButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var logMeOut = args.logMeOut || "";
    $.fbButton.style = facebook.BUTTON_STYLE_WIDE;
    facebook.addEventListener("login", updateLoginStatus);
    logMeOut && facebook.logout();
    facebook.addEventListener("logout", function(e) {
        e.success || e.error || e.cancelled;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;