/* globals AudioContext, BufferLoader */
window.onload = init;

var context;
var bufferLoader;
var elm = {};
var offsetElm;

var mapping =
  [{
    high: '!',
    regular: '1',
    low: '¡',
  }, {
    high: '"',
    regular: '2',
    low: '“',
  }, {
    high: '§',
    regular: '3',
    low: '¶',
  }, {
    high: '$',
    regular: '4',
    low: '¢',
  }, {
    high: '%',
    regular: '5',
    low: '[',
  }, {
    high: '&',
    regular: '6',
    low: ']',
  }, {
    high: '/',
    regular: '7',
    low: '|',
  }, {
    high: '(',
    regular: '8',
    low: '{',
  }, {
    high: ')',
    regular: '9',
    low: '}',
  }, {
    high: '=',
    regular: '0',
    low: '≠',
  }, {
    high: 'Q',
    regular: 'q',
    low: '«',
  }, {
    high: 'W',
    regular: 'w',
    low: '∑',
  }, {
    high: 'E',
    regular: 'e',
    low: '€',
  },
];

var iId;

function init() {

  // Fix up prefixing
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();
  1;
  bufferLoader = new BufferLoader(
    context, [
      'sounds/alarm.mp3',
      'sounds/bloody.mp3',
      'sounds/haha-williams.mp3',
      'sounds/hello-mr-villiams.mp3',
      'sounds/i-need-some-money-immediately.mp3',
      'sounds/i-realize-that.mp3',
      'sounds/ok-sir.mp3',
      'sounds/post-all-the-letters.mp3',
      'sounds/sooo.mp3',
      'sounds/yes-im-not.mp3',
      'sounds/ouu.mp3',
      'sounds/shh-silence.mp3',
      'sounds/im-not-a-fool.mp3',
    ],
    finishedLoading
  );

  bufferLoader.load();
}

function finishedLoading(bufferList) {

  function start(index, speed) {
    var source = context.createBufferSource();
    source.connect(context.destination);
    source.playbackRate.value = speed;
    source.buffer = bufferList[index];
    source.start(0);
  }

  function play(keyCode) {
    mapping.map(function(value, key) {
      if (keyCode === value.high) {
        start(key, 1.2);
      }

      if (keyCode === value.regular) {
        start(key, 1);
      }

      if (keyCode === value.low) {
        start(key, 0.8);
      }
    });
  }

  function playMobile(keyCode, speed) {

    mapping.map(function(value, key) {

      if (keyCode === value.regular) {
        if (speed === 'slow') {
          start(key, 0.8);
        }else if (speed === 'fast') {
          start(key, 1.2);
        }else {
          start(key, 1);
        }
      }
    });
  }

  document.onkeydown = function(e) {
    document.getElementById('char').value = '';
    document.getElementById('char').focus();
  };

  document.onkeyup = function(e) {
    e.preventDefault();
    var character = document.getElementById('char').value;
    console.log(character);
    play(character);
  };

  var clickTargets = document.getElementsByClassName('clickable');

  for (var i = 0; i < clickTargets.length; i++) {
    clickTargets[i].addEventListener('click', function() {
      play(this.attributes['data-keycode'].value);
    });

    clickTargets[i].addEventListener('touchstart', function(e) {
      e.preventDefault();
      console.log(e);
      offset = e.touches[0].clientY;
      elm = this;
    });

    clickTargets[i].addEventListener('touchmove', function(e) {
      e.preventDefault();
      offsetElm = e.touches[0].clientY - offset;
      if (offsetElm >= 0) {
        elm.setAttribute('style', 'transition: none; transform: rotateX(0deg);');
        elm.children[1].setAttribute('style', 'transition: none; transform: scaleY(0); opacity: 0');
        if (offsetElm <= 30) {
          elm.setAttribute('style', 'transition: none; transform: rotateX(' + 50 * offsetElm / 30 + 'deg);');
          elm.children[2].setAttribute('style', 'transition: none; transform: scaleY(' + offsetElm / 30 + '); opacity:' + 100 / 30 * offsetElm / 100) + ';';
        }else {
          elm.setAttribute('style', 'transition: none; transform: rotateX(50deg);');
          elm.children[2].setAttribute('style', 'transition: none; transform: scaleY(1); opacity: 1');
        }
      }else {
        elm.setAttribute('style', 'transition: none; transform: rotateX(0deg);');
        elm.children[2].setAttribute('style', 'transition: none; transform: translateY(0); opacity: 0');
        if (offsetElm >= -30) {
          elm.setAttribute('style', 'transition: none; transform: rotateX(' + 50 * offsetElm / 30 + 'deg);');
          elm.children[1].setAttribute('style', 'transition: none; transform: scaleY(' + -offsetElm / 30 + '); opacity:' + 100 / 30 * -offsetElm / 100) + ';';
        }else {
          elm.setAttribute('style', 'transition: none; transform: rotateX(50deg);');
          elm.children[1].setAttribute('style', 'transition: none; transform: scaleY(1); opacity: 1');
        }
      }

      console.log(offsetElm);
    });

    clickTargets[i].addEventListener('touchend', function(e) {
      e.preventDefault();
      elm.children[1].setAttribute('style', '');
      elm.children[2].setAttribute('style', '');
      elm.setAttribute('style', '');
      console.log(offsetElm);

      if (offsetElm > 30) {
        playMobile(elm.attributes['data-keycode'].value, 'slow');
      } else if (offsetElm < -30) {
        playMobile(elm.attributes['data-keycode'].value, 'fast');
      } else {
        playMobile(elm.attributes['data-keycode'].value);
      }

      offsetElm = 0;
    });
  }

}
