(() => {
  const REPO = "revo667/cecen-client-releases";
  const LANG_KEY = "cecenLang";
  const PLATFORMS = ["windows", "mac", "linux"];
  const PLATFORM_LABEL = {
    mac: "macOS",
    windows: "Windows",
    linux: "Linux",
  };
  const PLATFORM_NOTE = {
    mac: "Apple Silicon · Intel",
    windows: "Windows 10 / 11",
    linux: "x86_64",
  };
  const ASSET_NAME = {
    mac: "CecenClient-macos.dmg",
    windows: "CecenClient-windows.zip",
    linux: "CecenClient-linux.tar.xz",
  };

  const COPY = {
    en: {
      back: "HOME",
      eyebrow: "DDNet client",
      title: "Cecen Client for most Tryhard DDNet players",
      lead: "The fastest inputs in DDNet, the first social profiles and friends, and Spotify listen along, on top of everything DDNet already does.",
      trust: ["Free", "macOS · Windows · Linux", "Updates itself", "Keeps your DDNet settings"],
      downloadFor: (p) => `Download for ${p}`,
      download: "Download",
      allReleases: "All releases",
      loading: "Fetching the latest release…",
      noRelease: "Download from GitHub",
      version: "Version",
      showcase: "Inside",
      shots: [
        {
          id: "menu",
          src: "./cecen/menu.jpg",
          label: "Menu",
          desc: "A quiet start menu that gets you into a game in one click.",
        },
        {
          id: "inputs",
          src: "./cecen/inputs.jpg",
          label: "Inputs",
          desc: "667, Fast, Saiko, Cloud and Meow input prediction with a tunable offset.",
        },
        {
          id: "settings",
          src: "./cecen/settings.jpg",
          label: "Cecen UI",
          desc: "Every setting grouped into categories, with search.",
        },
      ],
      stats: [
        ["5", "input modes"],
        ["1st", "social profiles in DDNet"],
        ["Live", "Spotify listen along"],
        ["3", "platforms"],
      ],
      whyEyebrow: "Why Cecen",
      whyTitle: "Built for players who take every frame seriously.",
      pillars: [
        {
          tag: "Cecen Social",
          title: "The first social profiles and friends in DDNet",
          body: "Every Cecen Client player has a profile: picture, bio, connections and badges, shown on the scoreboard card and in Cecen Social.",
          points: [
            "See which friends are online, where they play and what they listen to",
            "Link Discord, GitHub, Steam, X and more",
            "Search finds styled names too: “noval” finds Nᴏᴠᴀʟ",
            "Private profile with one switch",
          ],
        },
        {
          tag: "Inputs",
          title: "Best Fast Inputs in DDNet",
          body: "Your tee reacts before the server answers. Pick the prediction that fits your hand and tune how far ahead it plays.",
          points: [
            "667, Fast, Saiko, Cloud and Meow modes",
            "Prediction offset in ticks, Auto Margin",
            "Input Debounce and Sub-Tick aiming",
            "Snap Tap for instant left/right switching",
          ],
        },
        {
          tag: "Spotify",
          title: "Take fully control of your Spotify in-game",
          body: "Control your music, playlists, music controls and listen along with your friends",
          points: [
            "Follows the song, skips and seeks of the friend you join",
            "Use Spotify menu in-game and never lose your focus for skip or choose music",
            "Music HUD with visualizer and synced lyrics",
            "Full control of your playlists, music.",
          ],
        },
      ],
      socialDemo: {
        online: "Online · KoG",
        listening: "Listening along",
        friends: [
          ["rain cakir", "Black_Widow"],
          ["Nᴏᴠᴀʟ", "Micksee"],
        ],
      },
      inputsDemo: { offset: "Prediction offset", ahead: "ahead of the server" },
      listenDemo: { host: "revo667", you: "you", synced: "in sync", song: "Now playing" },
      featuresEyebrow: "Everything else",
      featuresTitle: "Everything DDNet does, and a lot more.",
      features: [
        {
          title: "Cecen UI",
          body: "A settings hub with categories and search, themed checkboxes, sliders and colors, and a HUD editor to drag, drop and resize every module.",
          image: "./cecen/settings.jpg",
        },
        {
          title: "Music player",
          body: "A HUD player for Spotify and your system media, with a visualizer and synced lyrics.",
        },
        {
          title: "Chat media",
          body: "Photos and GIFs from chat links render inline, with a domain filter.",
        },
        {
          title: "Visual effects",
          body: "Weather, weapon glow, hook effects, 3D particles and animated menus.",
        },
        {
          title: "Race tools",
          body: "Finish prediction, a local practice world and quick command slots.",
        },
        {
          title: "Optimizer",
          body: "Turn off particles and quads, add FPS fog, and keep frame times flat.",
        },
        {
          title: "Discord Rich Presence",
          body: "Your server, map and song on your Discord profile.",
        },
        {
          title: "Keystrokes",
          body: "A Classic or Minecraft style keyboard and mouse overlay for your clips.",
        },
        {
          title: "Mini games",
          body: "Snake, Chess, Sudoku, Minesweeper and more for the waiting room.",
        },
      ],
      faqTitle: "FAQ",
      faq: [
        { q: "Is it free?", a: "Yes, completely free." },
        {
          q: "Does it lag?",
          a: "With beta reports on, and within what DDNet allows, the stutters, freezes and jitter you get in game are reported to us, and problems on the client side are fixed fast. You can turn reports off in Cecen Client > Others > Beta.",
        },
        {
          q: "Will I lose my DDNet settings?",
          a: "No. Cecen Client uses the same DDNet folder, so your settings, binds, skins and friends stay.",
        },
        {
          q: "Do I need Spotify Premium for listen along?",
          a: "Yes, Spotify only lets Premium accounts control playback through Spotify Connect. The music HUD and lyrics work without it.",
        },
        {
          q: "Who can see my profile?",
          a: "Cecen Client players see it on the scoreboard and in Cecen Social. Make it private and they only see your name and picture.",
        },
        {
          q: "Which systems does it run on?",
          a: "macOS 11 or later (Apple Silicon and Intel), Windows 10 and 11 (64-bit), and Linux x86_64.",
        },
        { q: "Does it update itself?", a: "Yes, new versions download and install on start." },
      ],
      ctaTitle: "Ready to play?",
      ctaBody: "Download Cecen Client and join 667 on Discord.",
      discord: "Join the Discord",
    },
    tr: {
      back: "ANA SAYFA",
      eyebrow: "DDNet client",
      title: "Cecen Client for most Tryhard DDNet players",
      lead: "DDNet'in en hızlı input'ları, ilk sosyal profiller ve arkadaşlar, Spotify ile birlikte dinleme; DDNet'in yaptığı her şeyin üstüne.",
      trust: ["Ücretsiz", "macOS · Windows · Linux", "Kendini günceller", "DDNet ayarların korunur"],
      downloadFor: (p) => `${p} için indir`,
      download: "İndir",
      allReleases: "Tüm sürümler",
      loading: "Son sürüm alınıyor…",
      noRelease: "GitHub'dan indir",
      version: "Sürüm",
      showcase: "İçeride",
      shots: [
        {
          id: "menu",
          src: "./cecen/menu.jpg",
          label: "Menü",
          desc: "Tek tıkla oyuna sokan sade bir başlangıç menüsü.",
        },
        {
          id: "inputs",
          src: "./cecen/inputs.jpg",
          label: "Input'lar",
          desc: "667, Fast, Saiko, Cloud ve Meow input tahmini, ayarlanabilir ofsetle.",
        },
        {
          id: "settings",
          src: "./cecen/settings.jpg",
          label: "Cecen UI",
          desc: "Tüm ayarlar kategorilere ayrılmış, aramayla.",
        },
      ],
      stats: [
        ["5", "input modu"],
        ["İlk", "DDNet'te sosyal profil"],
        ["Canlı", "Spotify listen along"],
        ["3", "platform"],
      ],
      whyEyebrow: "Neden Cecen",
      whyTitle: "Her kareyi ciddiye alan oyuncular için.",
      pillars: [
        {
          tag: "Cecen Social",
          title: "DDNet'te ilk sosyal profil ve arkadaş özellikleri",
          body: "Her Cecen Client oyuncusunun bir profili var: resim, bio, bağlantılar ve rozetler; skor tablosu kartında ve Cecen Social'da görünür.",
          points: [
            "Hangi arkadaşın çevrimiçi, nerede oynuyor, ne dinliyor gör",
            "Discord, GitHub, Steam, X ve daha fazlasını bağla",
            "Arama süslü isimleri de bulur: “noval” Nᴏᴠᴀʟ'ı bulur",
            "Tek tuşla gizli profil",
          ],
        },
        {
          tag: "Input'lar",
          title: "DDNet'teki en iyi Fast Input'lar",
          body: "Tee'n sunucu cevap vermeden tepki verir. Eline uyan tahmini seç, ne kadar ileride oynayacağını ayarla.",
          points: [
            "667, Fast, Saiko, Cloud ve Meow modları",
            "Tick cinsinden tahmin ofseti, Auto Margin",
            "Input Debounce ve Sub-Tick aiming",
            "Anında sağ/sol geçişi için Snap Tap",
          ],
        },
        {
          tag: "Spotify",
          title: "Müziğinin full kontrolunu eline al",
          body: "Müziğini çalma listelerini oyun içinde kontrol, et arkadaşlarınla birlikte dinle",
          points: [
            "Katıldığın arkadaşın şarkısını, geçişlerini ve sarmalarını takip eder",
            "Oyun içinden Spotify menüsünü kullan ve müzik değiştirmek için bir daha asla odağını kaybetme",
            "Visualizer ve senkron sözlerle müzik HUD'u",
            "Calma listelerinin ve müziğinin tam kontrolü",
          ],
        },
      ],
      socialDemo: {
        online: "Çevrimiçi · KoG",
        listening: "Birlikte dinliyor",
        friends: [
          ["rain cakir", "Black_Widow"],
          ["Nᴏᴠᴀʟ", "Micksee"],
        ],
      },
      inputsDemo: { offset: "Tahmin ofseti", ahead: "sunucudan önde" },
      listenDemo: { host: "revo667", you: "sen", synced: "senkron", song: "Şimdi çalıyor" },
      featuresEyebrow: "Dahası",
      featuresTitle: "DDNet'in yaptığı her şey, ve çok daha fazlası.",
      features: [
        {
          title: "Cecen UI",
          body: "Kategoriler ve aramayla ayar merkezi; temalı kutucuklar, kaydırıcılar ve renkler; her modülü sürükleyip boyutlandırabildiğin HUD editörü.",
          image: "./cecen/settings.jpg",
        },
        {
          title: "Müzik çalar",
          body: "Spotify ve sistem medyası için HUD çalar; visualizer ve senkron sözlerle.",
        },
        {
          title: "Chat medya",
          body: "Sohbetteki fotoğraf ve GIF linkleri yerinde açılır, alan adı filtresiyle.",
        },
        {
          title: "Görsel efektler",
          body: "Hava durumu, silah parlaması, hook efektleri, 3D parçacıklar ve animasyonlu menüler.",
        },
        {
          title: "Race araçları",
          body: "Bitiş tahmini, yerel pratik dünyası ve hızlı komut slotları.",
        },
        {
          title: "Optimizer",
          body: "Parçacıkları ve quad'ları kapat, FPS sisi ekle, kare sürelerini düz tut.",
        },
        {
          title: "Discord Rich Presence",
          body: "Sunucun, haritan ve şarkın Discord profilinde.",
        },
        {
          title: "Keystrokes",
          body: "Kliplerin için Classic ya da Minecraft tarzı klavye ve mouse göstergesi.",
        },
        {
          title: "Mini oyunlar",
          body: "Bekleme odası için Snake, Satranç, Sudoku, Mayın Tarlası ve dahası.",
        },
      ],
      faqTitle: "SSS",
      faq: [
        { q: "Ücretsiz mi?", a: "Evet, tamamen ücretsiz." },
        {
          q: "Lag yapıyor mu?",
          a: "Beta raporları açıksa, DDNet'in izin verdiği süreçler dahilinde oyundaki lagların, donmaların ve jitter'ların bize bildirilir; client tarafındaki sorunlar hızla çözülür. Raporları Cecen Client > Others > Beta'dan kapatabilirsin.",
        },
        {
          q: "DDNet ayarlarımı kaybeder miyim?",
          a: "Hayır. Cecen Client aynı DDNet klasörünü kullanır; ayarların, bind'ların, skin'lerin ve arkadaşların yerinde kalır.",
        },
        {
          q: "Listen along için Spotify Premium gerekir mi?",
          a: "Evet, Spotify Connect ile çalmayı yalnızca Premium hesaplar kontrol edebiliyor. Müzik HUD'u ve sözler Premium olmadan da çalışır.",
        },
        {
          q: "Profilimi kimler görür?",
          a: "Cecen Client oyuncuları skor tablosunda ve Cecen Social'da görür. Gizli yaparsan sadece adını ve resmini görürler.",
        },
        {
          q: "Hangi sistemlerde çalışır?",
          a: "macOS 11 ve sonrası (Apple Silicon ve Intel), Windows 10 ve 11 (64-bit) ve Linux x86_64.",
        },
        { q: "Kendini günceller mi?", a: "Evet, yeni sürümler açılışta inip kurulur." },
      ],
      ctaTitle: "Oynamaya hazır mısın?",
      ctaBody: "Cecen Client'ı indir ve Discord'da 667'ye katıl.",
      discord: "Discord'a katıl",
    },
  };

  function checkSvg(extraClass = "") {
    return `<svg viewBox="0 0 16 16" aria-hidden="true" class="size-4 shrink-0 text-violet-400 ${extraClass}"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }

  const CROWN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5 fill-violet-300 text-violet-300"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>`;
  const CODE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="size-2.5 text-white"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;

  function detectPlatform(ua, platformHint = "") {
    const s = `${platformHint} ${ua}`.toLowerCase();
    if (/android/.test(s)) return null;
    if (/iphone|ipad|ipod/.test(s)) return null;
    if (/mac|darwin/.test(s)) return "mac";
    if (/win/.test(s)) return "windows";
    if (/linux|x11|ubuntu|debian|cros/.test(s)) return "linux";
    return null;
  }

  function formatSize(bytes) {
    if (!Number.isFinite(bytes) || bytes <= 0) return "";
    const mb = bytes / (1024 * 1024);
    if (mb >= 1) return `${mb.toFixed(1)} MB`;
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }

  function pickCecenAsset(assets, platform) {
    return assets.find((a) => a.name === ASSET_NAME[platform]) ?? null;
  }

  // Pointer state shared by Atmosphere & RainEffect
  const pointer = {
    x: -9999,
    y: -9999,
    sx: -9999,
    sy: -9999,
    active: false,
    fine: window.matchMedia("(pointer: fine)").matches,
    movedAt: 0,
  };

  function initPointer() {
    const onMove = (e) => {
      if (!pointer.active) {
        pointer.sx = e.clientX;
        pointer.sy = e.clientY;
      }
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
      pointer.movedAt = performance.now();
    };
    const onLeave = () => {
      pointer.active = false;
    };
    const onUp = (e) => {
      if (e.pointerType === "touch") pointer.active = false;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("pointercancel", onUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);
  }

  // State
  let lang = "en";
  const savedLang = localStorage.getItem(LANG_KEY);
  if (savedLang === "tr" || savedLang === "en") {
    lang = savedLang;
  } else if (navigator.language && navigator.language.toLowerCase().startsWith("tr")) {
    lang = "tr";
  }

  const hint = navigator.userAgentData?.platform ?? navigator.platform ?? "";
  const platform = detectPlatform(navigator.userAgent, hint);
  let release = null;
  let releaseState = "loading";

  // Showcase state
  let showcaseActive = 0;
  let showcasePaused = false;
  let showcaseTick = 0;
  let showcaseTimer = null;
  const SHOWCASE_DURATION = 5000;

  // Demo state
  let socialStep = 0;
  let inputsStep = 0;
  let listenProgress = 18;
  const INPUT_MODES = ["667", "Fast", "Saiko", "Cloud", "Meow"];
  const INPUT_TICKS = [1.5, 1.0, 1.25, 1.75, 1.5];

  function scheduleShowcase() {
    clearTimeout(showcaseTimer);
    if (showcasePaused) return;
    showcaseTimer = setTimeout(() => {
      const shots = COPY[lang].shots;
      showcaseActive = (showcaseActive + 1) % shots.length;
      showcaseTick += 1;
      renderShowcase();
      scheduleShowcase();
    }, SHOWCASE_DURATION);
  }

  function renderShowcase() {
    const t = COPY[lang];
    const shots = t.shots;
    const tabsEl = document.getElementById("showcase-tabs");
    const descEl = document.getElementById("showcase-desc");
    if (tabsEl) {
      tabsEl.innerHTML =
        `<span class="mr-2 hidden font-mono text-[11px] tracking-widest text-white/35 uppercase sm:inline">${t.showcase}</span>` +
        shots
          .map(
            (s, i) => `
          <button
            type="button"
            data-shot-btn="${i}"
            class="relative overflow-hidden rounded-full border px-4 py-1.5 text-[13px] transition-colors ${
              i === showcaseActive
                ? "border-white/25 bg-white/[0.08] text-white"
                : "border-white/10 text-white/50 hover:text-white"
            }"
          >
            ${s.label}
            ${
              i === showcaseActive && !showcasePaused
                ? `<span class="absolute inset-x-0 bottom-0 h-px origin-left bg-violet-400" style="animation: showcase-progress ${SHOWCASE_DURATION}ms linear forwards"></span>`
                : ""
            }
          </button>`
          )
          .join("");
      tabsEl.querySelectorAll("[data-shot-btn]").forEach((btn) => {
        btn.addEventListener("click", () => {
          showcaseActive = Number(btn.getAttribute("data-shot-btn"));
          showcasePaused = true;
          renderShowcase();
          scheduleShowcase();
        });
      });
    }
    document.querySelectorAll("[data-shot-img]").forEach((img) => {
      const idx = Number(img.getAttribute("data-shot-img"));
      if (shots[idx]) img.setAttribute("alt", shots[idx].label);
      if (idx === showcaseActive) {
        img.classList.remove("scale-[1.015]", "opacity-0");
        img.classList.add("scale-100", "opacity-100");
      } else {
        img.classList.remove("scale-100", "opacity-100");
        img.classList.add("scale-[1.015]", "opacity-0");
      }
    });
    if (descEl) {
      descEl.textContent = shots[showcaseActive]?.desc ?? "";
    }
  }

  function renderDownloadHtml(compact) {
    const t = COPY[lang];
    const releasesUrl = release?.pageUrl ?? `https://github.com/${REPO}/releases/latest`;
    if (releaseState === "loading") {
      return `<p class="mt-10 text-[13px] text-white/40">${t.loading}</p>`;
    }
    if (releaseState === "empty" || !release) {
      return `
        <div class="mt-10">
          <a
            href="${releasesUrl}"
            target="_blank"
            rel="noreferrer noopener"
            class="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-[15px] font-medium text-black transition hover:bg-white/90"
          >
            ${t.noRelease} <span aria-hidden="true">↗</span>
          </a>
        </div>`;
    }

    const primary = platform ? pickCecenAsset(release.assets, platform) : null;
    const others = PLATFORMS.filter((p) => p !== platform)
      .map((p) => ({ platform: p, asset: pickCecenAsset(release.assets, p) }))
      .filter((x) => x.asset);

    return `
      <div class="mt-10 flex flex-col items-center gap-4">
        <div class="flex flex-wrap items-center justify-center gap-3">
          ${
            primary && platform
              ? `<a
                  href="${primary.url}"
                  class="group inline-flex h-12 items-center gap-2.5 rounded-full bg-white px-7 text-[15px] font-medium text-black shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_40px_rgba(139,92,246,0.35)] transition hover:bg-white/90"
                >
                  <span aria-hidden="true" class="transition-transform group-hover:translate-y-0.5">↓</span>
                  ${t.downloadFor(PLATFORM_LABEL[platform])}
                </a>`
              : `<a
                  href="${releasesUrl}"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-[15px] font-medium text-black transition hover:bg-white/90"
                >
                  ${t.download} <span aria-hidden="true">↗</span>
                </a>`
          }
          ${
            !compact
              ? others
                  .map(
                    ({ platform: p, asset }) => `
                  <a
                    href="${asset.url}"
                    class="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-6 text-[14px] text-white/80 transition hover:border-white/35 hover:text-white"
                  >
                    ${PLATFORM_LABEL[p]}
                    <span class="text-[12px] text-white/35">${PLATFORM_NOTE[p]}</span>
                  </a>`
                  )
                  .join("")
              : ""
          }
        </div>
        <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[11px] tracking-wide text-white/35">
          ${release.version ? `<span>${t.version} ${release.version}</span>` : ""}
          ${primary && formatSize(primary.size) ? `<span>${formatSize(primary.size)}</span>` : ""}
          ${primary && platform ? `<span>${PLATFORM_NOTE[platform]}</span>` : ""}
          <a
            href="${releasesUrl}"
            target="_blank"
            rel="noreferrer noopener"
            class="transition-colors hover:text-white/70"
          >
            ${t.allReleases} ↗
          </a>
        </div>
      </div>`;
  }

  function renderDownloads() {
    const heroEl = document.getElementById("download-hero");
    const ctaEl = document.getElementById("download-cta");
    if (heroEl) heroEl.innerHTML = renderDownloadHtml(false);
    if (ctaEl) ctaEl.innerHTML = renderDownloadHtml(true);
    const eyebrowEl = document.getElementById("hero-eyebrow");
    if (eyebrowEl) {
      const prefix = release?.version ? `${release.version.replace(/^v?/i, "v")} · ` : "";
      eyebrowEl.textContent = `${prefix}${COPY[lang].eyebrow}`;
    }
  }

  function renderSocialDemoHtml() {
    const t = COPY[lang].socialDemo;
    return `
      <div id="social-demo-root" class="flex h-full flex-col justify-center gap-2.5 px-4">
        <div class="overflow-hidden rounded-lg border border-white/10 bg-black">
          <div class="h-6 bg-gradient-to-r from-violet-600/80 to-violet-400/60"></div>
          <div class="flex items-center gap-3 px-3 pb-2.5">
            <div class="-mt-3 size-10 shrink-0 rounded-full border-[3px] border-black bg-gradient-to-br from-violet-400/60 to-white/10"></div>
            <div class="min-w-0 pt-1">
              <div class="flex items-center gap-1.5 text-[13px] font-semibold text-white">
                revo667
                ${CROWN_SVG}
                <span class="grid h-3.5 w-[18px] place-items-center rounded-[4px] bg-violet-500">
                  ${CODE_SVG}
                </span>
              </div>
              <div class="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/50">
                <span class="size-1.5 rounded-full bg-emerald-400"></span>
                <span id="social-demo-online">${t.online}</span>
              </div>
            </div>
          </div>
        </div>
        ${t.friends
          .map(
            ([name, map], i) => `
          <div class="flex items-center justify-between rounded-md border border-white/[0.06] bg-black px-3 py-1.5 text-[11px]">
            <span class="flex items-center gap-2 text-white/80">
              <span data-social-dot="${i}" class="size-1.5 rounded-full transition-colors duration-500 ${
                i === socialStep ? "bg-emerald-400" : "bg-white/20"
              }"></span>
              ${name}
            </span>
            <span data-social-status="${i}" class="font-mono transition-colors duration-500 ${
              i === socialStep ? "text-violet-300" : "text-white/25"
            }">
              ${i === socialStep ? (i === 0 ? map : t.listening) : "·"}
            </span>
          </div>`
          )
          .join("")}
      </div>`;
  }

  function updateSocialDemo() {
    const t = COPY[lang].socialDemo;
    t.friends.forEach(([, map], i) => {
      const dot = document.querySelector(`[data-social-dot="${i}"]`);
      const status = document.querySelector(`[data-social-status="${i}"]`);
      if (dot) {
        dot.classList.toggle("bg-emerald-400", i === socialStep);
        dot.classList.toggle("bg-white/20", i !== socialStep);
      }
      if (status) {
        status.classList.toggle("text-violet-300", i === socialStep);
        status.classList.toggle("text-white/25", i !== socialStep);
        status.textContent = i === socialStep ? (i === 0 ? map : t.listening) : "·";
      }
    });
  }

  function renderInputsDemoHtml() {
    const t = COPY[lang].inputsDemo;
    const ticks = INPUT_TICKS[inputsStep];
    return `
      <div class="flex h-full flex-col justify-center gap-4 px-4">
        <div class="grid grid-cols-5 overflow-hidden rounded-md border border-white/10 bg-black font-mono text-[10px]">
          ${INPUT_MODES.map(
            (m, i) => `
            <span data-input-mode="${i}" class="py-1.5 text-center transition-colors duration-500 ${
              i === inputsStep ? "bg-violet-500 text-white" : "text-white/40"
            }">${m}</span>`
          ).join("")}
        </div>
        <div>
          <div class="flex items-center justify-between font-mono text-[10px] text-white/45">
            <span>${t.offset}</span>
            <span id="inputs-demo-ticks" class="text-white/80">${ticks.toFixed(2)} ticks</span>
          </div>
          <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              id="inputs-demo-bar"
              class="h-full rounded-full bg-violet-400 transition-all duration-700 ease-out"
              style="width: ${(ticks / 2) * 100}%"
            ></div>
          </div>
        </div>
        <div class="flex items-baseline justify-center gap-2">
          <span id="inputs-demo-ms" class="font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
            −${Math.round(ticks * 20)} ms
          </span>
          <span class="text-[11px] text-white/40">${t.ahead}</span>
        </div>
      </div>`;
  }

  function updateInputsDemo() {
    const ticks = INPUT_TICKS[inputsStep];
    INPUT_MODES.forEach((_, i) => {
      const el = document.querySelector(`[data-input-mode="${i}"]`);
      if (el) {
        el.classList.toggle("bg-violet-500", i === inputsStep);
        el.classList.toggle("text-white", i === inputsStep);
        el.classList.toggle("text-white/40", i !== inputsStep);
      }
    });
    const ticksEl = document.getElementById("inputs-demo-ticks");
    const barEl = document.getElementById("inputs-demo-bar");
    const msEl = document.getElementById("inputs-demo-ms");
    if (ticksEl) ticksEl.textContent = `${ticks.toFixed(2)} ticks`;
    if (barEl) barEl.style.width = `${(ticks / 2) * 100}%`;
    if (msEl) msEl.textContent = `−${Math.round(ticks * 20)} ms`;
  }

  function renderListenDemoHtml() {
    const t = COPY[lang].listenDemo;
    const youVal = Math.max(0, listenProgress - 0.4);
    return `
      <div class="flex h-full flex-col justify-center gap-3 px-4">
        <div class="flex items-center gap-3">
          <div class="grid size-10 shrink-0 place-items-center rounded-md bg-gradient-to-br from-emerald-500/70 to-violet-500/60 text-[16px] text-white">
            ♫
          </div>
          <div class="min-w-0">
            <div class="text-[10px] tracking-widest text-white/40 uppercase">${t.song}</div>
            <div class="truncate text-[13px] font-medium text-white">Cecen · 667 Mix</div>
          </div>
        </div>
        <div class="flex items-center gap-3 font-mono text-[10px]">
          <span class="w-14 shrink-0 truncate text-white/60">${t.host}</span>
          <div class="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
            <div id="listen-bar-host" class="h-full rounded-full bg-emerald-400" style="width: ${listenProgress}%"></div>
          </div>
        </div>
        <div class="flex items-center gap-3 font-mono text-[10px]">
          <span class="w-14 shrink-0 truncate text-white/60">${t.you}</span>
          <div class="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
            <div id="listen-bar-you" class="h-full rounded-full bg-emerald-400" style="width: ${youVal}%"></div>
          </div>
        </div>
        <div class="flex items-center justify-center gap-1.5 font-mono text-[10px] text-emerald-400">
          <span class="size-1.5 animate-pulse rounded-full bg-emerald-400"></span>
          ${t.synced} ±0.1 s
        </div>
      </div>`;
  }

  function updateListenDemo() {
    const hostBar = document.getElementById("listen-bar-host");
    const youBar = document.getElementById("listen-bar-you");
    if (hostBar) hostBar.style.width = `${listenProgress}%`;
    if (youBar) youBar.style.width = `${Math.max(0, listenProgress - 0.4)}%`;
  }

  let revealObserver = null;
  function observeReveals() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.remove("translate-y-6", "opacity-0");
              e.target.classList.add("translate-y-0", "opacity-100");
              revealObserver.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 }
      );
    }
    document.querySelectorAll("[data-reveal]:not([data-reveal-bound])").forEach((el) => {
      el.setAttribute("data-reveal-bound", "1");
      revealObserver.observe(el);
    });
  }

  function renderPage() {
    const t = COPY[lang];
    document.documentElement.lang = lang;

    // Lang buttons
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      const code = btn.getAttribute("data-lang-btn");
      if (code === lang) {
        btn.className = "rounded-full px-2.5 py-1 transition-colors bg-white text-black";
      } else {
        btn.className = "rounded-full px-2.5 py-1 transition-colors text-white/40 hover:text-white";
      }
    });

    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setText("nav-back", t.back);
    setText("hero-lead", t.lead);
    setText("why-eyebrow", t.whyEyebrow);
    setText("why-title", t.whyTitle);
    setText("features-eyebrow", t.featuresEyebrow);
    setText("features-title", t.featuresTitle);
    setText("faq-title", t.faqTitle);
    setText("cta-title", t.ctaTitle);
    setText("cta-body", t.ctaBody);
    setText("cta-discord", t.discord);

    // Trust
    const trustEl = document.getElementById("hero-trust");
    if (trustEl) {
      trustEl.innerHTML = t.trust
        .map((x) => `<span class="flex items-center gap-2">${checkSvg()}${x}</span>`)
        .join("");
    }

    // Downloads
    renderDownloads();

    // Showcase
    renderShowcase();

    // Stats
    const statsEl = document.getElementById("stats-grid");
    if (statsEl) {
      statsEl.innerHTML = t.stats
        .map(
          ([n, l]) => `
          <div class="bg-black px-4 py-5 text-center sm:px-6">
            <div class="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white">${n}</div>
            <div class="mt-1 text-[13px] text-white/45">${l}</div>
          </div>`
        )
        .join("");
    }

    // Pillars
    const pillarsEl = document.getElementById("pillars-grid");
    if (pillarsEl) {
      pillarsEl.innerHTML = t.pillars
        .map((p, i) => {
          const demoHtml =
            i === 0
              ? renderSocialDemoHtml()
              : i === 1
                ? renderInputsDemoHtml()
                : renderListenDemoHtml();
          return `
            <div data-reveal style="transition-delay: ${i * 90}ms" class="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-0 opacity-100">
              <div data-spotlight class="spotlight-card group overflow-hidden rounded-xl border border-white/10 bg-neutral-950/90 transition-colors duration-300 hover:border-white/20 h-full">
                <div class="relative h-full">
                  <div class="flex h-full flex-col p-6">
                    <div class="mb-6 h-44 overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.02]">
                      ${demoHtml}
                    </div>
                    <span class="font-mono text-[11px] tracking-widest text-violet-300/80 uppercase">${p.tag}</span>
                    <h2 class="mt-2 text-xl font-semibold tracking-tight text-white">${p.title}</h2>
                    <p class="mt-3 text-[14px] leading-relaxed text-white/55">${p.body}</p>
                    <ul class="mt-5 space-y-2 border-t border-white/[0.06] pt-5">
                      ${p.points
                        .map(
                          (pt) => `
                        <li class="flex items-start gap-2.5 text-[13px] text-white/70">
                          ${checkSvg("mt-0.5")}
                          ${pt}
                        </li>`
                        )
                        .join("")}
                    </ul>
                  </div>
                </div>
              </div>
            </div>`;
        })
        .join("");
    }

    // Features
    const featuresEl = document.getElementById("features-grid");
    if (featuresEl) {
      featuresEl.innerHTML = t.features
        .map(
          (f, i) => `
          <div data-reveal style="transition-delay: ${(i % 3) * 80}ms" class="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-0 opacity-100 ${
            f.image ? "md:col-span-2 md:row-span-2" : ""
          }">
            <div data-spotlight class="spotlight-card group overflow-hidden rounded-xl border border-white/10 bg-neutral-950/90 transition-colors duration-300 hover:border-white/20 h-full">
              <div class="relative h-full">
                <div class="p-6">
                  ${
                    f.image
                      ? `<div class="mb-5 overflow-hidden rounded-lg border border-white/[0.08]">
                          <img src="${f.image}" alt="" loading="lazy" class="aspect-[1600/814] w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.02]" />
                        </div>`
                      : ""
                  }
                  <h3 class="text-[17px] font-semibold tracking-tight text-white">${f.title}</h3>
                  <p class="mt-2 text-[14px] leading-relaxed text-white/55">${f.body}</p>
                </div>
              </div>
            </div>
          </div>`
        )
        .join("");
    }

    // FAQ
    const faqEl = document.getElementById("faq-list");
    if (faqEl) {
      faqEl.innerHTML = t.faq
        .map(
          (f) => `
          <details class="group py-5">
            <summary class="flex cursor-pointer list-none items-center justify-between gap-6 text-[15px] font-medium text-white [&::-webkit-details-marker]:hidden">
              ${f.q}
              <span class="grid size-6 shrink-0 place-items-center rounded-full border border-white/15 text-white/50 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p class="mt-3 pr-10 text-[14px] leading-relaxed text-white/55">${f.a}</p>
          </details>`
        )
        .join("");
    }

    observeReveals();
  }

  // Atmosphere (beams, blobs, pointer spotlight, spark canvas, ripples, grain)
  function initAtmosphere() {
    const BEAMS = [
      { left: 0.5, width: 62, color: "oklch(0.98 0 0 / 15%)", follow: 0.07, sway: 15, delay: 0 },
      { left: 0.14, width: 58, color: "oklch(0.86 0.01 260 / 11%)", follow: 0.04, sway: 21, delay: -7 },
      { left: 0.86, width: 58, color: "oklch(0.86 0.01 260 / 11%)", follow: 0.045, sway: 19, delay: -12 },
      { left: 0.32, width: 44, color: "oklch(0.92 0 0 / 7%)", follow: 0.028, sway: 25, delay: -3 },
      { left: 0.68, width: 44, color: "oklch(0.92 0 0 / 7%)", follow: 0.032, sway: 23, delay: -9 },
    ];
    const MAX_TILT = 38;
    const NEAR_RADIUS = 340;
    const GRAIN =
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

    const root = document.getElementById("atmosphere-root");
    const canvas = document.getElementById("atmosphere-canvas");
    const ripples = document.getElementById("atmosphere-ripples");
    const grain = document.getElementById("atmosphere-grain");
    if (grain) grain.style.backgroundImage = GRAIN;
    if (!root || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const beamEls = BEAMS.map((b) => {
      const outer = document.createElement("div");
      outer.style.position = "absolute";
      outer.style.top = "-10vh";
      outer.style.left = `${b.left * 100}%`;
      outer.style.width = `${b.width}vw`;
      outer.style.height = "135vh";
      outer.style.transformOrigin = "50% 0%";
      outer.style.transform = "translateX(-50%) rotate(var(--a, 0deg))";

      const inner = document.createElement("div");
      inner.style.position = "absolute";
      inner.style.inset = "0";
      inner.style.transformOrigin = "50% 0%";
      inner.style.background = `conic-gradient(from 168deg at 50% 0%, transparent 0deg, ${b.color} 12deg, transparent 24deg)`;
      inner.style.maskImage = "radial-gradient(ellipse 55% 78% at 50% 0%, black 12%, transparent 76%)";
      inner.style.webkitMaskImage = "radial-gradient(ellipse 55% 78% at 50% 0%, black 12%, transparent 76%)";
      inner.style.filter = "blur(16px)";
      inner.style.animation = `beam-sway ${b.sway}s ease-in-out ${b.delay}s infinite`;

      outer.appendChild(inner);
      root.appendChild(outer);
      return outer;
    });

    const addBlob = (pos, color, anim) => {
      const d = document.createElement("div");
      d.style.position = "absolute";
      d.style.width = "58vmax";
      d.style.height = "58vmax";
      d.style.borderRadius = "9999px";
      d.style.background = `radial-gradient(circle, ${color} 0%, transparent 65%)`;
      d.style.animation = anim;
      Object.assign(d.style, pos);
      root.appendChild(d);
    };
    addBlob({ top: "-22vmax", left: "-18vmax" }, "oklch(0.6 0 0 / 7%)", "drift-a 26s ease-in-out infinite");
    addBlob({ bottom: "-26vmax", right: "-18vmax" }, "oklch(0.7 0.01 260 / 5%)", "drift-b 32s ease-in-out infinite");

    const litLayer = document.createElement("div");
    litLayer.className = "absolute inset-0 transition-opacity duration-700";
    litLayer.style.opacity = "var(--lit, 0)";
    litLayer.style.background =
      "radial-gradient(260px circle at var(--sx) var(--sy), oklch(0.9 0.005 260 / 8%), transparent 65%), radial-gradient(70px circle at var(--px) var(--py), oklch(0.95 0.04 300 / 7%), transparent 70%)";
    root.appendChild(litLayer);

    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    const angles = BEAMS.map(() => 0);
    const sparks = [];
    let width = 0;
    let height = 0;
    let lastSeen = -1;
    let canvasDirty = false;

    const distanceToRect = (x, y, r) => {
      const dx = Math.max(r.left - x, 0, x - r.right);
      const dy = Math.max(r.top - y, 0, y - r.bottom);
      return Math.hypot(dx, dy);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawSparks = () => {
      if (!sparks.length) {
        if (canvasDirty) {
          ctx.clearRect(0, 0, width, height);
          canvasDirty = false;
        }
        return;
      }
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life -= 1;
        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.97;
        s.vy = s.vy * 0.97 + 0.012;
        const k = s.life / s.max;
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
        glow.addColorStop(0, `rgba(255, 255, 255, ${0.95 * k})`);
        glow.addColorStop(0.35, `rgba(200, 206, 218, ${0.45 * k})`);
        glow.addColorStop(1, "rgba(160, 166, 180, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
      canvasDirty = true;
    };

    const lightCards = () => {
      const x = pointer.x;
      const y = pointer.y;
      document.querySelectorAll("[data-spotlight]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.bottom < 0 || r.top > height) return;
        const near = pointer.active ? Math.max(0, 1 - distanceToRect(x, y, r) / NEAR_RADIUS) : 0;
        el.style.setProperty("--mx", `${x - r.left}px`);
        el.style.setProperty("--my", `${y - r.top}px`);
        el.style.setProperty("--near", near.toFixed(3));
      });
    };

    const tick = () => {
      requestAnimationFrame(tick);
      const calm = still.matches;
      const ease = calm ? 1 : 0.14;

      if (pointer.active) {
        pointer.sx += (pointer.x - pointer.sx) * ease;
        pointer.sy += (pointer.y - pointer.sy) * ease;
      }

      root.style.setProperty("--px", `${pointer.x}px`);
      root.style.setProperty("--py", `${pointer.y}px`);
      root.style.setProperty("--sx", `${pointer.sx}px`);
      root.style.setProperty("--sy", `${pointer.sy}px`);
      root.style.setProperty("--lit", pointer.active ? "1" : "0");

      BEAMS.forEach((b, i) => {
        const el = beamEls[i];
        if (!el) return;
        let target = 0;
        if (pointer.active) {
          const ox = b.left * width;
          const oy = -0.1 * height;
          const deg = (-Math.atan2(pointer.sx - ox, pointer.sy - oy) * 180) / Math.PI;
          target = Math.max(-MAX_TILT, Math.min(MAX_TILT, deg));
        }
        const current = angles[i] ?? 0;
        const next = calm ? target : current + (target - current) * b.follow;
        angles[i] = next;
        el.style.setProperty("--a", `${next.toFixed(2)}deg`);
      });

      if (pointer.movedAt !== lastSeen) {
        lastSeen = pointer.movedAt;
        lightCards();
      }

      drawSparks();
    };

    const onDown = (e) => {
      if (!ripples || still.matches) return;
      const ring = document.createElement("span");
      ring.className = "light-ripple";
      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
      ring.addEventListener("animationend", () => ring.remove());
      ripples.appendChild(ring);
      for (let i = 0; i < 14; i++) {
        const angle = (i / 14) * Math.PI * 2 + Math.random() * 0.4;
        const speed = 1.4 + Math.random() * 2.2;
        const max = 30 + Math.random() * 30;
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: max,
          max,
          r: 0.7 + Math.random() * 1.3,
        });
      }
    };

    resize();
    requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("transitionend", lightCards, { passive: true });
    window.addEventListener("scroll", lightCards, { passive: true });
  }

  // RainEffect (lit = true, tone = violet)
  function initRain() {
    const canvas = document.getElementById("rain-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const LIGHT_RADIUS = 140;
    const [r, g, b] = [178, 132, 255];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let drops = [];
    let frame = 0;

    const makeDrops = () => {
      const count = Math.floor((width * height) / 9000);
      drops = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        len: 10 + Math.random() * 22,
        speed: 2.3 + Math.random() * 3.6,
        opacity: 0.12 + Math.random() * 0.45,
      }));
    };

    const paint = (advance) => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";
      const glow = pointer.active;
      for (const d of drops) {
        let k = 0;
        let dx = 0;
        let dist = 0;
        if (glow) {
          dx = d.x - pointer.sx;
          dist = Math.hypot(dx, d.y + d.len / 2 - pointer.sy);
          if (dist < LIGHT_RADIUS) k = 1 - dist / LIGHT_RADIUS;
        }
        ctx.beginPath();
        ctx.strokeStyle = k
          ? `rgba(${r + (255 - r) * k}, ${g + (255 - g) * k}, ${b + (255 - b) * k}, ${Math.min(1, d.opacity + k * 0.75)})`
          : `rgba(${r}, ${g}, ${b}, ${d.opacity})`;
        ctx.lineWidth = 1.1 + k * 0.9;
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 1.2, d.y + d.len);
        ctx.stroke();

        if (!advance) continue;
        d.y += d.speed;
        d.x -= 0.15;
        if (k > 0 && dist > 0) d.x += (dx / dist) * k * k * 3.2;
        if (d.y > height) {
          d.y = -d.len;
          d.x = Math.random() * width;
        }
      }
    };

    const draw = () => {
      paint(true);
      frame = requestAnimationFrame(draw);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      if (!reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(draw);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeDrops();
      paint(false);
    };

    resize();
    start();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", start);
    reducedMotion.addEventListener("change", start);
  }

  // Fetch latest release
  async function loadLatestRelease() {
    try {
      const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
        headers: { Accept: "application/vnd.github+json" },
      });
      if (!res.ok) throw new Error("Failed");
      const json = await res.json();
      release = {
        version: json.tag_name ?? json.name ?? "",
        publishedAt: json.published_at ?? "",
        pageUrl: json.html_url ?? `https://github.com/${REPO}/releases/latest`,
        assets: (json.assets ?? [])
          .filter((a) => a.name && a.browser_download_url)
          .map((a) => ({
            name: a.name,
            url: a.browser_download_url,
            size: Number(a.size ?? 0),
          })),
      };
      releaseState = release.assets.length ? "ready" : "empty";
    } catch {
      releaseState = "empty";
    }
    renderDownloads();
  }

  // Init
  initPointer();
  initAtmosphere();
  initRain();
  renderPage();
  scheduleShowcase();
  loadLatestRelease();

  // Language switcher bindings
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-lang-btn");
      if (next === "tr" || next === "en") {
        lang = next;
        localStorage.setItem(LANG_KEY, next);
        renderPage();
      }
    });
  });

  // Showcase hover pause
  const showcaseContainer = document.getElementById("showcase-container");
  if (showcaseContainer) {
    showcaseContainer.addEventListener("mouseenter", () => {
      showcasePaused = true;
      renderShowcase();
      scheduleShowcase();
    });
    showcaseContainer.addEventListener("mouseleave", () => {
      showcasePaused = false;
      renderShowcase();
      scheduleShowcase();
    });
  }

  // Demo timers
  setInterval(() => {
    socialStep = (socialStep + 1) % 2;
    updateSocialDemo();
  }, 1800);

  setInterval(() => {
    inputsStep = (inputsStep + 1) % INPUT_MODES.length;
    updateInputsDemo();
  }, 1400);

  setInterval(() => {
    listenProgress = listenProgress >= 92 ? 12 : listenProgress + 1.2;
    updateListenDemo();
  }, 120);
})();
