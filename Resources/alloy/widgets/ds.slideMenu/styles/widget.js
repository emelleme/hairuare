function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ds.slideMenu/" + s : s.substring(0, index) + "/ds.slideMenu/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0011,
    key: "rightButton",
    style: {
        backgroundImage: "none",
        right: "0",
        top: "0",
        width: "60",
        height: "44",
        style: "none"
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "leftMenu",
    style: {
        top: "0dp",
        left: "0dp",
        width: "250dp",
        zIndex: "2",
        backgroundColor: "#FFF"
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "rightMenu",
    style: {
        top: "0dp",
        right: "0dp",
        width: "250dp",
        zIndex: "1",
        backgroundColor: "#FFF"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "navview",
    style: {
        top: "0dp",
        left: "0dp",
        width: Ti.Platform.displayCaps.platformWidth,
        height: "44",
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
                color: "#3c444d",
                offset: "0.0"
            }, {
                color: "#72777b",
                offset: "1.0"
            } ]
        }
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "movableview",
    style: {
        left: "0",
        zIndex: "3",
        width: Ti.Platform.displayCaps.platformWidth
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "contentview",
    style: {
        left: "0dp",
        width: Ti.Platform.displayCaps.platformWidth,
        height: Ti.UI.Fill,
        top: "44",
        backgroundColor: "white"
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "shadowview",
    style: {
        shadowColor: "black",
        shadowOffset: {
            x: "0",
            y: "0"
        },
        shadowRadius: "2.5"
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "leftButton",
    style: {
        backgroundImage: "none",
        image: "/ds.slideMenu/ButtonMenu.png",
        left: "0",
        top: "0",
        width: "60",
        height: "44",
        style: "none"
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "calendarButton",
    style: {
        backgroundImage: "none",
        image: "/ds.slideMenu/CalendarMenu.png",
        left: "100",
        top: "0",
        width: "60",
        height: "44",
        style: "none"
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "notificationButton",
    style: {
        backgroundImage: "none",
        image: "/ds.slideMenu/NotificationMenu.png",
        left: "150",
        top: "5",
        width: "60",
        height: "34",
        style: "none"
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "rightButton",
    style: {
        backgroundImage: "none",
        image: "/ds.slideMenu/round_plus.png"
    }
}, {
    isId: true,
    priority: 100000.0013,
    key: "searchButton",
    style: {
        backgroundImage: "none",
        image: "/ds.slideMenu/ic_search.png"
    }
} ];