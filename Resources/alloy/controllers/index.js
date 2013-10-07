function Controller() {
    function createSection() {
        var section = Ti.UI.createTableViewSection();
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
            text: "My Stuff",
            font: {
                fontSize: 12,
                fontWeight: "bold"
            },
            color: "#666666"
        });
        customView.add(customLabel);
        section.headerView = customView;
        var args = {
            title: "Profile",
            customView: "view1",
            image: "images/maleProfile.png"
        };
        section.add(Alloy.createController("menurow", args).getView());
        var fargs = {
            title: "Favorites",
            customView: "view2",
            image: "images/favorites.png"
        };
        section.add(Alloy.createController("menurow", fargs).getView());
        var aargs = {
            title: "Appointments",
            customView: "view1",
            image: "images/CalendarMenu.png"
        };
        section.add(Alloy.createController("menurow", aargs).getView());
        var aargs = {
            title: "Messages",
            customView: "view1",
            image: "images/messages.png"
        };
        section.add(Alloy.createController("menurow", aargs).getView());
        return section;
    }
    function createNearbySection() {
        var customLabel2 = Ti.UI.createLabel({
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
        var section2 = Ti.UI.createTableViewSection();
        var customView2 = Ti.UI.createView({
            height: "auto",
            backgroundColor: "#EEE",
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
        customView2.add(customLabel2);
        section2.headerView = customView2;
        var bargs = {
            title: "Barber Shop",
            customView: "view3",
            image: "images/ic_search.png"
        };
        section2.add(Alloy.createController("menurow", bargs).getView());
        var bsargs = {
            title: "Beauty Shop",
            customView: "view3",
            image: "images/ic_search.png"
        };
        section2.add(Alloy.createController("menurow", bsargs).getView());
        return section2;
    }
    function createSettingsSection() {
        var section = Ti.UI.createTableViewSection();
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
            text: "Settings",
            font: {
                fontSize: 12,
                fontWeight: "bold"
            },
            color: "#666666"
        });
        customView.add(customLabel);
        section.headerView = customView;
        var args = {
            title: "Application Settings",
            customView: "view1",
            image: "images/settings.png"
        };
        section.add(Alloy.createController("menurow", args).getView());
        var fargs = {
            title: "Help",
            customView: "view2",
            image: "images/help.png"
        };
        section.add(Alloy.createController("menurow", fargs).getView());
        var aargs = {
            title: "About",
            customView: "view1",
            image: "images/about.png"
        };
        section.add(Alloy.createController("menurow", aargs).getView());
        var aargs = {
            title: "Log Out",
            customView: "login",
            logMeOut: true,
            image: "images/exit.png"
        };
        section.add(Alloy.createController("menurow", aargs).getView());
        return section;
    }
    function createRightMenu() {
        var customLabel2 = Ti.UI.createLabel({
            top: 8,
            bottom: 8,
            left: 10,
            right: 10,
            height: "auto",
            text: "Actions",
            font: {
                fontSize: 12,
                fontWeight: "bold"
            },
            color: "#666666"
        });
        var section2 = Ti.UI.createTableViewSection();
        var customView2 = Ti.UI.createView({
            height: "auto",
            backgroundColor: "#EEE",
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
        customView2.add(customLabel2);
        section2.headerView = customView2;
        var bargs = {
            title: "Book Appointment",
            customView: "view3",
            image: "images/CalendarMenu.png"
        };
        section2.add(Alloy.createController("menurow", bargs).getView());
        var bsargs = {
            title: "Add a Photo",
            customView: "view3",
            image: "images/key_plus.png"
        };
        section2.add(Alloy.createController("menurow", bsargs).getView());
        var comment = {
            title: "Leave a Comment",
            customView: "view3",
            image: "images/key_plus.png"
        };
        section2.add(Alloy.createController("menurow", comment).getView());
        return section2;
    }
    function rowSelect(e) {
        var currentView = Alloy.Globals.currentView;
        if (currentView.id != e.row.customView) {
            $.ds.contentview.remove(currentView);
            currentView = Alloy.createController(e.row.customView).getView();
            $.ds.contentview.add(currentView);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#FFF",
        id: "win",
        rightNavButton: "rightBtn"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.ds = Alloy.createWidget("ds.slideMenu", "widget", {
        id: "ds",
        __parentSymbol: $.__views.win
    });
    $.__views.ds.setParent($.__views.win);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var leftData = [];
    var rightData = [];
    Alloy.Globals.parent = $.ds;
    Alloy.Globals.savedUser;
    $.ds.on("favorites", function() {
        var controller = true && Alloy.isTablet ? $.detail : Alloy.createController("view2");
        var win = controller.getView();
        true && Alloy.isHandheld && win.open();
    });
    leftData[0] = createSection();
    leftData[1] = createNearbySection();
    leftData[2] = createSettingsSection();
    rightData[0] = createRightMenu();
    $.ds.leftTableView.data = leftData;
    $.ds.rightTableView.data = rightData;
    var currentView = Alloy.createController("view1").getView();
    Alloy.Globals.currentView = currentView;
    $.ds.contentview.add(currentView);
    $.ds.leftTableView.addEventListener("click", function(e) {
        rowSelect(e);
        $.ds.toggleLeftSlider();
    });
    $.ds.rightTableView.addEventListener("click", function(e) {
        rowSelect(e);
        $.ds.toggleRightSlider();
    });
    var storedRowTitle = null;
    $.ds.leftTableView.addEventListener("touchstart", function(e) {
        storedRowTitle = e.row.customTitle;
        null != storedRowTitle && (storedRowTitle.color = "#FFF");
    });
    $.ds.leftTableView.addEventListener("touchend", function() {
        null != storedRowTitle && (storedRowTitle.color = "#666");
    });
    $.ds.leftTableView.addEventListener("scroll", function() {
        null != storedRowTitle && (storedRowTitle.color = "#666");
    });
    var storedRowTitle = null;
    $.ds.rightTableView.addEventListener("touchstart", function(e) {
        storedRowTitle = e.row.customTitle;
        storedRowTitle.color = "#FFF";
    });
    $.ds.rightTableView.addEventListener("touchend", function() {
        storedRowTitle.color = "#666";
    });
    $.ds.rightTableView.addEventListener("scroll", function() {
        null != storedRowTitle && (storedRowTitle.color = "#666");
    });
    Ti.App.addEventListener("sliderToggled", function(e) {
        if ("right" == e.direction) {
            $.ds.leftMenu.zIndex = 2;
            $.ds.rightMenu.zIndex = 1;
        } else if ("left" == e.direction) {
            $.ds.leftMenu.zIndex = 1;
            $.ds.rightMenu.zIndex = 2;
        }
    });
    if ("iphone" === Ti.Platform.osname) {
        var loginWindow = Alloy.createController("login", {});
        loginWindow.getView().open();
    } else $.win.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;