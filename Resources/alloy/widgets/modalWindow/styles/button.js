function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "modalWindow/" + s : s.substring(0, index) + "/modalWindow/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0015,
    key: "Button",
    style: {
        backgroundRepeat: false,
        width: "100dip",
        height: "35dip",
        bottom: "5dip",
        borderRadius: "10dip",
        backgroundImage: "/modalWindow/button.png"
    }
}, {
    isClass: true,
    priority: 10000.0019,
    key: "modalwindow-button-ok",
    style: {
        color: "#fff",
        backgroundColor: "#080"
    }
}, {
    isClass: true,
    priority: 10000.002,
    key: "modalwindow-button-cancel",
    style: {
        color: "#fff",
        backgroundColor: "#800"
    }
}, {
    isClass: true,
    priority: 10000.0021,
    key: "modalwindow-button-default",
    style: {
        color: "#000",
        backgroundColor: "#aaa"
    }
}, {
    isId: true,
    priority: 100000.0016,
    key: "modalwindow_button_ok",
    style: {
        visible: true
    }
}, {
    isId: true,
    priority: 100000.0017,
    key: "modalwindow_button_cancel",
    style: {
        visible: true
    }
}, {
    isId: true,
    priority: 100000.0018,
    key: "modalwindow_button_default",
    style: {
        visible: true
    }
} ];