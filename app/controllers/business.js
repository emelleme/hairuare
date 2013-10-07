// Get a reference to the library
var user = Alloy.Collections.user;
var parent  = Alloy.Globals.parent;
var business = Alloy.Collections.activeBusiness;
var favorites = Alloy.Collections.favorites;
var currentView = $.business;

var args = arguments[0] || {};


var bId = args.businessId || '';
if(bId == ''){
	var bId = 492374807510902;
}

fav = favorites.at(0);
//alert(fav.toJSON());

Alloy.Globals.currentView = currentView;
parent.searchButton.hide();
parent.rightButton.show();
//Get Facebook user data
if(facebook.loggedIn){
	facebook.requestWithGraphPath(bId+'?fields=picture,category,location,phone,id,name,link,hours', {}, 'GET', function(e) {
	    if (e.success) {
	    	var r = JSON.parse(e.result);
	        //alert(r);
	        model = business.at(0);
			business.remove(model);
	        getUserInfo(r);
	        
	    } else if (e.error) {
	        alert(e.error);
	    } else {
	        alert('Unknown response');
	    }
	});
}

function getUserInfo(e){
	var model = Backbone.Model.extend();
	if(favorites.get(bId)){
		//alert('Favorite');
		var favImage = "images/profileFavorites_on.png";
		//model.where({id:bId})
	}else{
		var favImage = "images/profileFavorites.png";
	}
	var newBusiness = new model({
		id: e.id, name: e.name, picUrl:e.picture.data.url,
		website: e.website,
		street: e.location.street+'\n'+e.location.city+', '+e.location.state,
		details: e.location.street+'\n'+e.location.city+', '+e.location.state+'\n'+e.phone,
		phone: e.phone,
		favorite: true,
		favoriteImage: favImage,
		// hours: hours
		});
		business.add(newBusiness);
		var mapview = Titanium.Map.createView({
		    mapType: Titanium.Map.STANDARD_TYPE,
		    center: {x:e.location.latitude, y:e.location.longitude},
		    animate:true,
		    userLocation:false,
		    layout:'vertical',
			left:0,
			top:0,
			height:80,
			width:Ti.UI.FILL
		});
		var userLocation = {
            latitude: e.location.latitude,
            longitude: e.location.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
            animate: true
        };
        mapview.setLocation(userLocation);
        var mapAnnotation = Ti.Map.createAnnotation({
            latitude: e.location.latitude, longitude: e.location.longitude,
            title: e.name,
            subtitle: e.phone,
            animate: true
        });
        // if (isAndroid) {
            // //mapAnnotation.pinImage = path + (isLocation ? "images/map/blue-pin.png" : "images/map/purple-pin.png");
        // }
        // else {
            mapAnnotation.pincolor = Ti.Map.ANNOTATION_PURPLE;
        // }
        
        mapview.addAnnotation(mapAnnotation);
		$.business.add(mapview);
}

function cameraAction(){
	alert('TODO:Camera Functions');
}

function favAction(){
	//Open Favorites View
	var d = business.at(0);
	//business.get(bId).set({favoriteImage:"images/profileFavorites.png",favorite:false});
	if(d.get('favorite') == true){
		business.get(bId).set({favoriteImage:"images/profileFavorites.png",favorite:false});
		b = favorites.get(bId);
		favorites.remove(b);
	}else{
		business.get(bId).set({favoriteImage:"images/profileFavorites_on.png",favorite:true});
		var biz = business.get(bId);
		favorites.add(biz.toJSON());
	}
	//Ti.API.log('info', favorites.toJSON());
}

function phoneAction(e){
	var tel = business.get(bId).get('phone');
	Titanium.Platform.openURL("tel:+"+tel);
	//alert('dialing '+tel);
}

