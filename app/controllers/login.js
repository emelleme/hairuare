var args = arguments[0] || {};
var logMeOut = args.logMeOut || '';
function loginUser(e){
	$.loginScreen.close();
	//$.loginScreen = null;
	homeScreen = new Alloy.createController("index").getView();
	homeScreen.open({
		transition : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
}

function doLogout(e){
	//LogOut
}

function updateLoginStatus() {
	if (facebook.loggedIn) {
        //label.text = 'Logging in to ACS as well, please wait...';
        Cloud.SocialIntegrations.externalAccountLogin({
            type: 'facebook',
            token: facebook.accessToken
        }, function (e) {
            if (e.success) {
                Ti.API.log('info','Logged In!');
                updateUser();
            }
            else {
                error(e);
            }
        });
    }
	//Ti.API.log('info','Logged In = ' + facebook.loggedIn);
	
}

function updateUser(){
	facebook.requestWithGraphPath('me?fields=name,id,picture,email', {}, 'GET', function(e) {
	    if (e.success) {
	    	var r = JSON.parse(e.result);
	        //alert(r);
	        Cloud.Users.update({
		    	email: r.email,
		    	custom_fields: {
		        	picUrl: r.picture.data.url,
		        	fullName: r.name
		    	}
			}, function (ee) {
			    if (ee.success) {
			        var user = ee.users[0];
			        
			        $.loginScreen.close();
			        $.loginSceen = null;
			        homeScreen = new Alloy.createController("index").getView();
					homeScreen.open({
						transition : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
					});
			        
			    } else {
			        alert('Error!!:\n' +
			            ((e.error && e.message) || JSON.stringify(e)));
			    }
			});
	    } else if (e.error) {
	        alert(e.error);
	    } else {
	        alert('Unknown response');
	    }
	});
	//Update User
}

// Use the Alloy.Globals.Facebook namespace to make Facebook module API calls

$.fbButton.style = facebook.BUTTON_STYLE_WIDE;
//$.testLabel.text = 'Logged In = ' + facebook.loggedIn;


facebook.addEventListener('login', updateLoginStatus);

if(logMeOut){
	facebook.logout();
}
facebook.addEventListener('logout', function(e){
	//alert('Logged Out!');
	if (e.success) {
        //alert('Logged In');
    } else if (e.error) {
        //alert(e.error);
    } else if (e.cancelled) {
        //alert("Canceled");
    }
});
//$.loginScreen.open();