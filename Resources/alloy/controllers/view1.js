function Controller() {
    function openFavorites() {
        var currentView = Alloy.Globals.currentView;
        parent.contentview.remove(currentView);
        currentView = Alloy.createController("view2").getView();
        parent.contentview.add(currentView);
        Ti.API.log("info", "test!!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "view1";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.view1 = Ti.UI.createView({
        id: "view1"
    });
    $.__views.view1 && $.addTopLevelView($.__views.view1);
    $.__views.favoritesView = Ti.UI.createTableView({
        id: "favoritesView",
        top: "93",
        height: "35",
        scrollable: "false"
    });
    $.__views.view1.add($.__views.favoritesView);
    $.__views.__alloyId37 = Ti.UI.createView({
        top: "127",
        id: "__alloyId37"
    });
    $.__views.view1.add($.__views.__alloyId37);
    $.__views.fg = Alloy.createWidget("tiflexigrid", "widget", {
        id: "fg",
        top: "127",
        __parentSymbol: $.__views.__alloyId37
    });
    $.__views.fg.setParent($.__views.__alloyId37);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Collections.user;
    var parent = Alloy.Globals.parent;
    Alloy.Collections.favorites;
    var currentView = $.view1;
    Alloy.Globals.currentView = currentView;
    parent.rightButton.hide();
    tableData = [];
    setTableSection = function(headerTitle) {
        section = Ti.UI.createTableViewSection();
        var args = {
            title: headerTitle,
            customView: "business"
        };
        Ti.API.log("info", "test!!");
        section.add(Alloy.createController("singleRow", args).getView());
        tableData.push(section);
        $.favoritesView.setData(tableData);
        $.favoritesView.zIndex = 2;
    };
    Cloud.Users.showMe(function(e) {
        if (e.success) {
            var user = e.users[0];
            var args = {
                hairScore: user.custom_fields.hairScore,
                userName: user.custom_fields.fullName,
                profileImage: user.custom_fields.picUrl
            };
            var items = [ {
                title: "sample 1",
                image: "http://www.lorempixel.com/700/600/"
            }, {
                title: "sample 2",
                image: "http://www.lorempixel.com/900/1200/"
            }, {
                title: "sample 3",
                image: "http://www.lorempixel.com/400/300/"
            }, {
                title: "sample 4",
                image: "http://www.lorempixel.com/600/600/"
            } ];
            $.fg.createGrid({
                columns: 4,
                space: 10,
                data: items,
                layout: "gallery",
                params: {
                    padding: 5,
                    showTitle: false,
                    backgroundColor: "#eee",
                    gridColor: "#ccc"
                }
            });
            $.fg.zIndex = 3;
            setTableSection("Favorites");
            $.view1.add(Alloy.createController("profileView", args).getView());
        }
    });
    $.favoritesView.addEventListener("click", function(e) {
        openFavorites(e);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;