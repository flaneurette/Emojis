class emojis {
	
    createEmojis(input, list) {
		
        this.aim = input;
        this.list = list;
        this.isVisible();

        const options = document.createElement("div");

        options.id = "selector";
        options.style.display = "block";
        options.addEventListener(
            "click",
            function (event) {
                event.currentTarget.style.display = "none";
            },
            true
        );

        this.createSpans(this.aim, options, this.list);

        document.getElementById("emoji").appendChild(options);
    }

    createSpans(aim, options, list) {
	    
        if (!Array.isArray(list)) {
            return false;
        }

        // Create spans and append it to the parent div selector
        for (var i = 0; i < list.length; i++) {
		
            if (Array.isArray(list[i])) {
		    
                for (var k = 0; k < list[i].length; k++) {
			
                    var opt = document.createElement("span");
                    opt.className = "emoji-option";
                    opt.innerHTML = "&#x" + list[i][k] + ";";
                    opt.addEventListener(
                        "click",
                        function (event) {
                            var post = document.getElementById(aim).value;
                            var emoji = event.currentTarget.innerHTML;
                            document.getElementById(aim).value = post + emoji;
                        },
                        true
                    );
                    options.appendChild(opt);
                }
		    
            } else {
		    
                opt = document.createElement("span");
                opt.className = "emoji-opt";
                opt.innerHTML = "&#x" + list[i] + ";";
                opt.addEventListener(
                    "click",
                    function (event) {
                        var post = document.getElementById(aim).value;
                        var emoji = event.currentTarget.innerHTML;
                        document.getElementById(aim).value = post + emoji;
                    },
                    true
                );
                options.appendChild(opt);
            }
        }
    }

    isVisible() {
	    
        try {
            if (document.getElementById("selector").style.display == "block") {
                document.getElementById("selector").style.display = "none";
            }
        } catch (e) {}
    }
}
