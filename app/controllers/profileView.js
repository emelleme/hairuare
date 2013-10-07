var args = arguments[0] || {};
$.userName.text = args.userName || '';
$.hairScore.text = args.hairScore || '0';
// $.row.customTitle = $.title;
$.profileImage.image = args.profileImage || '';
Ti.API.log('info',args.userName);