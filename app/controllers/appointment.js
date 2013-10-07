// Get a reference to the library
var user = Alloy.Collections.user;
var parent  = Alloy.Globals.parent;
var currentView = $.appointmentView;
Alloy.Globals.currentView = currentView;

var forms = require('forms');
var fields = [
	{ title:'Date', type:'date', id:'date' },
	{ title:'time', type:'text', id:'time' },
	{ title:'Phone or Email', type:'phone', id:'phone' },
	{ title:'Requested Service (e.g. Haircut)', type:'text', id:'service' },
	{ title:'Submit', type:'submit', id:'registerUser' }
];

var currentView = Ti.UI.createWindow();
var form = forms.createForm({
	style: forms.STYLE_LABEL,
	fields: fields
});
form.addEventListener('registerUser', function(e) {
	Ti.API.debug(e);
});
currentView.add(form);

currentView.open();