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
		xmlHttp.open("GET", "foodstore.php");
	}else{
		
	}
}





