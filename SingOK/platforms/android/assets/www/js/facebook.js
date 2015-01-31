var loginFacebook = function () {
    if (!window.cordova) {
        var appId = prompt("Enter FB Application ID", "");
        facebookConnectPlugin.browserInit(appId);
    }
    
    facebookConnectPlugin.login( ["email"],
                                function (response) { 
    								getSignUpInfoFacebook();
    							},
                                function (response) { alert(JSON.stringify(response)) });
}

var showDialog = function () {
    facebookConnectPlugin.showDialog( { method: "feed" },
                                     function (response) { alert(JSON.stringify(response)) },
                                     function (response) { alert(JSON.stringify(response)) });
}

var getSignUpInfoFacebook = function () {
    facebookConnectPlugin.api( "me", [],
                              function (response) {
    							signUpPLUserFacebook(response);
    						  },
                              function (response) { alert(JSON.stringify(response)) });
}

function signUpPLUserFacebook(response) {
	/*
	var firstName = response.first_name;
	var lastName = response.last_name;
	var email = response.email;
	var phone = ""; 
	var password = response.id;
	var prayerline = "";
	
	
	global.api('register_user', {
		fname: firstName, 
		lname: lastName, 
		email: email, 
		telno: phone, 
		password: password, 
		prayerline: prayerline,
		plugin: 'facebook'
	}, onSuccessRegisterPLUserFacebook);
	
	*/
	global.set('count', 1);
	window.open("index.html");
	
}

function onSuccessRegisterPLUserFacebook(response) {
	alert(JSON.stringify(response))
}

var apiTest = function () {
    facebookConnectPlugin.api( "me/?fields=id,email", [],
                              function (response) { alert(JSON.stringify(response)) },
                              function (response) { alert(JSON.stringify(response)) });
}

var logPurchase = function () {
    facebookConnectPlugin.logPurchase(1.99, "USD",
                                      function (response) { alert(JSON.stringify(response)) },
                                      function (response) { alert(JSON.stringify(response)) });
}

var logEvent = function () {
    // For more information on AppEvent param structure see
    // https://developers.facebook.com/docs/ios/app-events
    // https://developers.facebook.com/docs/android/app-events
    facebookConnectPlugin.logEvent("Purchased",
                                   {
                                   NumItems: 1,
                                   Currency: "USD",
                                   ContentType: "shoes",
                                   ContentID: "HDFU-8452"
                                   }, null,
                                   function (response) { alert(JSON.stringify(response)) },
                                   function (response) { alert(JSON.stringify(response)) });
}

var getAccessToken = function () {
    facebookConnectPlugin.getAccessToken(
                                         function (response) { alert(JSON.stringify(response)) },
                                         function (response) { alert(JSON.stringify(response)) });
}

var getStatus = function () {
    facebookConnectPlugin.getLoginStatus(
                                         function (response) { alert(JSON.stringify(response)) },
                                         function (response) { alert(JSON.stringify(response)) });
}

var logout = function () {
    facebookConnectPlugin.logout(
                                 function (response) { alert(JSON.stringify(response)) },
                                 function (response) { alert(JSON.stringify(response)) });
}
