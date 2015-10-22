var namesArray = new Array('collective', 'charisma', 'robot', 'simian', 'prime', 'strata', 'blueberry','tangent','perfect', 'mix', 'plate', 'atomic','chrome','eon','tectonics', 'gravel', 'open', 'stage', 'design','studio','electro','flash','flame','dongle','alpha','swatch','color','rgb','align','organic','source','spaceship','shelter','visual','omni','machine','plasma','pretzel','beta','alpha','omega','three','tri','trio','volume','pure','push','realm','static','dynamic','nascent','palette','station','vortex','transform','script','tween','digital','screen','group','icon','command','corps','guide','grid','apple','paste','alt','control','delete','channel','import','online','filter');
var randomFirst = getRandomNum();
var randomSecond = getRandomNum();
var firstName = namesArray[randomFirst++];
var secondName = namesArray[randomSecond];
var btnNum; // Number of button selected
var fadeSpeed = 0.3; // Animation speed of elements

var firstNameField = document.getElementById("firstName");
var secondNameField = document.getElementById("secondName");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

/*
Passes the button number and fades out the words
*/

function getMeName(aBtn) {

	btnNum = aBtn;

	if(btnNum === 1 || btnNum === 3) TweenMax.to(firstNameField, fadeSpeed, {scaleY:0, opacity:0, ease:Quint.easeOut});
	if(btnNum === 2 || btnNum === 3) TweenMax.to(secondNameField, fadeSpeed, {scaleY:0, opacity:0, ease:Quint.easeOut});

	setTimeout(switchName, fadeSpeed * 1000);
}

/*
Swaps the words and animates it back in
*/

function switchName() {

	if (btnNum === 3) {
		randomFirst = getRandomNum();
		randomSecond = getRandomNum();
		firstName = namesArray[randomFirst++];
		secondName = namesArray[randomSecond];
		if(firstName === secondName) switchName();
		//trace(randomFirst + ' :: ' + randomSecond);
	} else if (btnNum === 2) {
		//randomFirst = Math.round(Math.random()*namesArray.length);
		randomSecond = Math.floor(Math.random() * namesArray.length);
		//firstName.text = namesArray[randomFirst ++];
		if(secondName === namesArray[randomSecond]) {
			switchName();
			return;
		} else {
			secondName = namesArray[randomSecond];
		}
	} else if (btnNum === 1) {
		randomFirst = Math.floor(Math.random() * namesArray.length);
		//randomSecond = Math.round(Math.random()*namesArray.length);
		if(firstName === namesArray[randomFirst++]) {
			switchName();
			return;
		} else {
			firstName = namesArray[randomFirst++];
		}
		//secondName.text = namesArray[randomSecond];
	}

	firstNameField.innerHTML = firstName + " ";
	secondNameField.innerHTML =  secondName + "<span class='trademarks'>™®©</span>";

	TweenMax.to(firstNameField, fadeSpeed, {opacity:1, scaleY:1, ease:Back.easeOut});
	TweenMax.to(secondNameField, fadeSpeed, {opacity:1, scaleY:1, delay:0.1, ease:Back.easeOut});
}

/*
Return random name from the namesArray
*/
function getRandomNum() {
	return Math.floor(Math.random() * namesArray.length);
}


btn1.onclick = function() {
	getMeName(1);
};
btn2.onclick = function() {
	getMeName(2);
};
btn3.onclick = function() {
	getMeName(3);
};

getMeName(3);