let text = $(".split-text");
let text1 = $(".split1");
let split = new SplitText(text);
let split1 = new SplitText(text1);

//after scroll down build text back to his form
function buildText() {
  $(split.chars).each(function (i) {
    TweenMax.from($(this), 2.5, {
      opacity: split1.chars[i].style.opacity ,
      x: split1.chars[i]._gsTransform.x,
      y: split1.chars[i]._gsTransform.y,
      z: split1.chars[i]._gsTransform.z,
      scale: 0,
      delay: i * 0.01,
      repeat: 0,
    });
  });
}

// make text floating randomly on the screen
function explodeTheText() {
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  $(split1.chars).each(function (i) {
    TweenMax.fromTo(
      $(this),
      5,
      {
        opacity: 0,
        x: random(-1500, 1500),
        y: random(-1500, 1500),
        z: random(-1500, 1500),

        delay: i * 0.01,
        yoyo: true,
        repeat: -1,
        repeatDelay: 0,
      },
      {
        opacity: 0.8,
        x: random(-1500, 1500),
        y: random(-1500, 1500),
        z: random(-1500, 1500),

        delay: i * 0.01,
        yoyo: true,
        repeat: -1,
        repeatDelay: 0,
      }
    );
  });
}

explodeTheText();
let scrollCheck = false

// function that handle stop floating and start build back the text
export function stopFloatingText() {
  TweenMax.killAll(true, false, false, false);
  const t = document.getElementsByName("hide-on-start");
  const o = document.getElementsByName("show-on-start")
  t[0].classList.remove("hide");
  t[0].classList.add("showText");
  t[0].classList.add("showHeaderAnime")
  o[0].classList.add("hide-original")
  buildText();
  setTimeout(() => {
    TweenMax.killAll();
  }, 10000)
}
 document.addEventListener('scroll', ()=>{
     stopFloating()
     scrollCheck = true
})

// check if the text was rebuild 
function stopFloating(){
if(scrollCheck === false){
        setTimeout(() => {
            stopFloatingText();
        }, 1000)

    }
}