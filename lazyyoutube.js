!function(){"use strict";for(var t=document.querySelectorAll(".fadhelyt"),e=0;e<t.length;e++){var i=document.createElement("div");i.className="fadhelyt-play-btn",t[e].appendChild(i);var l=document.createElement("img");l.src="https://img.youtube.com/vi/"+t[e].dataset.id+"/sddefault.jpg",t[e].appendChild(l),t[e].addEventListener("click",function(){var t=document.createElement("iframe");for(t.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.id+"?rel=0&showinfo=0&autoplay=1"),t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","");this.firstChild;)this.removeChild(this.firstChild);this.appendChild(t)})}}();
