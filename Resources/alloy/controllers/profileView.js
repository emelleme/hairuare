function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profileView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.profileView = Ti.UI.createView({
        top: 0,
        layout: "vertical",
        backgroundColor: "#72777b",
        height: 95,
        id: "profileView",
        borderColor: "#fff"
    });
    $.__views.profileView && $.addTopLevelView($.__views.profileView);
    $.__views.__alloyId23 = Ti.UI.createView({
        height: 35,
        borderColor: "#fff",
        backgroundColor: "#FFF",
        id: "__alloyId23"
    });
    $.__views.profileView.add($.__views.__alloyId23);
    $.__views.profileDetails = Ti.UI.createView({
        height: "auto",
        layout: "vertical",
        left: 30,
        top: 5,
        right: 10,
        id: "profileDetails"
    });
    $.__views.__alloyId23.add($.__views.profileDetails);
    $.__views.userName = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 20,
        font: {
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#444",
        textAlign: "left",
        id: "userName",
        height: "auto"
    });
    $.__views.profileDetails.add($.__views.userName);
    $.__views.profileImage = Ti.UI.createImageView({
        left: 10,
        top: 5,
        height: 25,
        width: 25,
        id: "profileImage"
    });
    $.__views.__alloyId23.add($.__views.profileImage);
    $.__views.editText = Ti.UI.createLabel({
        width: "75",
        right: "30",
        font: {
            fontSize: 11
        },
        color: "#aaa",
        textAlign: "right",
        top: "10",
        id: "editText",
        height: "auto",
        text: "Edit Profile"
    });
    $.__views.__alloyId23.add($.__views.editText);
    $.__views.editProfile = Ti.UI.createImageView({
        top: "5",
        height: "25",
        width: "20",
        right: "0",
        id: "editProfile",
        image: "images/right_arrow.png"
    });
    $.__views.__alloyId23.add($.__views.editProfile);
    $.__views.__alloyId24 = Ti.UI.createView({
        width: "100%",
        height: 1,
        borderWidth: 1,
        borderColor: "#cdcfce",
        top: "0",
        id: "__alloyId24"
    });
    $.__views.profileView.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        top: 0,
        layout: "horizontal",
        backgroundColor: "#FFF",
        height: 60,
        id: "__alloyId25"
    });
    $.__views.profileView.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        paddingLeft: 10,
        backgroundColor: "#FFF",
        width: 85,
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        layout: "vertical",
        top: "10",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.hairScore = Ti.UI.createLabel({
        font: {
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#000",
        textAlign: "center",
        id: "hairScore",
        height: "auto"
    });
    $.__views.__alloyId27.add($.__views.hairScore);
    $.__views.__alloyId28 = Ti.UI.createView({
        layout: "vertical",
        top: "35",
        id: "__alloyId28"
    });
    $.__views.__alloyId26.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        color: "#aaa",
        textAlign: "center",
        text: "Review Score",
        height: "auto",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        width: 1,
        top: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#cdcfce",
        id: "__alloyId30"
    });
    $.__views.__alloyId25.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        paddingLeft: 10,
        backgroundColor: "#FFF",
        width: Ti.UI.Fill,
        id: "__alloyId31"
    });
    $.__views.__alloyId25.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        layout: "vertical",
        top: "0",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        font: {
            fontSize: 9
        },
        color: "#000",
        textAlign: "left",
        text: "Yr cred irony, cliche fixie you probably haven't heard of them Thundercats Marfa dreamcatcher. Actually Pitchfork typewriter, butcher sartorial Tonx wolf distillery pickled aesthetic.",
        height: "auto",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        layout: "vertical",
        top: "40",
        id: "__alloyId34"
    });
    $.__views.__alloyId31.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontWeight: "bold"
        },
        color: "#1155CC",
        textAlign: "left",
        text: "mygreatsite.com",
        height: "auto",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.userName.text = args.userName || "";
    $.hairScore.text = args.hairScore || "0";
    $.profileImage.image = args.profileImage || "";
    Ti.API.log("info", args.userName);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;