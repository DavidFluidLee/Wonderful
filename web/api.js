// This function is called by the Genero Client Container
// so the web component can initialize itself and initialize
// the gICAPI handlers

onICHostReady = function(version) {
	
	if ( version != 1.0 ) {
		alert('Invalid API version');
		return;
	}
	
	gICAPI.onFocus = function(polarity)
	{
		if (polarity)
        {
            //alert("onFocus");
        }
	};
	
	gICAPI.onData = function(data)
	{
		// alert("onData");
	};
	
	gICAPI.onProperty = function(p)
	{
		// alert("onProperty");
	}
}