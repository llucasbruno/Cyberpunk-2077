const menuMbLink = document.querySelector('.menu');
const navmenuMobile = document.querySelector('.navmenu__mobile')
const menuBg = document.querySelector('.bg__menuMb');

const arrowScroll = document.querySelector('.cyber__chevron');

menuMbLink.addEventListener('click', ($e)=> {
    $e.preventDefault()
    navmenuMobile.classList.toggle('open')
    menuBg.classList.toggle('active')
})


//scrool to 



//chavron
function fadeOut() {
    if(window.scrollY >=90) {
        arrowScroll.classList.add('active')
    } else {
        arrowScroll.classList.remove('active')
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}



function rollScroll() {
    let windScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let heightScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (windScroll / heightScroll) * 100;
    document.getElementById('scroll-bar').style.height = scrolled + '%';
    
}

//events
arrowScroll.addEventListener('click', scrollToTop)
window.addEventListener('scroll', fadeOut)
window.addEventListener('scroll', rollScroll)












// add an event listener on the bullets
const allBullets = document.querySelectorAll('.cyber-slider__controls li');//controls li
const bulletsLinks = document.querySelectorAll('.cyber-slider__controls span');//controls span
//
bulletsLinks.forEach((links)=> {
    links.addEventListener('click', (event)=>{
        event.preventDefault()
    })
})

//old code
/*
for (const bullet of allBullets) {
    bullet.addEventListener('click', function (e) {

        const upcomingSlide = document.querySelector(`[data-slideid="${bullet.dataset.slide}"]`);
        const currentSlide = document.querySelector('.cyber-slider__wrapper .active');
        // 
        const currentBullet = document.querySelector('.cyber-slider__controls .current');
        // 
        const slideImage = currentSlide.querySelector('.slide-image');
        const glitchArea = currentSlide.querySelector('.glitch-area');
        const imageHTML = slideImage.outerHTML + slideImage.outerHTML;


        if (bullet !== currentBullet) {
            //  remove the current state of a bullet
            currentBullet.classList.remove('current')
            // add it to the current item
            bullet.classList.add('current');

            // ** Switch the slide
            glitchArea.innerHTML = imageHTML
            // add the glitching class
            currentSlide.classList.add('glitching')
            setTimeout(function () {

                //remove the active state of a slider
                currentSlide.classList.remove('active')

                // remove the glitching class
                glitchArea.innerHTML = '';
                currentSlide.classList.remove('glitching');
                
                upcomingSlide.classList.add('active');
            }, 500)

        }

    })
}

*/



function switchSlides(currentSlide, nextSlide) {
    const slideImage = currentSlide.querySelector('.slide-image');
    const glitchArea = currentSlide.querySelector('.glitch-area');
    const imageHTML = slideImage.outerHTML + slideImage.outerHTML;
  
    glitchArea.innerHTML = imageHTML;
    currentSlide.classList.add('glitching');
  
    setTimeout(function() {
      currentSlide.classList.remove('active');
      glitchArea.innerHTML = '';
      currentSlide.classList.remove('glitching');
      nextSlide.classList.add('active');
    }, 500);
}
  
allBullets.forEach(bullet => {
    bullet.addEventListener('click', function(e) {
      const currentSlide = document.querySelector('.cyber-slider__wrapper .active');
      const currentBullet = document.querySelector('.cyber-slider__controls .current');
      const nextSlide = document.querySelector(`[data-slideid="${bullet.dataset.slide}"]`);
        console.log('clicou')
      if (bullet !== currentBullet) {
        currentBullet.classList.remove('current');
        bullet.classList.add('current');
        switchSlides(currentSlide, nextSlide);
      }
    });
});






let bar = document.getElementById("bar");
let hiddenTexts = document.getElementsByClassName("hidden");
console.log(hiddenTexts)



setOpacity(0);

dragElement(bar);

function setOpacity(offset) {
  for (let i = 0; i < hiddenTexts.length; i++) {
    
    let op = 1 - Math.abs(offset - hiddenTexts[i].offsetLeft) / 200;
    console.log(op);
    hiddenTexts[i].style.opacity = op;
  }
}

function dragElement(elmnt) {
  let dist = 0;
  let currentPos = 0;

  elmnt.onmousedown = dragMouseDown;

  

  function dragMouseDown(e) {
    e.preventDefault();
    currentPos = e.clientX;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();

    dist = currentPos - e.clientX;
    currentPos = e.clientX;

    let updatedPos = elmnt.offsetLeft - dist;
    let min = -80;
    let max = 480;

    if (updatedPos < min) {
        updatedPos = min;
    } else if (updatedPos > max) {
        updatedPos = max;
    }
    elmnt.style.left = updatedPos + "px";

    setOpacity(elmnt.offsetLeft);

    document.documentElement.style.setProperty("--cursorX", elmnt.style.left);
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}











class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

const phrases = [
  'Lks Bruno,',
  'Develorper / cc',
  'tools\ related to Cyber',
  'Security',
  '&',
  'Cyber / Computer',
  '&',
  'Ethical Hacking \ { * }',
  'an initiative to help secure the Cyber',
  'by Lks bruno',
  '@lks'
]

const el = document.querySelector('.text-change')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 2000)
  })
  counter = (counter + 1) % phrases.length
}

next();



//acordeon buttons

document.querySelectorAll('.acordeon__content').forEach((item)=> {
  item.style.maxHeight = 0;
})

let acordeonButotns = document.querySelectorAll('.acordeon__button');




acordeonButotns.forEach((button)=> {
  button.addEventListener('click', ()=> {
    
    const acordeonContent = button.nextElementSibling;

    
    button.classList.toggle('active');
    button.classList.toggle('acordeon__button-active')

    if(button.classList.contains('active')) {
      acordeonContent.style.maxHeight = acordeonContent.scrollHeight + 'px';
     

    } else {
      acordeonContent.style.maxHeight = 0;
    }

  })
})



//light img mouseover
const lightBody = document.querySelector('.light__body')

lightBody.addEventListener('mousemove', (e) => {
  const x = e.clientX; //take mouse X moviment
  const y = e.clientY; //take mouse Y moviment
  const light = document.querySelector('.light');
  light.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, #000 30%)`;
});