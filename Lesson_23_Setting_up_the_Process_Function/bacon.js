var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
	var xmlHttp;
	
	if(window.XMLHttpRequest){
		//If your browser is aware of this object (90% of the time)
		xmlHttp = new XMLHttpRequest();
	}else{
		//If you are using Microsoft
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	return xmlHttp;
}

function process(){
	if(xmlHttp){
		try{
			xmlHttp.open();
		}catch(e){
			alert(e.toString());
		}
	}
}