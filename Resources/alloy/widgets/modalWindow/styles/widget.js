function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "modalWindow/" + s : s.substring(0, index) + "/modalWindow/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0026,
    key: "modalwindow-container",
    style: {
        left: "10dip",
        right: "10dip",
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderRadius: "10dip",
        borderColor: "black",
        borderWidth: "1dip",
        backgroundColor: "transparent"
    }
}, {
    isClass: true,
    priority: 10000.0029,
    key: "header",
    style: {
        backgroundColor: "#aaa"
    }
}, {
    isClass: true,
    priority: 10000.0031,
    key: "title",
    style: {
        color: "black",
        left: "5dip",
        font: {
            fontSize: 16
        }
    }
}, {
    isClass: true,
    priority: 10000.0032,
    key: "close",
    style: {
        width: "30dip",
        height: "30dip",
        top: 0,
        right: 0,
        image: "/modalWindow/close.png"
    }
}, {
    isClass: true,
    priority: 10000.0034,
    key: "body",
    style: {
        backgroundColor: "white"
    }
}, {
    isClass: true,
    priority: 10000.0036,
    key: "message",
    style: {
        color: "black"
    }
}, {
    isId: true,
    priority: 100000.0025,
    key: "window",
    style: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#55000000"
    }
}, {
    isId: true,
    priority: 100000.0028,
    key: "modalwindow_header",
    style: {
        width: Ti.UI.FILL,
        height: "30dip",
        backgroundRepeat: true,
        visible: true
    }
}, {
    isId: true,
    priority: 100000.003,
    key: "modalwindow_title",
    style: {
        visible: true
    }
}, {
    isId: true,
    priority: 100000.0033,
    key: "modalwindow_body",
    style: {
        top: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        visible: true
    }
}, {
    isId: true,
    priority: 100000.0035,
    key: "modalwindow_message",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "10dip",
        bottom: "10dip",
        left: "10dip",
        right: "10dip",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        visible: true
    }
} ];