function addTextToDiv(divName, text) {
 document.getElementById(divName).innerHTML += text;
 updateScroll() // !!!
}

function replaceAll(str, replaceWhat, replaceWithWhat) {
	return str.split(replaceWhat).join(replaceWithWhat)
}

function humanify(str) {
	var humanified = str.replace("_", " ")
	humanified = humanified.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	return humanified
}

function objToStr(object) {
	
	var objectStr = ''

	for (var property in object) {
	   	if (object.hasOwnProperty(property)) {
	   		//console.log(object[property])
	    	objectStr += humanify(property) +  " : " + object[property] + "<br />"
	    }
	}
	return objectStr + "<br />"
}

function jsonParser(data) {
	var str = ''
	
	if (data.constructor === Array) {
		// we're dealing with an array of objects
		data.forEach(function(entry) {
		// iterate through the array of objects
		// and "stringify" each one of them
		str += objToStr(entry)
		str += "\n" 
		})
	} else {
		str += objToStr(data)
		str += "\n"
	}

	return str
}


function getDataFromUrl(token, url) {
		
	$.ajax({
	  type : 'GET',
	  headers : { "Authorization" : "Token token=" + token },
	  url: url
	}).done(function (res) { 
        console.log("NOON")
		addTextToDiv("outPutDiv",replaceAll(jsonParser(res), 'null', '[EMPTY]'))
	})
}

function getCompanyById(token, id) {
	getDataFromUrl(token, "http://qa.jobbox.io/api/v1/companies/" + id)
}

function getOfferById(token, id) {
	getDataFromUrl(token, "http://qa.jobbox.io/api/v1/offers/" + id)
}


function getApplicationById(token, id) {
	getDataFromUrl(token, "http://qa.jobbox.io/api/v1/user/applications/" + id)
}

function getRefferalById(token, id) {
	getDataFromUrl(token, "http://qa.jobbox.io/api/v1/user/referrals/" + id)
}

function getRefferalRequestById(token, id) {
	getDataFromUrl(token, "http://qa.jobbox.io/api/v1/user/referral_requests/" + id)
}