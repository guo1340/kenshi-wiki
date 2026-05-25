/* Auto-generated lightweight Kenshi data chunk. */
(function () {
  const root = typeof window !== 'undefined' ? window : globalThis;
  root.WikiData = root.WikiData || {};
  Object.assign(root.WikiData, {
  "site": {
    "name": "Kenshi Survival Wiki",
    "shortName": "Kenshi Wiki",
    "baseUrl": "https://kenshi.gamewikihub.com",
    "titleSuffix": "Kenshi Survival Wiki",
    "defaultDescription": "A practical Kenshi survival wiki — factions, regions, cities, skills, weapons, armor, races, base building, mods, lore and long-term strategy for the wasteland.",
    "defaultOgImage": "/assets/images/og/default-og.jpg",
    "lastUpdated": "2026-05-23",
    "buildStatus": "Kenshi 1.0.x — community survival consensus"
  },
  "sourceRegistry": {
    "steamStore": {
      "label": "Kenshi Steam Store",
      "url": "https://store.steampowered.com/app/233860/Kenshi/",
      "type": "official",
      "note": "Used for the official game description and broad feature categories."
    },
    "loFiGames": {
      "label": "Lo-Fi Games — Official Site",
      "url": "https://www.lofigames.com/",
      "type": "official",
      "note": "Used for developer direction, Kenshi 2 news and roadmap context."
    },
    "kenshiWiki": {
      "label": "Kenshi Wiki (community, Fandom)",
      "url": "https://kenshi.fandom.com/wiki/Kenshi_Wiki",
      "type": "community",
      "note": "Cross-referenced for faction, region, item and creature details."
    },
    "steamNews": {
      "label": "Kenshi Steam News Hub",
      "url": "https://store.steampowered.com/news/app/233860",
      "type": "official",
      "note": "Used for patch notes and update announcements."
    },
    "lofiForums": {
      "label": "Lo-Fi Games Forums",
      "url": "https://lofigames.com/phpBB3/",
      "type": "official/community",
      "note": "Used for patch discussion and official forum posts."
    },
    "redditCommunity": {
      "label": "r/Kenshi",
      "url": "https://www.reddit.com/r/Kenshi/",
      "type": "community",
      "note": "Used for community survival consensus and beginner discussion patterns."
    },
    "steamGuides": {
      "label": "Kenshi Steam Community Guides",
      "url": "https://steamcommunity.com/app/233860/guides/",
      "type": "community",
      "note": "Reference for build strategies and training methods."
    }
  },
  "patches": [
    {
      "version": "Kenshi 2 — In Development",
      "date": "Ongoing",
      "changes": [
        "Kenshi 2 is the announced prequel/sequel from Lo-Fi Games, set roughly a thousand years before the original.",
        "Built on Unreal Engine, a major shift from the original Kenshi engine, targeting better performance and visuals.",
        "Promises a more vibrant, less collapsed world that players will see fall toward the wasteland of Kenshi 1.",
        "No confirmed release date — treat all Kenshi 2 details as subject to change until Lo-Fi Games confirms them."
      ]
    },
    {
      "version": "Kenshi 1.0.x — Stable",
      "date": "2018–present",
      "changes": [
        "Kenshi left early access and released as version 1.0 in December 2018 after years of development.",
        "Post-release 1.0.x patches focused on stability, performance, balance and bug fixes rather than major new content.",
        "Optimisation passes improved large-battle and big-town performance, long a pain point for the engine.",
        "Balance adjustments to factions, economy and combat refined the late-game experience."
      ]
    },
    {
      "version": "Late Early Access",
      "date": "2017–2018",
      "changes": [
        "The world map was expanded and populated with the factions, regions and cities present at release.",
        "The base-building, research and production systems were deepened toward their final form.",
        "Combat, squad AI and the dynamic world systems received repeated iteration.",
        "Performance and modding support were strengthened ahead of the 1.0 launch."
      ]
    }
  ],
  "survivorTips": [
    "Running away is not losing. It is the most reliable survival tool you have.",
    "Check your squad’s races against a region before you travel into it.",
    "Train Athletics early — a fast squad chooses which fights happen.",
    "Toughness is trained by losing. Get downed where guards will save you, then heal and repeat.",
    "Never travel with a single character. A second body can drag the first to safety.",
    "A garru pack animal carries the loot you would otherwise leave in the sand.",
    "Squin is the safest beginner base. If you are lost, go there.",
    "Buy a Bonedog puppy early and raise it through your squad’s fights.",
    "Fight at chokepoints. Being surrounded, not being outmatched, is what kills squads.",
    "Heavy armour is stronger than it looks. Put it on your front-line tank.",
    "A bite from a slaver patrol is not the end — captivity trains Strength and Toughness.",
    "Beak Things are fast. The only safe response to one is a head start.",
    "Skeletons ignore hunger, sleep and acid rain. They are the wasteland’s explorers.",
    "Sell Ancient tech and research books to Tech Hunters — they pay far better.",
    "Pick your base location before your base design. Location decides the whole run.",
    "The Fog Islands eat the downed. A loss there is usually permanent."
  ],
  "pages": {
    "getting-started": {
      "title": "Getting Started",
      "body": "\n        <p class=\"lore\">Kenshi is not about becoming the chosen hero. It is about surviving long enough to matter.</p>\n        <p>Kenshi drops you into a harsh, indifferent wasteland with no quests, no destiny and no safety net. Nobody is coming to help you. This page is the orientation a veteran wanderer would give a newcomer before the desert teaches the same lessons the expensive way.</p>\n        <h3>The Survival Mindset</h3>\n        <p>Kenshi works differently from most games. You are not meant to win every fight — you are meant to <em>survive</em> them, and losing is how characters grow. A defeat that everyone walks away from trains Toughness and teaches a lesson. The unrecoverable mistake is the fight you should have run from and did not.</p>\n        <p>Internalise three things early: running away is a valid strategy, failure is progression, and the world does not scale to you. Regions and factions will happily kill a squad that wanders in unprepared.</p>\n        <h3>Your First Hour</h3>\n        <p>Pick a gentle start — ideally a Greenlander, who is tolerated almost everywhere. Head for a safe town; <a href=\"/cities/squin\">Squin</a> is the community's standard recommendation, close to the <a href=\"/cities/the-hub\">Hub</a> and defended by tough Shek guards who tolerate every race.</p>\n        <p>Earn your first money mining copper near a guarded town. Use it to recruit a second character from a bar — a squad of two survives what a lone wanderer cannot. Then train Athletics by travelling on foot, so retreat is always an option.</p>\n        <h3>Understanding Stats</h3>\n        <p>Combat is resolved by stats and positioning, not reflexes. <a href=\"/skills/attack\">Attack</a> lands hits, <a href=\"/skills/defense\">Defence</a> blocks them, and <a href=\"/skills/toughness\">Toughness</a> decides whether a beating is a lesson or a funeral. <a href=\"/skills/athletics\">Athletics</a> — raw run speed — is the most underrated stat in the game.</p>\n        <h3>How Combat Actually Works</h3>\n        <p>You direct positioning and targets; the stats do the swinging. The single biggest cause of defeat is being surrounded, which splits your Defence across every attacker. Fight at chokepoints, keep your squad in a line, and never let enemies reach your back rank. When in doubt, read the <a href=\"/guides/melee-combat-basics\">Melee Combat Basics</a> guide.</p>\n        <h3>Where To Go Next</h3>\n        <p>Start with <a href=\"/guides/surviving-first-week\">Surviving Your First Week</a> and <a href=\"/guides/best-beginner-starts\">Best Beginner Starts</a>. Learn the <a href=\"/factions\">factions</a> — especially which ones your race angers — and study the <a href=\"/regions\">regions</a> before you cross them. The wasteland rewards the wanderer who reads the map first.</p>\n      "
    }
  }
});
})();
