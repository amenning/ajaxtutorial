var xmlHttp = createXmlHttpRequestObject();

//create object
function createXmlHttpRequestObject(){
	var xmlHttp;
	if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}else{
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlHttp;
}

//called on load
function process(){
	if(xmlHttp){
		try{
			xmlHttp.open("GET", "tuna.xml",true);
			xmlHttp.onreadystatechange = handleStateChange;
			xmlHttp.send(null);
		}catch(e){
			alert(e.toString());
		}
	}
}

//when state changes
function handleStateChange(){
	if(xmlHttp.readyState==4){
		if(xmlHttp.status==200){
			try{
				handleResponse();
			}catch(e){
				alert(e.toString());
			}
		}else{
			alert(xmlHttp.statusText);
		}
	}
}