/* 電子功德 · 木魚 —— 独立纯净页（vanilla，脱离主站 Vue bundle） */
(function () {
  'use strict';

  var STORAGE_KEY = 'wooden-fish-merit';

  var COLORS = [
    '#d32f2f', '#ff6f00', '#fbc02d', '#7cb342', '#0288d1',
    '#5e35b1', '#c2185b', '#d84315', '#f57f17', '#1976d2', '#4a148c'
  ];

  var blessingTexts = [
    '功德 +1', '財富 +1', '平安 +1', '健康 +1', '智慧 +1', '長壽 +1', '和諧 +1',
    '快樂 +1', '幸福 +1', '自由 +1', '幸福 +1', '漂亮 +1', '帥氣 +1', '偉人 +1',
    '勇氣 +1', '聰明 +1', '聖者 +1', '英雄 +1', '勝利 +1', '成功 +1'
  ];

  var meritCount = 0;
  var isMusicPlaying = false;
  var isSpacePressed = false;

  var meritValueEl = document.getElementById('meritValue');
  var musicBtn = document.getElementById('musicBtn');
  var woodfishContainer = document.getElementById('woodfishContainer');
  var woodfishImg = document.getElementById('woodfishImg');
  var blessingsEl = document.getElementById('blessings');

  var resetModal = document.getElementById('resetModal');
  var dedicateModal = document.getElementById('dedicateModal');
  var successModal = document.getElementById('successModal');
  var dedicateCurrentMerit = document.getElementById('dedicateCurrentMerit');
  var dedicateTargetInput = document.getElementById('dedicateTarget');
  var dedicateAmountInput = document.getElementById('dedicateAmount');
  var successAmountEl = document.getElementById('successAmount');
  var successTargetEl = document.getElementById('successTarget');

  var woodfishSound = new Audio('./woodfish-sound.mp3');
  woodfishSound.preload = 'auto';

  var bgMusic = new Audio('./dbz.mp3');
  bgMusic.loop = true;
  bgMusic.volume = 0.4;
  bgMusic.preload = 'auto';

  function loadMerit() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { meritCount = parseInt(stored, 10) || 0; } catch (e) { meritCount = 0; }
    }
  }

  function saveMerit() {
    localStorage.setItem(STORAGE_KEY, String(meritCount));
  }

  function meritColor() {
    var tier = Math.floor(meritCount / 100);
    return COLORS[Math.min(tier, COLORS.length - 1)];
  }

  function renderMerit() {
    meritValueEl.textContent = String(meritCount);
    meritValueEl.style.color = meritColor();
  }

  function renderMusic() {
    musicBtn.textContent = isMusicPlaying ? '\uD83D\uDD07' : '\uD83C\uDFB5';
    musicBtn.title = isMusicPlaying ? '關閉音樂' : '播放音樂';
  }

  function playSound() {
    woodfishSound.currentTime = 0;
    woodfishSound.load();
    woodfishSound.play().catch(function (e) { console.error('Failed to play sound:', e); });
  }

  function knock() {
    playSound();
    meritCount++;
    saveMerit();
    renderMerit();

    woodfishImg.classList.add('woodfish-active');
    setTimeout(function () { woodfishImg.classList.remove('woodfish-active'); }, 200);

    var text = blessingTexts[Math.floor(Math.random() * blessingTexts.length)];
    var el = document.createElement('div');
    el.className = 'blessing';
    el.textContent = text;
    blessingsEl.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 1000);
  }

  function toggleMusic() {
    isMusicPlaying = !isMusicPlaying;
    if (isMusicPlaying) {
      bgMusic.currentTime = 13; // 从第13秒开始播放
      bgMusic.play().catch(function (e) {
        console.error('Failed to play background music:', e);
        isMusicPlaying = false;
        renderMusic();
      });
    } else {
      bgMusic.pause();
    }
    renderMusic();
  }

  function show(el) { el.classList.add('show'); }
  function hide(el) { el.classList.remove('show'); }

  // 歸零
  function openReset() { show(resetModal); }
  function closeReset() { hide(resetModal); }
  function confirmReset() {
    meritCount = 0;
    saveMerit();
    renderMerit();
    closeReset();
  }

  // 回向
  function openDedicate() {
    if (meritCount === 0) { alert('當前功德為0，無法回向'); return; }
    dedicateCurrentMerit.textContent = String(meritCount);
    dedicateTargetInput.value = '';
    dedicateAmountInput.value = '';
    dedicateAmountInput.max = String(meritCount);
    show(dedicateModal);
    setTimeout(function () { dedicateTargetInput.focus(); }, 300);
  }

  function closeDedicate() {
    hide(dedicateModal);
    dedicateTargetInput.blur();
    dedicateAmountInput.blur();
  }

  function confirmDedicate() {
    var target = dedicateTargetInput.value.trim();
    if (!target) { alert('請輸入回向對象'); return; }
    var amount = parseInt(dedicateAmountInput.value, 10);
    if (!amount || amount <= 0) { alert('請輸入有效的功德數（大於0）'); return; }
    if (amount > meritCount) { alert('回向功德數不能超過當前功德總數'); return; }

    meritCount -= amount;
    saveMerit();
    renderMerit();

    successAmountEl.textContent = String(amount);
    successTargetEl.textContent = target;
    closeDedicate();
    setTimeout(function () { show(successModal); }, 200);
  }

  function closeSuccess() { hide(successModal); }

  // 事件绑定
  woodfishContainer.addEventListener('click', knock);
  musicBtn.addEventListener('click', toggleMusic);
  document.getElementById('resetBtn').addEventListener('click', openReset);
  document.getElementById('resetCancel').addEventListener('click', closeReset);
  document.getElementById('resetConfirm').addEventListener('click', confirmReset);
  document.getElementById('dedicateBtn').addEventListener('click', openDedicate);
  document.getElementById('dedicateCancel').addEventListener('click', closeDedicate);
  document.getElementById('dedicateConfirm').addEventListener('click', confirmDedicate);
  document.getElementById('successClose').addEventListener('click', closeSuccess);

  // 点遮罩关闭
  resetModal.addEventListener('click', function (e) { if (e.target === resetModal) closeReset(); });
  dedicateModal.addEventListener('click', function (e) { if (e.target === dedicateModal) closeDedicate(); });
  successModal.addEventListener('click', function (e) { if (e.target === successModal) closeSuccess(); });

  // 键盘：空格敲击、ESC 关弹窗
  function handleKeyDown(e) {
    if (e.code === 'Space' || e.key === ' ') {
      if (!isSpacePressed) { isSpacePressed = true; e.preventDefault(); }
    }
    if (e.key === 'Escape') {
      if (successModal.classList.contains('show')) closeSuccess();
      else if (dedicateModal.classList.contains('show')) closeDedicate();
      else if (resetModal.classList.contains('show')) closeReset();
    }
  }

  function handleKeyUp(e) {
    if (e.code === 'Space' || e.key === ' ') {
      if (isSpacePressed) { knock(); isSpacePressed = false; }
    }
  }

  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);

  // 初始化
  loadMerit();
  renderMerit();
  renderMusic();
})();
