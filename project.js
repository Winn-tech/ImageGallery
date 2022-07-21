

function showPic(whichpic) { 
    var source = whichpic.getAttribute("href"); 
    var placeholder = document.getElementById("placeholder"); 
    placeholder.setAttribute("src",source); 
    var text = whichpic.getAttribute("title"); 
    var discription = document.getElementById("description" );
    discription.childNodes[0].nodeValue = text
    }

    function prepImgGallery(){
        if (!document.getElementsByTagName) return false; 
        if (!document.getElementById) return false;
        if(!document.getElementById("imagegallery")) return false;
        var gallery = document.getElementById("imagegallery");
        var links = gallery.getElementsByTagName("a");
        for(var i = 0; i < links.length; i++){
            links[i].onclick = function(){
                showPic(this);
                return false;
            }
        }
    }   

    window.onload = prepImgGallery();
