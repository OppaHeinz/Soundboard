function init(){window.AudioContext=window.AudioContext||window.webkitAudioContext,context=new AudioContext,bufferLoader=new BufferLoader(context,["sounds/alarm.mp3","sounds/bloody.mp3","sounds/haha-williams.mp3","sounds/hello-mr-villiams.mp3","sounds/i-need-some-money-immediately.mp3","sounds/i-realize-that.mp3","sounds/ok-sir.mp3","sounds/post-all-the-letters.mp3","sounds/sooo.mp3","sounds/yes-im-not.mp3","sounds/ouu.mp3","sounds/shh-silence.mp3","sounds/im-not-a-fool.mp3"],finishedLoading),bufferLoader.load()}function finishedLoading(e){function o(o,n){var t=context.createBufferSource();t.connect(context.destination),t.playbackRate.value=n,t.buffer=e[o],t.start(0)}function n(e){mapping.map(function(n,t){e===n.high&&o(t,1.2),e===n.regular&&o(t,1),e===n.low&&o(t,.8)})}document.onkeydown=function(e){document.getElementById("char").value="",document.getElementById("char").focus()},document.onkeyup=function(e){e.preventDefault();var o=document.getElementById("char").value;console.log(o),n(o)};for(var t=document.getElementsByClassName("clickable"),a=0;a<t.length;a++)t[a].addEventListener("click",function(){console.log(this.attributes["data-keycode"].value),n(this.attributes["data-keycode"].value)})}window.onload=init;var context,bufferLoader,mapping=[{high:"!",regular:"1",low:"¡"},{high:'"',regular:"2",low:"“"},{high:"§",regular:"3",low:"¶"},{high:"$",regular:"4",low:"¢"},{high:"%",regular:"5",low:"["},{high:"&",regular:"6",low:"]"},{high:"/",regular:"7",low:"|"},{high:"(",regular:"8",low:"{"},{high:")",regular:"9",low:"}"},{high:"=",regular:"0",low:"≠"},{high:"Q",regular:"q",low:"«"},{high:"W",regular:"w",low:"∑"},{high:"E",regular:"e",low:"€"}];