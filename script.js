document.addEventListener("DOMContentLoaded", function() {
  // ==== 1つ目のスクリプト内容 ====

  const lines = [
    { name: "丸ノ内線", icon: "icon_marunouchi.png", train: "img_m.png", width: "60%", height: "24px", history: [
        { date: "04月15日", time: "18:36", section: "丸ノ内線", reason: "信号故障" },
        { date: "04月14日", time: "22:21", section: "池袋 ～ 茗荷谷", reason: "安全確認" },
        { date: "04月13日", time: "09:56", section: "大手町(丸の内)", reason: "車両点検" },
        { date: "04月12日", time: "10:30", section: "中野富士見町", reason: "車両点検" }
      ]},
    { name: "銀座線", icon: "icon_ginza.png", train: "img_g.png", width: "50%", height: "22px", history: [
        { date: "04月15日", time: "18:36", section: "銀座線", reason: "車両点検" },
        { date: "04月14日", time: "22:21", section: "大手町(丸の内)", reason: "車両点検" },
        { date: "04月13日", time: "09:56", section: "大手町(丸の内)", reason: "車両点検" },
        { date: "04月12日", time: "10:30", section: "大手町(丸の内)", reason: "車両点検" }
      ]},
    { name: "日比谷線", icon: "icon_hibiya.png", train: "img_h.png", width: "77%", height: "32px", history: [
        { date: "04月15日", time: "18:36", section: "日比谷線", reason: "車両点検" },
        { date: "04月14日", time: "22:21", section: "大手町(丸の内)", reason: "車両点検" },
        { date: "04月13日", time: "09:56", section: "大手町(丸の内)", reason: "車両点検" },
        { date: "04月12日", time: "10:30", section: "大手町(丸の内)", reason: "車両点検" }
      ]},
    { name: "東西線", icon: "icon_tozai.png", train: "img_t.png", width: "106%", height: "31px", history: [
        { date: "04月15日", time: "18:36", section: "西船橋", reason: "進路確認" },
        { date: "04月14日", time: "22:21", section: "西船橋", reason: "安全確認" },
        { date: "04月13日", time: "09:56", section: "西船橋", reason: "進路確認" },
        { date: "04月12日", time: "10:30", section: "西船橋", reason: "安全確認" }
      ]},
    { name: "千代田線", icon: "icon_chiyoda.png", train: "img_c.png", width: "110%", height: "32px", history: [
        { date: "04月15日", time: "18:36", section: "大手町(丸の内)", reason: "車両点検" },
        { date: "04月14日", time: "22:21", section: "湯島 ～ 綾瀬", reason: "車両点検" },
        { date: "04月13日", time: "09:56", section: "北千住 ～ 綾瀬", reason: "車両点検" },
        { date: "04月12日", time: "10:30", section: "代々木公園", reason: "停止位置修正" }
      ]},
    { name: "有楽町線", icon: "icon_yurakucho.png", train: "img_y.png", width: "134%", height: "40px", history: [
        { date: "04月15日", time: "18:36", section: "有楽町線", reason: "車両点検" },
        { date: "04月14日", time: "22:21", section: "大手町(丸の内)", reason: "車両点検" },
        { date: "04月13日", time: "09:56", section: "大手町(丸の内)", reason: "車両点検" },
        { date: "04月12日", time: "10:30", section: "大手町(丸の内)", reason: "車両点検" }
      ]},
    { name: "半蔵門線", icon: "icon_hanzomon.png", train: "img_z.png", width: "105%", height: "32px", history: [
        { date: "04月15日", time: "18:36", section: "東急線 長津田駅", reason: "車両点検" },
        { date: "04月14日", time: "22:21", section: "永田町", reason: "お客様対応" },
        { date: "04月13日", time: "09:56", section: "永田町", reason: "安全確認" },
        { date: "04月12日", time: "10:30", section: "渋谷 ～ 押上", reason: "車両点検" }
      ]},
    { name: "南北線", icon: "icon_namboku.png", train: "img_n.png", width: "737px", height: "29px", history: [
        { date: "04月15日", time: "18:36", section: "南北線", reason: "車両点検" },
        { date: "04月14日", time: "22:21", section: "大手町(丸の内)", reason: "車両点検" },
        { date: "04月13日", time: "09:56", section: "大手町(丸の内)", reason: "車両点検" },
        { date: "04月12日", time: "10:30", section: "大手町(丸の内)", reason: "車両点検" }
      ]},
    { name: "副都心線", icon: "icon_fukutoshin.png", train: "img_y.png", width: "100%", height: "30px", history: [
        { date: "04月15日", time: "18:36", section: "副都心線", reason: "車両点検" },
        { date: "04月14日", time: "22:21", section: "大手町(丸の内)", reason: "車両点検" },
        { date: "04月13日", time: "09:56", section: "大手町(丸の内)", reason: "車両点検" },
        { date: "04月12日", time: "10:30", section: "大手町(丸の内)", reason: "車両点検" }
      ]},
  ];

  const randomLine = lines[Math.floor(Math.random() * lines.length)];
  const trainElement = document.querySelector(".train");

  document.querySelector(".title-box img").src = `https://www.tokyometro.jp/library/common/img/route/${randomLine.icon}`;
  document.querySelector(".title").textContent = `${randomLine.name} 運行情報`;
  document.title = `運行情報：${randomLine.name} | 帝都鉄道`;
  trainElement.style.backgroundImage = `url('https://www.tokyometro.jp/library/common/img/train/${randomLine.train}')`;
  trainElement.style.width = randomLine.width;
  trainElement.style.height = randomLine.height;

  const tableBody = document.querySelector("table tbody");
  tableBody.innerHTML = "";
  randomLine.history.forEach(entry => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.date}</td>
      <td>${entry.time}</td>
      <td>${entry.section}</td>
      <td>${entry.reason}</td>
    `;
    tableBody.appendChild(row);
  });


  // ==== 2つ目のスクリプト内容 ====

  let startButton = document.getElementById('startButton');
  let stopButton = document.getElementById('stopButton');
  let speedControl = document.getElementById('speedControl');
  let speedValue = document.getElementById('speedValue');
  let startSounds = ["C02.m4a", "C04.m4a", "C06.m4a", "C13.m4a", "C17.m4a"];
  let stopSounds = ["stop.m4a"];
  let currentAudio = null;

  // 速度初期値（秒）
  let currentSpeed = 10;
  // .train要素は先に取得済み
  // もしtrainElementで使いたければ以下を統一可
  let train = trainElement;

  // ボタンの状態を更新
  function updateButtonState() {
    let isRunning = getComputedStyle(train).animationPlayState === 'running';
    startButton.disabled = isRunning;
    stopButton.disabled = !isRunning;
    speedControl.disabled = isRunning; // 走行中はスライダー無効化
  }

  // 音声再生関数
  function playRandomSound(soundArray) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    let randomIndex = Math.floor(Math.random() * soundArray.length);
    currentAudio = new Audio(soundArray[randomIndex]);
    currentAudio.play();
  }

  // スタートボタンイベント
  startButton.addEventListener('click', () => {
    train.style.animationDuration = `${currentSpeed}s`;
    train.style.animationPlayState = 'running';
    updateButtonState();
    playRandomSound(startSounds);
  });

  // ストップボタンイベント
  stopButton.addEventListener('click', () => {
    train.style.animationPlayState = 'paused';
    updateButtonState();
    playRandomSound(stopSounds);
  });

  // スライダー input イベント
  speedControl.addEventListener('input', (event) => {
    currentSpeed = event.target.value;
    speedValue.textContent = `${currentSpeed}s`;

    if (getComputedStyle(train).animationPlayState === 'running') {
      train.style.animationDuration = `${currentSpeed}s`;
    }
  });

  // スライダー操作中の特殊処理（アニメーション一時停止など）
  speedControl.addEventListener('input', (event) => {
    if (train.style.animationPlayState === 'paused') {
      // 停車中はスライダー操作してもanimationを変えず、left位置も変えない
      speedValue.textContent = `${event.target.value}s`;
      return;
    }
    let speed = event.target.value;
    train.style.animationDuration = `${speed}s`;
    speedValue.textContent = `${speed}s`;
    train.style.animation = 'none';
  });

  // スライダー変更確定時
  speedControl.addEventListener('change', () => {
    if (train.style.animationPlayState === 'paused') {
      // 停車中はアニメーション再開しない
      return;
    }
    train.style.animation = `moveTrain ${speedControl.value}s linear infinite`;
    updateButtonState();
  });

  // 初期状態でボタン制御を反映
  updateButtonState();

});
