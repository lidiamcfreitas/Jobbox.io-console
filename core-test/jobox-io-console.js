function replaceAll(str, replaceWhat, replaceWithWhat) {
	return str.split('null').join('[EMPTY]')
}

function humanify(str) {
	var humanified = str.replace("_", " ")
	humanified = humanified.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	return humanified
}


function objToStr(object) {
	
	var objectStr = ""

	for (var property in object) {
	   	if (object.hasOwnProperty(property)) {
	   		//console.log(object[property])
	    	objectStr += humanify(property) +  " : " + object[property] + "\n"  
	    }
	}
	return objectStr
}

function jsonParser(data) {
	var str = ""
	data.forEach(function(entry) {
		// iterate through the array of objects
		// and "stringify" each one of them
		str += objToStr(entry)
		str += "\n" 
	})

	return str
}


function getDataFromUrl(token, url, keyParser) {
		
	$.ajax({
	  type : 'GET',
	  headers : { "Authorization" : "Token token=" + token },
	  url: url
	}).done(function (res) { 
		console.log(replaceAll(jsonParser(res), 'null', '[EMPTY]'))
	
	})

}