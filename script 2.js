const reasons = [
  "YOU NEVER MAKE ME FEEL BAD FOR BEING QUIET 🤍",
  "you understand that silence is not a lack of love",
  "YOU NEVER RUSH ME TO TALK ON CALL 🫶🏻",
  "you let me communicate in the way that feels safest",
  "you don’t take my quietness personally",
  "YOU CELEBRATE EVERY LITTLE MESSAGE I SEND 🥺",
  "you make texting feel like a real conversation",
  "YOU WAIT FOR MY WORDS WITHOUT MAKING IT WEIRD",
  "you give me time, and that is everything",
  "you make long distance feel less lonely 🌙",
  "YOU MAKE A SCREEN FEEL LIKE A HUG",
  "you are patient with the pauses",
  "you never turn my selective mutism into a joke",
  "YOU LOVE THE VERSION OF ME THAT TYPES IN ALL CAPS 😭",
  "you make small replies feel like enough",
  "you never guilt-trip me for going quiet",
  "YOU LET ME SHOW LOVE WITHOUT SAYING IT OUT LOUD",
  "you notice the effort behind my messages",
  "you make every little check-in feel special",
  "YOU ARE MY SAFE PERSON, NO DEBATE 🫵🏻",
  "you understand that my silence has a story",
  "YOU NEVER ASK ME TO PERFORM BEING OKAY",
  "you make room for me to breathe",
  "you make ‘take your time’ sound like love",
  "YOU MAKE ME FEEL CHOSEN EVEN FROM FAR AWAY 💌",
  "you make countdowns and time zones worth it",
  "you turn distance into something we can handle",
  "YOU REMEMBER THE LITTLE THINGS I TYPE ONCE",
  "you make my notifications feel like tiny butterflies",
  "YOU’RE LITERALLY MY FAVORITE PERSON TO TEXT 😭",
  "you make ordinary chats feel like a date",
  "you send comfort through a screen like it is a superpower",
  "YOU NEVER MAKE ME FEEL TOO MUCH OR NOT ENOUGH",
  "you understand when I need quiet company",
  "you keep choosing me on the quiet days",
  "YOU ARE SO GENTLE WITH MY BRAIN 🥺",
  "you make me feel safe enough to try",
  "you notice when I am trying, even when I do not say it",
  "YOU MAKE EVERY LITTLE BRAVE MOMENT FEEL HUGE",
  "you do not need a perfect call to know we are real",
  "you make voice calls feel like an option, not a test",
  "YOU LET LOVE BE SOFT, NOT SCARY 🤍",
  "you never compare me to louder people",
  "you make my words feel worth waiting for",
  "YOU UNDERSTAND THAT TEXTING IS MY LOVE LANGUAGE",
  "you make me laugh at my phone like a loser",
  "you are the best part of my screen time",
  "YOU ARE MY FAVORITE GOOD MORNING TEXT ☀️",
  "you make goodnight feel like a promise",
  "YOU MAKE THE TIME ZONES FEEL WORTH IT 🌍",
  "you are always worth the double text",
  "you make waiting for your reply feel exciting, not scary",
  "YOU GIVE THE BEST REASSURANCE",
  "you make my overthinking brain exhale",
  "you never make affection feel like a competition",
  "YOU ARE A GREEN FLAG FACTORY 🚩➡️💚",
  "you make me feel seen, not just read",
  "YOU REMEMBER THE TINY DETAILS",
  "you are kind even when you are tired",
  "you make distance feel like a plot point, not the ending",
  "YOU HYPE ME UP LIKE I AM THE MAIN CHARACTER ✨",
  "you make me feel pretty from the inside out",
  "you bring peace to my chaos",
  "YOU ARE MY COMFORT PERSON, OFFICIALLY",
  "you make me feel worth loving",
  "YOU MAKE EVERY SONG HIT HARDER 🎶",
  "you turn the smallest updates into a whole event",
  "YOU MAKE OUR LITTLE ROUTINES FEEL ROMANTIC",
  "you make me want to save every message",
  "you are the person I want to tell everything to",
  "YOU NEVER MAKE MY FEELINGS FEEL CRINGE",
  "you give the kind of patience people write about",
  "YOU MAKE ORDINARY DAYS FEEL LIKE LORE",
  "you make me feel lucky on a daily basis",
  "YOU ARE MY FAVORITE PLOT TWIST",
  "you make me want to be brave in tiny steps",
  "you love me without needing a perfect explanation",
  "YOU MAKE ME FEEL LIKE I CAN HANDLE THINGS",
  "you are my safest place to land",
  "YOU LET ME BE WEIRD IN PEACE 😭",
  "you have the most comforting energy",
  "YOU MAKE MY INNER CHILD FEEL SO HAPPY",
  "you always make room for my feelings",
  "YOU MAKE ME SMILE AT MY PHONE LIKE A LOSER",
  "you never ask me to shrink myself",
  "YOU ARE SO EASY TO ROOT FOR",
  "you make every hello feel worth the wait",
  "YOU ARE MY FAVORITE PERSON IN EVERY TIME ZONE",
  "you love me in a way that helps me love myself",
  "YOU MAKE MY HEART DO EMBARRASSING CARTWHEELS 💗",
  "you make me feel understood without a full explanation",
  "YOU ARE THE PERSON I WANT BESIDE ME FOR ALL THE LORE",
  "you make every goodbye feel worth the hello",
  "YOU ARE MY FOREVER FAVORITE TEAMMATE",
  "you are somehow even cuter when you are not trying",
  "YOU MAKE MY WORLD FEEL A LITTLE BRIGHTER",
  "you make forever sound kind of perfect",
  "YOU ARE THE BEST THING MY LIFE DID NOT SEE COMING",
  "you choose me in all the little ways",
  "I LOVE YOU BECAUSE YOU FEEL LIKE HOME, EVEN FROM FAR AWAY 🏠🤍"
];

const giftMessages = {
  camera: "This camera is for documenting every serve, every silly face, and every moment where you forgot you were being cute. main character behavior only.",
  tea: "A cozy tea date voucher: unlimited yapping, warm drinks, and me listening to the same story like it is brand new. very premium. very us.",
  star: "You are my certified lucky star. Rare drop, impossible to replace, permanently pinned to my heart. honestly, the universe was cooking.",
  voucher: "This forever pass gets you unlimited hugs, forehead kisses, emotional support, and one girlfriend who is absolutely not going anywhere. no expiration date."
};

const reasonsGrid = document.querySelector('#reasons-grid');
reasons.forEach((reason, index) => {
  const card = document.createElement('article');
  card.className = 'reason-card';
  card.innerHTML = `<span class="reason-number">${String(index + 1).padStart(2, '0')}</span><span class="reason-text">${reason}</span>`;
  reasonsGrid.appendChild(card);
});

const toast = document.querySelector('#toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2400);
}

const targetMessages = {
  songs: 'the soundtrack is ready — choose a song for us ♫',
  gifts: 'four tiny gifts, zero shipping fees ♡',
  flowers: 'a whole field of reasons is waiting for you ✿',
  letter: 'opening the letter... maybe grab a tissue 🥺',
  end: 'the picnic is over, but the love is very much not ♡'
};

const slides = [...document.querySelectorAll('.slide')];
const slideDots = document.querySelector('#slide-dots');
const slideCounter = document.querySelector('#slide-counter');
const navLinks = [...document.querySelectorAll('.topnav a')];
let activeSlideIndex = 0;

slides.forEach((slide) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.className = 'slide-dot';
  dot.dataset.target = slide.dataset.slide;
  dot.setAttribute('aria-label', `Go to ${slide.dataset.label}`);
  slideDots.appendChild(dot);
});

function goToSlide(target, updateHash = true) {
  const nextIndex = typeof target === 'number'
    ? target
    : slides.findIndex((slide) => slide.dataset.slide === target);
  if (nextIndex < 0 || nextIndex >= slides.length) return;

  activeSlideIndex = nextIndex;
  const activeSlide = slides[activeSlideIndex];
  slides.forEach((slide, index) => {
    const isActive = index === activeSlideIndex;
    slide.classList.toggle('is-active', isActive);
    slide.setAttribute('aria-hidden', String(!isActive));
    slide.setAttribute('tabindex', isActive ? '0' : '-1');
    if (isActive) slide.scrollTop = 0;
  });

  slideDots.querySelectorAll('.slide-dot').forEach((dot, index) => {
    const isCurrent = index === activeSlideIndex;
    dot.classList.toggle('is-current', isCurrent);
    dot.setAttribute('aria-current', isCurrent ? 'page' : 'false');
  });
  slideCounter.textContent = `${String(activeSlideIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  navLinks.forEach((link) => link.classList.toggle('is-current', link.dataset.target === activeSlide.dataset.slide));

  if (updateHash && window.location.hash !== `#${activeSlide.dataset.slide}`) {
    try {
      window.history.replaceState(null, '', `#${activeSlide.dataset.slide}`);
    } catch {
      window.location.hash = activeSlide.dataset.slide;
    }
  }
}

function moveSlide(direction) {
  const nextIndex = (activeSlideIndex + direction + slides.length) % slides.length;
  goToSlide(nextIndex);
}

document.querySelectorAll('[data-target]').forEach((control) => {
  control.addEventListener('click', (event) => {
    if (control.matches('a')) event.preventDefault();
    const targetId = control.dataset.target;
    goToSlide(targetId);
    if (control.classList.contains('scene-object')) showToast(targetMessages[targetId]);
  });
});

document.querySelector('.brand').addEventListener('click', (event) => {
  event.preventDefault();
  goToSlide('home');
});
document.querySelector('#prev-slide').addEventListener('click', () => moveSlide(-1));
document.querySelector('#next-slide').addEventListener('click', () => moveSlide(1));
window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') moveSlide(-1);
  if (event.key === 'ArrowRight') moveSlide(1);
});
window.addEventListener('hashchange', () => {
  const target = window.location.hash.slice(1);
  if (target === 'top' || !target) goToSlide('home', false);
  else if (slides.some((slide) => slide.dataset.slide === target)) goToSlide(target, false);
});

const initialTarget = window.location.hash.slice(1);
goToSlide(slides.some((slide) => slide.dataset.slide === initialTarget) ? initialTarget : 'home', false);

document.querySelectorAll('.gift-card').forEach((card) => {
  card.addEventListener('click', () => {
    const key = card.dataset.gift;
    const reveal = document.querySelector('#gift-reveal');
    document.querySelector('#gift-reveal-text').textContent = giftMessages[key];
    document.querySelectorAll('.gift-card').forEach((item) => item.classList.remove('is-open'));
    card.classList.add('is-open');
    reveal.classList.add('is-visible');
    showToast('gift opened — no take-backs, you are loved ✦');
  });
});
