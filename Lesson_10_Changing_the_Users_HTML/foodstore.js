var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
	var xmlHttp;
	
	//check if user is using internet explorer
	if(window.ActiveXObject){
		try{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			xmlHttp = false;
		}
	}else{
		try{
			xmlHttp = new XMLHttpRequest();
		}catch(e){
			xmlHttp = false;
		}
	}
	
	if(!xmlHttp){
		alert("Can't create that object hoss!");
	}else{
		return xmlHttp;
	}
}

function process(){
	//0 and 4 check to make sure xmlHttp is ready and able to communicate with server
	if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
		food = encodeURIComponent(document.getElementById("userInput").value);
		//Create the requet we want to have
		xmlHttp.open("GET", "foodstore.php?food="+food, true); 
		//Wait for response back from server
		xmlHttp.onreadystatechange = handleServerResponse;
		//Send the request (use "null" if using GET)
		xmlHttp.send(null);
	}else{
		setTimeout('process()',1000);
	}
}

function handleServerResponse(){
	//State number 4 is when the object is done communicating and ready
	if(xmlHttp.readyState==4){
		//Status 200 means the communication went okay
		if(xmlHttp.status==200){
			xmlResponse = xmlHttp.responseXML;
			//Get root element of xml file
			xmlDocumentElement = xmlResponse.documentElement;
			//Get xml data from <response> tags
			message = xmlDocumentElement.firstChild.data;
			document.getElementById("underInput").innerHTML = '<span style="color:blue">'+message+'</span>';
			setTimeout('process()',1000);
		}else{
			alert('Something went wrong!');
		}
	}
}



