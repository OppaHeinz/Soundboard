function init(){window.AudioContext=window.AudioContext||window.webkitAudioContext,context=new AudioContext,bufferLoader=new BufferLoader(context,["sounds/alarm.mp3","sounds/bloody.mp3","sounds/haha-williams.mp3","sounds/hello-mr-villiams.mp3","sounds/i-need-some-money-immediately.mp3","sounds/i-realize-that.mp3","sounds/ok-sir.mp3","sounds/post-all-the-letters.mp3","sounds/sooo.mp3","sounds/yes-im-not.mp3","sounds/ouu.mp3","sounds/shh-silence.mp3","sounds/im-not-a-fool.mp3"],finishedLoading),bufferLoader.load()}function finishedLoading(t){function e(e,o){var n=context.createBufferSource();n.connect(context.destination),n.playbackRate.value=o,n.buffer=t[e],n.start(0)}function o(t){mapping.map(function(o,n){t===o.high&&e(n,1.2),t===o.regular&&e(n,1),t===o.low&&e(n,.8)})}function n(t,o){mapping.map(function(n,l){t===n.regular&&("slow"===o?e(l,.8):"fast"===o?e(l,1.2):e(l,1))})}document.onkeydown=function(t){document.getElementById("char").value="",document.getElementById("char").focus()},document.onkeyup=function(t){t.preventDefault();var e=document.getElementById("char").value;console.log(e),o(e)};for(var l=document.getElementsByClassName("clickable"),s=0;s<l.length;s++)l[s].addEventListener("click",function(){o(this.attributes["data-keycode"].value)}),l[s].addEventListener("touchstart",function(t){t.preventDefault(),console.log(t),offset=t.touches[0].clientY,elm=this}),l[s].addEventListener("touchmove",function(t){t.preventDefault(),offsetElm=t.touches[0].clientY-offset,offsetElm>=0?(elm.setAttribute("style","transition: none; transform: rotateX(0deg);"),elm.children[1].setAttribute("style","transition: none; transform: scaleY(0); opacity: 0"),30>=offsetElm?(elm.setAttribute("style","transition: none; transform: rotateX("+45*offsetElm/30+"deg) translateY("+-offsetElm/3+"px);"),elm.children[2].setAttribute("style","transition: none; transform: scaleY("+offsetElm/30+"); opacity:"+100/30*offsetElm/100)+";"):(elm.setAttribute("style","transition: none; transform: rotateX(45deg) translateY(-10px);"),elm.children[2].setAttribute("style","transition: none; transform: scaleY(1); opacity: 1"))):(elm.setAttribute("style","transition: none; transform: rotateX(0deg);"),elm.children[2].setAttribute("style","transition: none; transform: translateY(0); opacity: 0"),offsetElm>=-30?(elm.setAttribute("style","transition: none; transform: rotateX("+45*offsetElm/30+"deg) translateY("+-offsetElm/3+"px);;"),elm.children[1].setAttribute("style","transition: none; transform: scaleY("+-offsetElm/30+"); opacity:"+100/30*-offsetElm/100)+";"):(elm.setAttribute("style","transition: none; transform: rotateX(45deg) translateY(10px);"),elm.children[1].setAttribute("style","transition: none; transform: scaleY(1); opacity: 1"))),console.log(offsetElm)}),l[s].addEventListener("touchend",function(t){t.preventDefault(),elm.children[1].setAttribute("style",""),elm.children[2].setAttribute("style",""),elm.setAttribute("style",""),console.log(offsetElm),offsetElm>30?n(elm.attributes["data-keycode"].value,"slow"):-30>offsetElm?n(elm.attributes["data-keycode"].value,"fast"):n(elm.attributes["data-keycode"].value),offsetElm=0})}window.onload=init;var context,bufferLoader,elm={},offsetElm,mapping=[{high:"!",regular:"1",low:"¡"},{high:'"',regular:"2",low:"“"},{high:"§",regular:"3",low:"¶"},{high:"$",regular:"4",low:"¢"},{high:"%",regular:"5",low:"["},{high:"&",regular:"6",low:"]"},{high:"/",regular:"7",low:"|"},{high:"(",regular:"8",low:"{"},{high:")",regular:"9",low:"}"},{high:"=",regular:"0",low:"≠"},{high:"Q",regular:"q",low:"«"},{high:"W",regular:"w",low:"∑"},{high:"E",regular:"e",low:"€"}],iId;