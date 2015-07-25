function playPreview(id)
	{
		var pathOfFileToRead = "config.json";

		new FileHelper().readStringFromFileAtPath
		(
			pathOfFileToRead,
			parseJson,
			id
		);
	}

	function parseJson(contentsOfFileAsString, songId)
	{
		var json = JSON.parse(contentsOfFileAsString);
		var songApiUrl = json["ApiRootUrl"] + json["TrackUrl"] + songId;
		getPreview(songApiUrl);
	}

	function getPreview(songApiUrl)
	{
		console.log(songApiUrl);
		// now you need to grab the webpage in songApiUrl and parse it to retrieve the song preview
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function() {
    			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        			var json = JSON.parse(xmlhttp.responseText);
        			processPreview(json);
			}
    		}

		xmlhttp.open("GET", songApiUrl, true);
		xmlhttp.send();
	}

	function processPreview(json) {
    		previewUrl = json["preview_url"];
		var videoChild = document.getElementsByClassName("videoChild");
		videoChild[0].src = previewUrl;
		var videoParent = document.getElementsByClassName("videoParent")[0];
		videoParent.load();
	}
	// classes

	function FileHelper()
	{}
	{
		FileHelper.prototype.readStringFromFileAtPath = function(pathOfFileToReadFrom, callback, songId)
		{
			var request = new XMLHttpRequest();
			request.onload = this.readStringFromFileAtPath_OnLoad.bind(this, callback, songId);
			request.open("GET", pathOfFileToReadFrom, true);
			request.send();
		}

		FileHelper.prototype.readStringFromFileAtPath_OnLoad = function(callback, songId, event )
		{
			var request = event.target;
			var filetext = request.responseText;
			callback(filetext, songId);
		}
	}
