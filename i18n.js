(function () {
  var STORAGE_KEY = 'cpf_lang';

  var translations = {
    en: {
      // Shared
      'lang.en': 'EN',
      'lang.zh': '中文',

      // index.html
      'index.title': 'Sincen Games - Indie Game Development Team',
      'index.metaDesc': 'Sincen Games - Indie Game Development Team. Creating fun and engaging casual games for Android and iOS platforms.',
      'index.subtitle': 'Indie Game Development Team',
      'index.aboutTitle': 'About Us',
      'index.about1': 'We are a small indie game development team focused on creating fun, engaging, and high-quality casual games for players around the world.',
      'index.about2': 'We specialize in combining classic arcade gameplay mechanics with modern game design principles to deliver unique gaming experiences that are easy to pick up but hard to put down.',
      'index.about3': 'Our mission is to bring joy and entertainment to players through innovative mobile games that can be enjoyed anytime, anywhere.',
      'index.gamesTitle': 'Our Games',
      'index.gameName': 'Coin Pusher Frenzy',
      'index.gameEnglish': '',
      'index.gameNameAlt': 'Coin Pusher Frenzy',
      'index.gameDesc': 'A casual strategy game that fuses classic arcade coin pusher with exciting Roguelike deck building!',
      'index.viewDetails': 'View Game Details →',
      'index.contactTitle': 'Contact',
      'index.emailLabel': 'Email:',

      // coin-pusher-game-home.html
      'home.title': 'Coin Pusher Frenzy',
      'home.brandName': 'Coin Pusher Frenzy',
      'home.brandEnglish': '',
      'home.metaDesc': 'Coin Pusher Frenzy is a casual mobile game that combines classic arcade coin pusher physics with Roguelike deck building strategy. Compete on Google Play Games leaderboards, play with friends, and sync progress with cloud save.',
      'home.back': '← Back to Home',
      'home.logoAlt': 'Coin Pusher Frenzy Logo',
      'home.aboutTitle': 'About Coin Pusher Frenzy',
      'home.aboutIntro': '<strong>Coin Pusher Frenzy</strong> is a mobile game application designed for casual gaming entertainment. It brings the classic arcade coin pusher experience to your smartphone, combined with innovative Roguelike deck building mechanics.',
      'home.purposeTitle': 'App Purpose',
      'home.purposeBody': 'The purpose of Coin Pusher Frenzy is to provide players with a fun, engaging casual gaming experience that combines the satisfying physics of coin pusher machines with strategic deck building gameplay. Players can enjoy quick gaming sessions while progressively unlocking new items and strategies.',
      'home.googleTitle': 'Google Play Games Services and User Data',
      'home.googleIntro': '<strong>Coin Pusher Frenzy</strong> uses Google Play Games Services so players can sign in with their Google account. We request Google-related permissions only to provide the following features:',
      'home.googleLeaderboards': '<strong>Leaderboards</strong> – Use your Google Play Games player profile (including your Play Games nickname) to submit scores and display rankings.',
      'home.googleFriends': '<strong>Friends</strong> – With your permission, access your Google Play Games friends list so you can share progress, compare scores, or play socially with friends.',
      'home.googleCloud': '<strong>Cloud Save</strong> – Store and restore game progress through Google Play Games Saved Games (stored in the app\'s private Google Drive app data area).',
      'home.googleAnalytics': 'During gameplay, the Application may also collect gameplay and user behavior data (for example, session activity, feature usage, and progress-related events). This data is used for game analytics to understand how the game is played and to help improve game balance, stability, and overall player experience.',
      'home.googlePrivacy': 'Google user data is used only for these purposes. We do not sell Google user data. For more details, please see our <a href="privacy-policy.html">Privacy Policy</a>.',
      'home.featuresTitle': 'Key Features',
      'home.feature1': '<strong>Classic Coin Pusher Gameplay</strong> – Drop coins onto the pusher platform and watch them fall to earn rewards',
      'home.feature2': '<strong>Roguelike Deck Building</strong> – Collect and combine powerful items to create unique strategies',
      'home.feature3': '<strong>Randomly Generated Stages</strong> – Each playthrough offers a fresh, unique challenge',
      'home.feature4': '<strong>Strategic Planning</strong> – Plan your moves carefully to maximize your score',
      'home.feature5': '<strong>Lucky Spin Bonus</strong> – Spin the wheel for bonus rewards and special power-ups',
      'home.feature6': '<strong>Leaderboards</strong> – Sign in with Google Play Games to compete on rankings using your Play Games nickname',
      'home.feature7': '<strong>Friends</strong> – Share and play with your Google Play Games friends',
      'home.feature8': '<strong>Cloud Save</strong> – Sync your progress across devices with Google Play Games cloud save',
      'home.whoTitle': 'Who Is It For?',
      'home.whoBody': 'Coin Pusher Frenzy is designed for casual gamers who enjoy arcade-style games and strategy games. It\'s suitable for players of all ages looking for a fun, free-to-play mobile gaming experience that is easy to pick up but offers depth for those who want to master it.',
      'home.shot1': 'Game Screenshot 1',
      'home.shot2': 'Game Screenshot 2',
      'home.shot3': 'Game Screenshot 3',
      'home.shot4': 'Game Screenshot 4',
      'home.playLabel': 'Google Play:',
      'home.playLink': 'Coin Pusher Frenzy',
      'home.privacyLabel': 'Privacy Policy:',
      'home.privacyLink': 'Privacy Policy',
      'home.emailLabel': 'Email:',

      // privacy-policy.html
      'privacy.title': 'Privacy Policy - Coin Pusher Frenzy',
      'privacy.back': '← Back to Coin Pusher Frenzy',
      'privacy.h1': 'Privacy Policy',
      'privacy.introTitle': 'Privacy Policy',
      'privacy.intro': 'This privacy policy applies to the Coin Pusher Frenzy app (hereby referred to as "Application") for mobile devices that was created by NingFu (hereby referred to as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".',
      'privacy.infoTitle': 'What information does the Application obtain and how is it used?',
      'privacy.infoIntro': 'The Application may obtain the following information when you download and use it:',
      'privacy.infoGoogle': '<strong>Google Play Games Services / Google user data:</strong> If you choose to sign in with Google Play Games, the Application may access Google Play Games–related information and permissions you grant, including:',
      'privacy.infoLeaderboards': '<strong>Leaderboards:</strong> Your Play Games player identity and nickname (display name) are used to submit scores and display your rankings on leaderboards.',
      'privacy.infoFriends': '<strong>Friends:</strong> With your permission, the Application may access your Google Play Games friends list so you can share progress, compare scores, or interact socially with friends in the game.',
      'privacy.infoCloud': '<strong>Cloud save (Saved Games):</strong> The Application may store and restore game progress using Google Play Games Saved Games. Saved game data is stored in the Application\'s private Google Drive app data area associated with your Google account, and is used only to sync and restore your progress across devices.',
      'privacy.infoAnalytics': '<strong>Gameplay and behavior data:</strong> During gameplay, the Application may collect gameplay and user behavior data, such as session activity, feature usage, progress-related events, and performance metrics. This data is used for game analytics to help us understand how the game is played and to improve game balance, stability, features, and overall player experience.',
      'privacy.infoUse': 'We use Google user data only for the purposes disclosed in this Privacy Policy. We do not sell Google user data, and we do not use Google user data for advertising purposes beyond what is disclosed here.',
      'privacy.locationTitle': 'Does the Application collect precise real time location information of the device?',
      'privacy.locationBody': 'This Application does not collect precise information about the location of your mobile device.',
      'privacy.thirdTitle': 'Do third parties see and/or have access to information obtained by the Application?',
      'privacy.third1': 'Only aggregated or service-necessary data may be processed by trusted third-party service providers that help us operate the Application (for example, Google Play Games Services / Google Play services for authentication, leaderboards, friends features, and cloud save, and analytics services used to improve the game). These providers process data on our behalf and only as needed to provide their services.',
      'privacy.third2': 'Leaderboard display information associated with your Play Games identity may be visible to other players within the Application. Friend-related features may make certain gameplay or ranking information visible to friends you choose to interact with, subject to the permissions you grant. Cloud save data is stored through Google services for your account and is not publicly shared as part of the leaderboard.',
      'privacy.optoutTitle': 'What are my opt-out rights?',
      'privacy.optoutBody': 'You can stop further collection of information by the Application by uninstalling it. You may use the standard uninstall processes available on your mobile device or via the mobile application marketplace. You may also choose not to sign in with Google Play Games; however, features that require Google Play Games (such as leaderboards, friends sharing, and cloud save) may be unavailable without signing in. You may also decline optional permissions (such as friends list access) when prompted; related features will then be limited accordingly.',
      'privacy.childrenTitle': 'Children',
      'privacy.children1': 'The Application is not used to knowingly solicit data from or market to children under the age of 13.',
      'privacy.children2': 'The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourage parents and legal guardians to monitor their children\'s Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider (<a href="mailto:funing0921@gmail.com">funing0921@gmail.com</a>) so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).',
      'privacy.securityTitle': 'Security',
      'privacy.securityBody': 'The Service Provider is concerned about safeguarding the confidentiality of your information and takes reasonable measures to help protect information processed through the Application. Please note that no method of transmission over the internet or electronic storage is completely secure.',
      'privacy.changesTitle': 'Changes',
      'privacy.changes1': 'This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.',
      'privacy.changes2': 'This privacy policy is effective as of 2026-08-07',
      'privacy.consentTitle': 'Your Consent',
      'privacy.consentBody': 'By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.',
      'privacy.contactTitle': 'Contact Us',
      'privacy.contactBody': 'If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <a href="mailto:funing0721b@live.com">funing0721b@live.com</a>.',
      'privacy.footer': 'This privacy policy page was generated by <a href="#">App Privacy Policy Generator</a>'
    },

    zh: {
      'lang.en': 'EN',
      'lang.zh': '中文',

      'index.title': 'Sincen Games - 独立游戏开发团队',
      'index.metaDesc': 'Sincen Games - 独立游戏开发团队。专注于为 Android 和 iOS 平台打造有趣、高质量的休闲游戏。',
      'index.subtitle': '独立游戏开发团队',
      'index.aboutTitle': '关于我们',
      'index.about1': '我们是一支小型独立游戏开发团队，致力于为全球玩家打造有趣、高质量的休闲游戏。',
      'index.about2': '我们擅长将经典街机玩法与现代游戏设计理念结合，带来易上手、难放下的独特游戏体验。',
      'index.about3': '我们的使命是通过创新的移动游戏，让玩家随时随地享受乐趣与娱乐。',
      'index.gamesTitle': '我们的游戏',
      'index.gameName': '推币机大冒险',
      'index.gameEnglish': 'Coin Pusher Frenzy',
      'index.gameNameAlt': '推币机大冒险（Coin Pusher Frenzy）',
      'index.gameDesc': '一款融合经典街机推币机与 Roguelike 卡组构筑的休闲策略游戏！',
      'index.viewDetails': '查看游戏详情 →',
      'index.contactTitle': '联系我们',
      'index.emailLabel': '邮箱：',

      'home.title': '推币机大冒险 | Coin Pusher Frenzy',
      'home.brandName': '推币机大冒险',
      'home.brandEnglish': 'Coin Pusher Frenzy',
      'home.metaDesc': '推币机大冒险（Coin Pusher Frenzy）是一款融合经典街机推币物理与 Roguelike 卡组构筑策略的休闲手游。支持 Google Play Games 排行榜、好友互动与云存档。',
      'home.back': '← 返回首页',
      'home.logoAlt': '推币机大冒险（Coin Pusher Frenzy）图标',
      'home.aboutTitle': '关于推币机大冒险（Coin Pusher Frenzy）',
      'home.aboutIntro': '<strong>推币机大冒险（Coin Pusher Frenzy）</strong> 是一款面向休闲娱乐的手机游戏，将经典街机推币机体验带到智能手机上，并融入创新的 Roguelike 卡组构筑玩法。',
      'home.purposeTitle': '应用目的',
      'home.purposeBody': '推币机大冒险（Coin Pusher Frenzy）旨在为玩家提供有趣、沉浸的休闲游戏体验，将推币机令人满足的物理反馈与策略性卡组构筑玩法相结合。玩家可以享受短时游戏乐趣，并逐步解锁新道具与策略。',
      'home.googleTitle': 'Google Play Games 服务与用户数据',
      'home.googleIntro': '<strong>推币机大冒险（Coin Pusher Frenzy）</strong> 使用 Google Play Games 服务，让玩家通过 Google 账号登录。我们仅在提供以下功能时请求相关 Google 权限：',
      'home.googleLeaderboards': '<strong>排行榜</strong> – 使用您的 Google Play Games 玩家资料（包括 Play Games 昵称）提交分数并展示排名。',
      'home.googleFriends': '<strong>好友</strong> – 在您授权后，访问 Google Play Games 好友列表，以便分享进度、对比分数或与好友进行社交互动。',
      'home.googleCloud': '<strong>云存档</strong> – 通过 Google Play Games Saved Games 保存与恢复游戏进度（存储于应用专用的 Google Drive 应用数据区）。',
      'home.googleAnalytics': '在游戏过程中，应用也可能收集游戏玩法与用户行为数据（例如会话活动、功能使用情况与进度相关事件）。这些数据用于游戏分析，帮助我们了解玩法表现，并改进游戏平衡、稳定性与整体体验。',
      'home.googlePrivacy': 'Google 用户数据仅用于上述目的。我们不会出售 Google 用户数据。更多详情请参阅我们的<a href="privacy-policy.html">隐私政策</a>。',
      'home.featuresTitle': '主要功能',
      'home.feature1': '<strong>经典推币玩法</strong> – 将硬币投放到推币台上，看着它们落下并获得奖励',
      'home.feature2': '<strong>Roguelike 卡组构筑</strong> – 收集并组合强力道具，打造独特策略',
      'home.feature3': '<strong>随机生成关卡</strong> – 每次游玩都带来全新挑战',
      'home.feature4': '<strong>策略规划</strong> – 谨慎规划每一次操作，最大化得分',
      'home.feature5': '<strong>幸运转盘奖励</strong> – 转动转盘获取额外奖励与特殊增益',
      'home.feature6': '<strong>排行榜</strong> – 登录 Google Play Games，使用 Play Games 昵称参与排名竞争',
      'home.feature7': '<strong>好友</strong> – 与 Google Play Games 好友分享并一起玩',
      'home.feature8': '<strong>云存档</strong> – 通过 Google Play Games 云存档在多设备间同步进度',
      'home.whoTitle': '适合谁玩？',
      'home.whoBody': '推币机大冒险（Coin Pusher Frenzy）适合喜欢街机与策略游戏的休闲玩家。它适合各年龄段玩家，既容易上手，又为想深入掌握的玩家提供足够深度，且为免费畅玩。',
      'home.shot1': '游戏截图 1',
      'home.shot2': '游戏截图 2',
      'home.shot3': '游戏截图 3',
      'home.shot4': '游戏截图 4',
      'home.playLabel': 'Google Play：',
      'home.playLink': '推币机大冒险（Coin Pusher Frenzy）',
      'home.privacyLabel': '隐私政策：',
      'home.privacyLink': '隐私政策',
      'home.emailLabel': '邮箱：',

      'privacy.title': '隐私政策 - 推币机大冒险 | Coin Pusher Frenzy',
      'privacy.back': '← 返回推币机大冒险（Coin Pusher Frenzy）',
      'privacy.h1': '隐私政策',
      'privacy.introTitle': '隐私政策',
      'privacy.intro': '本隐私政策适用于由 NingFu（以下简称“服务提供方”）开发的移动设备应用推币机大冒险（Coin Pusher Frenzy，以下简称“本应用”）。本应用为广告支持服务，并按“现状”提供。',
      'privacy.infoTitle': '本应用会获取哪些信息，以及如何使用？',
      'privacy.infoIntro': '当您下载并使用本应用时，可能会获取以下信息：',
      'privacy.infoGoogle': '<strong>Google Play Games 服务 / Google 用户数据：</strong>如果您选择使用 Google Play Games 登录，本应用可能会访问您授权的 Google Play Games 相关信息与权限，包括：',
      'privacy.infoLeaderboards': '<strong>排行榜：</strong>您的 Play Games 玩家身份与昵称（显示名称）将用于提交分数，并在排行榜中展示您的排名。',
      'privacy.infoFriends': '<strong>好友：</strong>在您授权后，本应用可能会访问您的 Google Play Games 好友列表，以便您分享进度、对比分数，或与好友进行游戏内社交互动。',
      'privacy.infoCloud': '<strong>云存档（Saved Games）：</strong>本应用可能通过 Google Play Games Saved Games 保存与恢复游戏进度。存档数据保存在与您的 Google 账号关联的本应用专用 Google Drive 应用数据区，仅用于跨设备同步与恢复进度。',
      'privacy.infoAnalytics': '<strong>游戏玩法与行为数据：</strong>在游戏过程中，本应用可能收集游戏玩法与用户行为数据，例如会话活动、功能使用情况、进度相关事件与性能指标。这些数据用于游戏分析，帮助我们了解玩法，并改进游戏平衡、稳定性、功能与整体体验。',
      'privacy.infoUse': '我们仅将 Google 用户数据用于本隐私政策披露的目的。我们不会出售 Google 用户数据，也不会将 Google 用户数据用于本政策未披露的广告用途。',
      'privacy.locationTitle': '本应用是否收集设备的精确实时位置信息？',
      'privacy.locationBody': '本应用不会收集您移动设备的精确位置信息。',
      'privacy.thirdTitle': '第三方是否会查看和/或访问本应用获取的信息？',
      'privacy.third1': '仅聚合数据或运营所必需的数据，可能会由协助我们运营本应用的可信第三方服务提供方处理（例如用于身份验证、排行榜、好友功能与云存档的 Google Play Games / Google Play 服务，以及用于改进游戏的分析服务）。这些提供方仅代表我们并在提供服务所需范围内处理数据。',
      'privacy.third2': '与您的 Play Games 身份相关的排行榜展示信息，可能会对应用内其他玩家可见。好友相关功能可能在您授权范围内，使部分玩法或排名信息对您选择互动的好友可见。云存档数据通过 Google 服务存储于您的账号下，不会作为排行榜内容公开分享。',
      'privacy.optoutTitle': '我有哪些退出权利？',
      'privacy.optoutBody': '您可通过卸载本应用停止进一步的信息收集，可使用移动设备或应用商店提供的标准卸载流程。您也可以选择不登录 Google Play Games；但依赖该服务的功能（如排行榜、好友分享与云存档）在未登录时可能不可用。当系统提示可选权限（如好友列表访问）时，您也可以拒绝；相关功能将相应受限。',
      'privacy.childrenTitle': '儿童',
      'privacy.children1': '本应用不会故意向 13 岁以下儿童征求数据或进行营销。',
      'privacy.children2': '服务提供方不会故意收集儿童的个人身份信息。我们鼓励所有儿童切勿通过本应用和/或服务提交任何个人身份信息，并鼓励家长与法定监护人监督儿童的互联网使用，协助执行本政策，告知儿童未经许可不得提供个人身份信息。如果您有理由相信儿童已通过本应用和/或服务向服务提供方提供了个人身份信息，请联系服务提供方（<a href="mailto:funing0921@gmail.com">funing0921@gmail.com</a>），以便采取必要措施。您还必须年满 16 岁，才能在您所在国家/地区同意处理个人身份信息（在某些国家/地区，我们可能允许家长或监护人代为同意）。',
      'privacy.securityTitle': '安全',
      'privacy.securityBody': '服务提供方重视保护您信息的机密性，并采取合理措施保护本应用处理的信息。请注意，任何互联网传输或电子存储方式都无法保证绝对安全。',
      'privacy.changesTitle': '变更',
      'privacy.changes1': '本隐私政策可能因任何原因不时更新。服务提供方将通过在本页面发布新隐私政策的方式通知变更。建议您定期查阅本页面，继续使用即视为接受所有变更。',
      'privacy.changes2': '本隐私政策生效日期为 2026-08-07',
      'privacy.consentTitle': '您的同意',
      'privacy.consentBody': '使用本应用即表示您同意按本隐私政策（及其后续修订）处理您的信息。',
      'privacy.contactTitle': '联系我们',
      'privacy.contactBody': '如果您在使用本应用时对隐私有任何疑问，或对本实践有疑问，请通过邮件联系服务提供方：<a href="mailto:funing0721b@live.com">funing0721b@live.com</a>。',
      'privacy.footer': '本隐私政策页面由 <a href="#">App Privacy Policy Generator</a> 生成'
    }
  };

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'zh') return saved;
    } catch (e) {}
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return nav.indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function applyLang(lang) {
    var dict = translations[lang] || translations.en;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!dict[key]) return;
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var pairs = el.getAttribute('data-i18n-attr').split(';');
      pairs.forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length !== 2) return;
        var attr = parts[0].trim();
        var key = parts[1].trim();
        if (dict[key]) el.setAttribute(attr, dict[key]);
      });
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function init() {
    var lang = detectLang();
    applyLang(lang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
