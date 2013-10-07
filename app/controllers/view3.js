var user = Alloy.Collections.user;
var parent  = Alloy.Globals.parent;
var currentView = $.view3;
Alloy.Globals.currentView = currentView;
var library = Alloy.Collections.place;

Ti.API.log('info','go');
var model = Backbone.Model.extend();

tableData = [];



facebook.requestWithGraphPath('search?q=barber%20shop&type=place&center=39.988032,-75.1278176&fields=picture,category,location,phone,id,name,link', {}, 'GET', function(e) {
    if (e.success) {
    	var r = JSON.parse(e.result);
        //alert(r.data[0].id);
        section = Ti.UI.createTableViewSection();
		var customView = Ti.UI.createView({
			height : 'auto',
			backgroundColor : "#0f0",
			backgroundGradient : {
				type : "linear",
				startPoint : {
					x : "0%",
					y : "0%"
				},
				endPoint : {
					x : "0%",
					y : "100%"
				},
				colors : [{
					color : "#EEE",
					offset : 0.0
				}, {
					color : "#CCC",
					offset : 1.0
				}]
			}
		});
		
		var customLabel = Ti.UI.createLabel({
			top : 8,
			bottom : 8,
			left : 10,
			right : 10,
			height : 'auto',
			text : 'Nearby',
			font : {
				fontSize : 12,
				fontWeight : 'bold'
			},
			color : '#666666'
		});
		section.headerView = customView;
		customView.add(customLabel);
        r.data.forEach(getPlaceList);
        tableData.push(section);
        $.placesView.setData(tableData);
    } else if (e.error) {
        alert(e.error);
    } else {
        alert('Unknown response');
    }
});

function getPlaceList(e,index,array){
	
	var model = Backbone.Model.extend();
	var newPlace = new model({name: e.name, street:e.location.street});
	library.add(newPlace);
	
	var args = {
		title : e.name,
		address : e.location.street,
		customView : 'business',
		image : e.picture.data.url,
		businessId: e.id
	};
	section.add(Alloy.createController('placesrow', args).getView());
	// var row1 = Ti.UI.createTableViewRow({
		// className : 'placesRow'
	// });
// 
	// var customLabel = Ti.UI.createLabel({
		// text : e.name,
		// className: 'placesRow'
	// });
// 
	// row1.add(customLabel);
	// section.add(row1);
	
}

$.placesView.addEventListener("click", function selectRow(e) {
	businessSelect(e);
});

function businessSelect(e) {
	var currentView = Alloy.Globals.currentView;
	if (currentView.id != e.row.customView) {
		parent.contentview.remove(currentView);
		var args = {
			title : e.name,
			address : e.row.address,
			image : e.row.image,
			businessId: e.row.businessId
		};
		currentView = Alloy.createController('business', args).getView();
		parent.contentview.add(currentView);
	}
}


// Create a new model and add it to the collection
// var newPlace = new model({name: 'Sample Place B', street:'123 Brown St.'});
// library.add(newPlace);
 
// Remove the very first model from the collection
model = library.at(0);
library.remove(model);