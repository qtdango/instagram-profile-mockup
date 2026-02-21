//DOMContentLoaded
function initCarousels() {
  document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const dots  = carousel.querySelectorAll('.carousel-dot');
    const slides = carousel.querySelectorAll('.carousel-slide');
    let current = 0;

    function goTo(index) {
      current = Math.max(0, Math.min(slides.length - 1, index));
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    carousel.querySelector('.carousel-prev')?.addEventListener('click', e => {
      e.stopPropagation(); goTo(current - 1);
    });
    carousel.querySelector('.carousel-next')?.addEventListener('click', e => {
      e.stopPropagation(); goTo(current + 1);
    });
  });
}

// ─── PFP MAP ───────────────────────────────────────────────────────────────
// Map usernames to profile picture URLs. Add/change as needed.
const pfpMap = {
  's6toru':      'https://i.pinimg.com/736x/e4/75/32/e4753255239958cebba83fbe1e5cdd09.jpg',
  'suuuguru':    'https://i.imgur.com/33BELKJ.jpeg', // neoclysm on X
  'shokorette':  'https://i.imgur.com/pXOVpl2.jpeg', // verazpberry on tiktok
  'utah1me':     'https://i.imgur.com/z5BfG4R.png', //  mikxyu_ on X
  'tigerdori':   'https://i.imgur.com/qtchLZE.jpeg', // AngryMiloras on X
  'megumii_':    'https://i.imgur.com/0yzlHiV.png?1', // AngryMiloras on X
  'kento_nanami':'https://i.pinimg.com/736x/b1/29/d1/b129d157bc42daf2bf15cbdb07787928.jpg',
  'bl00died.eyez':'https://i.pinimg.com/736x/27/87/f4/2787f479bea666de9f8daf730afb1b41.jpg', // nthndn_ on IG
  'art creds':   'https://i.pinimg.com/736x/1d/ec/e2/1dece2c8357bdd7cee3b15036344faf5.jpg',
  'default':     'https://i.pinimg.com/736x/1d/ec/e2/1dece2c8357bdd7cee3b15036344faf5.jpg',
};

function getPfp(username) {
  return pfpMap[username] || pfpMap['default'];
}

// ─── COMMENT DATA ──────────────────────────────────────────────────────────
// Structure: array of { user, text, time, replies: [{ user, text, time }] }
const commentsData = {
  'post-1': [
    {
      user: 'utah1me', time: '3d',
      text: "who's the baddie on the right 🤤🤤🤤",
      replies: [
        { user: 'shokorette', time: '3d', text: '@utah1me you da real baddie 😖' },
        { user: 'utah1me',    time: '3d', text: '@shokorette stop 😭😭' },
      ]
    },
    {
      user: 'suuuguru', time: '3d',
      text: 'guess who convinced him to post these',
      replies: [
        { user: 's6toru', time: '3d', text: '@suuuguru myself' },
      ]
    },
    { 
      user: 'tigerdori', time: '2d', 
      text: 'sugurus new piercings look so cool!!!!', 
      replies: [] 
    },
    { 
      user: 'art creds', time: '3d', 
      text: 'to k4enyu on ig', 
      replies: [] 
    },
  ],
    'post-2': [
      {
        user: 'suuuguru', time: '2w',
        text: "i didn't hack anyone btw.",
        replies: []              
      },
      {
        user: 'utah1me', time: '2w',
        text: 'chopped ass hoe on the right',
        replies: [
          { user: 's6toru',   time: '2w', text: "@utah1me u dont even follow me and yet you always make sure to comment." },
          { user: 'suuuguru', time: '2w', text: '@utah1me clocked 🤏🏼🤏🏼🤏🏼' },
        ]
      },
        { 
          user: 'tigerdori', time: '1w', 
          text: 'stop ignoring my texts plz :(', 
          replies: [] 
        },
        { 
          user: 'art creds', time: '2w', 
          text: 'to hiikeu on twt', 
          replies: [] 
        },
      ],
  'post-3': [
    {
      user: 'utah1me', time: '1w',
      text: 'yea its only u who has a big back tho',
      replies: [
        { user: 's6toru', time: '1w', text: "@utah1me why do i always catch strays but not shoko and suguru?!" },
        { user: 'utah1me', time: '1w', text: '@s6toru bc ur the easiest target 💀' },
      ]
    },
    { 
      user: 'shokorette', 
      time: '1w', 
      text: "still haven't paid me back", 
      replies: [] 
    },
    {
      user: 'tigerdori', time: '1w',
      text: "so what happened to saying you'd buy me one too?????",
      replies: [
        { user: 'megumii_', time: '1w', text: '@tigerdori he gave it to me instead.' },
        { user: 'tigerdori', time: '1w', text: '@megumii_ WHAT' },
      ]
    },
  ],
  'post-4': [
    { 
      user: 'tigerdori', time: '5d', 
      text: 'so cool!!!', replies: [] },
    {
      user: 'kento_nanami', time: '5d',
      text: 'Is this Switzerland? I was there last month.',
      replies: [
        { user: 's6toru', time: '5d', text: '@kento_nanami dont u have papers 2 grade teach' },
        { user: 'kento_nanami', time: '4d', text: '@s6toru You know I rarely assign anything. Too much to grade.' },
      ]
    },
    { user: 'shokorette', time: '4d', text: 'ugh the 3 of us should go on a ski trip', replies: [
        { user: 'suuuguru', time: '4d', text: '@shokorette i agree. and satoru pays for everything' },
        { user: 's6toru', time: '4d', text: '@suuuguru genuinely what is ur problem?' },
      ] 
    },
  ],
  'post-5': [
    { 
      user: 'suuuguru', time: '6d', 
      text: 'plz stop calling me that', replies: [
        { user: 's6toru', time: '6d', text: '@suuuguru but ur my boo... 😿' },
        { user: 'suuuguru', time: '6d', text: "@s6toru i'm going to block u" },
      ]
    },
    { 
      user: 'shokorette', time: '6d', 
      text: "PSA i'm not friends with these HOMOS", replies: [] },
    { 
      user: 'tigerdori', time: '5d', 
      text: 'satoru when r we going shopping 😔😔😔', replies: [] },
    {
      user: 'bl00died.eyez', time: '5d',
      text: 'Take my brother shopping',
      replies: [
        { user: 's6toru', time: '5d', text: '@bl00died.eyez dude please change ur lameass username' },
        { user: 'bl00died.eyez', time: '5d', text: "@s6toru And who supplies your 'baking' hobby?" },
        { user: 's6toru', time: '5d', text: "@bl00died.eyez i'm sorry." },
      ]
    },
    { 
      user: 'utah1me', time: '4d', 
      text: 'your outfit is ugly.', 
      replies: [
        { user: 'shokorette', time: '4d', text: '@utah1me ikr? we could do better' },
      ] 
    },
  ],
  'post-6': [
    { 
      user: 'tigerdori', time: '3d', 
      text: "don't forget! if i win tonight you owe me ice cream! :))", 
      replies: [
        { user: 'bl00died.eyez', time: '3d', text: "@tigerdori Ill get you another one too." },
        { user: 'tigerdori', time: '3d', text: "@bl00died.eyez you text too serious sometimes, bro" },
    ] 
  },
    { 
      user: 'utah1me', time: '3d', 
      text: "i hope you loose", 
      replies: [
        { user: 's6toru', time: '3d', text: "@utah1me CAN YOU STOP COMMENTING ON MY POSTS" },
    ] 
  },
    { 
      user: 'shokorette', time: '2d', 
      text: "which situationship are you posting this for now?", 
      replies: [
        { user: 'suuuguru', time: '2d', text: "@shokorette probably the one from the bar last night lol" },
      ] 
    },
  ],
};

// ─── RENDER COMMENT SHEET ──────────────────────────────────────────────────
function renderComments(postId) {
  const body = document.getElementById('comment-sheet-body');
  const comments = commentsData[postId] || [];
  body.innerHTML = '';

  if (comments.length === 0) {
    body.innerHTML = '<p style="text-align:center;color:#8e8e8e;font-size:14px;padding:24px 0;">No comments yet.</p>';
    return;
  }

  comments.forEach(comment => {
    const row = document.createElement('div');
    row.className = 'cs-comment-row';

    // Build replies HTML
    let repliesHTML = '';
    if (comment.replies && comment.replies.length > 0) {
      repliesHTML = `<div class="cs-replies">`;
      comment.replies.forEach(reply => {
        repliesHTML += `
          <div class="cs-reply-row">
            <img src="${getPfp(reply.user)}" class="cs-pfp-small" alt="${reply.user}">
            <div class="cs-comment-content">
              <div class="cs-text"><span class="cs-username">${reply.user}</span> ${formatText(reply.text)}</div>
              <div class="cs-meta"><span>${reply.time}</span></div>
            </div>
          </div>`;
      });
      repliesHTML += `</div>`;
    }

    row.innerHTML = `
      <img src="${getPfp(comment.user)}" class="cs-pfp" alt="${comment.user}">
      <div class="cs-comment-content">
        <div class="cs-text"><span class="cs-username">${comment.user}</span> ${formatText(comment.text)}</div>
        <div class="cs-meta"><span>${comment.time}</span></div>
        ${repliesHTML}
      </div>`;

    body.appendChild(row);
  });
}

// Turn @mentions blue
function formatText(text) {
  return text.replace(/(@\w[\w.]*)/g, '<span class="cs-mention">$1</span>');
}

// ─── OPEN / CLOSE SHEET ────────────────────────────────────────────────────
function openCommentSheet(postId) {
  renderComments(postId);
  document.getElementById('comment-sheet-body').scrollTop = 0;
  document.getElementById('comment-overlay').classList.add('active');
  document.getElementById('comment-sheet').classList.add('active');
}

function closeCommentSheet() {
  document.getElementById('comment-overlay').classList.remove('active');
  document.getElementById('comment-sheet').classList.remove('active');
}

// ─── INIT ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  initCarousels();

  // Screen transitions (only for elements with data-screen, excluding comment-btns)
  document.querySelectorAll('[data-screen]').forEach(el => {
    // Skip comment-btn elements — they open the sheet, not a screen
    if (el.classList.contains('comment-btn')) return;
    el.addEventListener('click', function () {
      const targetScreen = this.getAttribute('data-screen');
      showScreen(targetScreen);
    });
  });

  // Back buttons
  document.querySelectorAll('[data-back]').forEach(btn => {
    btn.addEventListener('click', function () {
      closeCommentSheet(); // close sheet if open when navigating back
      const backScreen = this.getAttribute('data-back');
      showScreen(backScreen);
    });
  });

  // Story navigation
  document.querySelectorAll('.story-nav-left').forEach(navLeft => {
    navLeft.addEventListener('click', function () {
      const storyScreen = this.closest('.screen');
      navigateStory(storyScreen, -1);
    });
  });
  document.querySelectorAll('.story-nav-right').forEach(navRight => {
    navRight.addEventListener('click', function () {
      const storyScreen = this.closest('.screen');
      navigateStory(storyScreen, 1);
    });
  });

  // Comment buttons (💬 emoji + "View all comments" links)
  document.querySelectorAll('.comment-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const postId = this.getAttribute('data-post');
      if (postId) openCommentSheet(postId);
    });
  });

  // Close sheet via overlay click or ✕ button
  document.getElementById('comment-overlay').addEventListener('click', closeCommentSheet);
  document.getElementById('comment-close').addEventListener('click', closeCommentSheet);
});

// ─── HELPERS ───────────────────────────────────────────────────────────────
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
    targetScreen.scrollTop = 0;
  }
}

function navigateStory(storyScreen, direction) {
  const slides = storyScreen.querySelectorAll('.story-slide');
  const bars   = storyScreen.querySelectorAll('.story-bar');
  let currentIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
  let newIndex = Math.max(0, Math.min(slides.length - 1, currentIndex + direction));

  slides.forEach(s => s.classList.remove('active'));
  slides[newIndex].classList.add('active');

  bars.forEach((bar, i) => {
    bar.classList.toggle('active', i <= newIndex);
  });
}

function wakePhone() {
  const lockScreen = document.getElementById('lock-screen');
  lockScreen.style.opacity = '0';
  setTimeout(() => { lockScreen.style.display = 'none'; }, 800);
}
