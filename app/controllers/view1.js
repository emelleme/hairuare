// Get a reference to the library
var user = Alloy.Collections.user;
var parent  = Alloy.Globals.parent;
var favorites = Alloy.Collections.favorites;
var currentView = $.view1;
Alloy.Globals.currentView = currentView;

parent.rightButton.hide();
tableData=[];

setTableSection = function(headerTitle){
	section = Ti.UI.createTableViewSection();
	var args = {
		title : headerTitle,
		customView : 'business'
	};
	Ti.API.log('info','test!!');
	section.add(Alloy.createController('singleRow', args).getView());
	tableData.push(section);
	$.favoritesView.setData(tableData);
	$.favoritesView.zIndex = 2;
};
//Get Facebook user data
//Update User Info
Cloud.Users.showMe(function (e) {
    if (e.success) {
        var user = e.users[0];
        var args = {
			hairScore : user.custom_fields.hairScore,
			userName : user.custom_fields.fullName,
			profileImage : user.custom_fields.picUrl
		};
		
		//SOME SAMPLE DATA
		var items = [
		    {title:'sample 1', image:'http://www.lorempixel.com/700/600/'},
		    {title:'sample 2', image:'http://www.lorempixel.com/900/1200/'},
		    {title:'sample 3', image:'http://www.lorempixel.com/400/300/'},
		    {title:'sample 4', image:'http://www.lorempixel.com/600/600/'}
		];
		$.fg.createGrid({
		    columns:4,              //NUMBER OF COLUMNS. DEFAULT IS 4.
		    space:10,               //SPACE BETWEEN EACH ELEMENT. DEFAULT IS 5.
		    data:items,             //ARRAY WITH THE DATA TO DISPLAY. SEE SAMPLE DATA ABOVE.
		    layout:'gallery',               //LAYOUT TYPE: gallery or customView. DEFAULT IS gallery.
		    params:{
		        padding:5,          //GALLERY ONLY.
		        showTitle:false,        //GALLERY ONLY. True or False
		        backgroundColor: '#eee',
		        gridColor: '#ccc'
		    }
		    //width: 320                //OPTIONAL. SCREEN'S WIDTH TO ADJUST GRID.
		});
		$.fg.zIndex = 3;

		setTableSection('Favorites');
		$.view1.add(Alloy.createController('profileView', args).getView());
		
    } else {
        // alert('Error:\n' +
        //     ((e.error && e.message) || JSON.stringify(e)));
    }
});







function getFavorites(value,key,list){
	var args = {
	title : value.name,
	address : 'No Upcoming Appointments',
	customView : 'business',
	image : value.picUrl
	};
	section.add(Alloy.createController('placesrow', args).getView());
	Ti.API.log('info',value.name);
}
function getUserInfo(e){
	var model = Backbone.Model.extend();
	var newUser = new model({
		id: e.id, name: e.name, picUrl:e.picture.data.url});
	user.add(newUser);
	
}

function cameraAction(){
	alert('TODO:Camera Functions');
}

function favAction(){
	//Open Favorites View
	parent.contentview.remove(currentView);
	Alloy.Globals.currentView = Alloy.createController('view2').getView();
	parent.contentview.add(Alloy.Globals.currentView);
}

function openFavorites(e) {
	var currentView = Alloy.Globals.currentView;
	parent.contentview.remove(currentView);
	currentView = Alloy.createController('view2').getView();
	parent.contentview.add(currentView);
	Ti.API.log('info','test!!');
}

$.favoritesView.addEventListener("click", function selectRow(e) {
	openFavorites(e);
});