function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "modalWindow/" + s : s.substring(0, index) + "/modalWindow/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0023,
    key: "buttons_container",
    style: {
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        bottom: "5dip",
        visible: true
    }
} ];