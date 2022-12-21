var Emojis = {
	
    emoticons: function (textareaId, emojiList) {
		
        try {
            if (document.getElementById("selector").style.display == "block") {
                document.getElementById("selector").style.display = "none";
            }
        } catch (e) {}

        const options = document.createElement("div");

        options.id = "selector";
        options.style = "display:block;";

        options.addEventListener(
            "click",
            function (event) {
                event.currentTarget.style.display = "none";
            },
            true
        );

        // create spans and append it to the parent div selector
        for (i = 0; i < emojiList.length; i++) {
			
            if (Array.isArray(emojiList[i])) {
				
                for (k = 0; k < emojiList[i].length; k++) {
					
                    opt = document.createElement("span");
                    opt.className = "emoji-opt";
                    opt.innerHTML = "&#x" + emojiList[i][k] + ";";
                    opt.addEventListener(
                        "click",
                        function (event) {
                            var post = document.getElementById(textareaId).value;
                            var emoji = event.currentTarget.innerHTML;
                            document.getElementById(textareaId).value = post + emoji;
                        },
                        true
                    );
                    options.appendChild(opt);
                }
				
            } else {
				
                opt = document.createElement("span");
                opt.className = "emoji-opt";
                opt.innerHTML = "&#x" + emojiList[i] + ";";
                opt.addEventListener(
                    "click",
                    function (event) {
                        var post = document.getElementById(textareaId).value;
                        var emoji = event.currentTarget.innerHTML;
                        document.getElementById(textareaId).value = post + emoji;
                    },
                    true
                );
                options.appendChild(opt);
            }
        }

        document.getElementById("emoji").appendChild(options);
    }
};
