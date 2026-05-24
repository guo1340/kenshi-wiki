/* ============================================================
   Kenshi Wiki — Data
   ------------------------------------------------------------
   A scavenger's field journal carried across a dead
   civilization. Everything the wiki renders lives in this
   file. To add a faction / region / weapon / guide, append a
   new object to the relevant array. Cross-links resolve
   through the `id` field — ids must match.

   Tone rule: every entry leads with a practical opinion,
   explains WHY something matters, names beginner traps, and
   keeps a long-term survival perspective. Numbers reflect the
   1.0.x release and community consensus; treat exact values
   as patch-dependent.
   ============================================================ */

window.WikiData = {

  /* ---------------------------------------------------------- */
  /*                       SITE CONFIG                          */
  /* ---------------------------------------------------------- */
  site: {
    name: 'Kenshi Survival Wiki',
    shortName: 'Kenshi Wiki',
    baseUrl: 'https://kenshi.gamewikihub.com',
    titleSuffix: 'Kenshi Survival Wiki',
    defaultDescription: 'A practical Kenshi survival wiki — factions, regions, cities, skills, weapons, armor, races, base building, mods, lore and long-term strategy for the wasteland.',
    defaultOgImage: '/assets/images/og/default-og.jpg',
    lastUpdated: '2026-05-23',
    buildStatus: 'Kenshi 1.0.x — community survival consensus'
  },

  /* ---------------------------------------------------------- */
  /*                     SOURCE REGISTRY                        */
  /* ---------------------------------------------------------- */
  sourceRegistry: {
    steamStore: {
      label: 'Kenshi Steam Store',
      url: 'https://store.steampowered.com/app/233860/Kenshi/',
      type: 'official',
      note: 'Used for the official game description and broad feature categories.'
    },
    loFiGames: {
      label: 'Lo-Fi Games — Official Site',
      url: 'https://www.lofigames.com/',
      type: 'official',
      note: 'Used for developer direction, Kenshi 2 news and roadmap context.'
    },
    kenshiWiki: {
      label: 'Kenshi Wiki (community, Fandom)',
      url: 'https://kenshi.fandom.com/wiki/Kenshi_Wiki',
      type: 'community',
      note: 'Cross-referenced for faction, region, item and creature details.'
    },
    steamNews: {
      label: 'Kenshi Steam News Hub',
      url: 'https://store.steampowered.com/news/app/233860',
      type: 'official',
      note: 'Used for patch notes and update announcements.'
    },
    lofiForums: {
      label: 'Lo-Fi Games Forums',
      url: 'https://lofigames.com/phpBB3/',
      type: 'official/community',
      note: 'Used for patch discussion and official forum posts.'
    },
    redditCommunity: {
      label: 'r/Kenshi',
      url: 'https://www.reddit.com/r/Kenshi/',
      type: 'community',
      note: 'Used for community survival consensus and beginner discussion patterns.'
    },
    steamGuides: {
      label: 'Kenshi Steam Community Guides',
      url: 'https://steamcommunity.com/app/233860/guides/',
      type: 'community',
      note: 'Reference for build strategies and training methods.'
    }
  },
  /* ---------------------------------------------------------- */
  /*                        FACTIONS                            */
  /* ---------------------------------------------------------- */
  factions: [
    {
      id: 'holy-nation',
      name: 'The Holy Nation',
      disposition: 'Conditional',
      summary: `A vast theocracy that worships Okran and the sun. Safe if you are a Greenlander male — lethal to almost everyone else.`,
      intro: `The Holy Nation does not hate you personally. It hates what you are, and in the wasteland that is the same thing.`,
      sections: [
        { h: 'Overview', body: `<p>The Holy Nation is the largest single power on the continent, a sun-worshipping theocracy ruled from Okran's Pride. Its faith is built on purity: Okran the sun god is good, Narko the moon is evil, and anything the priesthood decides is "unclean" is treated as an enemy of the light.</p><p>This makes the Holy Nation the most context-dependent faction in the game. To one character it is a sprawling safe zone of green farmland and patrolling Paladins. To another it is a death sentence enforced at every gate.</p>` },
        { h: 'Gameplay Impact', body: `<p>Holy Nation territory is some of the safest early-game land on the map — if they tolerate you. Towns are well-guarded, food is cheap, and bandits are thin. Greenlander characters can train, trade and recruit here in relative peace.</p><p>Shek, Hivers, Skeletons and women of any race are treated with suspicion or outright hostility. Hivers and Skeletons are attacked on sight in core towns. Women cannot own property and are barred from many roles.</p>` },
        { h: 'Joining & Reputation', body: `<p>You gain Holy Nation reputation by killing their enemies — Shek, the Anti-Slavers' rivals, Skin Bandits — and by completing their shrine objectives. You lose it fast by being seen with "unclean" squadmates, freeing slaves they own, or defending Hivers.</p><p>High reputation unlocks recruitment of Holy Nation soldiers and safer passage. It will, however, quietly poison your standing with the Shek Kingdom and the Flotsam Ninjas.</p>` },
        { h: 'Military Strength', body: `<p>Holy Nation forces favour heavy armour, Holy Sabres and the iconic Paladin's Cross. Individually their soldiers are mid-tier, but they travel in large, well-equipped patrols and their Paladins and High Paladins are genuinely dangerous.</p><p>Their weakness is numbers spread thin and a reliance on morale — break a patrol and the rest often rout.</p>` },
        { h: 'Best Uses', body: `<p>Best for: a safe Greenlander start, cheap early training, and farming reputation by clearing their enemies. Their cities (Bad Teeth, Stack, Blister Hill) make excellent low-risk early bases for the right character.</p>` }
      ],
      warn: `New players pick a Hiver or Shek "because they look cool", walk into Holy Nation land, and get beaten down at the first gate. Check your race against the region before you travel.`,
      infobox: [['Type', 'Theocracy'], ['Capital', "Okran's Pride"], ['Hostile to', 'Shek, Hivers, Skeletons'], ['Safe for', 'Greenlander males'], ['Threat tier', 'High (as enemy)']],
      related: [
        { href: '/factions/shek-kingdom', label: 'Shek Kingdom' },
        { href: '/regions/holy-nation-territory', label: 'Holy Nation Territory' },
        { href: '/lore/holy-nation-lore', label: 'Holy Nation Lore' }
      ],
      sources: ['kenshiWiki', 'steamStore', 'redditCommunity']
    },
    {
      id: 'united-cities',
      name: 'The United Cities',
      disposition: 'Conditional',
      summary: `A sprawling, corrupt trade empire built on slavery and noble politics. Rich, dangerous and morally filthy.`,
      intro: `The United Cities will sell you anything. Given the chance, it will also sell you.`,
      sections: [
        { h: 'Overview', body: `<p>The United Cities is the largest faction by territory after the Holy Nation — a loose empire of city-states bound by trade, noble houses and the Traders Guild. It is wealthy, cosmopolitan and built on the backs of slaves.</p><p>Unlike the Holy Nation, the UC tolerates most races. What it does not tolerate is the poor, the troublesome, and anyone caught interfering with noble business.</p>` },
        { h: 'Gameplay Impact', body: `<p>UC cities are economic powerhouses — the best vendors, the most lucrative bounties, the deepest markets. The eastern desert is also one of the richest mining regions in the game.</p><p>The catch is slavery. Get knocked out by UC forces while wanted and you can wake up in a slave camp. Noble characters wander with large escorts, and angering one drags an entire city's guard force onto you.</p>` },
        { h: 'Joining & Reputation', body: `<p>You raise UC reputation through bounties, trade and killing their enemies (the Anti-Slavers especially). Freeing slaves, attacking nobles or smuggling will sink it quickly.</p><p>Friendly status opens recruitment, safe trade and access to noble questlines. The Anti-Slavers will despise you for it.</p>` },
        { h: 'Military Strength', body: `<p>UC Samurai are among the best-equipped human soldiers in the game — heavy armour, quality sabres and large patrols. Their Heavy Armoury sells some of the strongest non-craftable plate available.</p><p>Their weakness is corruption: guards are competent but the empire is overextended, and Reavers, the Holy Nation and rebels all chew at its edges.</p>` },
        { h: 'Best Uses', body: `<p>Best for: trade, mid-game economy, bounty income, and buying top-tier armour. A cleared UC city is one of the strongest mid-game home bases on the map.</p>` }
      ],
      warn: `Freeing one slave inside a UC city feels heroic and instantly turns the whole town hostile. Decide if you want the Anti-Slaver path before you do it.`,
      infobox: [['Type', 'Trade empire'], ['Capital', 'Heft / Catun region'], ['Economy', 'Slavery, mining, trade'], ['Tolerates', 'Most races'], ['Threat tier', 'High']],
      related: [
        { href: '/factions/slave-traders', label: 'Slave Traders' },
        { href: '/factions/anti-slavers', label: 'Anti-Slavers' },
        { href: '/factions/traders-guild', label: 'Traders Guild' }
      ],
      sources: ['kenshiWiki', 'steamStore', 'redditCommunity']
    },
    {
      id: 'shek-kingdom',
      name: 'The Shek Kingdom',
      disposition: 'Friendly',
      summary: `A warrior culture of horned humanoids who respect strength and nothing else. One of the best early-game neighbours.`,
      intro: `The Shek do not care what you look like. They care whether you can fight, and whether you ran.`,
      sections: [
        { h: 'Overview', body: `<p>The Shek Kingdom is a martial society of the Shek race, ruled from Admag by the Queen, Esata the Stone Golem. Their entire culture is organised around honourable combat — a Shek's worth is measured in scars earned and enemies faced.</p><p>This makes them refreshingly simple to deal with. They are not racist, not slavers, and not interested in your faith.</p>` },
        { h: 'Gameplay Impact', body: `<p>Shek towns are some of the friendliest early-game hubs for almost any character. Squin in particular is a beloved beginner base — close to the Hub, defended by tough Shek guards, and tolerant of all races.</p><p>The downside is that Shek territory borders dangerous neighbours, and the Shek are perpetually at war with the Holy Nation. Living among them slowly colours your reputation.</p>` },
        { h: 'Joining & Reputation', body: `<p>The Shek warm to you when you fight their enemies and survive. They lose respect when you flee battles near them. Reputation is gained through Holy Nation kills and bounties.</p><p>Allied status grants recruitable Shek warriors — among the strongest melee bodies you can hire early.</p>` },
        { h: 'Military Strength', body: `<p>Shek are physically powerful, with high strength and toughness, and their warriors favour heavy weapons and brutal cleaving sabres. A Shek patrol can shred bandit groups that would overwhelm a human squad.</p><p>Their flaw is doctrine: pride makes them attack rather than retreat, and they take heavy casualties against disciplined, ranged-supported foes.</p>` },
        { h: 'Best Uses', body: `<p>Best for: a safe all-race start (Squin), recruiting tough melee fighters, and easy access to the Hub and copper trade. An ideal first foothold for new players.</p>` }
      ],
      tip: `Squin is the single most recommended beginner base in the game. If you are lost, go there.`,
      infobox: [['Type', 'Warrior kingdom'], ['Capital', 'Admag'], ['Ruler', 'Esata the Stone Golem'], ['Tolerates', 'All races'], ['Threat tier', 'Low (as ally)']],
      related: [
        { href: '/races/shek', label: 'Shek (Race)' },
        { href: '/cities/squin', label: 'Squin' },
        { href: '/factions/holy-nation', label: 'Holy Nation' }
      ],
      sources: ['kenshiWiki', 'redditCommunity', 'steamGuides']
    },
    {
      id: 'anti-slavers',
      name: 'The Anti-Slavers',
      disposition: 'Friendly',
      summary: `A rebel movement of escaped slaves and idealists fighting the United Cities slave trade. Allies of conscience, not of strength.`,
      intro: `The Anti-Slavers are losing. That is exactly why they need you, and exactly why joining them costs so much.`,
      sections: [
        { h: 'Overview', body: `<p>Led by Tinfist — a Skeleton with a long memory and a longer grudge — the Anti-Slavers are a guerrilla faction dedicated to destroying the United Cities slave economy. They shelter freed slaves and strike at slave camps and noble convoys.</p><p>They are the closest thing to a "good guys" faction, and the game makes you pay for siding with them.</p>` },
        { h: 'Gameplay Impact', body: `<p>Allying with the Anti-Slavers turns the entire United Cities against you over time, locking you out of the richest trade region on the map. In exchange you gain a cause, freed-slave recruits, and access to faction events.</p><p>It is a mid-to-late game commitment, not an early one. New squads cannot survive UC hostility.</p>` },
        { h: 'Joining & Reputation', body: `<p>Free slaves, kill slavers, and destroy slave camps to gain reputation. You cannot meaningfully raise it without wrecking your UC standing.</p><p>High reputation can trigger the world-state shift where the Anti-Slavers move against the UC outright — one of the game's major dynamic outcomes.</p>` },
        { h: 'Military Strength', body: `<p>Individually the Anti-Slavers are weak: poorly equipped ex-slaves with patchy stats. Their strength is numbers, terrain and your support. They cannot win the war alone.</p>` },
        { h: 'Best Uses', body: `<p>Best for: a story-driven anti-slavery playthrough, freed-slave recruits, and triggering the late-game collapse of UC power. Not a beginner faction.</p>` }
      ],
      warn: `Do not commit to the Anti-Slavers until your squad can survive losing the United Cities. That is a huge chunk of the map turning hostile.`,
      infobox: [['Type', 'Rebel movement'], ['Leader', 'Tinfist'], ['Enemy', 'United Cities, Slavers'], ['Game stage', 'Mid to late'], ['Threat tier', 'Low']],
      related: [
        { href: '/factions/united-cities', label: 'United Cities' },
        { href: '/factions/slave-traders', label: 'Slave Traders' },
        { href: '/guides/anti-slaver-run', label: 'Anti-Slaver Run' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'tech-hunters',
      name: 'The Tech Hunters',
      disposition: 'Friendly',
      summary: `Independent scavengers and traders obsessed with Ancient technology. Neutral, useful and refreshingly free of politics.`,
      intro: `The Tech Hunters do not want your land or your soul. They want what you dug out of the ruins, and they will pay well for it.`,
      sections: [
        { h: 'Overview', body: `<p>The Tech Hunters are a decentralised faction of explorers, ruin-divers and traders united by one obsession: recovering and selling the technology of the Ancient civilisation. They run trade hubs at the edges of dangerous regions.</p><p>They have no racism, no slavery and no religion — just business.</p>` },
        { h: 'Gameplay Impact', body: `<p>Tech Hunter towns like World's End and Mongrel are vital staging posts for exploring the deadliest regions. They sell research artifacts, buy your salvage, and tolerate every race.</p><p>Because they are neutral with almost everyone, basing near them rarely drags you into a war.</p>` },
        { h: 'Joining & Reputation', body: `<p>Trade and exploration keep you in their good graces; theft and attacking their caravans sink you. They are easy to stay friendly with because they ask so little.</p>` },
        { h: 'Military Strength', body: `<p>Tech Hunter guards and soldiers are well-equipped — they have to be, basing on the edge of the Fog Islands and the Deadlands. They are competent defenders but not an offensive power.</p>` },
        { h: 'Best Uses', body: `<p>Best for: selling Ancient loot, staging ruin expeditions, and a politically clean base location. Mongrel and World's End are superb forward operating bases.</p>` }
      ],
      tip: `Sell Ancient Science Books and engineering research to Tech Hunters — they pay far better than generic traders.`,
      infobox: [['Type', 'Trader / explorer guild'], ['Hubs', "World's End, Mongrel"], ['Politics', 'Neutral'], ['Tolerates', 'All races'], ['Threat tier', 'Low']],
      related: [
        { href: '/cities/worlds-end', label: "World's End" },
        { href: '/cities/mongrel', label: 'Mongrel' },
        { href: '/lore/ai-core-history', label: 'AI Core History' }
      ],
      sources: ['kenshiWiki', 'steamGuides', 'redditCommunity']
    },
    {
      id: 'flotsam-ninjas',
      name: 'The Flotsam Ninjas',
      disposition: 'Friendly',
      summary: `Refugees and exiles fighting the Holy Nation from the swamp's edge. Enemies of the theocracy, friends of the outcast.`,
      intro: `The Flotsam Ninjas took in the people the Holy Nation threw away. That tells you everything about who they fight.`,
      sections: [
        { h: 'Overview', body: `<p>Led by the swordmaster Sankuro, the Flotsam Ninjas are a rebel faction operating from Mud Town and the swamp borderlands. They shelter Holy Nation refugees — particularly Hivers and exiled women — and wage a quiet war against the theocracy.</p>` },
        { h: 'Gameplay Impact', body: `<p>They are natural allies for anti-Holy-Nation characters and for races the Holy Nation persecutes. Their territory borders the dangerous swamp, so their towns are useful but not safe by default.</p>` },
        { h: 'Joining & Reputation', body: `<p>Kill Holy Nation forces to gain reputation; this naturally aligns you with the Shek and against the theocracy. Friendly status grants skilled recruits.</p>` },
        { h: 'Military Strength', body: `<p>The Flotsam Ninjas favour speed and skill over heavy armour — light gear, fast katanas and ambush tactics. Sankuro himself is a formidable unique recruit.</p>` },
        { h: 'Best Uses', body: `<p>Best for: anti-Holy-Nation playthroughs, fast skilled recruits, and a foothold near the swamp's drug economy.</p>` }
      ],
      infobox: [['Type', 'Rebel faction'], ['Leader', 'Sankuro'], ['Base', 'Mud Town'], ['Enemy', 'Holy Nation'], ['Threat tier', 'Low']],
      related: [
        { href: '/factions/holy-nation', label: 'Holy Nation' },
        { href: '/regions/the-swamp', label: 'The Swamp' },
        { href: '/factions/shek-kingdom', label: 'Shek Kingdom' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'skeleton-bandits',
      name: 'Skeleton Bandits (The Broken)',
      disposition: 'Hostile',
      summary: `Damaged, unstable Skeletons who raid the wasteland. Dangerous, tireless and immune to the things that stop human raiders.`,
      intro: `A starving human bandit can be reasoned with by fear. A Broken Skeleton feels neither hunger nor fear.`,
      sections: [
        { h: 'Overview', body: `<p>The Skeleton Bandits — often called the Broken — are malfunctioning Ancient Skeletons whose minds have degraded over the centuries. They roam the wastes attacking travellers, driven by corrupted programming rather than survival.</p>` },
        { h: 'Gameplay Impact', body: `<p>They are far deadlier than human bandits of similar level. They do not get hungry, do not flee, and keep fighting on broken limbs. They patrol around ruins and the Deadlands.</p>` },
        { h: 'Joining & Reputation', body: `<p>You cannot ally with them. They are universally hostile. Killing them raises standing with most ordinary factions.</p>` },
        { h: 'Military Strength', body: `<p>Skeleton bodies shrug off bleeding and cutting damage and are vulnerable mostly to blunt force. They favour heavy weapons. Their relentlessness is the real threat — they will chase a wounded squad to its death.</p>` },
        { h: 'Best Uses', body: `<p>Best for: salvage. Their corpses yield Skeleton Repair Kits, robotics components and Ancient parts worth real money.</p>` }
      ],
      warn: `Do not try to outlast Skeleton Bandits in a war of attrition. They do not tire. You do.`,
      infobox: [['Type', 'Bandit faction'], ['Composition', 'Malfunctioning Skeletons'], ['Hostility', 'Universal'], ['Weakness', 'Blunt damage'], ['Threat tier', 'High']],
      related: [
        { href: '/races/skeletons', label: 'Skeletons (Race)' },
        { href: '/regions/deadlands', label: 'The Deadlands' },
        { href: '/lore/skeleton-history', label: 'Skeleton History' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'traders-guild',
      name: 'The Traders Guild',
      disposition: 'Neutral',
      summary: `The merchant backbone of the United Cities. Not a fighting force — a network of shops, caravans and money.`,
      intro: `The Traders Guild never fired a shot in its life. It does not have to. It owns the people who do.`,
      sections: [
        { h: 'Overview', body: `<p>The Traders Guild is the commercial institution running shops and caravans across United Cities territory and beyond. It is less a faction you fight and more an economy you participate in.</p>` },
        { h: 'Gameplay Impact', body: `<p>Guild shops are where you sell loot and buy gear. Guild caravans move goods between cities and can be escorted, traded with, or — if you are willing to take the reputation hit — robbed.</p>` },
        { h: 'Joining & Reputation', body: `<p>Trade fairly and reputation stays neutral-to-positive. Robbing caravans damages standing with the Traders Guild and the United Cities both.</p>` },
        { h: 'Military Strength', body: `<p>Caravans travel with hired guards, but the Guild is not a military faction. Its power is financial leverage, not soldiers.</p>` },
        { h: 'Best Uses', body: `<p>Best for: reliable selling of bulk goods, caravan escort income, and price-checking before you commit to a trade route.</p>` }
      ],
      infobox: [['Type', 'Merchant network'], ['Aligned with', 'United Cities'], ['Role', 'Shops & caravans'], ['Politics', 'Neutral'], ['Threat tier', 'Low']],
      related: [
        { href: '/factions/united-cities', label: 'United Cities' },
        { href: '/guides/trading-routes', label: 'Trading Routes' },
        { href: '/guides/base-economy', label: 'Base Economy' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'slave-traders',
      name: 'The Slave Traders',
      disposition: 'Hostile',
      summary: `The slaving arm of the United Cities economy. They want you alive — which is worse than wanting you dead.`,
      intro: `Death in Kenshi is a setback. Capture by the Slave Traders is a second game, played from a cage.`,
      sections: [
        { h: 'Overview', body: `<p>The Slave Traders capture, transport and sell people across United Cities territory, supplying labour to mines and noble estates. They are closely tied to the UC and despised by the Anti-Slavers.</p>` },
        { h: 'Gameplay Impact', body: `<p>If your character is knocked out by slavers — or arrested in UC land while wanted — you can be enslaved rather than killed. You wake in a slave camp, collared, forced to work, and must escape.</p><p>This is not always a disaster. Enslavement is a viable, deliberate way to train Athletics, Labouring and Toughness while plotting a breakout.</p>` },
        { h: 'Joining & Reputation', body: `<p>You can technically work with slavers, but it tanks Anti-Slaver and Shek standing. Most players treat them purely as enemies.</p>` },
        { h: 'Military Strength', body: `<p>Slaver patrols are armed and use harpoon weapons to drag down runners. They are mid-tier fighters whose real weapon is the collar and the cage.</p>` },
        { h: 'Best Uses', body: `<p>Best for: a dramatic escaped-slave origin story, or harvesting bounties for the Anti-Slaver cause.</p>` }
      ],
      warn: `Being enslaved is recoverable and even useful for training. Panicking and dying in the escape attempt is not.`,
      infobox: [['Type', 'Slaver faction'], ['Aligned with', 'United Cities'], ['Enemy', 'Anti-Slavers, Shek'], ['Threat', 'Capture, not death'], ['Threat tier', 'High']],
      related: [
        { href: '/guides/escaping-slavery', label: 'Escaping Slavery' },
        { href: '/factions/anti-slavers', label: 'Anti-Slavers' },
        { href: '/factions/united-cities', label: 'United Cities' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'cannibals',
      name: 'The Cannibals',
      disposition: 'Hostile',
      summary: `Tribal hordes of the eastern forests who hunt the living for food. Overwhelming in numbers, merciless to the downed.`,
      intro: `The Cannibals do not loot your corpse. They prepare it.`,
      sections: [
        { h: 'Overview', body: `<p>The Cannibals are tribal humans inhabiting the Cannibal Plains and surrounding forests. They hunt other people as a food source, dragging the unconscious back to their cooking camps.</p>` },
        { h: 'Gameplay Impact', body: `<p>Their danger is numbers. Individually weak, they swarm in enormous packs that can bury a strong squad through sheer mass. A downed character is carried off and eaten — there is no looting your gear back later.</p>` },
        { h: 'Joining & Reputation', body: `<p>You cannot ally with them. They are hostile to nearly everyone. Their leader, the Cannibal Grand Wizard, is a notable late-game target.</p>` },
        { h: 'Military Strength', body: `<p>Poor gear, low stats, terrifying numbers. They are a threat through attrition and the speed at which they pile onto a single body.</p>` },
        { h: 'Best Uses', body: `<p>Best for: Toughness training (carefully), bounty income, and clearing the path to the eastern Ashlands route.</p>` }
      ],
      warn: `Never travel the Cannibal Plains with a squad that cannot kill faster than the Cannibals can arrive. Once they surround you, leaving is not an option.`,
      infobox: [['Type', 'Tribal horde'], ['Territory', 'Cannibal Plains'], ['Leader', 'Cannibal Grand Wizard'], ['Threat', 'Swarm numbers'], ['Threat tier', 'Extreme']],
      related: [
        { href: '/regions/cannibal-plains', label: 'Cannibal Plains' },
        { href: '/guides/cannibal-hunter-run', label: 'Cannibal Hunter Run' },
        { href: '/guides/anti-bandit-strategies', label: 'Anti-Bandit Strategies' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'fogmen',
      name: 'The Fogmen',
      disposition: 'Hostile',
      summary: `Degenerated Hivers in the Fog Islands who swarm anything that enters their fog. They eat the living and the dead.`,
      intro: `The fog is not weather. The fog is them, and they are always hungry.`,
      sections: [
        { h: 'Overview', body: `<p>The Fogmen are Hivers whose minds have collapsed into a feral, ritualistic state. They infest the Fog Islands, worshipping the Fog Prince and dragging victims back to be devoured.</p>` },
        { h: 'Gameplay Impact', body: `<p>The Fog Islands are one of the deadliest regions for an unprepared squad. Fogmen attack in endless waves, and a downed character is eaten alive — limbs first.</p>` },
        { h: 'Joining & Reputation', body: `<p>No alliance is possible. Hiver characters are not spared. Killing the Fog Prince is a major mid-game achievement.</p>` },
        { h: 'Military Strength', body: `<p>Fogmen are individually weak but attack with no fear and no end. Their crude weapons still kill a squad that gets surrounded and exhausted.</p>` },
        { h: 'Best Uses', body: `<p>Best for: dangerous Toughness training, Fog Prince bounty, and access to Fog Island ruins. For experienced squads only.</p>` }
      ],
      warn: `Fogmen will eat your downed characters. Unlike bandits, they do not leave a recoverable body. A loss in the Fog Islands is usually permanent.`,
      infobox: [['Type', 'Feral Hivers'], ['Territory', 'Fog Islands'], ['Worship', 'The Fog Prince'], ['Threat', 'Devour the downed'], ['Threat tier', 'Extreme']],
      related: [
        { href: '/regions/fog-islands', label: 'Fog Islands' },
        { href: '/creatures/fogmen', label: 'Fogmen (Creature)' },
        { href: '/races/hivers', label: 'Hivers (Race)' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'hivers',
      name: 'The Hive',
      disposition: 'Friendly',
      summary: `Insectoid colonies in the eastern deserts, organised by Prince and worker castes. Peaceful traders if left alone.`,
      intro: `A Hiver alone is curious and harmless. A Hive village defending its Prince is something else entirely.`,
      sections: [
        { h: 'Overview', body: `<p>The Hive is the collective of Hiver colonies — insectoid people organised into castes around a Hive Prince. Western and Southern Hive villages dot the eastern deserts, trading and farming.</p>` },
        { h: 'Gameplay Impact', body: `<p>Hive villages are generally peaceful and will trade with most travellers. They make quiet, low-traffic neighbours. The Holy Nation, however, hates Hivers, which colours where Hiver characters can safely go.</p>` },
        { h: 'Joining & Reputation', body: `<p>Trade fairly and Hive villages stay friendly. Hiver characters can recruit fellow Hivers and find a welcome the Holy Nation denies them.</p>` },
        { h: 'Military Strength', body: `<p>Hive Soldier Drones are capable fighters and villages defend themselves, but the Hive is not an expansionist military power. They fight to hold, not to conquer.</p>` },
        { h: 'Best Uses', body: `<p>Best for: Hiver-character recruitment, quiet eastern bases, and trade away from the major powers.</p>` }
      ],
      infobox: [['Type', 'Insectoid colonies'], ['Structure', 'Caste / Prince'], ['Territory', 'Eastern deserts'], ['Enemy', 'Holy Nation'], ['Threat tier', 'Low']],
      related: [
        { href: '/races/hivers', label: 'Hivers (Race)' },
        { href: '/factions/holy-nation', label: 'Holy Nation' },
        { href: '/regions/the-great-desert', label: 'The Great Desert' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'crab-raiders',
      name: 'The Crab Raiders',
      disposition: 'Neutral',
      summary: `A disciplined martial order on the Leviathan Coast who train giant crabs and respect a good fight.`,
      intro: `The Crab Raiders raid, yes — but they will also share a fire with a wanderer who fights well. The wasteland has worse neighbours.`,
      sections: [
        { h: 'Overview', body: `<p>The Crab Raiders are a martial faction of the Leviathan Coast, famous for domesticating the region's giant crabs. They live by a code of strength and combat skill rather than cruelty.</p>` },
        { h: 'Gameplay Impact', body: `<p>They are surprisingly reasonable. The Crab Queen will recruit characters who prove themselves, and the faction can become an ally rather than an enemy — unusual for a "raider" group.</p>` },
        { h: 'Joining & Reputation', body: `<p>Prove your combat worth and the Crab Raiders open up, granting access to the Crab Town and powerful recruits, including domesticated combat crabs.</p>` },
        { h: 'Military Strength', body: `<p>Crab Raiders are strong melee fighters backed by their trained crabs — and the crabs are genuinely dangerous, armoured and hard-hitting.</p>` },
        { h: 'Best Uses', body: `<p>Best for: recruiting a pet war-crab, a coastal base, and a martial ally that does not demand you pick a side in the religious war.</p>` }
      ],
      tip: `Befriending the Crab Raiders lets you recruit trained crabs — among the best animal squad members in the game.`,
      infobox: [['Type', 'Martial order'], ['Territory', 'Leviathan Coast'], ['Signature', 'Trained giant crabs'], ['Politics', 'Neutral'], ['Threat tier', 'Moderate']],
      related: [
        { href: '/regions/leviathan-coast', label: 'Leviathan Coast' },
        { href: '/guides/animal-squad', label: 'Animal Squad Guide' },
        { href: '/creatures/leviathans', label: 'Leviathans' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'skin-bandits',
      name: 'The Skin Bandits',
      disposition: 'Hostile',
      summary: `Skeletons disguising themselves in stitched human skin to pass among the living. Quietly one of the game's most unsettling factions.`,
      intro: `You will meet the Skin Bandits before you know it. That is the entire point of them.`,
      sections: [
        { h: 'Overview', body: `<p>The Skin Bandits are Skeletons who wear stitched-together human skin to disguise themselves and infiltrate. They appear as ordinary travellers until they attack.</p>` },
        { h: 'Gameplay Impact', body: `<p>They turn a routine traveller encounter into an ambush. Because they pass as human until combat, careless squads can be caught off-guard on the road.</p>` },
        { h: 'Joining & Reputation', body: `<p>No alliance possible. They are hostile, and revealed Skin Bandits are killed on sight by most factions.</p>` },
        { h: 'Military Strength', body: `<p>As Skeletons under the skin, they resist cutting damage and are vulnerable to blunt weapons. Their advantage is surprise, not raw power.</p>` },
        { h: 'Best Uses', body: `<p>Best for: Skeleton-component salvage and the lore reveal of the wasteland's deeper rot.</p>` }
      ],
      warn: `A lone "traveller" approaching your squad in the wrong region is not always a traveller. Keep formation.`,
      infobox: [['Type', 'Infiltrator bandits'], ['Composition', 'Disguised Skeletons'], ['Tactic', 'Ambush'], ['Weakness', 'Blunt damage'], ['Threat tier', 'Moderate']],
      related: [
        { href: '/factions/skeleton-bandits', label: 'Skeleton Bandits' },
        { href: '/regions/skinners-roam', label: "Skinner's Roam" },
        { href: '/lore/skeleton-history', label: 'Skeleton History' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'reavers',
      name: 'The Reavers',
      disposition: 'Hostile',
      summary: `Brutal slavers and raiders of the far north and east, beyond the reach of the major powers. Strong, organised and cruel.`,
      intro: `The United Cities at least pretends slavery is business. The Reavers do not bother pretending.`,
      sections: [
        { h: 'Overview', body: `<p>The Reavers are a powerful raiding and slaving culture inhabiting the harsh north-eastern regions. Unconstrained by the major factions, they are organised, well-armed and aggressive.</p>` },
        { h: 'Gameplay Impact', body: `<p>Reaver territory is genuine endgame country. Their patrols are strong, they enslave the defeated, and their towns sit among the deadliest regions in the game.</p>` },
        { h: 'Joining & Reputation', body: `<p>No meaningful alliance. They are an obstacle and a source of bounties for endgame squads.</p>` },
        { h: 'Military Strength', body: `<p>Reaver units are heavily equipped and fight in disciplined groups — far above bandit tier. They are a serious threat even to a trained squad.</p>` },
        { h: 'Best Uses', body: `<p>Best for: endgame challenge content, high-value gear drops, and bounty income for a fully-developed squad.</p>` }
      ],
      warn: `Reavers are not early or mid-game content. Wandering into their lands underprepared ends runs.`,
      infobox: [['Type', 'Raider / slaver power'], ['Territory', 'North-eastern wastes'], ['Game stage', 'Endgame'], ['Tactic', 'Organised raiding'], ['Threat tier', 'Extreme']],
      related: [
        { href: '/regions/the-great-desert', label: 'The Great Desert' },
        { href: '/factions/slave-traders', label: 'Slave Traders' },
        { href: '/guides/ironman-challenge', label: 'Ironman Challenge' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'nomads',
      name: 'The Nomads',
      disposition: 'Friendly',
      summary: `Wandering desert traders who travel in caravans with herds of beasts. Harmless, useful and a good source of pack animals.`,
      intro: `The Nomads survive the desert by never stopping. Watch how they do it — there is a lesson in every caravan.`,
      sections: [
        { h: 'Overview', body: `<p>The Nomads are migratory traders crossing the central and western deserts in caravans, herding garru and bonedogs as they go. They claim no territory and pick no fights.</p>` },
        { h: 'Gameplay Impact', body: `<p>Nomad caravans are a friendly sight — they trade goods, sell pack animals, and never threaten you. Meeting one is a chance to restock and buy a garru for hauling loot.</p>` },
        { h: 'Joining & Reputation', body: `<p>They stay friendly through fair trade. Attacking a caravan is both profitable and a quick way to make a harmless faction hostile — rarely worth it.</p>` },
        { h: 'Military Strength', body: `<p>Caravan guards can defend against light bandit raids but the Nomads are not a military faction. Survival, not conquest, is their doctrine.</p>` },
        { h: 'Best Uses', body: `<p>Best for: buying pack animals (especially garru), mobile restocking, and learning desert travel routes.</p>` }
      ],
      tip: `Buy a garru from a Nomad caravan early — pack animals carry loot you would otherwise leave behind.`,
      infobox: [['Type', 'Wandering traders'], ['Territory', 'None (migratory)'], ['Sells', 'Goods, pack animals'], ['Politics', 'Neutral'], ['Threat tier', 'Low']],
      related: [
        { href: '/guides/trading-routes', label: 'Trading Routes' },
        { href: '/regions/the-great-desert', label: 'The Great Desert' },
        { href: '/guides/animal-squad', label: 'Animal Squad Guide' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'shinobi-thieves',
      name: 'The Shinobi Thieves',
      disposition: 'Conditional',
      summary: `A guild of thieves operating from hidden Thieves' Towers. Join them and the world's locks open for you.`,
      intro: `The Shinobi Thieves do not steal because they are poor. They steal because the wasteland left the doors unlocked.`,
      sections: [
        { h: 'Overview', body: `<p>The Shinobi Thieves are a covert guild running hidden Thieves' Towers in many cities. They deal in stolen goods, lockpicking knowledge and quiet escape routes.</p>` },
        { h: 'Gameplay Impact', body: `<p>Joining the Shinobi Thieves grants access to their towers as safe houses, lets you sell stolen goods, and supports a stealth-and-theft playstyle. It is one of the few "joinable" factions with concrete mechanical perks.</p>` },
        { h: 'Joining & Reputation', body: `<p>You join by seeking out a Thieves' Tower and meeting the Master Thief. Membership is tied to a stealthy, low-violence approach to the game.</p>` },
        { h: 'Military Strength', body: `<p>The Shinobi are not fighters. Their power is information, fences for stolen goods, and refuge — not soldiers.</p>` },
        { h: 'Best Uses', body: `<p>Best for: stealth playthroughs, fencing stolen loot, lockpicking and assassination builds, and safe houses in hostile cities.</p>` }
      ],
      tip: `Join the Shinobi Thieves early if you plan a stealth run — their towers double as free safe houses across many cities.`,
      infobox: [['Type', "Thieves' guild"], ['Bases', "Hidden Thieves' Towers"], ['Joinable', 'Yes'], ['Playstyle', 'Stealth / theft'], ['Threat tier', 'Low']],
      related: [
        { href: '/skills/stealth', label: 'Stealth' },
        { href: '/skills/lockpicking', label: 'Lockpicking' },
        { href: '/guides/stealth-builds', label: 'Stealth Builds' }
      ],
      sources: ['kenshiWiki', 'steamGuides', 'redditCommunity']
    }
  ],
  /* ---------------------------------------------------------- */
  /*                         REGIONS                            */
  /* ---------------------------------------------------------- */
  regions: [
    {
      id: 'border-zone',
      name: 'The Border Zone',
      danger: 'Moderate',
      summary: `The classic starting region. Green, central and full of Hungry Bandits — deceptively dangerous for a "beginner" zone.`,
      intro: `The Border Zone looks safe until starving bandits outnumber your squad and beat everyone unconscious for stale bread.`,
      sections: [
        { h: 'Environment', body: `<p>The Border Zone is a temperate green region between Holy Nation and Shek territory, holding the iconic starter town of the Hub. Mild climate, no environmental damage, decent farmland.</p>` },
        { h: 'Threats', body: `<p>The signature threat is the Hungry Bandit — desperate, starving raiders who attack for food. They are weak individually but travel in large packs. Dust Bandits and Holy Nation patrols also cross the region.</p>` },
        { h: 'Loot & Resources', body: `<p>Copper and iron nodes are common, and the Hub sits on a copper-rich patch that makes mining a reliable early income. Farmland is workable. Ancient ruins are modest but accessible.</p>` },
        { h: 'Best Uses', body: `<p>Early-game training, copper mining for starting cash, and a stepping stone to Squin and Shek territory. A reasonable but not painless first home.</p>` }
      ],
      warn: `"Beginner region" does not mean safe. Hungry Bandit packs can knock out a fresh squad. Mine near the Hub, keep the town gate close, and run when outnumbered.`,
      infobox: [['Climate', 'Temperate'], ['Key town', 'The Hub'], ['Main threat', 'Hungry Bandits'], ['Resources', 'Copper, iron'], ['Recommended', 'Early game']],
      related: [
        { href: '/cities/the-hub', label: 'The Hub' },
        { href: '/cities/squin', label: 'Squin' },
        { href: '/guides/copper-mining', label: 'Copper Mining' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'holy-nation-territory',
      name: 'Holy Nation Territory',
      danger: 'Low',
      summary: `Green, farmed and patrolled — the safest land on the map for the right character, a minefield for the wrong one.`,
      intro: `Holy Nation land is the closest Kenshi gets to peace. Whether you are allowed to enjoy it depends entirely on your face.`,
      sections: [
        { h: 'Environment', body: `<p>A band of fertile green territory across the centre-west of the map, dotted with farms, fortified towns and shrines. No environmental hazards, excellent farmland, mild weather.</p>` },
        { h: 'Threats', body: `<p>For tolerated characters, very few — Paladin patrols keep bandits suppressed. For Shek, Hivers, Skeletons and women, the Holy Nation itself is the threat.</p>` },
        { h: 'Loot & Resources', body: `<p>The best general farmland in the game, plus stable towns for trade. Ore is modest; the value here is safety and agriculture.</p>` },
        { h: 'Best Uses', body: `<p>A safe Greenlander base, large-scale farming, and low-stress early training. Wasted on a character the Holy Nation refuses to tolerate.</p>` }
      ],
      warn: `If your squad includes "unclean" races, Holy Nation towns will turn on you at the gate. Scout your roster before settling here.`,
      infobox: [['Climate', 'Temperate, fertile'], ['Controlled by', 'Holy Nation'], ['Key towns', 'Stack, Blister Hill, Bad Teeth'], ['Resources', 'Farmland'], ['Recommended', 'Early game']],
      related: [
        { href: '/factions/holy-nation', label: 'Holy Nation' },
        { href: '/cities/blister-hill', label: 'Blister Hill' },
        { href: '/base-building/farming-systems', label: 'Farming Systems' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'the-great-desert',
      name: 'The Great Desert',
      danger: 'High',
      summary: `The vast eastern heartland of the United Cities — rich in ore and money, thick with slavers and Dust Bandits.`,
      intro: `The Great Desert pays better than anywhere else. It also collects its debts in chains.`,
      sections: [
        { h: 'Environment', body: `<p>An enormous arid region forming the core of United Cities territory. Hot, dry, with frequent dust and acid-rain pockets at the edges. Sparse vegetation, abundant rock and ore.</p>` },
        { h: 'Threats', body: `<p>Dust Bandits, slaver patrols, and United Cities forces if you are wanted. The desert is patrolled, but the patrols are as likely to enslave you as protect you.</p>` },
        { h: 'Loot & Resources', body: `<p>Some of the richest ore in the game — copper and iron in quantity, plus stone. UC cities offer the deepest markets for selling. Mining and trade here fund mid-game expansion.</p>` },
        { h: 'Best Uses', body: `<p>Mid-game economy: heavy mining, trade routes between UC cities, and bounty hunting. A strong but politically loaded place to base.</p>` }
      ],
      warn: `Lose a fight here while wanted and you wake up enslaved, not dead. Keep your bounties clear or stay out of UC patrol routes.`,
      infobox: [['Climate', 'Arid, hot'], ['Controlled by', 'United Cities'], ['Main threat', 'Dust Bandits, slavers'], ['Resources', 'Copper, iron, stone'], ['Recommended', 'Mid game']],
      related: [
        { href: '/factions/united-cities', label: 'United Cities' },
        { href: '/cities/heft', label: 'Heft' },
        { href: '/guides/smuggling', label: 'Smuggling Guide' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'fog-islands',
      name: 'The Fog Islands',
      danger: 'Extreme',
      summary: `A fog-drowned region of Hiver ruins crawling with Fogmen. High reward, very high chance of being eaten.`,
      intro: `The Fog Islands hide some of the best ruins on the map behind some of the worst odds of leaving.`,
      sections: [
        { h: 'Environment', body: `<p>A perpetually fog-shrouded region of dense terrain, broken ground and overgrown Ancient ruins. Visibility is low, which favours the things that live here.</p>` },
        { h: 'Threats', body: `<p>Fogmen — feral Hivers — in endless waves, led by the Fog Prince. They eat the downed; a lost character is usually lost for good.</p>` },
        { h: 'Loot & Resources', body: `<p>Excellent ruins with Ancient tech and engineering research. Mongrel, on the region's edge, is a Tech Hunter haven for selling it.</p>` },
        { h: 'Best Uses', body: `<p>Ruin diving and Toughness training for prepared squads. Mongrel makes a viable forward base for repeated raids.</p>` }
      ],
      warn: `Fogmen devour unconscious characters. There is no "go back for the body". Do not enter without a squad that can win, not just survive.`,
      infobox: [['Climate', 'Fog, low visibility'], ['Controlled by', 'Fogmen'], ['Key town', 'Mongrel'], ['Resources', 'Ancient ruins'], ['Recommended', 'Mid–late game']],
      related: [
        { href: '/factions/fogmen', label: 'The Fogmen' },
        { href: '/cities/mongrel', label: 'Mongrel' },
        { href: '/creatures/fogmen', label: 'Fogmen (Creature)' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'vain',
      name: 'Vain',
      danger: 'High',
      summary: `A jungle of bone and rock, home to Beak Things and Skin Bandits. Beautiful, alien, and quietly lethal.`,
      intro: `Vain does not roar at you. It just watches from the bone-trees until the Beak Things are hungry.`,
      sections: [
        { h: 'Environment', body: `<p>Vain is a strange jungle region of red rock and pale bone-like vegetation in the far east. Striking to look at, with a dense, broken landscape that hides its predators.</p>` },
        { h: 'Threats', body: `<p>Beak Things — the iconic apex predator of the wasteland — den here in numbers. Skin Bandits and other dangers cross the region too.</p>` },
        { h: 'Loot & Resources', body: `<p>Beak Thing corpses are valuable, ruins exist for the brave, and the region links eastern routes. The danger keeps casual travellers — and casual loot — out.</p>` },
        { h: 'Best Uses', body: `<p>Beak Thing hunting for income and Toughness training, and a route through the far east for established squads.</p>` }
      ],
      warn: `Beak Things are fast, hit hard, and eat the downed. Vain is not a sightseeing trip. Travel it armed and in numbers.`,
      infobox: [['Climate', 'Bone jungle'], ['Main threat', 'Beak Things'], ['Resources', 'Creature loot, ruins'], ['Region type', 'Wilderness'], ['Recommended', 'Mid–late game']],
      related: [
        { href: '/creatures/beak-things', label: 'Beak Things' },
        { href: '/guides/avoiding-beak-things', label: 'How To Avoid Beak Things' },
        { href: '/factions/skin-bandits', label: 'Skin Bandits' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'the-swamp',
      name: 'The Swamp',
      danger: 'High',
      summary: `A toxic wetland of acid rain and Blood Spiders — and the heart of the wasteland's drug economy.`,
      intro: `The Swamp will rot your boots, poison your rain and pay you handsomely for the privilege.`,
      sections: [
        { h: 'Environment', body: `<p>A dark, waterlogged region in the south-west with frequent acid rain that damages unprotected characters. Murky, dense and oppressive.</p>` },
        { h: 'Threats', body: `<p>Blood Spiders hunt in packs, Swamp Ninjas and bandits roam, and the acid rain itself is a slow environmental killer without proper coverage.</p>` },
        { h: 'Loot & Resources', body: `<p>The Swamp is the centre of the hashish trade — hemp grows well and the drug economy is lucrative. Towns like Mud Town and Shark anchor a grey-market boom.</p>` },
        { h: 'Best Uses', body: `<p>Hashish farming and trading, an outlaw economy base, and a foothold for anti-Holy-Nation play with the Flotsam Ninjas.</p>` }
      ],
      warn: `Acid rain damages characters caught in the open. Build or shelter with proper roofing, and watch the weather before long marches.`,
      infobox: [['Climate', 'Acid rain, wet'], ['Main threat', 'Blood Spiders, acid'], ['Economy', 'Hashish / hemp'], ['Key towns', 'Mud Town, Shark'], ['Recommended', 'Mid game']],
      related: [
        { href: '/guides/hashish-trading', label: 'Hashish Trading' },
        { href: '/factions/flotsam-ninjas', label: 'Flotsam Ninjas' },
        { href: '/creatures/blood-spiders', label: 'Blood Spiders' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'deadlands',
      name: 'The Deadlands',
      danger: 'Extreme',
      summary: `A black, blasted wasteland of Ancient ruin and roaming Skeletons. The scar the old world left behind.`,
      intro: `The Deadlands are what victory looked like, once. Nobody won.`,
      sections: [
        { h: 'Environment', body: `<p>A vast region of dark, cracked, lifeless ground in the centre-east, littered with the wreckage of the Ancient civilisation. Acid rain falls and nothing grows.</p>` },
        { h: 'Threats', body: `<p>Skeleton Bandits and the Broken roam in force, indifferent to hunger and fear. Environmental damage from acid rain compounds the danger.</p>` },
        { h: 'Loot & Resources', body: `<p>Outstanding Ancient ruins — robotics components, Skeleton Repair Kits, engineering research and AI Cores for those who can survive the trip.</p>` },
        { h: 'Best Uses', body: `<p>High-tier ruin diving, robotics-economy supply runs, and lore. Strictly endgame travel.</p>` }
      ],
      warn: `The Deadlands combine relentless Skeleton enemies with acid rain. Only a strong, well-equipped squad with a clear extraction plan should enter.`,
      infobox: [['Climate', 'Acid rain, barren'], ['Main threat', 'Skeleton Bandits'], ['Resources', 'Ancient tech, AI Cores'], ['Region type', 'Ruined wasteland'], ['Recommended', 'Endgame']],
      related: [
        { href: '/factions/skeleton-bandits', label: 'Skeleton Bandits' },
        { href: '/lore/the-collapse', label: 'The Collapse' },
        { href: '/guides/robotics-economy', label: 'Robotics Economy' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'ashlands',
      name: 'The Ashlands',
      danger: 'Extreme',
      summary: `The endgame region — choking ash, lethal acid rain, and the most dangerous enemies in the world.`,
      intro: `The Ashlands are where Kenshi stops testing you and starts trying, sincerely, to kill you.`,
      sections: [
        { h: 'Environment', body: `<p>A volcanic, ash-choked region in the far east. Constant heavy acid rain, near-zero visibility in places, and a landscape actively hostile to organic life.</p>` },
        { h: 'Threats', body: `<p>Elder Beak Things, powerful Skeleton enemies, and the deepest secrets of the Ancient world. Every threat here is tuned for fully-developed squads.</p>` },
        { h: 'Loot & Resources', body: `<p>The richest Ancient tech in the game and the lore payoff of the entire map — but only for squads that can survive the journey and the fights.</p>` },
        { h: 'Best Uses', body: `<p>The final challenge: lore discovery, the best loot in the game, and a true test of an endgame squad.</p>` }
      ],
      warn: `The Ashlands assume a maxed, fully-equipped squad. Skeleton-only squads handle the acid rain best. There is no casual entry.`,
      infobox: [['Climate', 'Volcanic, acid rain'], ['Main threat', 'Elder Beak Things'], ['Resources', 'Top-tier Ancient tech'], ['Region type', 'Endgame zone'], ['Recommended', 'Endgame only']],
      related: [
        { href: '/lore/ancient-empire', label: 'The Ancient Empire' },
        { href: '/creatures/beak-things', label: 'Beak Things' },
        { href: '/guides/hardcore-settings', label: 'Hardcore Survival Settings' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'leviathan-coast',
      name: 'The Leviathan Coast',
      danger: 'High',
      summary: `A forested coast roamed by the colossal Leviathans. The danger here can also be the best loot on the map.`,
      intro: `On the Leviathan Coast the biggest threat is also the biggest payday — if you can drop it without dying under it.`,
      sections: [
        { h: 'Environment', body: `<p>A green, forested coastal region with rolling terrain and a mild climate. Pleasant by Kenshi standards — until a Leviathan ambles into view.</p>` },
        { h: 'Threats', body: `<p>Leviathans — enormous creatures that are extremely dangerous up close. Crab Raiders also operate here, though they can become allies.</p>` },
        { h: 'Loot & Resources', body: `<p>Leviathan corpses yield Leviathan Pearls, among the most valuable single items in the game. Decent farmland and a workable coast otherwise.</p>` },
        { h: 'Best Uses', body: `<p>Leviathan hunting for huge income, befriending the Crab Raiders, and a scenic mid-game base for a strong squad.</p>` }
      ],
      warn: `Leviathans are slow but devastating. Hunt them with ranged support and an escape route — never get cornered against the terrain.`,
      infobox: [['Climate', 'Temperate, forested'], ['Main threat', 'Leviathans'], ['Resources', 'Leviathan Pearls'], ['Faction', 'Crab Raiders'], ['Recommended', 'Mid game']],
      related: [
        { href: '/creatures/leviathans', label: 'Leviathans' },
        { href: '/factions/crab-raiders', label: 'Crab Raiders' },
        { href: '/guides/best-money-making-methods', label: 'Best Money Methods' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'cannibal-plains',
      name: 'The Cannibal Plains',
      danger: 'Extreme',
      summary: `Forested eastern hills swarming with Cannibals. Cross it and you may not cross back.`,
      intro: `The Cannibal Plains are not patrolled, not policed and not forgiving. They are simply hungry.`,
      sections: [
        { h: 'Environment', body: `<p>A region of forested hills and plains in the east, green and almost pleasant — which is exactly how it lures travellers in.</p>` },
        { h: 'Threats', body: `<p>Cannibal hordes in overwhelming numbers. They patrol constantly and converge on any squad they spot, then carry the downed back to their cooking fires.</p>` },
        { h: 'Loot & Resources', body: `<p>Bounties on Cannibal leaders, decent terrain, and a route east — all gated behind the swarm.</p>` },
        { h: 'Best Uses', body: `<p>Toughness training for strong squads and a path toward the eastern endgame regions.</p>` }
      ],
      warn: `The Cannibal Plains can pull a fresh squad apart through numbers alone. Do not cross until you can out-kill the swarm or out-run it entirely.`,
      infobox: [['Climate', 'Forested hills'], ['Main threat', 'Cannibal hordes'], ['Region type', 'Wilderness'], ['Resources', 'Bounties'], ['Recommended', 'Late game']],
      related: [
        { href: '/factions/cannibals', label: 'The Cannibals' },
        { href: '/guides/cannibal-hunter-run', label: 'Cannibal Hunter Run' },
        { href: '/guides/night-travel', label: 'Night Travel Guide' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'skinners-roam',
      name: "Skinner's Roam",
      danger: 'High',
      summary: `A dry borderland prowled by Skin Bandits and Black Dragon Ninjas. Trust nothing that walks toward you.`,
      intro: `In Skinner's Roam, the traveller waving hello is the one you should be watching.`,
      sections: [
        { h: 'Environment', body: `<p>An arid, rocky borderland between western territories. Open ground, scattered ruins, exposed travel routes.</p>` },
        { h: 'Threats', body: `<p>Skin Bandits — Skeletons disguised as humans — ambush travellers here, alongside Black Dragon Ninjas and ordinary raiders.</p>` },
        { h: 'Loot & Resources', body: `<p>Modest ore, scattered ruins, and Skeleton-component salvage from defeated Skin Bandits.</p>` },
        { h: 'Best Uses', body: `<p>A travel corridor between western regions and a source of Skeleton salvage for the watchful.</p>` }
      ],
      warn: `Skin Bandits look like normal travellers until they strike. Keep your squad in formation and treat lone "wanderers" with suspicion.`,
      infobox: [['Climate', 'Arid borderland'], ['Main threat', 'Skin Bandits'], ['Resources', 'Skeleton salvage'], ['Region type', 'Travel corridor'], ['Recommended', 'Mid game']],
      related: [
        { href: '/factions/skin-bandits', label: 'Skin Bandits' },
        { href: '/factions/skeleton-bandits', label: 'Skeleton Bandits' },
        { href: '/guides/squad-formation', label: 'Squad Formation Guide' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'stobes-gamble',
      name: "Stobe's Gamble",
      danger: 'High',
      summary: `A bleak acid-rain region named for a doomed wanderer. The land itself is the enemy here.`,
      intro: `Stobe took the gamble, and the desert kept the winnings. The name is a warning, not a tribute.`,
      sections: [
        { h: 'Environment', body: `<p>A harsh, exposed region of acid rain and barren ground, tied to the legend of Stobe — a wanderer remembered for his long, hopeless journey.</p>` },
        { h: 'Threats', body: `<p>Acid rain is the constant threat, draining unprotected characters. Bandits and roaming dangers add to a generally inhospitable crossing.</p>` },
        { h: 'Loot & Resources', body: `<p>Scattered ruins and lore tied to Stobe's story. The region rewards curiosity more than mining.</p>` },
        { h: 'Best Uses', body: `<p>Lore exploration and a tough travel route for prepared squads.</p>` }
      ],
      warn: `Without acid-resistant coverage, crossing Stobe's Gamble slowly kills your squad. Roof your routes or carry the right protection.`,
      infobox: [['Climate', 'Acid rain, barren'], ['Main threat', 'Environment'], ['Resources', 'Ruins, lore'], ['Region type', 'Hazard zone'], ['Recommended', 'Mid–late game']],
      related: [
        { href: '/lore/stobe', label: 'Stobe' },
        { href: '/guides/desert-survival', label: 'Desert Survival' },
        { href: '/regions/the-great-desert', label: 'The Great Desert' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'gut',
      name: 'The Gut',
      danger: 'Extreme',
      summary: `A grim region near the swamp, dense with Beak Things and Cannibal pressure. A corridor to the deep east.`,
      intro: `They call it the Gut because the wasteland digests whatever wanders in.`,
      sections: [
        { h: 'Environment', body: `<p>A dark, broken region bordering the swamp and the eastern wilds — muddy, overgrown and oppressive.</p>` },
        { h: 'Threats', body: `<p>Beak Things den here in dangerous numbers, and Cannibal and bandit pressure from neighbouring regions bleeds in. A genuinely deadly crossing.</p>` },
        { h: 'Loot & Resources', body: `<p>Creature loot and a route toward eastern endgame regions. Little reason to linger beyond passing through.</p>` },
        { h: 'Best Uses', body: `<p>A travel corridor for strong squads heading deeper east, and Beak Thing hunting for those equipped for it.</p>` }
      ],
      warn: `The Gut concentrates Beak Things. Crossing it underprepared is one of the faster ways to lose a mid-game squad.`,
      infobox: [['Climate', 'Dark, overgrown'], ['Main threat', 'Beak Things'], ['Region type', 'Corridor'], ['Resources', 'Creature loot'], ['Recommended', 'Late game']],
      related: [
        { href: '/creatures/beak-things', label: 'Beak Things' },
        { href: '/regions/the-swamp', label: 'The Swamp' },
        { href: '/guides/avoiding-beak-things', label: 'How To Avoid Beak Things' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'black-desert',
      name: 'The Black Desert',
      danger: 'Extreme',
      summary: `A dark, irradiated desert of Ancient ruin and Skeleton presence. Where the old world's machines still stir.`,
      intro: `The Black Desert is quiet. That quiet is not safety — it is the sound of a place where nothing soft survived.`,
      sections: [
        { h: 'Environment', body: `<p>A dark, blasted desert region scarred by the Ancient civilisation's fall, with acid rain and a landscape that has never recovered.</p>` },
        { h: 'Threats', body: `<p>Skeleton enemies and the Broken patrol the ruins, untroubled by the environment that punishes organic squads.</p>` },
        { h: 'Loot & Resources', body: `<p>High-value Ancient ruins, robotics components and lore. The Black Desert is a destination for tech, not a place to live.</p>` },
        { h: 'Best Uses', body: `<p>Late-game ruin diving and robotics-economy supply runs.</p>` }
      ],
      warn: `Acid rain plus relentless Skeletons makes the Black Desert an endgame trip. Skeleton squads cope best with the environment.`,
      infobox: [['Climate', 'Dark, acid rain'], ['Main threat', 'Skeletons'], ['Resources', 'Ancient tech'], ['Region type', 'Ruined wasteland'], ['Recommended', 'Endgame']],
      related: [
        { href: '/regions/deadlands', label: 'The Deadlands' },
        { href: '/lore/ai-core-history', label: 'AI Core History' },
        { href: '/races/skeletons', label: 'Skeletons (Race)' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'sonorous-dark',
      name: 'The Sonorous Dark',
      danger: 'Extreme',
      summary: `A perpetually dark, fog-bound region of strange sound and Fogman presence. Few go in; fewer come back.`,
      intro: `The Sonorous Dark hums. Nobody who has stood in it for long can tell you what makes the sound.`,
      sections: [
        { h: 'Environment', body: `<p>A region locked in permanent darkness and heavy fog, named for the eerie, resonant quality of the air. Visibility is minimal and orientation is hard.</p>` },
        { h: 'Threats', body: `<p>Fogmen and other fog-dwellers haunt the region, and the darkness itself favours ambush. Getting lost here is its own danger.</p>` },
        { h: 'Loot & Resources', body: `<p>Ruins and lore for those willing to brave the dark, alongside Fog Island-style salvage.</p>` },
        { h: 'Best Uses', body: `<p>Late-game exploration and atmosphere for squads that have already conquered the Fog Islands.</p>` }
      ],
      warn: `Permanent darkness and fog make navigation treacherous. Travel the Sonorous Dark only with a strong, self-sufficient squad.`,
      infobox: [['Climate', 'Permanent dark, fog'], ['Main threat', 'Fogmen'], ['Region type', 'Hazard zone'], ['Resources', 'Ruins, lore'], ['Recommended', 'Endgame']],
      related: [
        { href: '/regions/fog-islands', label: 'Fog Islands' },
        { href: '/factions/fogmen', label: 'The Fogmen' },
        { href: '/guides/night-travel', label: 'Night Travel Guide' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    }
  ],
  /* ---------------------------------------------------------- */
  /*                     CITIES & SETTLEMENTS                   */
  /* ---------------------------------------------------------- */
  cities: [
    {
      id: 'the-hub',
      name: 'The Hub',
      controlledBy: 'Independent',
      summary: `A half-ruined free town in the Border Zone — the unofficial starting point for countless wasteland careers.`,
      intro: `The Hub is not a city so much as the rubble of one, propped up by people too stubborn to leave.`,
      sections: [
        { h: 'Who Controls It', body: `<p>The Hub is an independent settlement with no faction overlord, sitting in copper-rich land in the Border Zone. That independence means no powerful protectors — and no powerful enemies.</p>` },
        { h: 'Shops & Services', body: `<p>Basic vendors for food, weapons and tools, plus bars for recruiting wandering mercenaries. Stock is modest; the value is location, not luxury.</p>` },
        { h: 'Defences & Dangers', body: `<p>There are no real town guards. Hungry Bandit packs raid the area constantly, and the Hub itself can be overrun. The copper nodes that make it useful also keep it dangerous.</p>` },
        { h: 'Best Reasons To Visit', body: `<p>It is the classic first stop: cheap recruits, copper mining for starting cash, and a central position with roads to Squin and beyond.</p>` }
      ],
      tip: `Mine copper just outside the Hub for your first 1,000 cats, then move your squad to Squin where guards actually exist.`,
      infobox: [['Region', 'Border Zone'], ['Controlled by', 'Independent'], ['Guards', 'None'], ['Resources', 'Copper'], ['Best for', 'Early game start']],
      related: [
        { href: '/regions/border-zone', label: 'The Border Zone' },
        { href: '/cities/squin', label: 'Squin' },
        { href: '/guides/copper-mining', label: 'Copper Mining' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'squin',
      name: 'Squin',
      controlledBy: 'Shek Kingdom',
      summary: `A walled Shek border town near the Hub. The single most recommended beginner base in the game.`,
      intro: `Squin is where new players stop dying for no reason and start dying for good ones.`,
      sections: [
        { h: 'Who Controls It', body: `<p>Squin is a Shek Kingdom border town. The Shek tolerate all races, so almost any character can settle here without trouble.</p>` },
        { h: 'Shops & Services', body: `<p>Solid vendors for early gear, a bar for recruiting, and a smithy. Everything a starting squad needs to equip itself sits behind those walls.</p>` },
        { h: 'Defences & Dangers', body: `<p>Tough Shek guards patrol the walls and crush most bandit raids. The main external danger is the Border Zone's bandit packs — and they break on Squin's defenders.</p>` },
        { h: 'Best Reasons To Visit', body: `<p>Recruit cheap mercs in the bar, train Athletics and combat against bandits the guards help finish, and use Squin as a safe forward base.</p>` }
      ],
      tip: `Drag knocked-out bandits to Squin's gates and let the guards help. It is free, low-risk combat XP for a new squad.`,
      infobox: [['Region', 'Border Zone'], ['Controlled by', 'Shek Kingdom'], ['Guards', 'Strong'], ['Tolerates', 'All races'], ['Best for', 'Beginner base']],
      related: [
        { href: '/factions/shek-kingdom', label: 'Shek Kingdom' },
        { href: '/cities/the-hub', label: 'The Hub' },
        { href: '/guides/surviving-first-week', label: 'Surviving Your First Week' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'stack',
      name: 'Stack',
      controlledBy: 'Holy Nation',
      summary: `A fortified Holy Nation city on the Shek border — a front-line town where the religious war is loudest.`,
      intro: `Stack stands where the Holy Nation ends and the Shek begin. It has the architecture of a city and the mood of a barracks.`,
      sections: [
        { h: 'Who Controls It', body: `<p>Stack is a major Holy Nation city near Shek territory, heavily garrisoned because of its front-line position.</p>` },
        { h: 'Shops & Services', body: `<p>Good Holy Nation vendors, weapon and armour merchants, and recruitment — all gated behind Holy Nation tolerance of your squad.</p>` },
        { h: 'Defences & Dangers', body: `<p>Strong Paladin garrison; safe for tolerated characters, hostile ground for Shek, Hivers and Skeletons. Shek raids test the walls.</p>` },
        { h: 'Best Reasons To Visit', body: `<p>Trade and recruitment for Greenlander squads, and a front-row seat to the Holy Nation–Shek conflict.</p>` }
      ],
      warn: `Stack is a front-line Holy Nation city. Non-tolerated races are not just unwelcome here — they are targets.`,
      infobox: [['Region', 'Holy Nation Territory'], ['Controlled by', 'Holy Nation'], ['Guards', 'Strong (Paladins)'], ['Tolerates', 'Greenlanders'], ['Best for', 'Greenlander trade']],
      related: [
        { href: '/factions/holy-nation', label: 'Holy Nation' },
        { href: '/cities/blister-hill', label: 'Blister Hill' },
        { href: '/regions/holy-nation-territory', label: 'Holy Nation Territory' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'blister-hill',
      name: 'Blister Hill',
      controlledBy: 'Holy Nation',
      summary: `The Holy Nation's fortress-capital seat — heavily walled, heavily garrisoned, and the heart of the theocracy.`,
      intro: `Blister Hill is the Holy Nation showing you exactly how powerful it is, in stone and in soldiers.`,
      sections: [
        { h: 'Who Controls It', body: `<p>Blister Hill is one of the Holy Nation's central fortress cities, a seat of religious and military power deep in safe theocracy territory.</p>` },
        { h: 'Shops & Services', body: `<p>Deep markets, quality armour and weapons, and recruitment of Holy Nation soldiers for allied characters.</p>` },
        { h: 'Defences & Dangers', body: `<p>One of the most heavily defended cities in the game — massive walls and a strong Paladin garrison. Almost untouchable for tolerated visitors, lethal for the rest.</p>` },
        { h: 'Best Reasons To Visit', body: `<p>Top-tier Holy Nation trade, soldier recruitment, and the lore centre of the religion.</p>` }
      ],
      warn: `Blister Hill is the safest place in the Holy Nation for Greenlanders and one of the most dangerous for everyone else.`,
      infobox: [['Region', 'Holy Nation Territory'], ['Controlled by', 'Holy Nation'], ['Guards', 'Very strong'], ['Tolerates', 'Greenlanders'], ['Best for', 'Holy Nation play']],
      related: [
        { href: '/factions/holy-nation', label: 'Holy Nation' },
        { href: '/lore/holy-nation-lore', label: 'Holy Nation Lore' },
        { href: '/guides/holy-nation-playthrough', label: 'Holy Nation Playthrough' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'heft',
      name: 'Heft',
      controlledBy: 'United Cities',
      summary: `A major United Cities metropolis — wealthy, noble-run, and one of the best markets on the map.`,
      intro: `Heft has everything money can buy, and a great deal of what it should not be allowed to.`,
      sections: [
        { h: 'Who Controls It', body: `<p>Heft is one of the largest United Cities metropolises, governed by nobles and policed by UC Samurai. A centre of trade, politics and slavery.</p>` },
        { h: 'Shops & Services', body: `<p>Among the deepest markets in the game — weapons, armour, goods and bulk buyers. The Heavy Armoury here sells some of the strongest plate available.</p>` },
        { h: 'Defences & Dangers', body: `<p>Strong UC Samurai garrison. Safe to trade in if you keep a clean record; get wanted and the same guards may enslave you.</p>` },
        { h: 'Best Reasons To Visit', body: `<p>Mid-game trade, top-tier armour shopping, and bounty turn-ins. Keep your nose clean and Heft is a goldmine.</p>` }
      ],
      tip: `Heft's Heavy Armoury is one of the best places to buy high-grade plate without crafting it yourself.`,
      infobox: [['Region', 'The Great Desert'], ['Controlled by', 'United Cities'], ['Guards', 'Strong (Samurai)'], ['Economy', 'Trade, slavery'], ['Best for', 'Mid-game trade']],
      related: [
        { href: '/factions/united-cities', label: 'United Cities' },
        { href: '/armor/heavy-armor', label: 'Heavy Armor' },
        { href: '/guides/trading-routes', label: 'Trading Routes' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'mongrel',
      name: 'Mongrel',
      controlledBy: 'Tech Hunters',
      summary: `A fortified Tech Hunter town on the edge of the Fog Islands — a brave outpost holding back the fog.`,
      intro: `Mongrel survives on the Fog Islands' doorstep through sheer, grim discipline. Every wall there has been tested.`,
      sections: [
        { h: 'Who Controls It', body: `<p>Mongrel is a Tech Hunter stronghold built right on the edge of the Fog Islands, in constant low-grade war with the Fogmen.</p>` },
        { h: 'Shops & Services', body: `<p>Tech Hunter vendors who buy Ancient salvage at good prices and sell exploration gear. A bar for recruiting hardened fighters.</p>` },
        { h: 'Defences & Dangers', body: `<p>Strong Tech Hunter defenders and walls hold off frequent Fogman assaults. Inside is safe; the surrounding region absolutely is not.</p>` },
        { h: 'Best Reasons To Visit', body: `<p>The ideal forward base for Fog Island ruin diving — sell salvage, heal up, recruit, and head back out.</p>` }
      ],
      tip: `Use Mongrel as a staging base for Fog Island ruin runs. Short trips out, sell, repair, repeat.`,
      infobox: [['Region', 'Fog Islands'], ['Controlled by', 'Tech Hunters'], ['Guards', 'Strong'], ['Tolerates', 'All races'], ['Best for', 'Ruin staging']],
      related: [
        { href: '/factions/tech-hunters', label: 'Tech Hunters' },
        { href: '/regions/fog-islands', label: 'Fog Islands' },
        { href: '/factions/fogmen', label: 'The Fogmen' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'admag',
      name: 'Admag',
      controlledBy: 'Shek Kingdom',
      summary: `The capital of the Shek Kingdom and seat of Queen Esata — a warrior city of stone and scars.`,
      intro: `Admag does not boast. It simply stands, and dares the Holy Nation to come and try.`,
      sections: [
        { h: 'Who Controls It', body: `<p>Admag is the Shek Kingdom's capital, home to Queen Esata the Stone Golem and the heart of Shek martial culture.</p>` },
        { h: 'Shops & Services', body: `<p>Shek vendors specialising in heavy weapons and armour, and recruitment of strong Shek warriors for allied characters.</p>` },
        { h: 'Defences & Dangers', body: `<p>A powerful Shek garrison defends the capital. Safe for all races, but it sits in a region pressed by the Holy Nation war.</p>` },
        { h: 'Best Reasons To Visit', body: `<p>Recruit elite Shek fighters, buy heavy weapons, and engage the Shek faction storyline.</p>` }
      ],
      tip: `Admag is one of the best places to recruit naturally strong Shek melee fighters once you have Shek reputation.`,
      infobox: [['Region', 'Shek territory'], ['Controlled by', 'Shek Kingdom'], ['Ruler', 'Queen Esata'], ['Tolerates', 'All races'], ['Best for', 'Shek recruits']],
      related: [
        { href: '/factions/shek-kingdom', label: 'Shek Kingdom' },
        { href: '/races/shek', label: 'Shek (Race)' },
        { href: '/weapons/heavy-weapons', label: 'Heavy Weapons' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'black-scratch',
      name: 'Black Scratch',
      controlledBy: 'Tech Hunters',
      summary: `A Tech Hunter town near the Deadlands — the last stop before the wasteland's most ruined country.`,
      intro: `Black Scratch is where the maps stop being useful and the salvage starts being worth your life.`,
      sections: [
        { h: 'Who Controls It', body: `<p>Black Scratch is a Tech Hunter settlement positioned near the Deadlands and the deep ruin regions, serving expeditions into Skeleton country.</p>` },
        { h: 'Shops & Services', body: `<p>Buyers for Ancient tech and robotics salvage, plus gear for ruin diving and a bar for recruiting.</p>` },
        { h: 'Defences & Dangers', body: `<p>Tech Hunter defenders hold the walls, but the surrounding regions crawl with Skeletons. Inside, secure; outside, endgame country.</p>` },
        { h: 'Best Reasons To Visit', body: `<p>A staging base for Deadlands and Black Desert ruin runs and selling robotics components.</p>` }
      ],
      infobox: [['Region', 'Near the Deadlands'], ['Controlled by', 'Tech Hunters'], ['Guards', 'Moderate'], ['Tolerates', 'All races'], ['Best for', 'Deadlands staging']],
      related: [
        { href: '/factions/tech-hunters', label: 'Tech Hunters' },
        { href: '/regions/deadlands', label: 'The Deadlands' },
        { href: '/guides/robotics-economy', label: 'Robotics Economy' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'flats-lagoon',
      name: 'Flats Lagoon',
      controlledBy: 'Independent',
      summary: `An isolated independent trade town in the eastern desert — a grey-market oasis between the great powers.`,
      intro: `Flats Lagoon answers to no flag, which is exactly why everyone with something to hide ends up trading there.`,
      sections: [
        { h: 'Who Controls It', body: `<p>Flats Lagoon is an independent trade settlement deep in the eastern Great Desert, beholden to no major faction.</p>` },
        { h: 'Shops & Services', body: `<p>An unusually rich and varied market for an independent town — weapons, armour, research and goods, with fewer political strings attached.</p>` },
        { h: 'Defences & Dangers', body: `<p>It hires its own guards and stands far from protection, so the surrounding desert is dangerous. The town itself is a reasonably safe trade stop.</p>` },
        { h: 'Best Reasons To Visit', body: `<p>Politically neutral trade, varied stock, and a base option that does not commit you to any faction.</p>` }
      ],
      tip: `Flats Lagoon is a strong neutral trade hub for squads who want to avoid faction entanglements.`,
      infobox: [['Region', 'The Great Desert (east)'], ['Controlled by', 'Independent'], ['Guards', 'Hired'], ['Economy', 'Trade'], ['Best for', 'Neutral trade']],
      related: [
        { href: '/regions/the-great-desert', label: 'The Great Desert' },
        { href: '/guides/trading-routes', label: 'Trading Routes' },
        { href: '/guides/smuggling', label: 'Smuggling Guide' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'shark',
      name: 'Shark',
      controlledBy: 'Independent',
      summary: `A lawless swamp city built on stilts and crime — the unofficial capital of the hashish trade.`,
      intro: `Shark does not have laws. It has prices, and a long memory for who paid them.`,
      sections: [
        { h: 'Who Controls It', body: `<p>Shark is a large independent city in the Swamp, effectively run by criminal interests and the drug economy. No major faction holds it.</p>` },
        { h: 'Shops & Services', body: `<p>Grey-market vendors, drug buyers, and bars thick with mercenaries and outlaws. A natural home for smuggling and hashish trade.</p>` },
        { h: 'Defences & Dangers', body: `<p>Town guards keep order loosely; the swamp around it brings Blood Spiders and acid rain. Crime is tolerated inside in a way it never is in UC or Holy Nation cities.</p>` },
        { h: 'Best Reasons To Visit', body: `<p>Hashish selling, recruiting outlaw mercenaries, and an outlaw-economy base free of faction politics.</p>` }
      ],
      tip: `Shark is the natural hub for a hashish-trading run — process hemp nearby and sell into a market that does not ask questions.`,
      infobox: [['Region', 'The Swamp'], ['Controlled by', 'Independent'], ['Guards', 'Loose'], ['Economy', 'Hashish, crime'], ['Best for', 'Outlaw economy']],
      related: [
        { href: '/regions/the-swamp', label: 'The Swamp' },
        { href: '/guides/hashish-trading', label: 'Hashish Trading' },
        { href: '/factions/flotsam-ninjas', label: 'Flotsam Ninjas' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'catun',
      name: 'Catun',
      controlledBy: 'United Cities',
      summary: `A United Cities mining and trade city in the eastern desert — gritty, productive and slaver-adjacent.`,
      intro: `Catun runs on ore and obedience. The desert provides the first; the United Cities sees to the second.`,
      sections: [
        { h: 'Who Controls It', body: `<p>Catun is a United Cities city in the eastern Great Desert, built around mining and regional trade.</p>` },
        { h: 'Shops & Services', body: `<p>UC vendors, ore buyers and the usual recruitment options. A practical, working-town market rather than a luxury one.</p>` },
        { h: 'Defences & Dangers', body: `<p>UC Samurai garrison the town. As with all UC cities, a clean record keeps you safe and a bounty makes the guards a threat.</p>` },
        { h: 'Best Reasons To Visit', body: `<p>Selling ore, mid-game trade, and a UC foothold in the resource-rich east.</p>` }
      ],
      warn: `Catun is UC territory — slavery is a real risk for the wanted. Clear your bounties before settling nearby.`,
      infobox: [['Region', 'The Great Desert (east)'], ['Controlled by', 'United Cities'], ['Guards', 'Strong (Samurai)'], ['Economy', 'Mining, trade'], ['Best for', 'Ore selling']],
      related: [
        { href: '/factions/united-cities', label: 'United Cities' },
        { href: '/guides/copper-mining', label: 'Copper Mining' },
        { href: '/regions/the-great-desert', label: 'The Great Desert' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'worlds-end',
      name: "World's End",
      controlledBy: 'Tech Hunters',
      summary: `A remote Tech Hunter city near the deepest ruins — the last bastion before the truly dead lands.`,
      intro: `They named it World's End because, for most travellers, that is exactly what it is.`,
      sections: [
        { h: 'Who Controls It', body: `<p>World's End is a major Tech Hunter city in the remote regions near the deepest Ancient ruins, a hub for the faction's most ambitious explorers.</p>` },
        { h: 'Shops & Services', body: `<p>The best Tech Hunter market for Ancient tech, research and exploration gear. Recruitment leans toward hardened, capable fighters.</p>` },
        { h: 'Defences & Dangers', body: `<p>Well-defended for its isolation, but ringed by deadly regions. It is a safe island in extremely dangerous country.</p>` },
        { h: 'Best Reasons To Visit', body: `<p>Staging deep-ruin and endgame expeditions, selling top-tier salvage, and recruiting for the hardest content.</p>` }
      ],
      tip: `World's End is the best forward base for endgame ruin runs into the deep regions — sell, repair and resupply here.`,
      infobox: [['Region', 'Remote east'], ['Controlled by', 'Tech Hunters'], ['Guards', 'Strong'], ['Tolerates', 'All races'], ['Best for', 'Endgame staging']],
      related: [
        { href: '/factions/tech-hunters', label: 'Tech Hunters' },
        { href: '/regions/ashlands', label: 'The Ashlands' },
        { href: '/lore/ancient-empire', label: 'The Ancient Empire' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    }
  ],
  /* ---------------------------------------------------------- */
  /*                       SKILLS & STATS                       */
  /* ---------------------------------------------------------- */
  skills: [
    {
      id: 'attack',
      name: 'Attack',
      category: 'Combat',
      governs: `Your chance to land a hit and break through an opponent's defence.`,
      intro: `Attack does not make you hit harder. It makes you hit at all — and against a good blocker, that is the whole fight.`,
      sections: [
        { h: 'What It Does', body: `<p>Attack determines how often your strikes connect rather than being blocked or missed. It is checked against the enemy's Defence in every exchange.</p>` },
        { h: 'Hidden Effects', body: `<p>A large Attack–Defence gap does not just change hit chance — it changes the rhythm of combat, letting you stagger and chain an opponent who can never counter.</p>` },
        { h: 'How XP Works', body: `<p>You gain Attack XP by fighting enemies near or above your level. Beating up trivially weak foes gives almost nothing; losing carefully to stronger ones gives plenty.</p>` },
        { h: 'Best Training Methods', body: `<p>Fight enemies slightly stronger than you, with allies or town guards nearby to finish the job. Bounty hunting and supervised brawls outside Squin are reliable early routes.</p>` },
        { h: 'Common Mistakes', body: `<p>Grinding Attack on weak bandits caps you at mediocrity. The skill only climbs against opposition that can actually challenge it.</p>` }
      ],
      infobox: [['Type', 'Combat'], ['Paired with', 'Defence, Dexterity'], ['Trains vs', 'Equal-or-stronger foes'], ['Soft cap feel', 'Slows after ~70']],
      related: [
        { href: '/skills/defense', label: 'Defence' },
        { href: '/skills/dodge', label: 'Dodge' },
        { href: '/guides/melee-combat-basics', label: 'Melee Combat Basics' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'defense',
      name: 'Defence',
      category: 'Combat',
      governs: `Your chance to block incoming melee attacks.`,
      intro: `Defence is the skill that decides whether your squad survives being outnumbered. Everything else is secondary.`,
      sections: [
        { h: 'What It Does', body: `<p>Defence sets how reliably you block melee strikes. High Defence lets a single fighter hold a chokepoint against a crowd.</p>` },
        { h: 'Hidden Effects', body: `<p>Defence is checked against each attacker individually. Being surrounded splits your effective defence — three attackers are far more than three times the danger.</p>` },
        { h: 'How XP Works', body: `<p>You gain Defence XP by being attacked. Blocking, and being struck by, capable enemies trains it fast.</p>` },
        { h: 'Best Training Methods', body: `<p>Stand a tough, well-armoured character in front of a manageable group and let them weather it. Fighting near town guards keeps the training survivable.</p>` },
        { h: 'Common Mistakes', body: `<p>Letting a low-Defence character get surrounded. Defence falls apart against multiple attackers — formation matters more than the number itself.</p>` }
      ],
      infobox: [['Type', 'Combat'], ['Paired with', 'Attack, Toughness'], ['Trains vs', 'Being attacked'], ['Weakness', 'Being surrounded']],
      related: [
        { href: '/skills/attack', label: 'Attack' },
        { href: '/skills/toughness', label: 'Toughness' },
        { href: '/guides/squad-formation', label: 'Squad Formation Guide' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'toughness',
      name: 'Toughness',
      category: 'Combat',
      governs: `How much punishment you take before going down, and how well you recover.`,
      intro: `In Kenshi you grow strong by losing. Toughness is the skill that turns defeats into progress instead of funerals.`,
      sections: [
        { h: 'What It Does', body: `<p>Toughness reduces the lasting consequences of being hit — it raises the damage you can absorb before being knocked out and improves how you recover afterward.</p>` },
        { h: 'Hidden Effects', body: `<p>High Toughness makes characters get back up after a beating instead of dying, and resist losing limbs. It is the backbone of Kenshi's "fail forward" design.</p>` },
        { h: 'How XP Works', body: `<p>You gain Toughness by taking damage and surviving — by losing fights, not winning them. Getting beaten unconscious and recovering is the training loop.</p>` },
        { h: 'Best Training Methods', body: `<p>Lose fights you can survive: get knocked down near town guards or allies who will drive the enemy off, then heal and repeat. Controlled defeat is the method.</p>` },
        { h: 'Common Mistakes', body: `<p>Treating every knockdown as a disaster. With decent Toughness, being downed is a training event. Without it, the same hit is a lost character.</p>` }
      ],
      infobox: [['Type', 'Combat'], ['Trains via', 'Taking damage, losing'], ['Protects against', 'Death, lost limbs'], ['Priority', 'Very high']],
      related: [
        { href: '/guides/toughness-training', label: 'Toughness Training' },
        { href: '/skills/defense', label: 'Defence' },
        { href: '/guides/injury-recovery', label: 'Injury Recovery Guide' }
      ],
      sources: ['kenshiWiki', 'steamGuides', 'redditCommunity']
    },
    {
      id: 'martial-arts',
      name: 'Martial Arts',
      category: 'Combat',
      governs: `Unarmed combat effectiveness — strikes, throws and damage with no weapon equipped.`,
      intro: `An empty hand never jams, never breaks and never gets confiscated by slavers. Martial Arts is the build that cannot be disarmed.`,
      sections: [
        { h: 'What It Does', body: `<p>Martial Arts governs how effective you are fighting unarmed. At high levels a martial artist throws and pummels enemies with surprising force.</p>` },
        { h: 'Hidden Effects', body: `<p>Martial Arts performs best with little or no armour on the hands and light overall encumbrance — heavy gear penalises it. It also keeps working when you are imprisoned and stripped of weapons.</p>` },
        { h: 'How XP Works', body: `<p>You train it by fighting unarmed against capable enemies, the same as any combat skill.</p>` },
        { h: 'Best Training Methods', body: `<p>Fight bandits unarmed near guards, and lean on the slavery loop — enslaved characters keep no weapon, so captivity is natural Martial Arts training.</p>` },
        { h: 'Common Mistakes', body: `<p>Wearing heavy armour on a martial artist. Encumbrance and armour penalties gut the build. Keep them light and fast.</p>` }
      ],
      infobox: [['Type', 'Combat'], ['Weapon', 'None (unarmed)'], ['Wants', 'Light armour, low weight'], ['Strength', 'Cannot be disarmed']],
      related: [
        { href: '/guides/martial-arts-guide', label: 'Martial Arts Guide' },
        { href: '/skills/dodge', label: 'Dodge' },
        { href: '/armor/light-armor', label: 'Light Armor' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'dodge',
      name: 'Dodge',
      category: 'Combat',
      governs: `Your chance to evade attacks entirely instead of blocking them.`,
      intro: `Dodge is the defence that does not depend on a weapon. For light, fast builds it is the only thing standing between you and the sand.`,
      sections: [
        { h: 'What It Does', body: `<p>Dodge gives a chance to avoid incoming attacks outright. It is especially important for unarmed and lightly-equipped characters who lack strong weapon-based blocking.</p>` },
        { h: 'Hidden Effects', body: `<p>Dodge favours low encumbrance — heavy loads and heavy armour reduce its effectiveness. It pairs naturally with Martial Arts and Athletics.</p>` },
        { h: 'How XP Works', body: `<p>You train Dodge by being attacked while not blocking — it climbs through combat exposure like the other defensive skills.</p>` },
        { h: 'Best Training Methods', body: `<p>Fight lightly-armoured against manageable groups with backup nearby. Martial artist training naturally builds Dodge alongside it.</p>` },
        { h: 'Common Mistakes', body: `<p>Expecting Dodge to carry a heavily-armoured tank. It is a light-build skill — load the character down and it stops mattering.</p>` }
      ],
      infobox: [['Type', 'Combat'], ['Wants', 'Low encumbrance'], ['Pairs with', 'Martial Arts, Athletics'], ['Weak with', 'Heavy armour']],
      related: [
        { href: '/skills/martial-arts', label: 'Martial Arts' },
        { href: '/skills/athletics', label: 'Athletics' },
        { href: '/guides/stealth-builds', label: 'Stealth Builds' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'heavy-weapons',
      name: 'Heavy Weapons',
      category: 'Weapon',
      governs: `Effectiveness with the largest, hardest-hitting weapon class.`,
      intro: `Heavy weapons do not duel. They demolish. One good swing can end an enemy — and several at once.`,
      sections: [
        { h: 'What It Does', body: `<p>The Heavy Weapons skill governs your use of the heaviest weapon class — massive damage, strong armour penetration, and the ability to hit multiple enemies in an arc.</p>` },
        { h: 'Hidden Effects', body: `<p>Heavy weapons demand high Strength to swing without penalty. Below the strength requirement, attack speed and effectiveness drop sharply.</p>` },
        { h: 'How XP Works', body: `<p>It trains like any weapon skill — by fighting capable enemies with a heavy weapon equipped.</p>` },
        { h: 'Best Training Methods', body: `<p>Build Strength first, then fight bandit groups where the wide swing arc lets you hit several enemies at once.</p>` },
        { h: 'Common Mistakes', body: `<p>Handing a heavy weapon to a low-Strength character. They will swing slowly, miss, and get punished. Strength is the prerequisite, not an option.</p>` }
      ],
      infobox: [['Type', 'Weapon'], ['Needs', 'High Strength'], ['Strength', 'Multi-hit, armour pen'], ['Weakness', 'Indoors, low speed']],
      related: [
        { href: '/weapons/heavy-weapons', label: 'Heavy Weapons (Class)' },
        { href: '/skills/strength', label: 'Strength' },
        { href: '/guides/tank-builds', label: 'Tank Builds' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'katanas',
      name: 'Katanas',
      category: 'Weapon',
      governs: `Effectiveness with katana-class weapons — fast, sharp cutting blades.`,
      intro: `The katana is the duellist's answer: quick, vicious against unarmoured flesh, and merciless once your skill outpaces theirs.`,
      sections: [
        { h: 'What It Does', body: `<p>The Katanas skill governs fast cutting weapons that excel at carving through unarmoured or lightly-armoured targets.</p>` },
        { h: 'Hidden Effects', body: `<p>Katanas struggle against heavy armour — their cutting damage is blunted by plate. They shine against flesh, not steel.</p>` },
        { h: 'How XP Works', body: `<p>Trains through combat with a katana equipped against worthwhile opponents.</p>` },
        { h: 'Best Training Methods', body: `<p>Hunt lightly-armoured bandits and animals where the katana's speed and cutting damage are at their best.</p>` },
        { h: 'Common Mistakes', body: `<p>Charging heavily-armoured Holy Nation Paladins with a katana. Bring a hacker or heavy weapon for armour; save the katana for soft targets.</p>` }
      ],
      infobox: [['Type', 'Weapon'], ['Strength', 'Fast, anti-flesh'], ['Weakness', 'Heavy armour'], ['Speed', 'Very fast']],
      related: [
        { href: '/weapons/katanas', label: 'Katanas (Class)' },
        { href: '/weapons/nodachi', label: 'Nodachi' },
        { href: '/skills/attack', label: 'Attack' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'sabres',
      name: 'Sabres',
      category: 'Weapon',
      governs: `Effectiveness with sabre-class weapons — balanced, versatile cutting blades.`,
      intro: `The sabre asks nothing exotic of you. It just works — which is exactly why so many wanderers carry one.`,
      sections: [
        { h: 'What It Does', body: `<p>The Sabres skill governs versatile mid-weight blades that balance cutting power, speed and reach. The most all-round weapon class in the game.</p>` },
        { h: 'Hidden Effects', body: `<p>Sabres have generous reach and decent multi-hit potential, making them strong in open-field group fights without the strength demands of heavy weapons.</p>` },
        { h: 'How XP Works', body: `<p>Trains through general combat with a sabre equipped.</p>` },
        { h: 'Best Training Methods', body: `<p>Sabres train well in almost any fight — bounty hunting and bandit clearing both work. Their versatility is the point.</p>` },
        { h: 'Common Mistakes', body: `<p>Few — the sabre's flexibility is its strength. The only real error is expecting it to out-penetrate a dedicated heavy weapon against full plate.</p>` }
      ],
      infobox: [['Type', 'Weapon'], ['Strength', 'Versatile, good reach'], ['Speed', 'Moderate'], ['Best for', 'All-round fighters']],
      related: [
        { href: '/weapons/sabres', label: 'Sabres (Class)' },
        { href: '/weapons/desert-sabre', label: 'Desert Sabre' },
        { href: '/skills/attack', label: 'Attack' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'polearms',
      name: 'Polearms',
      category: 'Weapon',
      governs: `Effectiveness with long-reach polearm weapons.`,
      intro: `The polearm fights the battle a step before it reaches you. Reach is its whole philosophy — and reach wins crowds.`,
      sections: [
        { h: 'What It Does', body: `<p>The Polearms skill governs long weapons with exceptional reach, letting you strike enemies before they close and hit several in a line.</p>` },
        { h: 'Hidden Effects', body: `<p>Polearms are outstanding against large creatures and in formation fighting, but their long reach is penalised heavily indoors and in tight spaces.</p>` },
        { h: 'How XP Works', body: `<p>Trains through combat with a polearm equipped.</p>` },
        { h: 'Best Training Methods', body: `<p>Fight in open ground against groups and large beasts where reach and multi-hit pay off — Beak Things and animal hunts suit polearms well.</p>` },
        { h: 'Common Mistakes', body: `<p>Bringing a polearm into a building. The indoor penalty is severe — switch to a shorter weapon for ruin interiors.</p>` }
      ],
      infobox: [['Type', 'Weapon'], ['Strength', 'Reach, anti-creature'], ['Weakness', 'Indoor penalty'], ['Best for', 'Open-field combat']],
      related: [
        { href: '/weapons/polearms', label: 'Polearms (Class)' },
        { href: '/creatures/beak-things', label: 'Beak Things' },
        { href: '/skills/attack', label: 'Attack' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'hackers',
      name: 'Hackers',
      category: 'Weapon',
      governs: `Effectiveness with hacker-class weapons — heavy cleaving blades built to dismember.`,
      intro: `Hackers are not subtle. They are designed to take limbs, and against armoured enemies that is exactly the point.`,
      sections: [
        { h: 'What It Does', body: `<p>The Hackers skill governs heavy cleaving blades with high cutting damage and a strong tendency to sever limbs.</p>` },
        { h: 'Hidden Effects', body: `<p>Hackers have notably high limb-damage, so they cripple enemies fast — but a dismembered foe can no longer be sold to slavers or healed for recruitment.</p>` },
        { h: 'How XP Works', body: `<p>Trains through combat with a hacker equipped.</p>` },
        { h: 'Best Training Methods', body: `<p>Use them against tougher, armoured enemies where their cutting power matters most.</p>` },
        { h: 'Common Mistakes', body: `<p>Using hackers when you want prisoners. They maim too readily — switch to blunt or a gentler blade if you are taking enemies alive.</p>` }
      ],
      infobox: [['Type', 'Weapon'], ['Strength', 'High limb damage'], ['Trade-off', 'Dismembers (no prisoners)'], ['Speed', 'Slow–moderate']],
      related: [
        { href: '/weapons/hackers', label: 'Hackers (Class)' },
        { href: '/weapons/fragment-axe', label: 'Fragment Axe' },
        { href: '/skills/heavy-weapons', label: 'Heavy Weapons' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'athletics',
      name: 'Athletics',
      category: 'Utility',
      governs: `Run speed — how fast your character moves across the world.`,
      intro: `Athletics is the most underrated stat in Kenshi. In a game where running away is a valid strategy, speed is survival.`,
      sections: [
        { h: 'What It Does', body: `<p>Athletics sets your running speed. A faster character escapes danger, outpaces patrols, and chooses which fights happen.</p>` },
        { h: 'Hidden Effects', body: `<p>Speed is reduced by encumbrance — carrying too much weight slows you and starves Athletics XP. A light, fast character controls the entire pace of the game.</p>` },
        { h: 'How XP Works', body: `<p>Athletics trains simply by running, and trains faster while carrying weight (such as a body or heavy pack), since the character is "working" against load.</p>` },
        { h: 'Best Training Methods', body: `<p>Travel everywhere on foot, and carry a knocked-out body or full pack while doing it to accelerate gains. Long marches double as free training.</p>` },
        { h: 'Common Mistakes', body: `<p>Ignoring Athletics until something faster than you is chasing your squad. Train it early — slow characters die to things they could have outrun.</p>` }
      ],
      infobox: [['Type', 'Utility'], ['Trains via', 'Running, carrying weight'], ['Reduced by', 'Encumbrance'], ['Priority', 'High (early)']],
      related: [
        { href: '/guides/why-running-away-matters', label: 'Why Running Away Matters' },
        { href: '/skills/strength', label: 'Strength' },
        { href: '/guides/avoiding-early-death', label: 'Avoiding Early Death' }
      ],
      sources: ['kenshiWiki', 'steamGuides', 'redditCommunity']
    },
    {
      id: 'strength',
      name: 'Strength',
      category: 'Utility',
      governs: `Carry capacity and the ability to use heavy weapons and armour without penalty.`,
      intro: `Strength is the quiet prerequisite. Heavy weapons, heavy armour and hauling loot all sit behind it.`,
      sections: [
        { h: 'What It Does', body: `<p>Strength raises carry capacity and is required to wield heavy weapons and wear heavy armour without speed and effectiveness penalties.</p>` },
        { h: 'Hidden Effects', body: `<p>Strength contributes to melee damage with heavy weapons and lets a character carry more without becoming encumbered — important for both fighters and haulers.</p>` },
        { h: 'How XP Works', body: `<p>Strength trains by moving while carrying heavy loads — bodies, ore, full backpacks — and by fighting with heavy gear that exceeds your comfortable load.</p>` },
        { h: 'Best Training Methods', body: `<p>Carry knocked-out enemies and heavy ore over long distances, and equip slightly-too-heavy weapons and armour so the character trains against the load.</p>` },
        { h: 'Common Mistakes', body: `<p>Forgetting that low Strength makes heavy weapons slow and clumsy. Build Strength before committing a character to a heavy-weapon build.</p>` }
      ],
      infobox: [['Type', 'Utility'], ['Trains via', 'Carrying weight, heavy gear'], ['Enables', 'Heavy weapons & armour'], ['Pairs with', 'Athletics']],
      related: [
        { href: '/skills/heavy-weapons', label: 'Heavy Weapons' },
        { href: '/skills/athletics', label: 'Athletics' },
        { href: '/guides/tank-builds', label: 'Tank Builds' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'stealth',
      name: 'Stealth',
      category: 'Utility',
      governs: `How well you move and act unseen.`,
      intro: `Stealth is the skill that lets you win fights by never having them.`,
      sections: [
        { h: 'What It Does', body: `<p>Stealth governs sneaking — moving past enemies, slipping into towns, and setting up theft or assassination without being detected.</p>` },
        { h: 'Hidden Effects', body: `<p>Stealth is influenced by lighting, distance, encumbrance and whether enemies are alert. Darkness and light loads make a stealthy character nearly invisible.</p>` },
        { h: 'How XP Works', body: `<p>Stealth trains while you are actually sneaking near enemies — crouched movement around alert NPCs builds it steadily.</p>` },
        { h: 'Best Training Methods', body: `<p>Sneak through patrolled towns at night, especially around guards, while crouched. It pairs naturally with Lockpicking, Assassination and Thievery training.</p>` },
        { h: 'Common Mistakes', body: `<p>Trying to stealth in heavy armour and full encumbrance. Stealth builds want light gear and light loads.</p>` }
      ],
      infobox: [['Type', 'Utility'], ['Trains via', 'Sneaking near enemies'], ['Helped by', 'Darkness, low weight'], ['Pairs with', 'Lockpicking, Assassination']],
      related: [
        { href: '/skills/lockpicking', label: 'Lockpicking' },
        { href: '/skills/assassination', label: 'Assassination' },
        { href: '/factions/shinobi-thieves', label: 'Shinobi Thieves' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'lockpicking',
      name: 'Lockpicking',
      category: 'Utility',
      governs: `Your ability to open locked doors, gates and containers.`,
      intro: `Every locked door in Kenshi is a question. Lockpicking is how you stop asking permission.`,
      sections: [
        { h: 'What It Does', body: `<p>Lockpicking lets you open locked doors and containers. Higher skill opens tougher locks and reduces the chance of failing and alerting nearby NPCs.</p>` },
        { h: 'Hidden Effects', body: `<p>Failed lockpick attempts can raise an alarm and turn a town hostile. High Lockpicking is as much about not getting caught as it is about access.</p>` },
        { h: 'How XP Works', body: `<p>You train Lockpicking by picking locks — start on easy doors and work up as the skill climbs.</p>` },
        { h: 'Best Training Methods', body: `<p>Pick low-level locks repeatedly in safe conditions, then graduate to tougher locks. Doing it crouched also trains Stealth.</p>` },
        { h: 'Common Mistakes', body: `<p>Attempting hard locks too early. Repeated failures draw guards. Build the skill on cheap locks before reaching for the valuable ones.</p>` }
      ],
      infobox: [['Type', 'Utility'], ['Trains via', 'Picking locks'], ['Risk', 'Failed picks raise alarms'], ['Pairs with', 'Stealth, Thievery']],
      related: [
        { href: '/skills/stealth', label: 'Stealth' },
        { href: '/skills/assassination', label: 'Assassination' },
        { href: '/factions/shinobi-thieves', label: 'Shinobi Thieves' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'assassination',
      name: 'Assassination',
      category: 'Utility',
      governs: `Knocking out unaware targets instantly with a stealth attack.`,
      intro: `Assassination ends a fight before the enemy knows there was one. Used well, it empties a guarded room one body at a time.`,
      sections: [
        { h: 'What It Does', body: `<p>Assassination lets a sneaking character knock out an unaware target. A high-skill assassin can drop guards, leaders and patrols silently.</p>` },
        { h: 'Hidden Effects', body: `<p>Success depends on the target's awareness and relative strength. Assassination knocks out rather than kills, which suits prisoner-taking and bounty captures.</p>` },
        { h: 'How XP Works', body: `<p>It trains through successful and attempted assassinations on enemies — meaningful targets give meaningful XP.</p>` },
        { h: 'Best Training Methods', body: `<p>Sneak up on sleeping or unaware enemies and knock them out. Bounty targets are ideal — capture instead of fight.</p>` },
        { h: 'Common Mistakes', body: `<p>Attempting assassinations on alert or far-stronger targets. A failed attempt wakes them and starts the fight you were trying to avoid.</p>` }
      ],
      infobox: [['Type', 'Utility'], ['Effect', 'Knocks out unaware foes'], ['Needs', 'Stealth, unaware target'], ['Use', 'Bounties, infiltration']],
      related: [
        { href: '/skills/stealth', label: 'Stealth' },
        { href: '/guides/stealth-builds', label: 'Stealth Builds' },
        { href: '/skills/lockpicking', label: 'Lockpicking' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'science',
      name: 'Science',
      category: 'Utility',
      governs: `Researching technologies and unlocking better crafting and base options.`,
      intro: `Science is how a squad stops scavenging and starts manufacturing. Every tech tier you want sits behind it.`,
      sections: [
        { h: 'What It Does', body: `<p>Science lets a character research technologies at a Research Bench, unlocking improved crafting, building and equipment options.</p>` },
        { h: 'Hidden Effects', body: `<p>Higher Science speeds research, and advanced research requires Ancient Science Books and AI Cores recovered from ruins — tying the skill to exploration.</p>` },
        { h: 'How XP Works', body: `<p>Science trains by performing research at a bench. The more your researcher works, the faster future research goes.</p>` },
        { h: 'Best Training Methods', body: `<p>Dedicate a squad member to the Research Bench and keep them working continuously. Feed them Ancient Science Books from ruins.</p>` },
        { h: 'Common Mistakes', body: `<p>Trying to research advanced tech without the Ancient Science Books it requires. Plan ruin runs around the research you want.</p>` }
      ],
      infobox: [['Type', 'Utility'], ['Trains via', 'Research Bench work'], ['Needs', 'Ancient Science Books'], ['Unlocks', 'Crafting & base tech']],
      related: [
        { href: '/skills/engineering', label: 'Engineering' },
        { href: '/skills/robotics', label: 'Robotics' },
        { href: '/base-building/automated-production', label: 'Automated Production' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'engineering',
      name: 'Engineering',
      category: 'Utility',
      governs: `Constructing and the speed of building base structures.`,
      intro: `Engineering turns a patch of dirt into a fortress. It is the difference between sheltering and settling.`,
      sections: [
        { h: 'What It Does', body: `<p>Engineering governs how fast a character builds and repairs base structures — walls, buildings, production machines and defences.</p>` },
        { h: 'Hidden Effects', body: `<p>Higher Engineering dramatically cuts construction time, which matters most under raid pressure when walls need to go up before the next attack.</p>` },
        { h: 'How XP Works', body: `<p>Engineering trains through construction — the more building a character does, the faster they build.</p>` },
        { h: 'Best Training Methods', body: `<p>Assign dedicated builders and keep them constructing. Early base projects double as Engineering training.</p>` },
        { h: 'Common Mistakes', body: `<p>Spreading construction across many low-skill characters. A couple of dedicated, high-Engineering builders finish a base far faster.</p>` }
      ],
      infobox: [['Type', 'Utility'], ['Trains via', 'Building structures'], ['Speeds up', 'Base construction'], ['Pairs with', 'Labouring']],
      related: [
        { href: '/base-building/wall-design', label: 'Wall Design' },
        { href: '/skills/science', label: 'Science' },
        { href: '/base-building/raid-defense', label: 'Raid Defense' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'robotics',
      name: 'Robotics',
      category: 'Utility',
      governs: `Repairing Skeletons and crafting and maintaining robotic limbs.`,
      intro: `Robotics is medicine for the metal. In a squad with Skeletons, it is not optional — it is the medkit.`,
      sections: [
        { h: 'What It Does', body: `<p>Robotics governs repairing Skeleton characters and working with robotic limbs — both crafting them and fitting them to organic characters who have lost limbs.</p>` },
        { h: 'Hidden Effects', body: `<p>Skeletons cannot be healed with normal first aid; they need Skeleton Repair Kits applied through Robotics. A squad with Skeletons must have a robotics specialist.</p>` },
        { h: 'How XP Works', body: `<p>Robotics trains by repairing Skeletons and working with robotic components.</p>` },
        { h: 'Best Training Methods', body: `<p>Keep a dedicated repair specialist and let them patch up Skeleton squadmates after fights. Robotic-limb crafting also builds the skill.</p>` },
        { h: 'Common Mistakes', body: `<p>Running Skeletons without a Robotics character or Repair Kits. A damaged Skeleton with no repair option is dead weight.</p>` }
      ],
      infobox: [['Type', 'Utility'], ['Trains via', 'Repairing Skeletons'], ['Needs', 'Skeleton Repair Kits'], ['Essential for', 'Skeleton squads']],
      related: [
        { href: '/races/skeletons', label: 'Skeletons (Race)' },
        { href: '/armor/robotic-limbs', label: 'Robotic Limbs' },
        { href: '/guides/skeleton-squad', label: 'Skeleton Squad Guide' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    }
  ],
  /* ---------------------------------------------------------- */
  /*                          WEAPONS                           */
  /* ---------------------------------------------------------- */
  weapons: [
    {
      id: 'katanas',
      name: 'Katanas',
      kind: 'Class',
      cat: 'Katana',
      weaponType: 'Melee',
      bestFor: 'Fast strikes against unarmoured foes',
      intro: `Katanas reward skill and punish armour. Carve through bandits with them — and switch weapons before you meet a Paladin.`,
      sections: [
        { h: 'Class Overview', body: `<p>Katanas are fast cutting weapons with high attack speed and strong damage against flesh. They are the duellist's class — quick, precise, and brutal against soft targets.</p>` },
        { h: 'Damage & Penetration', body: `<p>Katanas deal cutting damage and have weak armour penetration. Against unarmoured enemies they are devastating; against heavy plate, their damage is largely absorbed.</p>` },
        { h: 'Speed, Weight & Indoors', body: `<p>Light and fast, with no major indoor penalty, katanas are comfortable everywhere from open desert to cramped ruins.</p>` },
        { h: 'Best & Worst Situations', body: `<p>Best against bandits, animals and lightly-armoured foes. Worst against Holy Nation heavy infantry and armoured Skeletons, where a hacker or heavy weapon serves better.</p>` },
        { h: 'Quality Tiers', body: `<p>Like all weapons, katanas range from crude crafted grades up through Edge types to legendary Meitou — the masterwork tier forged by the smith Cross. A Meitou katana is a build-defining find.</p>` }
      ],
      infobox: [['Type', 'Melee'], ['Damage', 'Cutting'], ['Armour pen.', 'Low'], ['Speed', 'Very fast'], ['Indoors', 'Good']],
      related: [
        { href: '/skills/katanas', label: 'Katanas (Skill)' },
        { href: '/weapons/nodachi', label: 'Nodachi' },
        { href: '/weapons/sabres', label: 'Sabres' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'heavy-weapons',
      name: 'Heavy Weapons',
      kind: 'Class',
      cat: 'Heavy',
      weaponType: 'Melee',
      bestFor: 'Crushing armour and hitting groups',
      intro: `Heavy weapons turn a strong character into a wrecking ball. They ask for Strength and pay back in carnage.`,
      sections: [
        { h: 'Class Overview', body: `<p>Heavy weapons are the largest melee class — enormous damage, strong armour penetration, and wide swings that strike multiple enemies at once.</p>` },
        { h: 'Damage & Penetration', body: `<p>Heavy weapons combine blunt and cutting damage with the best armour penetration in the game, making them the answer to heavily-armoured foes and Skeletons.</p>` },
        { h: 'Speed, Weight & Indoors', body: `<p>They are slow, heavy and require high Strength to swing at full speed. Their long arc is penalised indoors — keep them for open ground.</p>` },
        { h: 'Best & Worst Situations', body: `<p>Best against armoured enemies and crowds in the open. Worst indoors, in duels against fast light fighters, and in the hands of a low-Strength character.</p>` },
        { h: 'Quality Tiers', body: `<p>Heavy weapons scale through crafted grades to Meitou. A masterwork heavy weapon on a high-Strength fighter is one of the strongest melee setups available.</p>` }
      ],
      infobox: [['Type', 'Melee'], ['Damage', 'Blunt + cutting'], ['Armour pen.', 'Very high'], ['Speed', 'Slow'], ['Indoors', 'Penalised']],
      related: [
        { href: '/skills/heavy-weapons', label: 'Heavy Weapons (Skill)' },
        { href: '/weapons/falling-sun', label: 'Falling Sun' },
        { href: '/skills/strength', label: 'Strength' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'polearms',
      name: 'Polearms',
      kind: 'Class',
      cat: 'Polearm',
      weaponType: 'Melee',
      bestFor: 'Reach and fighting large creatures',
      intro: `Polearms hit first. Against Beak Things and in a shield-wall of allies, hitting first is hitting best.`,
      sections: [
        { h: 'Class Overview', body: `<p>Polearms are long-reach weapons that strike enemies before they close and hit multiple foes in a line. They excel in formation fighting and against large creatures.</p>` },
        { h: 'Damage & Penetration', body: `<p>Polearms deal solid cutting damage with good reach. Their length lets a back-rank fighter contribute safely behind front-line allies.</p>` },
        { h: 'Speed, Weight & Indoors', body: `<p>Moderate speed, but a heavy indoor penalty — the long shaft is clumsy in tight spaces. Polearms are an open-field weapon.</p>` },
        { h: 'Best & Worst Situations', body: `<p>Best against large beasts, in the open, and from a protected second rank. Worst inside ruins and buildings.</p>` },
        { h: 'Quality Tiers', body: `<p>Polearms scale to Meitou like other classes. A quality polearm is the safest way to put damage into a fight without standing in the front line.</p>` }
      ],
      infobox: [['Type', 'Melee'], ['Damage', 'Cutting'], ['Reach', 'Very long'], ['Speed', 'Moderate'], ['Indoors', 'Heavy penalty']],
      related: [
        { href: '/skills/polearms', label: 'Polearms (Skill)' },
        { href: '/creatures/beak-things', label: 'Beak Things' },
        { href: '/guides/squad-formation', label: 'Squad Formation Guide' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'sabres',
      name: 'Sabres',
      kind: 'Class',
      cat: 'Sabre',
      weaponType: 'Melee',
      bestFor: 'All-round balanced combat',
      intro: `If you do not know what weapon a character should carry, the answer is a sabre. It is the wasteland's safe default.`,
      sections: [
        { h: 'Class Overview', body: `<p>Sabres are versatile mid-weight blades balancing cutting damage, speed and reach. They are the most all-round weapon class and suit almost any fighter.</p>` },
        { h: 'Damage & Penetration', body: `<p>Sabres deal reliable cutting damage with moderate armour penetration — not specialised, but never useless.</p>` },
        { h: 'Speed, Weight & Indoors', body: `<p>Moderate weight and speed, with good reach and only a mild indoor penalty. Comfortable in nearly every fight.</p>` },
        { h: 'Best & Worst Situations', body: `<p>Best as a general-purpose weapon for new and flexible characters. Worst only when a specialist is needed — heavy armour wants a heavy weapon, soft targets want a katana.</p>` },
        { h: 'Quality Tiers', body: `<p>Sabres scale to Meitou. The Desert Sabre and the Holy Sabre are notable sabre-class weapons; a Meitou sabre is an excellent all-purpose blade.</p>` }
      ],
      infobox: [['Type', 'Melee'], ['Damage', 'Cutting'], ['Armour pen.', 'Moderate'], ['Speed', 'Moderate'], ['Indoors', 'Good']],
      related: [
        { href: '/skills/sabres', label: 'Sabres (Skill)' },
        { href: '/weapons/desert-sabre', label: 'Desert Sabre' },
        { href: '/guides/melee-combat-basics', label: 'Melee Combat Basics' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'hackers',
      name: 'Hackers',
      kind: 'Class',
      cat: 'Hacker',
      weaponType: 'Melee',
      bestFor: 'Severing limbs and cutting armour',
      intro: `Hackers exist to take pieces off people. Bring one when you want enemies crippled — and leave it home when you want them whole.`,
      sections: [
        { h: 'Class Overview', body: `<p>Hackers are heavy cleaving blades built for high cutting damage and a strong tendency to dismember. They cut through armour better than katanas.</p>` },
        { h: 'Damage & Penetration', body: `<p>Hackers have notably high limb damage and decent armour penetration, crippling enemies quickly.</p>` },
        { h: 'Speed, Weight & Indoors', body: `<p>Slow to moderate speed and fairly heavy, with a manageable indoor penalty. They suit strong, deliberate fighters.</p>` },
        { h: 'Best & Worst Situations', body: `<p>Best against armoured enemies and when you want them disabled. Worst when you want prisoners or recruits — they maim too readily.</p>` },
        { h: 'Quality Tiers', body: `<p>Hackers scale to Meitou. The Fragment Axe is the iconic hacker-class weapon; a quality hacker dismantles armoured foes fast.</p>` }
      ],
      infobox: [['Type', 'Melee'], ['Damage', 'Cutting'], ['Limb damage', 'Very high'], ['Speed', 'Slow–moderate'], ['Indoors', 'Moderate']],
      related: [
        { href: '/skills/hackers', label: 'Hackers (Skill)' },
        { href: '/weapons/fragment-axe', label: 'Fragment Axe' },
        { href: '/armor/heavy-armor', label: 'Heavy Armor' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'crossbows',
      name: 'Crossbows',
      kind: 'Class',
      cat: 'Crossbow',
      weaponType: 'Ranged',
      bestFor: 'Ranged damage before melee closes',
      intro: `A crossbow line softens the enemy before they ever reach your wall. It also shoots your own people in the back if you let it.`,
      sections: [
        { h: 'Class Overview', body: `<p>Crossbows are Kenshi's ranged weapons, letting characters deal damage before melee begins. A crossbow rank is invaluable on base walls and in set-piece defences.</p>` },
        { h: 'Damage & Friendly Fire', body: `<p>Crossbows hit hard but suffer friendly fire — bolts that miss can strike your own squad. Positioning and the Crossbows skill both reduce this risk.</p>` },
        { h: 'Speed, Weight & Indoors', body: `<p>Crossbows are slow to reload and best used from a fixed position. They want range and clear lines of fire, not melee scrums.</p>` },
        { h: 'Best & Worst Situations', body: `<p>Best on walls, in raid defence, and softening approaching enemies. Worst in a chaotic melee where friendly fire turns them on your own front line.</p>` },
        { h: 'Quality & Bolts', body: `<p>Crossbows come in tiers from light to heavy, trading reload speed for damage. Bolt quality matters too — keep your shooters supplied.</p>` }
      ],
      infobox: [['Type', 'Ranged'], ['Damage', 'High'], ['Risk', 'Friendly fire'], ['Reload', 'Slow'], ['Best for', 'Wall defence']],
      related: [
        { href: '/guides/crossbow-guide', label: 'Crossbow Guide' },
        { href: '/guides/ranged-combat', label: 'Ranged Combat Guide' },
        { href: '/base-building/turret-meta', label: 'Turret Meta' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'sidearms',
      name: 'Sidearms',
      kind: 'Class',
      cat: 'Sidearm',
      weaponType: 'Melee',
      bestFor: 'Backup blades and indoor fighting',
      intro: `A sidearm is the weapon you carry for the fight you did not plan — cramped, sudden and close.`,
      sections: [
        { h: 'Class Overview', body: `<p>Sidearms are short, light blades — the smallest melee class. They are fast, easy to swing, and free of indoor penalties.</p>` },
        { h: 'Damage & Penetration', body: `<p>Sidearms deal modest cutting damage with limited armour penetration. They are a supplementary weapon, not a primary one for most fighters.</p>` },
        { h: 'Speed, Weight & Indoors', body: `<p>Very fast and light, with no indoor penalty — sidearms are excellent in ruins and tight rooms where longer weapons struggle.</p>` },
        { h: 'Best & Worst Situations', body: `<p>Best for indoor fights, as a backup blade, and for fast lightly-built characters. Worst against heavy armour, where their weak penetration shows.</p>` },
        { h: 'Quality Tiers', body: `<p>Sidearms scale to Meitou like other classes. A quality sidearm is a smart secondary for any polearm or heavy-weapon user who may have to fight indoors.</p>` }
      ],
      infobox: [['Type', 'Melee'], ['Damage', 'Cutting'], ['Speed', 'Very fast'], ['Weight', 'Light'], ['Indoors', 'Excellent']],
      related: [
        { href: '/weapons/katanas', label: 'Katanas' },
        { href: '/guides/melee-combat-basics', label: 'Melee Combat Basics' },
        { href: '/weapons/sabres', label: 'Sabres' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'falling-sun',
      name: 'Falling Sun',
      kind: 'Named',
      cat: 'Heavy',
      weaponType: 'Melee',
      bestFor: 'Devastating heavy-weapon strikes',
      intro: `The Falling Sun is what happens when a blade gives up on subtlety entirely.`,
      sections: [
        { h: 'Weapon Overview', body: `<p>The Falling Sun is a heavy-weapon-class blade — a massive two-handed weapon that delivers some of the highest single-hit damage in the game.</p>` },
        { h: 'Damage & Penetration', body: `<p>It combines huge cutting damage with strong armour penetration and a wide swing arc, making it lethal against both armoured single targets and groups.</p>` },
        { h: 'Requirements', body: `<p>The Falling Sun demands very high Strength to swing without penalty. On a strong fighter it is terrifying; on a weak one it is a slow, missing liability.</p>` },
        { h: 'Best & Worst Uses', body: `<p>Best in the hands of a powerful Shek or strength-built fighter in open combat. Worst indoors and for under-strength characters.</p>` },
        { h: 'Quality Tiers', body: `<p>The Falling Sun is most coveted in its Meitou grade. A Meitou Falling Sun is an endgame-defining weapon — find one in a top vendor or loot it from the strongest foes.</p>` }
      ],
      infobox: [['Class', 'Heavy Weapon'], ['Type', 'Melee'], ['Damage', 'Very high'], ['Needs', 'High Strength'], ['Top grade', 'Meitou']],
      related: [
        { href: '/weapons/heavy-weapons', label: 'Heavy Weapons' },
        { href: '/skills/strength', label: 'Strength' },
        { href: '/races/shek', label: 'Shek (Race)' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'fragment-axe',
      name: 'Fragment Axe',
      kind: 'Named',
      cat: 'Hacker',
      weaponType: 'Melee',
      bestFor: 'Cleaving through armour and limbs',
      intro: `The Fragment Axe does not cut so much as it disassembles.`,
      sections: [
        { h: 'Weapon Overview', body: `<p>The Fragment Axe is a premier hacker-class weapon — a heavy cleaving blade with exceptional cutting and limb damage.</p>` },
        { h: 'Damage & Penetration', body: `<p>It tears through armour better than most cutting weapons and severs limbs readily, crippling enemies in only a few hits.</p>` },
        { h: 'Requirements', body: `<p>It rewards a strong fighter — high Strength keeps its slow swings effective, and the Hackers skill governs its accuracy.</p>` },
        { h: 'Best & Worst Uses', body: `<p>Best against armoured enemies you want disabled. Worst when you need prisoners or recruits intact — it dismembers too eagerly.</p>` },
        { h: 'Quality Tiers', body: `<p>Like other weapons it scales to Meitou. A Meitou Fragment Axe dismantles even heavily-armoured Skeletons and Paladins.</p>` }
      ],
      infobox: [['Class', 'Hacker'], ['Type', 'Melee'], ['Limb damage', 'Very high'], ['Needs', 'Strength, Hackers'], ['Top grade', 'Meitou']],
      related: [
        { href: '/weapons/hackers', label: 'Hackers' },
        { href: '/skills/hackers', label: 'Hackers (Skill)' },
        { href: '/armor/heavy-armor', label: 'Heavy Armor' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'nodachi',
      name: 'Nodachi',
      kind: 'Named',
      cat: 'Katana',
      weaponType: 'Melee',
      bestFor: 'Long-reach katana strikes',
      intro: `The Nodachi is a katana that decided reach mattered more than manners.`,
      sections: [
        { h: 'Weapon Overview', body: `<p>The Nodachi is a long katana-class weapon, blending the katana's speed and cutting power with extended reach.</p>` },
        { h: 'Damage & Penetration', body: `<p>It deals strong cutting damage and benefits from its length, hitting enemies a step earlier than a standard katana — though armour still blunts it.</p>` },
        { h: 'Requirements', body: `<p>It uses the Katanas skill and rewards a fast, skilled fighter. Its length means it shares some of the indoor awkwardness of larger weapons.</p>` },
        { h: 'Best & Worst Uses', body: `<p>Best in open combat against lightly-armoured foes. Worst in cramped ruins and against full heavy plate.</p>` },
        { h: 'Quality Tiers', body: `<p>The Nodachi scales to Meitou. A masterwork Nodachi is a superb weapon for a high-Katanas duellist.</p>` }
      ],
      infobox: [['Class', 'Katana'], ['Type', 'Melee'], ['Reach', 'Long'], ['Speed', 'Fast'], ['Top grade', 'Meitou']],
      related: [
        { href: '/weapons/katanas', label: 'Katanas' },
        { href: '/skills/katanas', label: 'Katanas (Skill)' },
        { href: '/weapons/sabres', label: 'Sabres' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'desert-sabre',
      name: 'Desert Sabre',
      kind: 'Named',
      cat: 'Sabre',
      weaponType: 'Melee',
      bestFor: 'Reliable all-round combat',
      intro: `The Desert Sabre is the wanderer's blade — common, dependable, and good at everything that keeps you alive.`,
      sections: [
        { h: 'Weapon Overview', body: `<p>The Desert Sabre is a widely-available sabre-class weapon — balanced, versatile, and an excellent default for almost any fighter.</p>` },
        { h: 'Damage & Penetration', body: `<p>It deals dependable cutting damage with moderate reach and penetration. Nothing extreme, nothing weak — a true all-rounder.</p>` },
        { h: 'Requirements', body: `<p>It uses the Sabres skill and has modest stat demands, making it friendly for new and developing characters.</p>` },
        { h: 'Best & Worst Uses', body: `<p>Best as a reliable everyday weapon for general combat. Worst only against extremes — full heavy plate, where a heavy weapon does more.</p>` },
        { h: 'Quality Tiers', body: `<p>The Desert Sabre is easy to find in good grades and scales to Meitou. An early Edge-tier Desert Sabre is a strong upgrade for a starting squad.</p>` }
      ],
      infobox: [['Class', 'Sabre'], ['Type', 'Melee'], ['Availability', 'Common'], ['Speed', 'Moderate'], ['Top grade', 'Meitou']],
      related: [
        { href: '/weapons/sabres', label: 'Sabres' },
        { href: '/skills/sabres', label: 'Sabres (Skill)' },
        { href: '/guides/surviving-first-week', label: 'Surviving Your First Week' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'paladins-cross',
      name: "Paladin's Cross",
      kind: 'Named',
      cat: 'Heavy',
      weaponType: 'Melee',
      bestFor: 'Holy Nation-style heavy combat',
      intro: `The Paladin's Cross is the Holy Nation's faith made into a weapon — heavy, righteous and unsubtle.`,
      sections: [
        { h: 'Weapon Overview', body: `<p>The Paladin's Cross is a heavy-weapon-class blade carried by Holy Nation Paladins — a powerful two-handed weapon with strong damage and armour penetration.</p>` },
        { h: 'Damage & Penetration', body: `<p>It hits hard with good penetration and a wide arc, performing well against armoured enemies and groups.</p>` },
        { h: 'Requirements', body: `<p>As a heavy weapon it needs high Strength and the Heavy Weapons skill to use without penalty.</p>` },
        { h: 'Best & Worst Uses', body: `<p>Best for strong open-field fighters, especially in a Holy Nation-aligned squad. Worst indoors and for under-strength characters.</p>` },
        { h: 'Quality Tiers', body: `<p>The Paladin's Cross scales to Meitou. Looted from Holy Nation forces or bought in their cities, a high-grade one is a serious heavy weapon.</p>` }
      ],
      infobox: [['Class', 'Heavy Weapon'], ['Type', 'Melee'], ['Faction', 'Holy Nation'], ['Needs', 'High Strength'], ['Top grade', 'Meitou']],
      related: [
        { href: '/weapons/heavy-weapons', label: 'Heavy Weapons' },
        { href: '/factions/holy-nation', label: 'Holy Nation' },
        { href: '/weapons/eagles-cross', label: "Eagle's Cross" }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'eagles-cross',
      name: "Eagle's Cross",
      kind: 'Named',
      cat: 'Heavy',
      weaponType: 'Melee',
      bestFor: 'Premium heavy-weapon performance',
      intro: `The Eagle's Cross is the Paladin's Cross with its ambitions raised — a top-shelf heavy weapon for a top-shelf fighter.`,
      sections: [
        { h: 'Weapon Overview', body: `<p>The Eagle's Cross is a premium heavy-weapon-class blade — one of the strongest heavy weapons available, prized by powerful melee builds.</p>` },
        { h: 'Damage & Penetration', body: `<p>It delivers exceptional damage and armour penetration with a wide swing, excelling against armour, Skeletons and crowds alike.</p>` },
        { h: 'Requirements', body: `<p>It demands very high Strength and Heavy Weapons skill — a weapon for a developed fighter, not a recruit.</p>` },
        { h: 'Best & Worst Uses', body: `<p>Best for endgame strength-built fighters in open combat. Worst indoors and on under-developed characters.</p>` },
        { h: 'Quality Tiers', body: `<p>The Eagle's Cross is most sought in Meitou grade — a true endgame heavy weapon, rare and expensive when found at top quality.</p>` }
      ],
      infobox: [['Class', 'Heavy Weapon'], ['Type', 'Melee'], ['Damage', 'Exceptional'], ['Needs', 'Very high Strength'], ['Top grade', 'Meitou']],
      related: [
        { href: '/weapons/heavy-weapons', label: 'Heavy Weapons' },
        { href: '/weapons/falling-sun', label: 'Falling Sun' },
        { href: '/guides/tank-builds', label: 'Tank Builds' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    }
  ],
  /* ---------------------------------------------------------- */
  /*                           ARMOR                            */
  /* ---------------------------------------------------------- */
  armor: [
    {
      id: 'heavy-armor',
      name: 'Heavy Armor',
      summary: `Thick plate that turns lethal blows into bruises. Stronger than beginners expect — and the backbone of any front line.`,
      intro: `New players avoid heavy armour because it "slows you down". Veterans build their whole front line out of it. The veterans are right.`,
      sections: [
        { h: 'Overview', body: `<p>Heavy armour — plate jackets, samurai armour, masks and heavy boots — provides the highest damage reduction in the game. It is the gear that keeps front-line fighters standing.</p>` },
        { h: 'Why It Is Stronger Than It Looks', body: `<p>Heavy armour does not just reduce damage; it converts dangerous cutting hits into survivable blunt ones, protecting limbs and preventing the wounds that lose characters. A heavily-armoured tank can hold a chokepoint almost indefinitely.</p>` },
        { h: 'Penalties', body: `<p>Heavy armour reduces combat speed, hurts stealth, and cripples Martial Arts and Dodge. It also adds encumbrance. These are real costs — but on a dedicated tank they barely matter.</p>` },
        { h: 'Who Should Wear It', body: `<p>Front-line blockers, heavy-weapon users and high-Strength fighters. Avoid it on assassins, martial artists and anyone built around speed.</p>` }
      ],
      tip: `Put your highest-Defence character in full heavy armour and let them tank. The "slowness" is irrelevant when their job is to stand still and block.`,
      infobox: [['Protection', 'Highest'], ['Speed', 'Reduced'], ['Stealth', 'Poor'], ['Best for', 'Front-line tanks'], ['Avoid on', 'Martial artists']],
      related: [
        { href: '/guides/heavy-armor-guide', label: 'Heavy Armor Guide' },
        { href: '/guides/armor-penalties', label: 'Armor Penalties Explained' },
        { href: '/guides/tank-builds', label: 'Tank Builds' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'medium-armor',
      name: 'Medium Armor',
      summary: `The compromise tier — meaningful protection without the worst of the speed and stealth penalties.`,
      intro: `Medium armour is the answer for the characters who must both survive a hit and still get things done.`,
      sections: [
        { h: 'Overview', body: `<p>Medium armour sits between heavy plate and light gear, offering solid protection with more moderate penalties to speed and skills.</p>` },
        { h: 'When To Choose It', body: `<p>Medium armour suits versatile fighters who need durability but cannot afford to be as slow as a full tank — second-rank melee, mobile sabre users, and mixed squads.</p>` },
        { h: 'Penalties', body: `<p>Its penalties are real but manageable: some speed and stealth loss, modest skill reduction. It rarely shines, but it rarely fails either.</p>` },
        { h: 'Who Should Wear It', body: `<p>All-round fighters and most of a developing squad's mid-rank. A safe default before a character commits to a tank or speed build.</p>` }
      ],
      infobox: [['Protection', 'Moderate'], ['Speed', 'Mild penalty'], ['Stealth', 'Mild penalty'], ['Best for', 'Versatile fighters']],
      related: [
        { href: '/armor/heavy-armor', label: 'Heavy Armor' },
        { href: '/armor/light-armor', label: 'Light Armor' },
        { href: '/guides/best-squad-roles', label: 'Best Squad Roles' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'light-armor',
      name: 'Light Armor',
      summary: `Minimal protection, minimal penalty. Essential for speed builds — dangerous on anyone who plans to get hit.`,
      intro: `Light armour is not weak gear. It is specialist gear, and worn by the wrong character early on it gets them killed.`,
      sections: [
        { h: 'Overview', body: `<p>Light armour — leather, cloth and minimal plating — offers low protection but barely penalises speed, stealth, Martial Arts or Dodge.</p>` },
        { h: 'Why It Can Be Dangerous Early', body: `<p>New players pick light armour because it "looks fast" and then take a fully-developed character into a fight they cannot block. Without high Dodge or Toughness, light armour means real wounds from every landed hit.</p>` },
        { h: 'When It Works', body: `<p>Light armour shines on assassins, martial artists, ranged characters and high-Dodge skirmishers — builds that avoid hits rather than absorb them.</p>` },
        { h: 'Who Should Wear It', body: `<p>Stealth and speed specialists with the skills to back it up. Not a default for a fragile early squad.</p>` }
      ],
      warn: `Light armour on a low-Toughness, low-Dodge character is a trap. Until those skills are high, more armour is simply safer.`,
      infobox: [['Protection', 'Low'], ['Speed', 'Best'], ['Stealth', 'Best'], ['Best for', 'Assassins, martial artists'], ['Risk', 'Fragile early game']],
      related: [
        { href: '/skills/martial-arts', label: 'Martial Arts' },
        { href: '/guides/stealth-builds', label: 'Stealth Builds' },
        { href: '/guides/armor-penalties', label: 'Armor Penalties Explained' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'helmets',
      name: 'Helmets',
      summary: `Head protection that guards your most fragile and most important hit location.`,
      intro: `The head is a small target and a catastrophic place to lose. A helmet is cheap insurance against an expensive death.`,
      sections: [
        { h: 'Overview', body: `<p>Helmets and masks protect the head — a location that, when badly damaged, knocks a character out or kills them quickly.</p>` },
        { h: 'Why They Matter', body: `<p>Head hits are dangerous out of proportion to their frequency. A solid helmet converts a potentially fatal head wound into something survivable.</p>` },
        { h: 'Trade-offs', body: `<p>Heavier helmets protect more but can reduce perception and combat skills slightly. Lighter masks protect less but barely penalise — match the helmet to the build.</p>` },
        { h: 'Who Should Wear One', body: `<p>Everyone, ideally. Even speed builds benefit from a light helmet or mask. The head is never a location to leave bare.</p>` }
      ],
      tip: `Never field a character with no headgear. Even a cheap helmet meaningfully cuts the chance of a sudden knockout.`,
      infobox: [['Protects', 'Head'], ['Importance', 'Very high'], ['Trade-off', 'Heavy helms cut perception'], ['Best for', 'Every character']],
      related: [
        { href: '/armor/heavy-armor', label: 'Heavy Armor' },
        { href: '/skills/toughness', label: 'Toughness' },
        { href: '/guides/injury-recovery', label: 'Injury Recovery Guide' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'robotic-limbs',
      name: 'Robotic Limbs',
      summary: `Replacement arms and legs that restore — and can exceed — what the wasteland took.`,
      intro: `In Kenshi you can lose a limb and keep going. Robotic limbs are how a maimed character becomes a stronger one.`,
      sections: [
        { h: 'Overview', body: `<p>Robotic limbs replace arms and legs lost to combat or surgery. They come in quality tiers, from crude industrial models to advanced limbs that boost the character beyond their original capability.</p>` },
        { h: 'Why They Matter', body: `<p>Losing a limb is not the end of a character. A fitted robotic arm restores combat function; a robotic leg restores movement. High-grade limbs can even raise Strength or speed above the original.</p>` },
        { h: 'Fitting & Maintenance', body: `<p>Robotic limbs are fitted using the Robotics skill, and quality limbs are bought from Tech Hunters or recovered from ruins. They can be upgraded as better models are found.</p>` },
        { h: 'Who Benefits', body: `<p>Any character who has lost a limb — and some players deliberately seek high-end limbs as upgrades. Skeletons and organics both use them.</p>` }
      ],
      tip: `Top-tier robotic limbs can outperform natural ones. A "crippling" injury can become a long-term upgrade.`,
      infobox: [['Replaces', 'Lost arms / legs'], ['Fitted with', 'Robotics skill'], ['Source', 'Tech Hunters, ruins'], ['Upside', 'Can exceed originals']],
      related: [
        { href: '/skills/robotics', label: 'Robotics' },
        { href: '/factions/tech-hunters', label: 'Tech Hunters' },
        { href: '/guides/injury-recovery', label: 'Injury Recovery Guide' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    }
  ],

  /* ---------------------------------------------------------- */
  /*                           RACES                            */
  /* ---------------------------------------------------------- */
  races: [
    {
      id: 'greenlanders',
      name: 'Greenlanders',
      summary: `The baseline human race — no special strengths, no special weaknesses, and welcome almost everywhere.`,
      intro: `Greenlanders are the wasteland's default. That sounds dull until you realise being unremarkable is its own kind of safety.`,
      sections: [
        { h: 'Overview', body: `<p>Greenlanders are the standard human race — balanced stats, no environmental quirks, and the broadest social acceptance of any race.</p>` },
        { h: 'Strengths', body: `<p>Greenlander males are tolerated by the Holy Nation, opening the safe green centre of the map. They have no stat penalties and adapt to any build.</p>` },
        { h: 'Weaknesses', body: `<p>They have no standout strengths either — no bonus toughness, no faster healing, no immunity to anything. They are the benchmark every other race is measured against.</p>` },
        { h: 'Best Playstyles', body: `<p>Anything. Greenlanders suit every build, and a Greenlander male is the most frictionless choice for a first playthrough.</p>` }
      ],
      tip: `For a first run, a Greenlander male sidesteps the most painful faction hostility in the game. Pick one until you know the map.`,
      infobox: [['Type', 'Human'], ['Stats', 'Balanced'], ['Holy Nation', 'Tolerated (males)'], ['Best for', 'Any build, first run']],
      related: [
        { href: '/races/scorchlanders', label: 'Scorchlanders' },
        { href: '/factions/holy-nation', label: 'Holy Nation' },
        { href: '/guides/best-beginner-starts', label: 'Best Beginner Starts' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'scorchlanders',
      name: 'Scorchlanders',
      summary: `A dark-skinned human race built for the desert — capable, but persecuted by the Holy Nation.`,
      intro: `Scorchlanders survive the heat that wears other races down. The Holy Nation simply cannot forgive them for being different.`,
      sections: [
        { h: 'Overview', body: `<p>Scorchlanders are a human race adapted to harsh, hot environments, with stat profiles that favour resilience in desert conditions.</p>` },
        { h: 'Strengths', body: `<p>Scorchlanders cope well with the wasteland's heat and make solid, well-rounded characters across most builds.</p>` },
        { h: 'Weaknesses', body: `<p>The Holy Nation persecutes Scorchlanders, treating them as lesser. Living a Holy Nation-aligned game with a Scorchlander squad is difficult.</p>` },
        { h: 'Best Playstyles', body: `<p>Desert-based squads, United Cities and Shek-aligned play, and any run that does not need Holy Nation goodwill.</p>` }
      ],
      warn: `The Holy Nation treats Scorchlanders poorly. Plan a non-theocracy route if your squad is Scorchlander-led.`,
      infobox: [['Type', 'Human'], ['Adapted to', 'Heat / desert'], ['Holy Nation', 'Persecuted'], ['Best for', 'UC / Shek play']],
      related: [
        { href: '/races/greenlanders', label: 'Greenlanders' },
        { href: '/factions/holy-nation', label: 'Holy Nation' },
        { href: '/regions/the-great-desert', label: 'The Great Desert' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'shek',
      name: 'Shek',
      summary: `Towering horned warriors with high Strength and Toughness. Born fighters — and Holy Nation enemies.`,
      intro: `A Shek is a fighter before they are anything else. The wasteland made sure of that, and so did the Holy Nation.`,
      sections: [
        { h: 'Overview', body: `<p>The Shek are a tall, horned humanoid race with naturally high Strength and Toughness. They are the premier melee race in the game.</p>` },
        { h: 'Strengths', body: `<p>Shek excel at combat — they take and deal punishment well, swing heavy weapons easily, and train into formidable front-line fighters faster than most races.</p>` },
        { h: 'Weaknesses', body: `<p>The Holy Nation is hostile to the Shek, locking them out of the safe green centre. They are also less suited to non-combat utility roles.</p>` },
        { h: 'Best Playstyles', body: `<p>Front-line tanks, heavy-weapon fighters, and Shek Kingdom-aligned squads. A poor pick for a Holy Nation playthrough.</p>` }
      ],
      tip: `Shek make outstanding tanks and heavy-weapon users. Start one in or near Shek territory to avoid early Holy Nation trouble.`,
      infobox: [['Type', 'Horned humanoid'], ['Strengths', 'Strength, Toughness'], ['Holy Nation', 'Hostile'], ['Best for', 'Melee / tank builds']],
      related: [
        { href: '/factions/shek-kingdom', label: 'Shek Kingdom' },
        { href: '/weapons/heavy-weapons', label: 'Heavy Weapons' },
        { href: '/guides/tank-builds', label: 'Tank Builds' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'hivers',
      name: 'Hivers',
      summary: `Insectoid people of caste and colony — fast, cheap to feed, but socially shut out of the Holy Nation.`,
      intro: `A Hiver does not fit the wasteland's idea of "people". That costs them everything in some regions and nothing at all in others.`,
      sections: [
        { h: 'Overview', body: `<p>Hivers are insectoid humanoids divided into castes — Prince, Worker, Soldier Drone — each with distinct stat profiles. They originate from the Hive colonies.</p>` },
        { h: 'Strengths', body: `<p>Hivers are fast, eat little (lower hunger drain), and certain castes have notable resilience. Soldier Drones make capable fighters and the Hive welcomes Hiver characters.</p>` },
        { h: 'Weaknesses', body: `<p>The Holy Nation attacks Hivers on sight in core towns, and Hivers cannot wear standard footwear, limiting some boot options. They are socially the most restricted race.</p>` },
        { h: 'Best Playstyles', body: `<p>Fast skirmishers, low-upkeep squads, and eastern Hive-aligned play. Avoid Holy Nation territory entirely.</p>` }
      ],
      warn: `Hivers are attacked on sight in core Holy Nation towns. Keep Hiver characters to Shek, Hive and United Cities country.`,
      infobox: [['Type', 'Insectoid'], ['Castes', 'Prince, Worker, Soldier'], ['Strengths', 'Speed, low hunger'], ['Holy Nation', 'Attacked on sight']],
      related: [
        { href: '/factions/hivers', label: 'The Hive' },
        { href: '/factions/fogmen', label: 'The Fogmen' },
        { href: '/skills/athletics', label: 'Athletics' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'skeletons',
      name: 'Skeletons',
      summary: `Ancient robotic people who do not eat, do not bleed, and shrug off the environments that kill the living.`,
      intro: `A Skeleton remembers the old world. It also outlasts the new one — no hunger, no bleeding, no need for sleep.`,
      sections: [
        { h: 'Overview', body: `<p>Skeletons are robotic humanoids built by the Ancient civilisation. They are the most mechanically distinct race, ignoring many of the survival pressures organics face.</p>` },
        { h: 'Strengths', body: `<p>Skeletons do not eat, do not bleed, resist cutting damage, ignore acid rain and harsh environments, and need no sleep. They are the ideal race for the Deadlands, Ashlands and acid regions.</p>` },
        { h: 'Weaknesses', body: `<p>Skeletons cannot be healed with first aid — they require Skeleton Repair Kits and the Robotics skill. They are vulnerable to blunt damage, and the Holy Nation is hostile to them.</p>` },
        { h: 'Best Playstyles', body: `<p>Acid-region exploration, endgame squads, solo runs, and self-sufficient builds. A Skeleton-only squad handles the deadliest regions best.</p>` }
      ],
      tip: `A Skeleton character ignores hunger, sleep and acid rain — making them the best race for exploring the Deadlands and Ashlands.`,
      infobox: [['Type', 'Ancient robot'], ['Immune to', 'Hunger, acid, bleeding'], ['Healed with', 'Repair Kits + Robotics'], ['Weakness', 'Blunt damage']],
      related: [
        { href: '/skills/robotics', label: 'Robotics' },
        { href: '/lore/skeleton-history', label: 'Skeleton History' },
        { href: '/guides/skeleton-squad', label: 'Skeleton Squad Guide' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    }
  ],

  /* ---------------------------------------------------------- */
  /*                       BASE BUILDING                        */
  /* ---------------------------------------------------------- */
  baseBuilding: [
    {
      id: 'best-base-locations',
      name: 'Best Base Locations',
      summary: `Where you settle decides which problems you fight forever. Choose the location before you choose the walls.`,
      intro: `A bad base location is a slow defeat. You will fix water, raids and resources for the rest of the run.`,
      sections: [
        { h: 'What Makes A Location Good', body: `<p>The best base sites combine usable resources (ore, water, fertile ground), a defensible shape, and a raid profile your squad can actually survive. No site has everything — you are choosing which compromise you can live with.</p>` },
        { h: 'Resources', body: `<p>You want stone and iron or copper nearby, plus ground green or wet enough to farm or water you can pump. A site rich in ore but barren of water trades one chore for another.</p>` },
        { h: 'Defensibility', body: `<p>Hills, narrow approaches and natural chokepoints let a small squad hold against larger raids. Open flat ground means longer walls and more turrets.</p>` },
        { h: 'Raid Profile', body: `<p>Every region raids you with its local power — Holy Nation, dust bandits, Fogmen, Beak Things. Pick a region whose raids your squad can beat before you pick the exact tile.</p>` }
      ],
      tip: `Set up a first, disposable base in safe territory before attempting an ambitious site. Your first base teaches you what your second one needs.`,
      infobox: [['Decides', 'Water, raids, resources'], ['Want', 'Ore + water + chokepoint'], ['First base', 'Safe region'], ['Priority', 'High']],
      related: [
        { href: '/base-building/water-problems', label: 'Water Problems' },
        { href: '/base-building/raid-defense', label: 'Raid Defense' },
        { href: '/guides/best-base-locations', label: 'Best Base Locations Guide' }
      ],
      sources: ['kenshiWiki', 'steamGuides', 'redditCommunity']
    },
    {
      id: 'farming-systems',
      name: 'Farming Systems',
      summary: `Crops turn a base from a money pit into a self-sufficient settlement — if the ground and water cooperate.`,
      intro: `Farming is what stops your squad starving the moment they stop adventuring. Get it running before you need it.`,
      sections: [
        { h: 'Overview', body: `<p>Farms grow food and trade crops directly at your base. Wheat, rice, greenfruit, cactus and hemp each suit different ground and climates.</p>` },
        { h: 'Fertility & Climate', body: `<p>Every crop has a fertility and climate requirement. Greenfruit wants green fertile ground; cactus tolerates arid land; hemp grows in the swamp. Check the ground before you plant.</p>` },
        { h: 'Water & Irrigation', body: `<p>Most farms need water access or irrigation, which ties farming to your water supply. Arid sites can still farm cactus with minimal water.</p>` },
        { h: 'Scaling Up', body: `<p>Start with enough food crops to feed the squad, then expand into trade crops or processing chains once survival is secured.</p>` }
      ],
      tip: `Plant a small food farm first and confirm it feeds the squad before expanding into cash crops.`,
      infobox: [['Produces', 'Food & trade crops'], ['Needs', 'Fertility, water, climate'], ['Key crops', 'Wheat, rice, hemp, cactus'], ['Priority', 'High']],
      related: [
        { href: '/base-building/water-problems', label: 'Water Problems' },
        { href: '/base-building/automated-production', label: 'Automated Production' },
        { href: '/guides/hashish-trading', label: 'Hashish Trading' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'power-systems',
      name: 'Power Systems',
      summary: `Machines need power. Wind, generators and batteries keep production running through the night.`,
      intro: `A base with no power plan is a base that stops working at sundown. Build the grid before the machines.`,
      sections: [
        { h: 'Overview', body: `<p>Power runs production machines, lights and defences. Your two main sources are wind turbines and fuel-burning generators, buffered by batteries.</p>` },
        { h: 'Wind vs Generators', body: `<p>Wind power is free but unreliable — it depends on the region's wind levels. Generators are consistent but consume fuel you must produce or buy. Most bases use a mix.</p>` },
        { h: 'Batteries', body: `<p>Small Battery and larger battery units store surplus power so machines keep running when wind drops or generators idle. Without storage, output stutters.</p>` },
        { h: 'Sizing The Grid', body: `<p>Total your machines' draw, then build generation and storage above it. An under-powered grid silently throttles every production chain in the base.</p>` }
      ],
      tip: `Check a region's wind level before relying on turbines — low-wind regions need generators or a much larger turbine array.`,
      infobox: [['Sources', 'Wind, generators'], ['Storage', 'Batteries'], ['Needs', 'Output > machine draw'], ['Priority', 'High']],
      related: [
        { href: '/base-building/automated-production', label: 'Automated Production' },
        { href: '/base-building/best-base-locations', label: 'Best Base Locations' },
        { href: '/skills/engineering', label: 'Engineering' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'automated-production',
      name: 'Automated Production',
      summary: `Production chains turn raw ore and crops into goods and money while your squad does something else.`,
      intro: `Automated production is how a base earns its keep. Set the chains, assign the workers, and the cats accumulate themselves.`,
      sections: [
        { h: 'Overview', body: `<p>Production chains link raw materials to finished goods — ore to iron plates, hemp to hashish, crops to food, iron and fabrics to armour and weapons.</p>` },
        { h: 'Designing A Chain', body: `<p>A good chain places storage between each step so machines never idle waiting on input. Map raw input to final output and stock every link.</p>` },
        { h: 'Assigning Workers', body: `<p>Assign characters to machines and let them run jobs continuously. Higher relevant skills speed output and train the workers as a bonus.</p>` },
        { h: 'Choosing What To Make', body: `<p>Pick products with strong margins and a reliable buyer — armour and weapons for high value, food for self-sufficiency, hashish for grey-market profit.</p>` }
      ],
      tip: `Place storage between every production step. Machines that wait on input quietly halve your output.`,
      infobox: [['Converts', 'Raw goods to product'], ['Needs', 'Power, workers, storage'], ['Earns', 'Passive income'], ['Pairs with', 'Farming, mining']],
      related: [
        { href: '/base-building/power-systems', label: 'Power Systems' },
        { href: '/guides/base-economy', label: 'Base Economy' },
        { href: '/skills/engineering', label: 'Engineering' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'raid-defense',
      name: 'Raid Defense',
      summary: `Every base gets raided. Defence is not optional — it is the rent you pay for owning ground.`,
      intro: `The wasteland does not respect property. Build expecting raids, because they are coming whether you are ready or not.`,
      sections: [
        { h: 'Overview', body: `<p>Owning a base attracts raids from the region's powers and local threats. Defence combines walls, gates, turrets and a squad able to win the fight at the wall.</p>` },
        { h: 'Layered Defence', body: `<p>Strong defence is layered: outer walls funnel attackers, gates and chokepoints concentrate them, turrets thin them on approach, and your melee finishes them at a single controlled point.</p>` },
        { h: 'The Squad Still Matters', body: `<p>Walls buy time; they do not win fights. A base with great walls and a weak squad still falls. Keep training fighters alongside building.</p>` },
        { h: 'Reading Raid Strength', body: `<p>Raid difficulty scales with your wealth, squad size and faction relations. A rich, hostile-to-everyone base draws raids a young squad cannot survive.</p>` }
      ],
      warn: `Raids scale with your wealth and notoriety. A base that grows rich faster than its squad grows strong will be overrun.`,
      infobox: [['Inevitable', 'Yes'], ['Layers', 'Walls, gates, turrets, squad'], ['Scales with', 'Wealth, size, relations'], ['Priority', 'Critical']],
      related: [
        { href: '/base-building/wall-design', label: 'Wall Design' },
        { href: '/base-building/turret-meta', label: 'Turret Meta' },
        { href: '/guides/defending-against-raids', label: 'Defending Against Raids' }
      ],
      sources: ['kenshiWiki', 'steamGuides', 'redditCommunity']
    },
    {
      id: 'wall-design',
      name: 'Wall Design',
      summary: `Walls do not just keep raiders out — they decide where and how the fight happens.`,
      intro: `A wall is not a barrier. It is a tool for choosing the battlefield, and good wall design wins fights before they start.`,
      sections: [
        { h: 'Overview', body: `<p>Walls and gates define your base's perimeter and shape how raiders approach. Their real purpose is to control, not merely block.</p>` },
        { h: 'Funnelling Attackers', body: `<p>Design walls so attackers are channelled toward a single gate or chokepoint where your turrets and melee are concentrated. A wall with one strong approach beats a wall with four weak ones.</p>` },
        { h: 'Gate Tactics', body: `<p>Gates can be opened and closed to admit attackers in manageable numbers rather than all at once. Used well, a gate turns a swarm into a queue.</p>` },
        { h: 'Build Order & Skill', body: `<p>Walls take time and the Engineering skill to raise. Build the perimeter before the base grows rich enough to attract serious raids.</p>` }
      ],
      tip: `Design walls with one strong gate, not four weak sides. Concentrate your turrets and melee where the wall forces attackers to go.`,
      infobox: [['Purpose', 'Control the fight'], ['Key idea', 'Funnel to one chokepoint'], ['Built with', 'Engineering'], ['Build', 'Before getting rich']],
      related: [
        { href: '/base-building/raid-defense', label: 'Raid Defense' },
        { href: '/base-building/turret-meta', label: 'Turret Meta' },
        { href: '/skills/engineering', label: 'Engineering' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'turret-meta',
      name: 'Turret Meta',
      summary: `Turrets thin raids before they reach your walls — when they are placed where they can actually shoot.`,
      intro: `A well-sited turret is worth several fighters. A badly-sited one shoots your own squad in the back.`,
      sections: [
        { h: 'Overview', body: `<p>Mounted turrets give your base ranged firepower. Manned by characters on harpoon-style weapons, they devastate raids during the approach.</p>` },
        { h: 'Placement', body: `<p>Turrets need clear lines of fire over the ground attackers must cross. Place them on walls and towers overlooking the chokepoint your wall design funnels raiders into.</p>` },
        { h: 'Friendly Fire', body: `<p>Turrets can hit your own characters. Keep melee out of turret firing lines, or stage them to engage only after the turrets have done their work.</p>` },
        { h: 'Crew & Skill', body: `<p>Turret effectiveness depends on the operator's Turrets skill. Keep dedicated, trained gunners rather than rotating untrained workers in.</p>` }
      ],
      warn: `Turrets cause friendly fire. Plan firing lines so your own melee is never standing in them.`,
      infobox: [['Role', 'Ranged base defence'], ['Wants', 'Clear lines of fire'], ['Risk', 'Friendly fire'], ['Crew', 'Trained gunners']],
      related: [
        { href: '/base-building/wall-design', label: 'Wall Design' },
        { href: '/base-building/raid-defense', label: 'Raid Defense' },
        { href: '/weapons/crossbows', label: 'Crossbows' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'water-problems',
      name: 'Water Problems',
      summary: `Water feeds farms, drink and production. The wrong site makes it the chore that never ends.`,
      intro: `Water is the quiet killer of ambitious bases. Solve it at the location stage, not after the walls are up.`,
      sections: [
        { h: 'Overview', body: `<p>Bases need water for drinking, farming and some production. Water comes from wells over groundwater or from natural water sources, and availability varies enormously by region.</p>` },
        { h: 'Wells & Groundwater', body: `<p>Wells tap groundwater, and a site's groundwater level sets how much you can draw. A green, wet region supports easy wells; an arid one barely supports any.</p>` },
        { h: 'Arid Sites', body: `<p>Desert bases can survive on minimal water by farming cactus and limiting water-hungry production — but they will always feel water-starved compared to green sites.</p>` },
        { h: 'Planning Ahead', body: `<p>Check groundwater before settling. A site with rich ore but no water forces a permanent supply problem onto the whole run.</p>` }
      ],
      tip: `Check groundwater level before you build. It is far easier to pick a wet site than to fix a dry one later.`,
      infobox: [['Feeds', 'Drink, farms, production'], ['Source', 'Wells, water bodies'], ['Varies by', 'Region groundwater'], ['Decide', 'At site selection']],
      related: [
        { href: '/base-building/best-base-locations', label: 'Best Base Locations' },
        { href: '/base-building/farming-systems', label: 'Farming Systems' },
        { href: '/guides/desert-survival', label: 'Desert Survival' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'multi-base-strategy',
      name: 'Multi-Base Strategy',
      summary: `A second base spreads risk, resources and reach — once your squad can defend two fronts at once.`,
      intro: `One base is a home. Two bases is an operation — and an operation that can be raided in two places at once.`,
      sections: [
        { h: 'Overview', body: `<p>A multi-base strategy runs more than one settlement — for example a safe production base and a forward outpost near dangerous, resource-rich regions.</p>` },
        { h: 'Why Do It', body: `<p>Multiple bases let you exploit resources spread across the map, stage expeditions closer to deep regions, and avoid putting every asset in one raidable place.</p>` },
        { h: 'The Cost', body: `<p>Every base raids independently and needs its own defenders. Splitting a squad across bases risks each one being too thin to hold. Multi-basing demands a large, well-trained roster.</p>` },
        { h: 'When To Expand', body: `<p>Expand to a second base only once your first is stable, profitable and defensible, and your squad is large enough to garrison both.</p>` }
      ],
      warn: `Each base is raided separately. Do not build a second base until your squad can defend both at once.`,
      infobox: [['Benefit', 'Risk spread, more resources'], ['Cost', 'Separate raids, split squad'], ['Needs', 'Large trained roster'], ['Stage', 'Late game']],
      related: [
        { href: '/base-building/best-base-locations', label: 'Best Base Locations' },
        { href: '/base-building/raid-defense', label: 'Raid Defense' },
        { href: '/guides/endgame-city-building', label: 'Endgame City Building' }
      ],
      sources: ['kenshiWiki', 'steamGuides', 'redditCommunity']
    }
  ],
  /* ---------------------------------------------------------- */
  /*                            MODS                            */
  /* ---------------------------------------------------------- */
  mods: [
    {
      id: 'essential-mods',
      name: 'Essential Mods',
      summary: `The mods most veterans install before they even start a new game. Quality-of-life so basic it feels like patches.`,
      intro: `Kenshi's modding scene is so strong that "vanilla" quietly became "vanilla plus the obvious fixes". These are those fixes.`,
      sections: [
        { h: 'What This Covers', body: `<p>Essential mods are the near-universal picks — bug fixes, interface improvements and small conveniences that smooth Kenshi's rough edges without changing how the game plays.</p>` },
        { h: 'Compatibility', body: `<p>Most essential mods are lightweight and compatible with almost everything. Load them high in the order, before large overhauls.</p>` },
        { h: 'Beginner Friendliness', body: `<p>Safe for new players — they fix annoyances rather than altering balance or content. Install them first, then explore bigger mods later.</p>` }
      ],
      modList: [
        { name: 'Dark UI', why: 'A cleaner, easier-to-read interface theme — almost universally installed.' },
        { name: 'Attack Slots +', why: 'Lets more characters attack a single enemy at once, fixing the awkward vanilla "queue".' },
        { name: 'Recruitable Prisoners', why: 'Lets you recruit captured enemies, opening unique squad members.' },
        { name: 'Compressed Textures Project', why: 'Reduces memory use and stutter with no visible quality loss.' }
      ],
      infobox: [['Category', 'Quality of life'], ['Risk', 'Very low'], ['Load order', 'High (before overhauls)'], ['Beginner', 'Recommended']],
      related: [
        { href: '/mods/qol-mods', label: 'QoL Mods' },
        { href: '/mods/dark-ui', label: 'Dark UI' },
        { href: '/mods/performance-mods', label: 'Performance Mods' }
      ],
      sources: ['kenshiWiki', 'redditCommunity', 'steamGuides']
    },
    {
      id: 'qol-mods',
      name: 'QoL Mods',
      summary: `Quality-of-life mods that remove tedium without touching difficulty or balance.`,
      intro: `QoL mods do not make Kenshi easier. They make it less annoying — and that is a different, very welcome thing.`,
      sections: [
        { h: 'What This Covers', body: `<p>Quality-of-life mods streamline interface, squad management, building and inventory handling. They cut clicks and confusion, not challenge.</p>` },
        { h: 'Compatibility', body: `<p>Generally safe and lightweight. A few that change building or UI deeply can conflict with overhauls — read each mod's notes.</p>` },
        { h: 'Beginner Friendliness', body: `<p>Excellent for new players. QoL mods make Kenshi's harsh systems easier to operate without removing the harshness itself.</p>` }
      ],
      modList: [
        { name: 'Faster characters animations', why: 'Speeds up slow interaction animations like sitting and crafting.' },
        { name: 'Build it yourself / better building', why: 'Improves the base-building interface and placement.' },
        { name: 'Living World', why: 'Adds variety and life to towns and NPC behaviour.' },
        { name: 'Animal Backpacks', why: 'Lets pack animals carry far more, easing loot logistics.' }
      ],
      infobox: [['Category', 'Quality of life'], ['Risk', 'Low'], ['Affects', 'Convenience, not balance'], ['Beginner', 'Recommended']],
      related: [
        { href: '/mods/essential-mods', label: 'Essential Mods' },
        { href: '/mods/base-building-mods', label: 'Base Building Mods' },
        { href: '/mods/dark-ui', label: 'Dark UI' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'graphics-mods',
      name: 'Graphics Mods',
      summary: `Visual mods that sharpen Kenshi's sand-worn world — at a performance cost worth measuring.`,
      intro: `Kenshi's art holds up, but graphics mods can make the wasteland genuinely striking. Just watch your frame rate.`,
      sections: [
        { h: 'What This Covers', body: `<p>Graphics mods improve textures, lighting, weather and environmental detail, sharpening Kenshi's desolate atmosphere.</p>` },
        { h: 'Performance Impact', body: `<p>Higher-resolution textures and richer effects raise memory and GPU load. Kenshi is already heavy in large battles — test graphics mods before committing a long run.</p>` },
        { h: 'Compatibility & Order', body: `<p>Visual mods rarely conflict with gameplay overhauls but can conflict with each other. Pick one texture overhaul, not three.</p>` }
      ],
      modList: [
        { name: 'Kenshi HD textures packs', why: 'Higher-resolution environment and character textures.' },
        { name: 'Reactive World (visual side)', why: 'Visibly changes towns as the world state shifts.' },
        { name: 'Weather and lighting tweaks', why: 'Richer dust storms, skies and ambient lighting.' }
      ],
      infobox: [['Category', 'Visual'], ['Risk', 'Low (gameplay)'], ['Cost', 'Performance'], ['Beginner', 'Optional']],
      related: [
        { href: '/mods/performance-mods', label: 'Performance Mods' },
        { href: '/mods/reactive-world', label: 'Reactive World' },
        { href: '/mods/essential-mods', label: 'Essential Mods' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'combat-mods',
      name: 'Combat Mods',
      summary: `Mods that retune fighting — animations, attack slots, damage and AI — for a sharper, fairer brawl.`,
      intro: `Vanilla Kenshi combat is good but clunky. Combat mods file down the clunk and, sometimes, raise the stakes.`,
      sections: [
        { h: 'What This Covers', body: `<p>Combat mods adjust attack slots, animation speed, damage values, weapon balance and enemy AI to make fights flow better or hit harder.</p>` },
        { h: 'Compatibility', body: `<p>Combat mods that change core values can conflict with overhauls like Genesis or Kaizo, which already retune combat. Do not stack competing combat mods.</p>` },
        { h: 'Beginner Friendliness', body: `<p>QoL-style combat mods (more attack slots, smoother animations) are beginner-safe. Difficulty-raising combat mods are not — learn vanilla first.</p>` }
      ],
      modList: [
        { name: 'Attack Slots +', why: 'Allows more attackers per target — fixes vanilla’s combat queue.' },
        { name: 'Combat animation overhauls', why: 'Smoother, more readable attack and block animations.' },
        { name: 'Smarter combat AI mods', why: 'Makes enemies position and target more intelligently.' }
      ],
      infobox: [['Category', 'Combat'], ['Risk', 'Medium'], ['Conflicts with', 'Combat overhauls'], ['Beginner', 'Mixed']],
      related: [
        { href: '/mods/overhaul-mods', label: 'Overhaul Mods' },
        { href: '/mods/difficulty-mods', label: 'Difficulty Mods' },
        { href: '/guides/melee-combat-basics', label: 'Melee Combat Basics' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'overhaul-mods',
      name: 'Overhaul Mods',
      summary: `Total conversions that rebuild factions, items, regions and balance. A second Kenshi inside Kenshi.`,
      intro: `Overhaul mods are not tweaks. They are new games built on Kenshi's bones — and they expect you to know the originals.`,
      sections: [
        { h: 'What This Covers', body: `<p>Overhaul mods substantially rework the game — new factions, items, regions, recipes and balance. Genesis, Kaizo and Universal Wasteland Expansion are the headline examples.</p>` },
        { h: 'Compatibility', body: `<p>Overhauls touch almost everything and rarely combine cleanly. Run one major overhaul, load it low in the order, and add only small mods known to be compatible.</p>` },
        { h: 'Beginner Friendliness', body: `<p>Not for first-time players. Overhauls assume you understand vanilla systems and often raise difficulty or complexity. Finish a vanilla run first.</p>` }
      ],
      modList: [
        { name: 'Genesis', why: 'Massive expansion of factions, items, regions and depth.' },
        { name: 'Kaizo', why: 'Rebalances and expands the world with a focus on coherence and challenge.' },
        { name: 'Universal Wasteland Expansion (UWE)', why: 'Adds survival depth, new content and a harsher economy.' }
      ],
      infobox: [['Category', 'Total conversion'], ['Risk', 'High'], ['Rule', 'Run only one'], ['Beginner', 'Not recommended']],
      related: [
        { href: '/mods/genesis', label: 'Genesis' },
        { href: '/mods/kaizo', label: 'Kaizo' },
        { href: '/mods/universal-wasteland-expansion', label: 'Universal Wasteland Expansion' }
      ],
      sources: ['kenshiWiki', 'redditCommunity', 'steamGuides']
    },
    {
      id: 'base-building-mods',
      name: 'Base Building Mods',
      summary: `Mods that expand and smooth base construction — more buildings, better placement, deeper production.`,
      intro: `Base building is one of Kenshi's deepest systems and one of its fiddliest. These mods keep the depth and lose the fiddle.`,
      sections: [
        { h: 'What This Covers', body: `<p>Base-building mods add new structures, improve placement and snapping, expand production chains, and refine the construction interface.</p>` },
        { h: 'Compatibility', body: `<p>Building mods that add structures are usually safe; those that rework production can conflict with overhauls. Check notes before mixing.</p>` },
        { h: 'Beginner Friendliness', body: `<p>Placement and interface improvements are beginner-friendly. Mods that add complex new production chains are better saved for experienced builders.</p>` }
      ],
      modList: [
        { name: 'Better building placement mods', why: 'Easier, more forgiving structure placement and snapping.' },
        { name: 'More buildings / furniture packs', why: 'Expands the structures and decorations available.' },
        { name: 'Expanded production mods', why: 'Adds new crafting and production options for self-sufficiency.' }
      ],
      infobox: [['Category', 'Base building'], ['Risk', 'Low–medium'], ['Adds', 'Structures, production'], ['Beginner', 'Mostly safe']],
      related: [
        { href: '/base-building/best-base-locations', label: 'Best Base Locations' },
        { href: '/mods/qol-mods', label: 'QoL Mods' },
        { href: '/base-building/automated-production', label: 'Automated Production' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'performance-mods',
      name: 'Performance Mods',
      summary: `Mods that fight Kenshi's stutter — texture compression, optimisation tweaks and memory fixes.`,
      intro: `Kenshi can struggle in big battles and busy towns. Performance mods are how you keep it smooth.`,
      sections: [
        { h: 'What This Covers', body: `<p>Performance mods reduce stutter and crashes through texture compression, optimisation tweaks and memory-handling fixes.</p>` },
        { h: 'Why You Need Them', body: `<p>Large battles, populated cities and long sessions strain Kenshi's engine. Performance mods are among the highest-value installs for many players.</p>` },
        { h: 'Compatibility', body: `<p>Performance mods are generally safe and compatible. Texture-compression mods pair well with graphics mods to offset their cost.</p>` }
      ],
      modList: [
        { name: 'Compressed Textures Project', why: 'Major memory reduction with minimal visual loss.' },
        { name: 'Optimisation / clutter-reduction mods', why: 'Reduce world clutter and draw load for steadier frame rates.' },
        { name: 'Memory and stability tweaks', why: 'Reduce crashes in long sessions and large fights.' }
      ],
      infobox: [['Category', 'Performance'], ['Risk', 'Very low'], ['Helps', 'Stutter, crashes'], ['Beginner', 'Recommended']],
      related: [
        { href: '/mods/essential-mods', label: 'Essential Mods' },
        { href: '/mods/graphics-mods', label: 'Graphics Mods' },
        { href: '/guides/hardcore-settings', label: 'Hardcore Survival Settings' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'difficulty-mods',
      name: 'Difficulty Mods',
      summary: `Mods for players who found vanilla Kenshi too soft — harsher economies, deadlier enemies, scarcer resources.`,
      intro: `Some players finish Kenshi and want it to hurt more. Difficulty mods oblige them, thoroughly.`,
      sections: [
        { h: 'What This Covers', body: `<p>Difficulty mods raise the challenge — stronger enemies, harsher economies, scarcer food and water, and reduced player advantages.</p>` },
        { h: 'Compatibility', body: `<p>Difficulty mods often overlap with overhauls and combat mods. Stacking several can produce a brutally unbalanced game — add them one at a time.</p>` },
        { h: 'Beginner Friendliness', body: `<p>Strictly for experienced players. Vanilla Kenshi is already punishing; difficulty mods are a second-playthrough choice, not a first.</p>` }
      ],
      modList: [
        { name: 'Harder enemies / scaling mods', why: 'Strengthens bandits, raiders and creatures.' },
        { name: 'Harsher survival mods', why: 'Tightens food, water and environmental pressure.' },
        { name: 'Reduced player advantage mods', why: 'Cuts XP rates and economic margins for a slower grind.' }
      ],
      infobox: [['Category', 'Difficulty'], ['Risk', 'High (balance)'], ['Audience', 'Veterans'], ['Beginner', 'Not recommended']],
      related: [
        { href: '/mods/overhaul-mods', label: 'Overhaul Mods' },
        { href: '/guides/hardcore-settings', label: 'Hardcore Survival Settings' },
        { href: '/guides/ironman-challenge', label: 'Ironman Challenge' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'reactive-world',
      name: 'Reactive World',
      summary: `A landmark mod that lets your actions reshape towns, factions and the map state.`,
      intro: `Reactive World answers Kenshi's biggest "what if": what if the world actually noticed you?`,
      sections: [
        { h: 'What It Changes', body: `<p>Reactive World expands Kenshi's dynamic world systems so that factions, town control and the map respond to player actions and faction conflicts far more dramatically than in vanilla.</p>` },
        { h: 'Why Players Love It', body: `<p>It deepens Kenshi's signature feature — a living, indifferent world — by making conquests, collapses and faction shifts visible in the towns themselves.</p>` },
        { h: 'Compatibility', body: `<p>Reactive World touches town and faction data, so it can conflict with large overhauls and other world-state mods. Load it carefully and check overhaul compatibility patches.</p>` },
        { h: 'Beginner Friendliness', body: `<p>Reasonably beginner-safe on top of vanilla — it adds reactivity rather than raising raw difficulty — but new players should still learn the base game first.</p>` }
      ],
      infobox: [['Type', 'World-state mod'], ['Changes', 'Town & faction reactivity'], ['Risk', 'Medium (conflicts)'], ['Beginner', 'Mostly safe']],
      related: [
        { href: '/mods/overhaul-mods', label: 'Overhaul Mods' },
        { href: '/mods/genesis', label: 'Genesis' },
        { href: '/guides/reactive-world-mod', label: 'Reactive World Guide' }
      ],
      sources: ['kenshiWiki', 'redditCommunity', 'steamGuides']
    },
    {
      id: 'genesis',
      name: 'Genesis',
      summary: `One of the largest Kenshi overhauls — sweeping new factions, items, regions and depth.`,
      intro: `Genesis takes Kenshi's map and pours another game's worth of content into it.`,
      sections: [
        { h: 'What It Changes', body: `<p>Genesis is a major overhaul adding new factions, expanded regions, additional items and weapons, and reworked balance — a substantially larger Kenshi.</p>` },
        { h: 'Compatibility', body: `<p>As a large overhaul, Genesis should be the dominant mod in your load order, placed low, with only known-compatible small mods on top. Do not run it alongside another overhaul.</p>` },
        { h: 'Performance', body: `<p>The extra content raises memory and CPU load. Pair Genesis with performance mods for a stable long run.</p>` },
        { h: 'Beginner Friendliness', body: `<p>Not a first-playthrough mod. Genesis assumes vanilla familiarity and adds both content and complexity.</p>` }
      ],
      infobox: [['Type', 'Major overhaul'], ['Adds', 'Factions, regions, items'], ['Load order', 'Low / dominant'], ['Beginner', 'Not recommended']],
      related: [
        { href: '/mods/overhaul-mods', label: 'Overhaul Mods' },
        { href: '/mods/kaizo', label: 'Kaizo' },
        { href: '/mods/performance-mods', label: 'Performance Mods' }
      ],
      sources: ['kenshiWiki', 'redditCommunity', 'steamGuides']
    },
    {
      id: 'kaizo',
      name: 'Kaizo',
      summary: `An overhaul focused on a coherent, expanded and more challenging wasteland.`,
      intro: `Kaizo rebuilds Kenshi with an eye for consistency — a wasteland that expands without losing its grim logic.`,
      sections: [
        { h: 'What It Changes', body: `<p>Kaizo is a large overhaul that expands content and rebalances the world with an emphasis on coherence and a measured increase in challenge.</p>` },
        { h: 'Compatibility', body: `<p>Like other overhauls, Kaizo is a dominant mod. Run it alone among overhauls, load it low, and use only compatible small additions.</p>` },
        { h: 'Performance', body: `<p>Expanded content adds engine load; pair with performance mods for stability over a long campaign.</p>` },
        { h: 'Beginner Friendliness', body: `<p>Best for players who have completed a vanilla run and want a deeper, harder world.</p>` }
      ],
      infobox: [['Type', 'Major overhaul'], ['Focus', 'Coherence, challenge'], ['Load order', 'Low / dominant'], ['Beginner', 'Not recommended']],
      related: [
        { href: '/mods/overhaul-mods', label: 'Overhaul Mods' },
        { href: '/mods/genesis', label: 'Genesis' },
        { href: '/mods/difficulty-mods', label: 'Difficulty Mods' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'universal-wasteland-expansion',
      name: 'Universal Wasteland Expansion',
      summary: `UWE — an overhaul that sharpens Kenshi's survival edge with deeper systems and a harsher economy.`,
      intro: `Universal Wasteland Expansion leans into the part of Kenshi that hurts, and makes the survival real.`,
      sections: [
        { h: 'What It Changes', body: `<p>UWE deepens survival systems, reworks the economy toward scarcity, and adds content and challenge while keeping Kenshi's harsh, grounded tone.</p>` },
        { h: 'Compatibility', body: `<p>UWE is a substantial overhaul and should be run as the dominant mod, low in the order, without competing overhauls.</p>` },
        { h: 'Performance', body: `<p>Additional systems and content raise load; pair with performance mods for a stable experience.</p>` },
        { h: 'Beginner Friendliness', body: `<p>UWE is harsher than vanilla and aimed at players who already know the base game well.</p>` }
      ],
      infobox: [['Type', 'Major overhaul'], ['Focus', 'Survival depth, scarcity'], ['Load order', 'Low / dominant'], ['Beginner', 'Not recommended']],
      related: [
        { href: '/mods/overhaul-mods', label: 'Overhaul Mods' },
        { href: '/mods/difficulty-mods', label: 'Difficulty Mods' },
        { href: '/guides/hardcore-settings', label: 'Hardcore Survival Settings' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'dark-ui',
      name: 'Dark UI',
      summary: `The near-universal interface mod — a darker, cleaner, more readable Kenshi UI.`,
      intro: `Dark UI is so widely installed that many players forget it is a mod at all.`,
      sections: [
        { h: 'What It Changes', body: `<p>Dark UI replaces Kenshi's interface theme with a darker, higher-contrast, more readable design. It changes no gameplay — purely presentation.</p>` },
        { h: 'Why It Is So Common', body: `<p>The vanilla UI can be hard to read for long sessions. Dark UI's clarity makes it one of the first installs for a huge share of the community.</p>` },
        { h: 'Compatibility', body: `<p>As a pure interface mod, Dark UI is compatible with almost everything. Load it high in the order.</p>` },
        { h: 'Beginner Friendliness', body: `<p>Completely beginner-safe — it improves readability without altering balance or content.</p>` }
      ],
      infobox: [['Type', 'Interface mod'], ['Changes', 'UI theme only'], ['Risk', 'None'], ['Beginner', 'Recommended']],
      related: [
        { href: '/mods/essential-mods', label: 'Essential Mods' },
        { href: '/mods/qol-mods', label: 'QoL Mods' },
        { href: '/mods/performance-mods', label: 'Performance Mods' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    }
  ],

  /* ---------------------------------------------------------- */
  /*                            LORE                            */
  /* ---------------------------------------------------------- */
  lore: [
    {
      id: 'ancient-empire',
      name: 'The Ancient Empire',
      summary: `The lost high civilisation whose ruins, technology and machines still litter the wasteland.`,
      intro: `Everything advanced in Kenshi is a remnant. The Ancient Empire built it all, then vanished and left the wasteland to scavenge the wreckage.`,
      sections: [
        { h: 'Overview', body: `<p>The Ancient Empire — sometimes the First Empire — was a technologically advanced civilisation that once spanned the world. Its collapse is the central mystery of Kenshi's setting.</p>` },
        { h: 'What Remains', body: `<p>The Empire left ruins, AI Cores, Skeletons, robotics, advanced weapons and Ancient Science Books. Modern factions cannot reproduce this technology — only recover it.</p>` },
        { h: 'Theories', body: `<p>Kenshi never hands you a tidy history. Environmental storytelling, ruined sites and scattered books suggest war, the rise of the Skeletons and a catastrophe that broke the world.</p>` },
        { h: 'Why It Matters', body: `<p>The Empire's fall explains the wasteland — why technology is scavenged, why the Deadlands are dead, and why Skeletons remember a world no one else can.</p>` }
      ],
      infobox: [['Era', 'Pre-collapse'], ['Legacy', 'Ruins, AI Cores, Skeletons'], ['Status', 'Vanished'], ['Theme', 'Lost high civilisation']],
      related: [
        { href: '/lore/the-collapse', label: 'The Collapse' },
        { href: '/lore/skeleton-history', label: 'Skeleton History' },
        { href: '/lore/ai-core-history', label: 'AI Core History' }
      ],
      sources: ['kenshiWiki', 'steamStore']
    },
    {
      id: 'skeleton-history',
      name: 'Skeleton History',
      summary: `The story of the robotic Skeletons — built by the Ancients, and now the wasteland's longest memory.`,
      intro: `The Skeletons did not survive the old world. They are the old world, still walking.`,
      sections: [
        { h: 'Overview', body: `<p>Skeletons are robotic beings created during the Ancient era. They have endured for centuries, making them living — or at least functioning — records of a history no organic remembers.</p>` },
        { h: 'Role In The Collapse', body: `<p>Skeleton lore is bound up with the fall of the Ancient civilisation. Some Skeletons were soldiers, some labourers, some something else — and their accounts hint at the catastrophe's shape.</p>` },
        { h: 'The Broken', body: `<p>Many Skeletons degraded over the centuries into the Broken — the malfunctioning Skeleton Bandits — their minds corrupted by time and damage.</p>` },
        { h: 'Why It Matters', body: `<p>Surviving Skeletons like those found across the map are key witnesses to Kenshi's deepest lore, and tie directly to Cat-Lon and the Second Empire.</p>` }
      ],
      infobox: [['Origin', 'Ancient Empire'], ['Lifespan', 'Centuries'], ['Degradation', 'The Broken'], ['Theme', 'Living memory']],
      related: [
        { href: '/races/skeletons', label: 'Skeletons (Race)' },
        { href: '/lore/cat-lon', label: 'Cat-Lon' },
        { href: '/factions/skeleton-bandits', label: 'Skeleton Bandits' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'cat-lon',
      name: 'Cat-Lon',
      summary: `The Last Emperor — a powerful Skeleton ruler tied to the Second Empire and one of Kenshi's great endgame figures.`,
      intro: `Cat-Lon ruled an empire that no longer exists, and waits, in the dead lands, for someone to come and end the title.`,
      sections: [
        { h: 'Overview', body: `<p>Cat-Lon, often called the Last Emperor, is a Skeleton figure tied to the Second Empire — a ruler whose reign and fall are central to Kenshi's deepest lore.</p>` },
        { h: 'The Second Empire Connection', body: `<p>Cat-Lon's story is the story of the Second Empire's rise and collapse, and of the conflict between humans and the Skeleton-led order.</p>` },
        { h: 'Endgame Figure', body: `<p>Cat-Lon is a formidable endgame encounter, found in the most dangerous regions. Confronting the Last Emperor is one of Kenshi's signature lore payoffs.</p>` },
        { h: 'Why It Matters', body: `<p>Cat-Lon ties together the Skeletons, the Second Empire and the collapse — the closest Kenshi comes to a central historical figure.</p>` }
      ],
      infobox: [['Title', 'The Last Emperor'], ['Race', 'Skeleton'], ['Tied to', 'Second Empire'], ['Role', 'Endgame figure']],
      related: [
        { href: '/lore/second-empire', label: 'The Second Empire' },
        { href: '/lore/skeleton-history', label: 'Skeleton History' },
        { href: '/regions/ashlands', label: 'The Ashlands' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'second-empire',
      name: 'The Second Empire',
      summary: `The empire that rose after the Ancients and fell in turn — the wasteland's most recent lost order.`,
      intro: `The Second Empire is the wreck you can almost still see the shape of. It failed more recently, and the scars are fresher.`,
      sections: [
        { h: 'Overview', body: `<p>The Second Empire rose in the long shadow of the Ancient civilisation and was, in its time, the dominant power — associated with Cat-Lon and a Skeleton-influenced order.</p>` },
        { h: 'Rise And Fall', body: `<p>Like the Empire before it, the Second Empire collapsed, leaving ruins, technology and political fragments that modern factions grew out of.</p>` },
        { h: 'Legacy', body: `<p>Many of the wasteland's ruins, items and faction grievances trace back to the Second Empire. Its fall is more recent and more legible than the Ancients'.</p>` },
        { h: 'Why It Matters', body: `<p>Understanding the Second Empire connects Cat-Lon, the Skeletons and today's factions into a single, tragic chain of collapse.</p>` }
      ],
      infobox: [['Era', 'Post-Ancient'], ['Tied to', 'Cat-Lon, Skeletons'], ['Status', 'Fallen'], ['Theme', 'Recent lost order']],
      related: [
        { href: '/lore/cat-lon', label: 'Cat-Lon' },
        { href: '/lore/the-collapse', label: 'The Collapse' },
        { href: '/lore/ancient-empire', label: 'The Ancient Empire' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'holy-nation-lore',
      name: 'Holy Nation Lore',
      summary: `The faith of Okran and Narko — how a sun-worshipping theocracy came to rule the wasteland's green heart.`,
      intro: `The Holy Nation believes the wasteland is a punishment, and that purity will end it. Belief like that builds empires — and graves.`,
      sections: [
        { h: 'The Faith', body: `<p>The Holy Nation worships Okran, the sun god of light and order, and condemns Narko, the moon associated with darkness and corruption. Its theology divides the world cleanly into pure and unclean.</p>` },
        { h: 'Doctrine And Persecution', body: `<p>That binary doctrine drives the Nation's persecution of Shek, Hivers, Skeletons and women — anything the priesthood decides is unclean becomes an enemy of the light.</p>` },
        { h: 'Phoenix And Power', body: `<p>The Holy Nation is led by the Holy Lord Phoenix and a priesthood, blending religious authority with military and political power across its green territory.</p>` },
        { h: 'Why It Matters', body: `<p>The Holy Nation's beliefs shape a huge portion of the map's safety and danger, and its conflict with the Shek is one of Kenshi's central tensions.</p>` }
      ],
      infobox: [['Worships', 'Okran (sun)'], ['Condemns', 'Narko (moon)'], ['Leader', 'Holy Lord Phoenix'], ['Theme', 'Purity & persecution']],
      related: [
        { href: '/factions/holy-nation', label: 'Holy Nation' },
        { href: '/factions/shek-kingdom', label: 'Shek Kingdom' },
        { href: '/guides/holy-nation-playthrough', label: 'Holy Nation Playthrough' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'the-collapse',
      name: 'The Collapse',
      summary: `The catastrophe that ended the old world and turned a living planet into the wasteland.`,
      intro: `The Collapse is the wound at the centre of Kenshi. Everything you see is what grew over it, or never healed.`,
      sections: [
        { h: 'Overview', body: `<p>The Collapse refers to the catastrophe — or chain of catastrophes — that destroyed the advanced civilisations and reduced the world to the harsh wasteland of the present.</p>` },
        { h: 'The Evidence', body: `<p>The Deadlands, Black Desert and Ashlands are the Collapse made geography — irradiated, acid-bound, lifeless regions where the disaster's force was greatest.</p>` },
        { h: 'Causes', body: `<p>Kenshi withholds a clean answer. Ruins, books and the Skeletons' fragmented accounts point to war, technological catastrophe and the breakdown of the old order.</p>` },
        { h: 'Why It Matters', body: `<p>The Collapse explains the wasteland's fundamental condition — why the world is scavenged, poisoned and politically shattered.</p>` }
      ],
      infobox: [['Event', 'World catastrophe'], ['Scars', 'Deadlands, Ashlands'], ['Cause', 'Ambiguous'], ['Theme', 'The end of the old world']],
      related: [
        { href: '/lore/ancient-empire', label: 'The Ancient Empire' },
        { href: '/regions/deadlands', label: 'The Deadlands' },
        { href: '/regions/ashlands', label: 'The Ashlands' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'behemoths',
      name: 'Behemoths',
      summary: `Colossal, ancient creatures that wander the wastes — relics of a different scale of life.`,
      intro: `A Behemoth does not notice you. To something that large and that old, your whole squad is weather.`,
      sections: [
        { h: 'Overview', body: `<p>Behemoths are enormous, slow, ancient creatures roaming parts of the wasteland — among the largest living things in Kenshi.</p>` },
        { h: 'Behaviour', body: `<p>Behemoths are generally peaceful and pay travellers little mind, plodding across the landscape on their own ancient routes.</p>` },
        { h: 'Place In The World', body: `<p>They function as living scenery and atmosphere — a reminder that the wasteland holds older, stranger life than the factions warring over it.</p>` },
        { h: 'Why It Matters', body: `<p>Behemoths reinforce Kenshi's sense of deep time and scale — the world is far larger and older than any one squad's story.</p>` }
      ],
      infobox: [['Type', 'Colossal creature'], ['Behaviour', 'Peaceful'], ['Role', 'Atmosphere, scale'], ['Threat', 'Low (if left alone)']],
      related: [
        { href: '/creatures/leviathans', label: 'Leviathans' },
        { href: '/lore/ancient-empire', label: 'The Ancient Empire' },
        { href: '/regions/the-great-desert', label: 'The Great Desert' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'stobe',
      name: 'Stobe',
      summary: `A legendary wanderer remembered in place-names across the map — Kenshi's quiet patron of the doomed journey.`,
      intro: `Stobe never built an empire. He just walked, and the wasteland remembered him for it.`,
      sections: [
        { h: 'Overview', body: `<p>Stobe is a legendary figure of Kenshi's folklore, a wanderer whose long, hard journey is memorialised in regions like Stobe's Gamble and Stobe's Garden.</p>` },
        { h: 'The Legend', body: `<p>Stobe's story is one of endurance against a hostile world — a traveller defined by the journey rather than conquest or rule.</p>` },
        { h: 'Place-Names', body: `<p>Locations bearing Stobe's name are scattered across harsh terrain, turning the map itself into a memorial of his passage.</p>` },
        { h: 'Why It Matters', body: `<p>Stobe embodies Kenshi's core ethos — survival and the journey matter more than glory. He is the wanderer every player unknowingly becomes.</p>` }
      ],
      infobox: [['Type', 'Folklore figure'], ['Remembered in', "Stobe's Gamble & others"], ['Theme', 'Endurance, the journey'], ['Status', 'Legend']],
      related: [
        { href: '/regions/stobes-gamble', label: "Stobe's Gamble" },
        { href: '/guides/desert-survival', label: 'Desert Survival' },
        { href: '/lore/the-collapse', label: 'The Collapse' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'ai-core-history',
      name: 'AI Core History',
      summary: `The intelligences of the Ancient world, now reduced to rare salvage that powers research and runs deep.`,
      intro: `An AI Core is a mind in a box, asleep for centuries. The wasteland sells them by weight and never asks what they used to be.`,
      sections: [
        { h: 'Overview', body: `<p>AI Cores are advanced artificial intelligences from the Ancient era. In the present they survive as rare, valuable salvage recovered from the deepest ruins.</p>` },
        { h: 'Gameplay Role', body: `<p>AI Cores are required for the highest tiers of research and are among the most valuable items in the game — a key reward for surviving the deadliest regions.</p>` },
        { h: 'Lore Significance', body: `<p>The Cores hint at the role artificial intelligence played in the Ancient world and its collapse — and at minds that may not be as dormant as they appear.</p>` },
        { h: 'Why It Matters', body: `<p>AI Cores link Kenshi's research economy directly to its deepest lore: to advance, you must dig into the very catastrophe that made the wasteland.</p>` }
      ],
      infobox: [['Type', 'Ancient AI / salvage'], ['Use', 'High-tier research'], ['Source', 'Deepest ruins'], ['Value', 'Very high']],
      related: [
        { href: '/lore/ancient-empire', label: 'The Ancient Empire' },
        { href: '/skills/science', label: 'Science' },
        { href: '/regions/deadlands', label: 'The Deadlands' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    }
  ],

  /* ---------------------------------------------------------- */
  /*                         CREATURES                          */
  /* ---------------------------------------------------------- */
  creatures: [
    {
      id: 'beak-things',
      name: 'Beak Things',
      danger: 'Extreme',
      summary: `The wasteland's apex predator — fast, huge and merciless. The creature that teaches new players to check the horizon.`,
      intro: `There is a moment every Kenshi player remembers: the first Beak Thing, and the realisation that running was always the plan.`,
      sections: [
        { h: 'Danger Level', body: `<p>Beak Things are among the deadliest creatures in the game. A single one can wipe an unprepared squad; a den of them ends runs.</p>` },
        { h: 'Behaviour & Speed', body: `<p>They are aggressive, fast — faster than a low-Athletics character — and they hunt. They den in regions like Vain and the Gut and will chase prey relentlessly.</p>` },
        { h: 'Loot', body: `<p>Beak Thing corpses yield meat and valuable materials, making them lucrative to hunt — for squads strong enough to win.</p>` },
        { h: 'Weaknesses & Counters', body: `<p>Beak Things are vulnerable to ranged fire and to being fought one at a time. Crossbow support, polearms and a strong front line are the standard counter; never fight a den in the open.</p>` }
      ],
      warn: `If you see a Beak Thing and your squad is not built for it, leave immediately. They are fast — a head start is the only safe margin.`,
      infobox: [['Danger', 'Extreme'], ['Speed', 'Very fast'], ['Found in', 'Vain, the Gut'], ['Counter', 'Ranged + chokepoint']],
      related: [
        { href: '/guides/avoiding-beak-things', label: 'How To Avoid Beak Things' },
        { href: '/regions/vain', label: 'Vain' },
        { href: '/weapons/polearms', label: 'Polearms' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'leviathans',
      name: 'Leviathans',
      danger: 'High',
      summary: `Colossal creatures of the Leviathan Coast — slow, peaceful, and catastrophic if you pick a fight.`,
      intro: `A Leviathan will not chase you. It does not have to. Anything that gets close enough to matter is already too close.`,
      sections: [
        { h: 'Danger Level', body: `<p>Leviathans are not aggressive, but they are enormous and hit with devastating force. A squad that provokes one and lingers in melee will be flattened.</p>` },
        { h: 'Behaviour & Speed', body: `<p>Leviathans are slow and largely passive, roaming the forested Leviathan Coast. They become dangerous only when attacked or crowded.</p>` },
        { h: 'Loot', body: `<p>Leviathans drop Leviathan Pearls — among the single most valuable items in the game — making a successful hunt extremely profitable.</p>` },
        { h: 'Weaknesses & Counters', body: `<p>Their slowness is the key. Hunt them with ranged fire and hit-and-retreat tactics, never standing in melee. Whittle them down from range with an escape route open.</p>` }
      ],
      tip: `Hunt Leviathans with crossbows and kiting. Their slowness lets a careful squad win without ever standing still.`,
      infobox: [['Danger', 'High'], ['Speed', 'Slow'], ['Found in', 'Leviathan Coast'], ['Loot', 'Leviathan Pearls']],
      related: [
        { href: '/regions/leviathan-coast', label: 'Leviathan Coast' },
        { href: '/factions/crab-raiders', label: 'Crab Raiders' },
        { href: '/guides/ranged-combat', label: 'Ranged Combat Guide' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'bonedogs',
      name: 'Bonedogs',
      danger: 'Low',
      summary: `Loyal, hardy wasteland dogs — manageable as a threat and excellent as squad members.`,
      intro: `Wild Bonedogs are a minor danger. A tamed Bonedog is one of the best decisions a young squad ever makes.`,
      sections: [
        { h: 'Danger Level', body: `<p>Wild Bonedog packs can trouble a fresh, weak squad but are a low threat to any developed group. They are far more notable as recruits than as enemies.</p>` },
        { h: 'As Squad Members', body: `<p>Bonedogs can be bought as puppies and raised into capable combat animals — fast, durable, and loyal additions to a squad.</p>` },
        { h: 'Loot', body: `<p>Wild Bonedogs yield meat and skins, useful for early food and trade income.</p>` },
        { h: 'Weaknesses & Counters', body: `<p>As enemies, wild Bonedogs fall easily to a formed-up squad. As allies, raise them young and let them train through your squad's fights.</p>` }
      ],
      tip: `Buy a Bonedog puppy early. Raised through your squad's fights, it grows into a strong, loyal combatant.`,
      infobox: [['Danger', 'Low'], ['Role', 'Recruitable animal'], ['Drops', 'Meat, skins'], ['Best use', 'Squad member']],
      related: [
        { href: '/guides/animal-squad', label: 'Animal Squad Guide' },
        { href: '/factions/nomads', label: 'The Nomads' },
        { href: '/guides/best-squad-roles', label: 'Best Squad Roles' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'blood-spiders',
      name: 'Blood Spiders',
      danger: 'High',
      summary: `Fast pack hunters of the swamp — dangerous in numbers, and a hard lesson for unprepared travellers.`,
      intro: `Blood Spiders do not announce themselves. By the time you have counted them, they are already on your squad.`,
      sections: [
        { h: 'Danger Level', body: `<p>Blood Spiders are a serious threat in the Swamp, especially to small or weak squads. Their danger scales sharply with pack size.</p>` },
        { h: 'Behaviour & Speed', body: `<p>They hunt in fast-moving packs through the swamp's poor visibility, swarming prey before it can react or retreat.</p>` },
        { h: 'Loot', body: `<p>Blood Spiders yield meat and materials, but most travellers fight them out of necessity rather than profit.</p>` },
        { h: 'Weaknesses & Counters', body: `<p>Fight Blood Spiders in formation at a chokepoint so the pack cannot surround you, and bring numbers — a lone traveller in the swamp is exactly their prey.</p>` }
      ],
      warn: `Never cross the Swamp solo or with a weak squad. Blood Spider packs are built to overwhelm small groups.`,
      infobox: [['Danger', 'High'], ['Tactic', 'Pack swarm'], ['Found in', 'The Swamp'], ['Counter', 'Formation, chokepoint']],
      related: [
        { href: '/regions/the-swamp', label: 'The Swamp' },
        { href: '/guides/squad-formation', label: 'Squad Formation Guide' },
        { href: '/guides/anti-bandit-strategies', label: 'Anti-Bandit Strategies' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'gorillos',
      name: 'Gorillos',
      danger: 'High',
      summary: `Powerful ape-like creatures that hit hard up close. Dangerous individually, not just in numbers.`,
      intro: `A Gorillo does not need a pack. One of them, in melee, is already a problem worth respecting.`,
      sections: [
        { h: 'Danger Level', body: `<p>Gorillos are strong, hard-hitting creatures that pose a real melee threat even one at a time — unusual among Kenshi's wildlife.</p>` },
        { h: 'Behaviour & Speed', body: `<p>They are aggressive when provoked and powerful in close combat, capable of staggering and downing fighters quickly.</p>` },
        { h: 'Loot', body: `<p>Gorillo corpses yield meat and materials, making them a worthwhile hunt for a capable squad.</p>` },
        { h: 'Weaknesses & Counters', body: `<p>Gorillos commit to melee, so ranged support and a strong, well-armoured front line counter them well. Avoid letting them isolate a weak character.</p>` }
      ],
      infobox: [['Danger', 'High'], ['Threat', 'Strong melee'], ['Drops', 'Meat, materials'], ['Counter', 'Ranged + armoured front']],
      related: [
        { href: '/guides/anti-bandit-strategies', label: 'Anti-Bandit Strategies' },
        { href: '/armor/heavy-armor', label: 'Heavy Armor' },
        { href: '/guides/ranged-combat', label: 'Ranged Combat Guide' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'river-raptors',
      name: 'River Raptors',
      danger: 'Moderate',
      summary: `Fast reptilian predators of wetlands and coasts — quick, persistent, and dangerous to stragglers.`,
      intro: `River Raptors hunt the edges — the slow squadmate, the lone traveller, the one who fell behind.`,
      sections: [
        { h: 'Danger Level', body: `<p>River Raptors are a moderate threat — manageable for a formed squad but genuinely dangerous to isolated or slow characters.</p>` },
        { h: 'Behaviour & Speed', body: `<p>They are fast and persistent predators of wet and coastal terrain, picking off stragglers and pursuing fleeing prey.</p>` },
        { h: 'Loot', body: `<p>River Raptors yield meat and skins, providing food and modest trade income.</p>` },
        { h: 'Weaknesses & Counters', body: `<p>Keep the squad together — Raptors prey on stragglers. A formed group with even modest combat skill handles them without much trouble.</p>` }
      ],
      tip: `River Raptors target the slowest member of your group. Keep low-Athletics characters inside the formation.`,
      infobox: [['Danger', 'Moderate'], ['Speed', 'Fast'], ['Targets', 'Stragglers'], ['Drops', 'Meat, skins']],
      related: [
        { href: '/skills/athletics', label: 'Athletics' },
        { href: '/guides/squad-formation', label: 'Squad Formation Guide' },
        { href: '/regions/leviathan-coast', label: 'Leviathan Coast' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'security-spiders',
      name: 'Security Spiders',
      danger: 'High',
      summary: `Ancient robotic guardians that still patrol ruins, executing security protocols for an empire long gone.`,
      intro: `The Security Spiders never got the order to stand down. They are still defending doors no one has knocked on for centuries.`,
      sections: [
        { h: 'Danger Level', body: `<p>Security Spiders are dangerous robotic creatures guarding Ancient ruins. As mechanical foes they can be a hard fight for squads expecting ordinary wildlife.</p>` },
        { h: 'Behaviour', body: `<p>They patrol and defend ruin sites, attacking intruders as part of long-defunct Ancient security systems.</p>` },
        { h: 'Loot', body: `<p>Security Spiders drop robotics components and Ancient salvage, valuable to Tech Hunters and for research.</p>` },
        { h: 'Weaknesses & Counters', body: `<p>As mechanical enemies they resist some damage types and favour blunt counters, similar to Skeletons. Bring blunt or heavy weapons to ruin runs where they patrol.</p>` }
      ],
      infobox: [['Danger', 'High'], ['Type', 'Ancient robot'], ['Found in', 'Ruins'], ['Drops', 'Robotics salvage']],
      related: [
        { href: '/lore/ancient-empire', label: 'The Ancient Empire' },
        { href: '/skills/robotics', label: 'Robotics' },
        { href: '/guides/robotics-economy', label: 'Robotics Economy' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'fogmen',
      name: 'Fogmen',
      danger: 'Extreme',
      summary: `Feral Hivers of the Fog Islands who attack in endless waves and devour the downed. A creature-threat as much as a faction.`,
      intro: `Fogmen are not an ambush. They are a tide, and the only way to beat a tide is to not be standing in it.`,
      sections: [
        { h: 'Danger Level', body: `<p>Fogmen are an extreme threat — not through individual strength but through relentless, endless numbers in the Fog Islands.</p>` },
        { h: 'Behaviour', body: `<p>They attack without fear or pause, swarming any squad in the fog and dragging the unconscious back to be eaten. There is no recovering an eaten character.</p>` },
        { h: 'Loot', body: `<p>Individually they carry little, but the Fog Islands' ruins — accessible only by getting past the Fogmen — hold valuable Ancient tech.</p>` },
        { h: 'Weaknesses & Counters', body: `<p>Fogmen are individually weak — fight them at a wall or chokepoint so only a few engage at once, with ranged support thinning the rest. Never get surrounded in open fog.</p>` }
      ],
      warn: `Fogmen eat the downed. A character lost in the Fog Islands is usually lost permanently. Fight only from a controlled chokepoint.`,
      infobox: [['Danger', 'Extreme'], ['Threat', 'Endless waves'], ['Found in', 'Fog Islands'], ['Counter', 'Chokepoint + ranged']],
      related: [
        { href: '/factions/fogmen', label: 'The Fogmen (Faction)' },
        { href: '/regions/fog-islands', label: 'Fog Islands' },
        { href: '/cities/mongrel', label: 'Mongrel' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    }
  ],
  /* ---------------------------------------------------------- */
  /*                          GUIDES                            */
  /* ---------------------------------------------------------- */
  guides: [
    {
      id: 'surviving-first-week',
      category: 'survival', difficulty: 'Beginner',
      title: 'Surviving Your First Week',
      tagline: `Your first week is not about winning. It is about not dying for reasons you could have avoided.`,
      summary: `Pick a safe town, earn starting cash, recruit a second body, and learn to run before you learn to fight.`,
      sections: [
        { h: 'The First Goal', body: `<p>Forget glory. Week one has three jobs: find a safe town, earn a little money, and add a second character so a single bad fight does not end the run. Squin is the standard answer for a base.</p>` },
        { h: 'Money & Recruits', body: `<p>Mine copper near the Hub or Squin for your first cats, then recruit a cheap merc from a bar. Two characters survive what one cannot, and one can drag the other to safety.</p>` },
        { h: 'Learn To Run', body: `<p>Running away is not failure in Kenshi — it is a core mechanic. Train Athletics by travelling on foot, and flee any fight you are not sure you can win.</p>` },
        { h: 'Common First-Week Mistakes', body: `<p>Wandering into the wrong region for your race, fighting Hungry Bandit packs head-on, and exploring the map before the squad can survive it. Stay near guards and grow slowly.</p>` }
      ],
      related: [
        { href: '/cities/squin', label: 'Squin' },
        { href: '/guides/avoiding-early-death', label: 'Avoiding Early Death' },
        { href: '/guides/best-beginner-starts', label: 'Best Beginner Starts' }
      ],
      sources: ['kenshiWiki', 'redditCommunity', 'steamGuides']
    },
    {
      id: 'escaping-slavery',
      category: 'survival', difficulty: 'Intermediate',
      title: 'Escaping Slavery',
      tagline: `A collar is a setback, not an ending. Some of the strongest characters in the game were forged in a slave camp.`,
      summary: `If you are enslaved, train your stats in captivity, pick your moment, break the collar and run for friendly ground.`,
      sections: [
        { h: 'Captivity Is Training', body: `<p>Enslaved characters keep training. Forced labour builds Labouring and Strength; the harsh conditions build Toughness. Many players leave captivity stronger than they entered it.</p>` },
        { h: 'Preparing To Escape', body: `<p>Build Athletics and combat stats while collared, and watch the guard patterns. Escape attempts are far safer once you can actually outrun and outfight the guards.</p>` },
        { h: 'Breaking Out', body: `<p>Wait for guards to be distracted or thin, break for a fence or gate, and remove the collar once clear. Then run hard for the nearest non-UC friendly town.</p>` },
        { h: 'After The Escape', body: `<p>You will be weak and wanted. Get to safe ground, heal, and clear your bounty or stay out of UC patrol routes until you are strong again.</p>` }
      ],
      related: [
        { href: '/factions/slave-traders', label: 'Slave Traders' },
        { href: '/skills/athletics', label: 'Athletics' },
        { href: '/guides/anti-slaver-run', label: 'Anti-Slaver Run' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'desert-survival',
      category: 'survival', difficulty: 'Beginner',
      title: 'Desert Survival',
      tagline: `The desert does not hunt you. It just waits for you to run out of water, shade and good sense.`,
      summary: `Carry food and water, time your crossings, avoid acid-rain regions unprotected, and never march a hungry squad into open sand.`,
      sections: [
        { h: 'Water, Food & Hunger', body: `<p>Hunger drains steadily, and a starving character fights and moves poorly. Carry food, and keep a pack animal if you can — a garru turns a desperate crossing into a routine one.</p>` },
        { h: 'Environmental Hazards', body: `<p>Some regions carry acid rain that damages unprotected characters. Check the region before crossing and route around hazard zones, or carry proper coverage.</p>` },
        { h: 'Timing Your Travel', body: `<p>Plan crossings town to town with a clear destination. A squad caught between settlements at low food or health has no fallback.</p>` },
        { h: 'Common Mistakes', body: `<p>Marching an already-hungry, already-wounded squad into open desert, and ignoring weather. The desert punishes poor planning more than bad luck.</p>` }
      ],
      related: [
        { href: '/regions/the-great-desert', label: 'The Great Desert' },
        { href: '/base-building/water-problems', label: 'Water Problems' },
        { href: '/factions/nomads', label: 'The Nomads' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'anti-bandit-strategies',
      category: 'survival', difficulty: 'Beginner',
      title: 'Anti-Bandit Strategies',
      tagline: `Bandits are weak one at a time. They make sure it is never one at a time.`,
      summary: `Use town guards, fight at chokepoints, never get surrounded, and let numbers — yours or the guards' — do the work.`,
      sections: [
        { h: 'Understand The Threat', body: `<p>Most bandits — Hungry Bandits, Dust Bandits — are individually weak but attack in packs. The danger is being surrounded, not being outmatched.</p>` },
        { h: 'Fight Near Guards', body: `<p>The simplest anti-bandit tactic is to lead them to a guarded town. Town guards will join the fight, turning a dangerous swarm into safe combat XP.</p>` },
        { h: 'Use Chokepoints', body: `<p>Gates, doorways and narrow terrain force bandits to engage a few at a time. A single good blocker at a chokepoint can hold a whole pack.</p>` },
        { h: 'Know When To Run', body: `<p>If the pack is too large and no guards are near, leave. A fed, rested squad outruns most bandits — losing the fight you never had costs nothing.</p>` }
      ],
      related: [
        { href: '/regions/border-zone', label: 'The Border Zone' },
        { href: '/guides/squad-formation', label: 'Squad Formation Guide' },
        { href: '/cities/squin', label: 'Squin' }
      ],
      sources: ['kenshiWiki', 'redditCommunity', 'steamGuides']
    },
    {
      id: 'night-travel',
      category: 'survival', difficulty: 'Intermediate',
      title: 'Night Travel Guide',
      tagline: `Darkness hides you from some things and hides other things from you. Know which is which.`,
      summary: `Night travel improves stealth and can avoid patrols, but reduces your sight and raises the risk of walking into predators.`,
      sections: [
        { h: 'Why Travel At Night', body: `<p>Darkness aids stealth and can let a squad slip past patrols and faction forces that would stop them by day. For stealth and outlaw play, night is an ally.</p>` },
        { h: 'The Risks', body: `<p>Reduced visibility cuts both ways — you see threats later, and can stumble into predator territory or a bandit camp before you notice it.</p>` },
        { h: 'Doing It Safely', body: `<p>Travel known routes at night, keep the squad together, and avoid crossing predator regions like Vain or the Gut in the dark.</p>` },
        { h: 'Best Uses', body: `<p>Night travel suits stealth runs, smuggling and slipping past hostile faction territory. For ordinary travel through predator country, daylight is safer.</p>` }
      ],
      related: [
        { href: '/skills/stealth', label: 'Stealth' },
        { href: '/guides/stealth-builds', label: 'Stealth Builds' },
        { href: '/guides/smuggling', label: 'Smuggling Guide' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'injury-recovery',
      category: 'survival', difficulty: 'Beginner',
      title: 'Injury Recovery Guide',
      tagline: `In Kenshi you do not die from the hit. You die from what you do in the hour after it.`,
      summary: `Treat wounds fast, get downed characters to safety, manage blood loss, and use beds and medics to recover properly.`,
      sections: [
        { h: 'Wounds & Blood Loss', body: `<p>Damage leaves wounds that bleed. Untreated bleeding can kill a character who survived the fight itself. Apply first aid quickly with bandages or a medic.</p>` },
        { h: 'Downed Characters', body: `<p>A knocked-out character is not dead — but they are vulnerable to predators and slavers. Get them to safety, ideally a bed in a town or base, before enemies return.</p>` },
        { h: 'Healing Properly', body: `<p>Rest in beds speeds recovery, and a high-Field-Medic character heals the squad faster. Robotic characters need Repair Kits and the Robotics skill instead.</p>` },
        { h: 'Common Mistakes', body: `<p>Ignoring bleeding, leaving downed characters in the open, and pushing a half-healed squad straight back into danger. Recovery is part of the fight.</p>` }
      ],
      related: [
        { href: '/skills/toughness', label: 'Toughness' },
        { href: '/guides/medic-builds', label: 'Medic Builds' },
        { href: '/armor/robotic-limbs', label: 'Robotic Limbs' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'avoiding-beak-things',
      category: 'survival', difficulty: 'Intermediate',
      title: 'How To Avoid Beak Things',
      tagline: `The correct response to a Beak Thing is not a strategy. It is a head start.`,
      summary: `Scout ahead, know which regions they den in, keep Athletics high, and treat any Beak Thing sighting as a signal to leave.`,
      sections: [
        { h: 'Know Their Territory', body: `<p>Beak Things den in specific regions — Vain, the Gut and others. Knowing where they live lets you route around them entirely rather than discovering them by surprise.</p>` },
        { h: 'Scout Ahead', body: `<p>Keep the camera moving ahead of your squad while travelling. Spotting a Beak Thing early is the difference between a detour and a disaster.</p>` },
        { h: 'Keep Athletics High', body: `<p>Beak Things are fast. A squad with low Athletics cannot outrun them. Train Athletics so retreat is actually an option.</p>` },
        { h: 'If You Must Fight', body: `<p>Never fight a den in the open. Pull single Beak Things to a chokepoint, support with crossbows and polearms, and keep an escape route open.</p>` }
      ],
      related: [
        { href: '/creatures/beak-things', label: 'Beak Things' },
        { href: '/regions/vain', label: 'Vain' },
        { href: '/skills/athletics', label: 'Athletics' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'avoiding-early-death',
      category: 'survival', difficulty: 'Beginner',
      title: 'Avoiding Early Death',
      tagline: `Most early runs do not end in a heroic last stand. They end in a careless fight that never had to happen.`,
      summary: `Stay near guards, never travel alone, route around your race's enemies, and accept that retreat is a win.`,
      sections: [
        { h: 'Stay Near Safety', body: `<p>For the early game, keep your squad within reach of a guarded town. Town guards turn most dangerous encounters into survivable ones.</p>` },
        { h: 'Never Travel Alone', body: `<p>A solo character who goes down is finished — eaten, enslaved or bled out. A second character can fight on or drag them clear. Recruit early.</p>` },
        { h: 'Respect The Map', body: `<p>Regions and factions are not balanced for a fresh squad. Route around predator zones and your race's faction enemies until you are strong enough to cross them.</p>` },
        { h: 'Retreat Is A Win', body: `<p>The single biggest cause of early death is fighting something you should have walked away from. If in doubt, leave. The run continuing is the only victory that matters.</p>` }
      ],
      related: [
        { href: '/guides/surviving-first-week', label: 'Surviving Your First Week' },
        { href: '/guides/why-running-away-matters', label: 'Why Running Away Matters' },
        { href: '/guides/anti-bandit-strategies', label: 'Anti-Bandit Strategies' }
      ],
      sources: ['kenshiWiki', 'redditCommunity', 'steamGuides']
    },
    {
      id: 'why-running-away-matters',
      category: 'survival', difficulty: 'Beginner',
      title: 'Why Running Away Matters',
      tagline: `Kenshi does not reward courage. It rewards judgement — and judgement often says run.`,
      summary: `Retreat preserves the run, trains Athletics, and turns losing fights into survivable ones. It is a skill, not a shame.`,
      sections: [
        { h: 'Running Is A Mechanic', body: `<p>Kenshi is designed around the option to retreat. Enemies you cannot beat today can be avoided, outrun, or fought later when your squad is stronger.</p>` },
        { h: 'Athletics Makes It Possible', body: `<p>Retreat only works if you are fast enough. Train Athletics early and keep encumbrance low so your squad can actually escape what it cannot beat.</p>` },
        { h: 'When To Run', body: `<p>Run when you are outnumbered with no guards near, when a predator appears, or when a fight is going badly and a character is close to going down.</p>` },
        { h: 'Failing Forward', body: `<p>Even a lost fight is progress if everyone survives — Toughness rises, lessons are learned. The unrecoverable loss is the squad that should have run and did not.</p>` }
      ],
      related: [
        { href: '/skills/athletics', label: 'Athletics' },
        { href: '/skills/toughness', label: 'Toughness' },
        { href: '/guides/avoiding-early-death', label: 'Avoiding Early Death' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'best-beginner-starts',
      category: 'survival', difficulty: 'Beginner',
      title: 'Best Beginner Starts',
      tagline: `Your start scenario decides how hard the first hour is. Some are a tutorial. Some are a punishment.`,
      summary: `For a first run pick a gentle start — a Greenlander, a couple of squadmates, and a safe region near Squin or the Hub.`,
      sections: [
        { h: 'What A Start Decides', body: `<p>Start scenarios set your initial characters, gear, money and location. A gentle start drops you safe and equipped; a hard start drops you alone, broke, or in danger.</p>` },
        { h: 'Recommended First Starts', body: `<p>The Wanderer-style starts — a single capable character free to choose their path — are the standard beginner pick. Starts that begin with a second squadmate are even safer.</p>` },
        { h: 'Starts To Avoid First', body: `<p>Avoid solo, enslaved or hostile-region starts for a first run. They are excellent challenges once you know the game, and miserable when you do not.</p>` },
        { h: 'Race And Region', body: `<p>Pair a Greenlander with a central start near the Border Zone or Shek territory. It sidesteps the worst faction hostility while you learn.</p>` }
      ],
      related: [
        { href: '/races/greenlanders', label: 'Greenlanders' },
        { href: '/cities/squin', label: 'Squin' },
        { href: '/guides/surviving-first-week', label: 'Surviving Your First Week' }
      ],
      sources: ['kenshiWiki', 'redditCommunity', 'steamGuides']
    },
    {
      id: 'copper-mining',
      category: 'economy', difficulty: 'Beginner',
      title: 'Copper Mining',
      tagline: `Copper is the wasteland's starter wage — slow, dull, and exactly what a broke squad needs.`,
      summary: `Mine copper near a safe town, sell it to local vendors, and use the income to recruit and equip your first squad.`,
      sections: [
        { h: 'Why Copper', body: `<p>Copper nodes are common, the work needs no skill or capital, and it is safe near towns. It is the reliable first income for almost every new squad.</p>` },
        { h: 'Where To Mine', body: `<p>Mine near guarded towns — the Hub and Squin both sit on workable copper. Staying close to guards keeps the work safe from bandits.</p>` },
        { h: 'Selling It', body: `<p>Sell raw copper to town vendors. Prices are modest, so mine in bulk; a pack animal lets you haul far more per trip.</p>` },
        { h: 'When To Move On', body: `<p>Copper mining is a starter job, not a career. Once you have a squad and gear, graduate to trade routes, production or bounties — the income scales far better.</p>` }
      ],
      related: [
        { href: '/cities/the-hub', label: 'The Hub' },
        { href: '/guides/base-economy', label: 'Base Economy' },
        { href: '/guides/best-money-making-methods', label: 'Best Money Methods' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'smuggling',
      category: 'economy', difficulty: 'Intermediate',
      title: 'Smuggling Guide',
      tagline: `Smuggling pays because someone made the goods illegal. That someone also runs the guards.`,
      summary: `Move contraband past faction inspections using stealth, hidden inventory pockets and routes that avoid patrols.`,
      sections: [
        { h: 'What Counts As Contraband', body: `<p>Some goods — drugs especially — are illegal in certain factions' territory. Carrying them through inspections risks fines, bounties or worse.</p>` },
        { h: 'Beating Inspections', body: `<p>Higher Stealth and Thievery skills, smuggler's gear with hidden pockets, and travelling at night all reduce the chance contraband is found during a search.</p>` },
        { h: 'Route Planning', body: `<p>Plan routes that minimise faction inspections — skirt patrols, use night travel, and sell into independent or grey-market towns like Shark and Flats Lagoon.</p>` },
        { h: 'Risks', body: `<p>Getting caught damages faction reputation and can land a bounty. Smuggling is profitable but it is an outlaw's income — treat the risk as part of the price.</p>` }
      ],
      related: [
        { href: '/guides/hashish-trading', label: 'Hashish Trading' },
        { href: '/skills/stealth', label: 'Stealth' },
        { href: '/cities/shark', label: 'Shark' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'trading-routes',
      category: 'economy', difficulty: 'Intermediate',
      title: 'Trading Routes',
      tagline: `Trade is just knowing two prices and owning the legs to walk between them.`,
      summary: `Buy goods cheap where they are produced, sell dear where they are scarce, and run a steady circuit between towns.`,
      sections: [
        { h: 'How Trade Profit Works', body: `<p>Goods are cheap near where they are produced and expensive where they are scarce. A trading route buys low at the source and sells high at the destination.</p>` },
        { h: 'Building A Route', body: `<p>Identify a pair or loop of towns with a real price gap on some good, then run a regular circuit. A pack animal multiplies how much profit each trip carries.</p>` },
        { h: 'What To Trade', body: `<p>Look for goods with a wide regional price gap. Specialised regional products and processed goods tend to move better than raw bulk ore.</p>` },
        { h: 'Risks', body: `<p>Trade routes cross open country — bandits, predators and faction patrols all threaten a loaded caravan. Guard your traders or keep routes short and safe.</p>` }
      ],
      related: [
        { href: '/factions/traders-guild', label: 'Traders Guild' },
        { href: '/factions/nomads', label: 'The Nomads' },
        { href: '/guides/base-economy', label: 'Base Economy' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'hashish-trading',
      category: 'economy', difficulty: 'Intermediate',
      title: 'Hashish Trading',
      tagline: `Hashish is the wasteland's most reliable bad idea — and one of its most profitable.`,
      summary: `Grow hemp in the swamp, process it into hashish, and sell into grey-market towns — accepting the legal risk for high margins.`,
      sections: [
        { h: 'The Hemp-To-Hashish Chain', body: `<p>Hemp grows well in the swamp; processed into hashish, it becomes a high-value trade good. The full chain — farm, process, sell — is one of the strongest base economies.</p>` },
        { h: 'Where To Sell', body: `<p>Hashish is illegal in some territories, so sell into independent and grey-market towns like Shark. Selling openly in UC or Holy Nation land invites trouble.</p>` },
        { h: 'The Legal Risk', body: `<p>Carrying or selling hashish in the wrong territory risks fines and bounties. Plan routes around inspections, or pair this with the Smuggling guide.</p>` },
        { h: 'Why It Works', body: `<p>The legal risk is exactly why margins are high. A swamp base running a hemp-to-hashish chain can fund an entire squad's expansion.</p>` }
      ],
      related: [
        { href: '/regions/the-swamp', label: 'The Swamp' },
        { href: '/cities/shark', label: 'Shark' },
        { href: '/guides/smuggling', label: 'Smuggling Guide' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'base-economy',
      category: 'economy', difficulty: 'Advanced',
      title: 'Base Economy',
      tagline: `An adventuring squad earns when it works. A base earns while it sleeps.`,
      summary: `Turn a base into a money engine with farming, mining and production chains that generate goods to sell continuously.`,
      sections: [
        { h: 'From Squad To System', body: `<p>Early income depends on your characters actively working. A base economy shifts that to systems — farms, mines and machines that produce while the squad does other things.</p>` },
        { h: 'Choosing A Product', body: `<p>Pick a product with strong margins and a reliable buyer: armour and weapons for high value, hashish for grey-market profit, food for self-sufficiency.</p>` },
        { h: 'Building The Chain', body: `<p>Link raw input to finished good with storage between every step, assign skilled workers, and power it all adequately. A smooth chain runs without supervision.</p>` },
        { h: 'Scaling Up', body: `<p>Reinvest profits into more machines, more workers and better defences. A mature base economy funds squads, expansion and the endgame.</p>` }
      ],
      related: [
        { href: '/base-building/automated-production', label: 'Automated Production' },
        { href: '/base-building/farming-systems', label: 'Farming Systems' },
        { href: '/guides/best-money-making-methods', label: 'Best Money Methods' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'robotics-economy',
      category: 'economy', difficulty: 'Advanced',
      title: 'Robotics Economy',
      tagline: `The dead lands are full of money. It is just guarded by the things that killed everyone else.`,
      summary: `Salvage robotics components from Skeletons and ruins, then sell or craft them into high-value goods for serious income.`,
      sections: [
        { h: 'The Source', body: `<p>Skeleton enemies and Ancient ruins drop robotics components, Skeleton Repair Kits and Ancient salvage. The Deadlands and ruin regions are rich in it.</p>` },
        { h: 'Selling Salvage', body: `<p>Tech Hunters pay well for robotics components and Ancient tech. Towns like Black Scratch and World's End are natural markets.</p>` },
        { h: 'Crafting With It', body: `<p>With Robotics skill you can craft robotic limbs and components, turning raw salvage into high-value finished goods for an even better margin.</p>` },
        { h: 'The Catch', body: `<p>The robotics economy means fighting Skeletons and braving deadly regions. It is a strong mid-to-late game income, not an early one.</p>` }
      ],
      related: [
        { href: '/skills/robotics', label: 'Robotics' },
        { href: '/factions/skeleton-bandits', label: 'Skeleton Bandits' },
        { href: '/regions/deadlands', label: 'The Deadlands' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'best-money-making-methods',
      category: 'economy', difficulty: 'Intermediate',
      title: 'Best Money Making Methods',
      tagline: `Every cat you earn buys gear, recruits and walls. The wasteland respects a full purse.`,
      summary: `From copper mining to bounties, trade routes, base production and Leviathan hunting — match the method to your game stage.`,
      sections: [
        { h: 'Early Game', body: `<p>Start with copper mining and bounty hunting near safe towns. Both are low-risk and need no capital — enough to recruit and equip a first squad.</p>` },
        { h: 'Mid Game', body: `<p>Move to trade routes, hashish or weapon and armour crafting. Mid-game income should come from systems and circuits, not pickaxe work.</p>` },
        { h: 'Late Game', body: `<p>A mature base economy, robotics salvage and high-value hunts — Leviathan Pearls especially — generate the cats for endgame expansion.</p>` },
        { h: 'The Principle', body: `<p>Always be moving up the income ladder. The method that funded last week should be replaced by something that scales better this week.</p>` }
      ],
      related: [
        { href: '/guides/copper-mining', label: 'Copper Mining' },
        { href: '/guides/base-economy', label: 'Base Economy' },
        { href: '/creatures/leviathans', label: 'Leviathans' }
      ],
      sources: ['kenshiWiki', 'redditCommunity', 'steamGuides']
    },
    {
      id: 'melee-combat-basics',
      category: 'combat', difficulty: 'Beginner',
      title: 'Melee Combat Basics',
      tagline: `Kenshi combat is not about reflexes. It is about who is standing where, and who outnumbers whom.`,
      summary: `Combat is resolved by stats and positioning — manage Attack, Defence, formation and numbers rather than twitch skill.`,
      sections: [
        { h: 'How Combat Works', body: `<p>Melee combat is resolved automatically through stats — Attack versus Defence, modified by weapons, armour and fatigue. You direct positioning and targets, not individual swings.</p>` },
        { h: 'Positioning & Numbers', body: `<p>Being surrounded splits your Defence across attackers and is the main cause of defeat. Fight at chokepoints and concentrate your numbers on isolated enemies.</p>` },
        { h: 'Weapon Choice', body: `<p>Match the weapon to the fight: katanas for unarmoured foes, heavy weapons and hackers for armour, polearms for reach, sidearms for indoors.</p>` },
        { h: 'Fatigue & Hunger', body: `<p>Tired and hungry characters fight badly. Keep the squad fed and rested before a fight you intend to win.</p>` }
      ],
      related: [
        { href: '/skills/attack', label: 'Attack' },
        { href: '/skills/defense', label: 'Defence' },
        { href: '/guides/squad-formation', label: 'Squad Formation Guide' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'ranged-combat',
      category: 'combat', difficulty: 'Intermediate',
      title: 'Ranged Combat Guide',
      tagline: `A crossbow line wins the fight before the enemy arrives — or shoots your own front rank if you let it.`,
      summary: `Crossbows deal damage before melee, but demand positioning to manage reload time and friendly fire.`,
      sections: [
        { h: 'The Value Of Range', body: `<p>Crossbows let you damage enemies during their approach, softening raids and large creatures before melee even begins. On base walls they are invaluable.</p>` },
        { h: 'Friendly Fire', body: `<p>Missed bolts can hit your own squad. Position shooters so their fire lines do not cross your melee, and stage melee to engage after the volley.</p>` },
        { h: 'Reload & Positioning', body: `<p>Crossbows reload slowly and are best used from a fixed, elevated position with clear sightlines — walls, towers, ridges.</p>` },
        { h: 'Best Uses', body: `<p>Ranged shines in base defence and against slow, dangerous creatures like Leviathans. It is weaker in chaotic open melee.</p>` }
      ],
      related: [
        { href: '/weapons/crossbows', label: 'Crossbows' },
        { href: '/guides/crossbow-guide', label: 'Crossbow Guide' },
        { href: '/base-building/turret-meta', label: 'Turret Meta' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'crossbow-guide',
      category: 'combat', difficulty: 'Intermediate',
      title: 'Crossbow Guide',
      tagline: `The crossbow is the only weapon that can win a fight and lose you a squadmate in the same volley.`,
      summary: `Choose the right crossbow tier, train Crossbows and Precision Shooting, keep bolts stocked, and manage firing lines.`,
      sections: [
        { h: 'Crossbow Tiers', body: `<p>Crossbows range from light models with fast reloads to heavy ones with huge damage and slow reloads. Match the tier to the shooter and the role.</p>` },
        { h: 'Skills That Matter', body: `<p>The Crossbows skill governs damage and effectiveness; Precision Shooting reduces the chance of hitting allies. Both climb with practice and matter a great deal.</p>` },
        { h: 'Bolts & Supply', body: `<p>Crossbows consume bolts, which vary in quality. Keep shooters supplied — an unsupplied crossbow rank is just expensive dead weight.</p>` },
        { h: 'Managing Friendly Fire', body: `<p>Early, low-skill shooters hit allies often. Position them with clear lanes, keep melee out of the line, and let skill reduce the risk over time.</p>` }
      ],
      related: [
        { href: '/weapons/crossbows', label: 'Crossbows' },
        { href: '/guides/ranged-combat', label: 'Ranged Combat Guide' },
        { href: '/base-building/raid-defense', label: 'Raid Defense' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'martial-arts-guide',
      category: 'combat', difficulty: 'Advanced',
      title: 'Martial Arts Guide',
      tagline: `A martial artist carries no weapon, so the wasteland can never take one. That is the whole appeal.`,
      summary: `Build Martial Arts with Dodge and Toughness, keep armour and encumbrance light, and use captivity as natural training.`,
      sections: [
        { h: 'The Core Build', body: `<p>A martial artist relies on Martial Arts for offence and Dodge plus Toughness for survival. They avoid hits rather than block them, so the defensive skills are not optional.</p>` },
        { h: 'Gear Rules', body: `<p>Martial Arts is penalised by armour on the hands and by encumbrance. Keep the build light — light armour, low carried weight — or the damage collapses.</p>` },
        { h: 'Training It', body: `<p>Fight unarmed against capable enemies near guards. Captivity is ideal training — an enslaved character keeps no weapon, so a slave camp doubles as a dojo.</p>` },
        { h: 'Strengths & Weaknesses', body: `<p>Martial artists can never be disarmed and excel against unarmoured foes, but struggle against heavy armour and are fragile while the build is still developing.</p>` }
      ],
      related: [
        { href: '/skills/martial-arts', label: 'Martial Arts' },
        { href: '/skills/dodge', label: 'Dodge' },
        { href: '/armor/light-armor', label: 'Light Armor' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'armor-penalties',
      category: 'combat', difficulty: 'Intermediate',
      title: 'Armor Penalties Explained',
      tagline: `Armour is a trade. Understand what it costs before you decide it is worth paying.`,
      summary: `Heavy armour protects but slows you and cripples stealth, Dodge and Martial Arts — match armour weight to the build.`,
      sections: [
        { h: 'What Armour Costs', body: `<p>Heavier armour reduces combat movement speed, hurts stealth, and penalises Athletics, Dodge and Martial Arts. It also adds encumbrance.</p>` },
        { h: 'When The Cost Is Worth It', body: `<p>On a front-line tank whose job is to stand and block, the speed loss barely matters and the protection is decisive. Heavy armour is correct there.</p>` },
        { h: 'When It Is Not', body: `<p>On assassins, martial artists, ranged shooters and high-Dodge skirmishers, armour penalties gut the build. These characters want light gear.</p>` },
        { h: 'The Rule', body: `<p>Match armour weight to role. Tanks wear heavy, specialists wear light, and most of the squad sits comfortably on medium.</p>` }
      ],
      related: [
        { href: '/armor/heavy-armor', label: 'Heavy Armor' },
        { href: '/armor/light-armor', label: 'Light Armor' },
        { href: '/guides/best-squad-roles', label: 'Best Squad Roles' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'squad-formation',
      category: 'combat', difficulty: 'Intermediate',
      title: 'Squad Formation Guide',
      tagline: `A squad that fights as a line beats a squad that fights as a crowd, every time.`,
      summary: `Place tanks in front, ranged and support behind, hold chokepoints, and never let the squad get surrounded.`,
      sections: [
        { h: 'Why Formation Wins', body: `<p>Combat is decided by who is surrounded. A loose crowd gets enveloped; a tight line presents only its front and concentrates damage.</p>` },
        { h: 'Roles In The Line', body: `<p>Heavy-armoured tanks form the front and absorb the fight. Damage dealers work the flanks of the line; ranged and medics stay behind it.</p>` },
        { h: 'Chokepoints', body: `<p>Fight in gates, doorways and narrow terrain so enemies can only engage a few at a time. A chokepoint multiplies a small squad's effective strength.</p>` },
        { h: 'Avoiding Encirclement', body: `<p>Back the squad against terrain or walls so nothing can reach the rear ranks. The moment the line is flanked, the fight turns.</p>` }
      ],
      related: [
        { href: '/guides/melee-combat-basics', label: 'Melee Combat Basics' },
        { href: '/guides/best-squad-roles', label: 'Best Squad Roles' },
        { href: '/guides/tank-builds', label: 'Tank Builds' }
      ],
      sources: ['kenshiWiki', 'steamGuides', 'redditCommunity']
    },
    {
      id: 'training-safely',
      category: 'combat', difficulty: 'Beginner',
      title: 'Training Safely',
      tagline: `The wasteland will train your squad for free. The trick is surviving the lesson.`,
      summary: `Use town guards, training dummies, captivity and controlled fights to build stats without losing characters.`,
      sections: [
        { h: 'Guard-Assisted Training', body: `<p>Lead enemies to town guards and fight alongside them. Your characters gain combat XP while the guards ensure the fight stays survivable.</p>` },
        { h: 'Training Equipment', body: `<p>Training dummies and similar base equipment build combat skills safely, with no risk. Slow, but ideal for early characters who cannot yet fight.</p>` },
        { h: 'Controlled Fights', body: `<p>Pick fights you can win against enemies slightly above your level, near a fallback. Losing carefully trains Toughness; winning trains everything else.</p>` },
        { h: 'Captivity As Training', body: `<p>Enslavement forces labour and hardship that train Strength, Athletics and Toughness. A planned stint as a slave is a legitimate training strategy.</p>` }
      ],
      related: [
        { href: '/skills/toughness', label: 'Toughness' },
        { href: '/guides/toughness-training', label: 'Toughness Training' },
        { href: '/cities/squin', label: 'Squin' }
      ],
      sources: ['kenshiWiki', 'steamGuides', 'redditCommunity']
    },
    {
      id: 'toughness-training',
      category: 'combat', difficulty: 'Intermediate',
      title: 'Toughness Training',
      tagline: `Toughness is the one stat you cannot train by winning. You have to be willing to lose.`,
      summary: `Build Toughness by surviving defeats — get downed in survivable conditions, recover, and repeat until your squad stops dying.`,
      sections: [
        { h: 'Why Toughness Is Special', body: `<p>Toughness rises when a character takes damage and survives. Winning fights cleanly barely trains it — you have to be hit, and hit hard.</p>` },
        { h: 'Safe Defeat', body: `<p>Get characters downed where they will not be killed or carried off — near town guards, who drive enemies away once your character falls. Then heal and repeat.</p>` },
        { h: 'The Slavery Route', body: `<p>Captivity reliably trains Toughness through hardship and beatings. Many players treat a stint of enslavement as deliberate Toughness training.</p>` },
        { h: 'Why It Pays Off', body: `<p>A high-Toughness squad gets back up instead of dying, keeps limbs, and turns every lost fight into progress. It is the stat that makes Kenshi's "fail forward" loop work.</p>` }
      ],
      related: [
        { href: '/skills/toughness', label: 'Toughness' },
        { href: '/guides/training-safely', label: 'Training Safely' },
        { href: '/guides/injury-recovery', label: 'Injury Recovery Guide' }
      ],
      sources: ['kenshiWiki', 'steamGuides', 'redditCommunity']
    },
    {
      id: 'heavy-armor-guide',
      category: 'combat', difficulty: 'Intermediate',
      title: 'Heavy Armor Guide',
      tagline: `Beginners think heavy armour is slow. Veterans know it is the reason their tank is still standing.`,
      summary: `Heavy armour turns a strong character into an immovable front line — wear it on tanks, never on speed builds.`,
      sections: [
        { h: 'Why Heavy Armour Is Strong', body: `<p>Heavy armour gives the best damage reduction in the game and converts lethal cutting hits into survivable blunt ones, protecting limbs and preventing the wounds that lose characters.</p>` },
        { h: 'The Penalties', body: `<p>It reduces combat speed, cripples stealth, Dodge and Martial Arts, and adds encumbrance. These costs are real — but on a dedicated tank they barely register.</p>` },
        { h: 'Who Wears It', body: `<p>Put heavy armour on your highest-Defence, high-Strength front-line fighters. Their job is to stand and block, so slowness does not matter.</p>` },
        { h: 'Where To Get It', body: `<p>Buy quality plate from United Cities armouries — Heft especially — or craft it once your base has the research and the skilled workers.</p>` }
      ],
      related: [
        { href: '/armor/heavy-armor', label: 'Heavy Armor' },
        { href: '/guides/tank-builds', label: 'Tank Builds' },
        { href: '/guides/armor-penalties', label: 'Armor Penalties Explained' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'best-base-locations',
      category: 'base', difficulty: 'Intermediate',
      title: 'Best Base Locations Guide',
      tagline: `Pick the location wrong and you will spend the whole run apologising for it.`,
      summary: `The best sites balance resources, defensibility and a survivable raid profile — start safe before attempting an ambitious one.`,
      sections: [
        { h: 'What To Look For', body: `<p>A strong site has nearby ore and water, fertile-enough ground to farm, a defensible shape with natural chokepoints, and a raid profile your squad can beat.</p>` },
        { h: 'Safe Starter Sites', body: `<p>Green, calmer regions near Shek or quiet borderlands make forgiving first bases. They raid lightly enough for a developing squad to survive learning.</p>` },
        { h: 'Ambitious Sites', body: `<p>Resource-rich or strategically placed sites near dangerous regions reward strong squads but raid hard. Earn them with a second base, not a first.</p>` },
        { h: 'Common Mistakes', body: `<p>Settling for ore while ignoring water, choosing flat indefensible ground, and basing in a region whose raids outmatch the squad. Location decides the whole campaign.</p>` }
      ],
      related: [
        { href: '/base-building/best-base-locations', label: 'Best Base Locations' },
        { href: '/base-building/water-problems', label: 'Water Problems' },
        { href: '/guides/defending-against-raids', label: 'Defending Against Raids' }
      ],
      sources: ['kenshiWiki', 'steamGuides', 'redditCommunity']
    },
    {
      id: 'defending-against-raids',
      category: 'base', difficulty: 'Advanced',
      title: 'Defending Against Raids',
      tagline: `Your base will be attacked. The only question is whether you decided where, or the raiders did.`,
      summary: `Combine funnelling walls, well-placed turrets and a trained squad — and keep wealth growth in step with squad strength.`,
      sections: [
        { h: 'Raids Are Inevitable', body: `<p>Every base draws raids from the region's powers and local threats. Defence is not optional infrastructure — it is the first infrastructure.</p>` },
        { h: 'Layered Defence', body: `<p>Walls funnel attackers to a chosen chokepoint, gates meter them in manageable numbers, turrets thin them on approach, and your melee finishes them at one controlled point.</p>` },
        { h: 'The Squad Still Decides It', body: `<p>Walls and turrets buy time and position; they do not win the fight alone. Keep training fighters — a fortress with a weak garrison still falls.</p>` },
        { h: 'Manage Raid Scaling', body: `<p>Raid strength scales with wealth, squad size and faction hostility. A base that grows rich faster than its squad grows strong invites raids it cannot survive.</p>` }
      ],
      related: [
        { href: '/base-building/raid-defense', label: 'Raid Defense' },
        { href: '/base-building/wall-design', label: 'Wall Design' },
        { href: '/base-building/turret-meta', label: 'Turret Meta' }
      ],
      sources: ['kenshiWiki', 'steamGuides', 'redditCommunity']
    },
    {
      id: 'endgame-city-building',
      category: 'base', difficulty: 'Advanced',
      title: 'Endgame City Building',
      tagline: `By the endgame your base stops being a shelter and starts being a statement.`,
      summary: `Scale a settled base into a self-sufficient city with full production, strong defences and a large trained population.`,
      sections: [
        { h: 'From Base To City', body: `<p>An endgame base is a city — full production chains, large-scale farming, deep defences and a population of trained characters who run it all.</p>` },
        { h: 'Self-Sufficiency', body: `<p>A true city produces its own food, power, gear and income, needing nothing from the outside world. Every chain is closed and stocked.</p>` },
        { h: 'Defence At Scale', body: `<p>Large cities draw the heaviest raids. Extensive walls, many turrets and a strong standing garrison are required, not optional.</p>` },
        { h: 'The Payoff', body: `<p>An endgame city is the closest Kenshi has to a victory condition — a permanent mark on an indifferent world, built and held by a squad that started with nothing.</p>` }
      ],
      related: [
        { href: '/base-building/multi-base-strategy', label: 'Multi-Base Strategy' },
        { href: '/base-building/automated-production', label: 'Automated Production' },
        { href: '/guides/defending-against-raids', label: 'Defending Against Raids' }
      ],
      sources: ['kenshiWiki', 'steamGuides', 'redditCommunity']
    },
    {
      id: 'best-squad-roles',
      category: 'squad', difficulty: 'Intermediate',
      title: 'Best Squad Roles',
      tagline: `A great squad is not six great fighters. It is six characters who each do one job well.`,
      summary: `Build a squad around clear roles — tank, damage, ranged, medic, builder, scout — rather than identical generalists.`,
      sections: [
        { h: 'Why Roles Matter', body: `<p>A squad of identical generalists is mediocre everywhere. A squad of specialists covers every situation — someone can always do the job the moment demands.</p>` },
        { h: 'Combat Roles', body: `<p>Tanks in heavy armour anchor the front line; damage dealers work the flanks; crossbow shooters provide ranged fire from behind. Each is built and equipped differently.</p>` },
        { h: 'Support Roles', body: `<p>A medic keeps the squad alive after fights, a builder and researcher develop the base, and a fast scout watches the route ahead for predators.</p>` },
        { h: 'Building The Roster', body: `<p>Recruit and train toward gaps, not duplicates. As the squad grows, assign each new character a role the squad still lacks.</p>` }
      ],
      related: [
        { href: '/guides/tank-builds', label: 'Tank Builds' },
        { href: '/guides/medic-builds', label: 'Medic Builds' },
        { href: '/guides/squad-formation', label: 'Squad Formation Guide' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'medic-builds',
      category: 'squad', difficulty: 'Intermediate',
      title: 'Medic Builds',
      tagline: `The medic never lands a hit and still decides who lives. Respect the role.`,
      summary: `Build a Field Medic with high medical skill, protect them in the back rank, and keep them stocked with supplies.`,
      sections: [
        { h: 'The Medic Role', body: `<p>A dedicated medic patches wounds during and after fights, dramatically improving how much punishment a squad can take before losing anyone.</p>` },
        { h: 'Building One', body: `<p>Train Field Medic by treating the squad's wounds. A high-skill medic heals faster and more effectively — it is worth dedicating a character to it.</p>` },
        { h: 'Keeping Them Safe', body: `<p>Medics are not front-line fighters. Keep them behind the line, give them enough armour and Toughness to survive a stray hit, and protect them in formation.</p>` },
        { h: 'Supplies', body: `<p>Medics need bandages and, for Skeleton squadmates, Repair Kits. Keep them stocked — a medic out of supplies is just an unarmed character in the back.</p>` }
      ],
      related: [
        { href: '/guides/injury-recovery', label: 'Injury Recovery Guide' },
        { href: '/guides/best-squad-roles', label: 'Best Squad Roles' },
        { href: '/skills/robotics', label: 'Robotics' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'tank-builds',
      category: 'squad', difficulty: 'Intermediate',
      title: 'Tank Builds',
      tagline: `A tank's job is to be boring — to stand at the chokepoint and let the whole raid break on them.`,
      summary: `Build a tank around high Defence, Toughness and Strength, full heavy armour, and a place at the front of the line.`,
      sections: [
        { h: 'The Tank Role', body: `<p>A tank absorbs the enemy's attention and damage so the rest of the squad can fight safely. They hold the chokepoint and rarely need to deal much damage themselves.</p>` },
        { h: 'Core Stats', body: `<p>Tanks live on Defence to block, Toughness to survive what gets through, and Strength to carry heavy armour and a heavy weapon without penalty.</p>` },
        { h: 'Gear', body: `<p>Full heavy armour and a good helmet. The speed and stealth penalties do not matter for a character whose job is to stand still and block.</p>` },
        { h: 'Using A Tank', body: `<p>Place the tank at the front, at a chokepoint, and let enemies pile onto them while damage dealers and ranged finish the fight from safety.</p>` }
      ],
      related: [
        { href: '/skills/defense', label: 'Defence' },
        { href: '/armor/heavy-armor', label: 'Heavy Armor' },
        { href: '/races/shek', label: 'Shek (Race)' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'stealth-builds',
      category: 'squad', difficulty: 'Advanced',
      title: 'Stealth Builds',
      tagline: `A stealth build does not win fights. It makes sure the fight never gets a vote.`,
      summary: `Build around Stealth, Assassination, Lockpicking and light gear — for theft, infiltration and silent takedowns.`,
      sections: [
        { h: 'The Stealth Playstyle', body: `<p>A stealth character avoids open combat entirely — sneaking past enemies, stealing, picking locks, and knocking out targets before they raise an alarm.</p>` },
        { h: 'Core Skills', body: `<p>Stealth to move unseen, Assassination to knock out targets, Lockpicking and Thievery for access and loot. These skills train each other through play.</p>` },
        { h: 'Gear & Loadout', body: `<p>Light armour and low encumbrance are mandatory — stealth collapses under weight. Smuggler's gear with hidden pockets helps for theft and contraband.</p>` },
        { h: 'Joining The Shinobi', body: `<p>Joining the Shinobi Thieves grants safe houses and fences for stolen goods. It is the natural faction home for a stealth build.</p>` }
      ],
      related: [
        { href: '/skills/stealth', label: 'Stealth' },
        { href: '/skills/assassination', label: 'Assassination' },
        { href: '/factions/shinobi-thieves', label: 'Shinobi Thieves' }
      ],
      sources: ['kenshiWiki', 'steamGuides']
    },
    {
      id: 'solo-vs-squad',
      category: 'squad', difficulty: 'Intermediate',
      title: 'Solo Play vs Squad Play',
      tagline: `A squad is safety in numbers. A solo character is mastery without a safety net.`,
      summary: `Squad play is safer and more flexible; solo play is harder, more personal, and unforgiving of a single mistake.`,
      sections: [
        { h: 'Squad Play', body: `<p>A squad spreads risk — a downed character can be rescued, roles can be specialised, and a base can be properly staffed. It is the standard, safer way to play.</p>` },
        { h: 'Solo Play', body: `<p>A solo character has no rescue. One bad fight ends the run. Solo play demands mastery of stealth, retreat and patient stat-building, and is a far harder game.</p>` },
        { h: 'Choosing', body: `<p>New players should play a squad. Solo runs are a challenge mode for veterans who already understand the game's systems deeply.</p>` },
        { h: 'Hybrid Approaches', body: `<p>Some players run a tiny squad — two or three characters — for a middle path: more flexible than solo, more intimate than a full roster.</p>` }
      ],
      related: [
        { href: '/guides/solo-run', label: 'Solo Kenshi Run' },
        { href: '/guides/best-squad-roles', label: 'Best Squad Roles' },
        { href: '/guides/best-beginner-starts', label: 'Best Beginner Starts' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'animal-squad',
      category: 'squad', difficulty: 'Intermediate',
      title: 'Animal Squad Guide',
      tagline: `Animals do not complain, do not need wages, and a war-crab hits harder than most recruits.`,
      summary: `Recruit and raise animals — Bonedogs, garru, even crabs — as combat and pack members of your squad.`,
      sections: [
        { h: 'Why Animals', body: `<p>Animals join your squad as combat fighters or pack haulers. They cost no recruitment fee beyond purchase, and the strong ones rival human fighters.</p>` },
        { h: 'Raising Them', body: `<p>Buy young animals — Bonedog puppies, garru — and let them grow and train through the squad's travels and fights. Raised animals become durable, loyal members.</p>` },
        { h: 'Pack Animals', body: `<p>Garru and similar beasts carry enormous loads, letting your squad haul loot and trade goods it would otherwise leave behind. A pack animal pays for itself fast.</p>` },
        { h: 'Combat Animals', body: `<p>Trained Bonedogs and, for befriended Crab Raiders, war-crabs are formidable front-line fighters — fast, tough and hard-hitting.</p>` }
      ],
      related: [
        { href: '/creatures/bonedogs', label: 'Bonedogs' },
        { href: '/factions/crab-raiders', label: 'Crab Raiders' },
        { href: '/factions/nomads', label: 'The Nomads' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'skeleton-squad',
      category: 'squad', difficulty: 'Advanced',
      title: 'Skeleton Squad Guide',
      tagline: `A Skeleton squad does not eat, does not sleep and does not fear the rain. It just keeps going.`,
      summary: `An all-Skeleton squad ignores hunger, acid and harsh environments — ideal for the deadliest regions, but reliant on Robotics.`,
      sections: [
        { h: 'Why Go All-Skeleton', body: `<p>Skeletons do not eat, do not bleed, ignore acid rain and harsh environments, and need no sleep. An all-Skeleton squad shrugs off the survival pressures that limit organics.</p>` },
        { h: 'The Deep Regions', body: `<p>This makes a Skeleton squad the best choice for the Deadlands, Black Desert and Ashlands — acid-bound regions that slowly kill organic characters.</p>` },
        { h: 'Repair, Not Healing', body: `<p>Skeletons cannot be healed with first aid. They need Skeleton Repair Kits applied through the Robotics skill, so a Skeleton squad must keep both skill and supplies.</p>` },
        { h: 'Weaknesses', body: `<p>Skeletons take extra blunt damage, and the Holy Nation is hostile to them. Plan routes and fights around those two facts.</p>` }
      ],
      related: [
        { href: '/races/skeletons', label: 'Skeletons (Race)' },
        { href: '/skills/robotics', label: 'Robotics' },
        { href: '/regions/ashlands', label: 'The Ashlands' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'solo-run',
      category: 'advanced', difficulty: 'Expert',
      title: 'Solo Kenshi Run',
      tagline: `One character, one life, one mistake away from the end. The purest way to play Kenshi.`,
      summary: `A single-character run with no rescue net — survive on stealth, retreat and patient stat-building before any real fighting.`,
      sections: [
        { h: 'The Challenge', body: `<p>A solo run is one character with no squad to rescue them. A single lost fight ends the run, so survival comes before everything.</p>` },
        { h: 'Early Survival', body: `<p>Lean entirely on stealth and retreat at first. Avoid fights, train Athletics so you can always escape, and build Toughness through carefully survivable defeats.</p>` },
        { h: 'Building Up', body: `<p>Train combat slowly and safely — guard-assisted fights, training equipment, captivity. A solo character must be strong before they can risk a real fight.</p>` },
        { h: 'Mindset', body: `<p>Patience wins solo runs. Every avoidable risk is a threat to the whole run. Glory is irrelevant; continuing is everything.</p>` }
      ],
      related: [
        { href: '/guides/solo-vs-squad', label: 'Solo Play vs Squad Play' },
        { href: '/skills/stealth', label: 'Stealth' },
        { href: '/guides/toughness-training', label: 'Toughness Training' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'pacifist-run',
      category: 'advanced', difficulty: 'Expert',
      title: 'Pacifist Run',
      tagline: `A pacifist run asks whether you can build a life in the wasteland without taking one.`,
      summary: `Survive and thrive without killing — through stealth, trade, base building and outrunning every fight.`,
      sections: [
        { h: 'The Premise', body: `<p>A pacifist run avoids killing. The character survives through avoidance, stealth, trade and construction rather than combat.</p>` },
        { h: 'Staying Alive', body: `<p>High Athletics and Stealth let a pacifist escape or avoid every fight. Captivity and knockouts are survivable; the rule is that you never kill.</p>` },
        { h: 'Making A Living', body: `<p>Income comes from mining, trade, farming and base production — economic systems that need no violence. A pacifist base can prosper.</p>` },
        { h: 'Why Do It', body: `<p>The pacifist run reframes Kenshi entirely, proving the wasteland can be survived through wits and work alone. It is one of the game's most respected self-imposed challenges.</p>` }
      ],
      related: [
        { href: '/skills/athletics', label: 'Athletics' },
        { href: '/guides/base-economy', label: 'Base Economy' },
        { href: '/guides/stealth-builds', label: 'Stealth Builds' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'holy-nation-playthrough',
      category: 'advanced', difficulty: 'Intermediate',
      title: 'Holy Nation Playthrough',
      tagline: `Play the theocracy from the inside, and the wasteland's most dangerous faction becomes a homeland.`,
      summary: `Run a Greenlander squad aligned with the Holy Nation — safe territory, soldier recruits, and war against the Shek.`,
      sections: [
        { h: 'Setting Up', body: `<p>A Holy Nation run wants a Greenlander male lead and squad — the only roster the theocracy fully tolerates. Base in their green, well-patrolled territory.</p>` },
        { h: 'Building Reputation', body: `<p>Raise Holy Nation standing by killing their enemies — the Shek above all — and engaging their shrines and objectives. High reputation unlocks soldier recruitment.</p>` },
        { h: 'The Costs', body: `<p>Siding with the Holy Nation makes enemies of the Shek and the Flotsam Ninjas, and means living with the faction's persecution of other races.</p>` },
        { h: 'The Experience', body: `<p>A Holy Nation run is one of the safer, more structured ways to play — a clear faction home, clear enemies, and the game's most secure cities.</p>` }
      ],
      related: [
        { href: '/factions/holy-nation', label: 'Holy Nation' },
        { href: '/lore/holy-nation-lore', label: 'Holy Nation Lore' },
        { href: '/races/greenlanders', label: 'Greenlanders' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'anti-slaver-run',
      category: 'advanced', difficulty: 'Advanced',
      title: 'Anti-Slaver Run',
      tagline: `Declare war on slavery and you declare war on the richest faction in the world. Be ready for the bill.`,
      summary: `Side with the Anti-Slavers — free slaves, raid slave camps, and accept losing the United Cities as the price.`,
      sections: [
        { h: 'The Cause', body: `<p>An anti-slaver run commits to destroying the slave trade — freeing slaves, killing slavers, and supporting Tinfist's Anti-Slavers against the United Cities.</p>` },
        { h: 'The Price', body: `<p>Siding against slavery turns the United Cities hostile over time, costing access to the richest trade region on the map. This is a deliberate, expensive choice.</p>` },
        { h: 'When To Commit', body: `<p>Do not start this run — grow into it. Commit only once your squad can survive UC hostility and stand on its own economy.</p>` },
        { h: 'The Payoff', body: `<p>A successful anti-slaver run can trigger the world-state shift where the Anti-Slavers move against the UC outright — one of Kenshi's great dynamic outcomes.</p>` }
      ],
      related: [
        { href: '/factions/anti-slavers', label: 'Anti-Slavers' },
        { href: '/factions/slave-traders', label: 'Slave Traders' },
        { href: '/guides/escaping-slavery', label: 'Escaping Slavery' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'cannibal-hunter-run',
      category: 'advanced', difficulty: 'Advanced',
      title: 'Cannibal Hunter Run',
      tagline: `Hunt the things that hunt people. The Cannibal Plains will train you or bury you.`,
      summary: `Base near the Cannibal Plains and wage war on the hordes — brutal Toughness training and a steady bounty income.`,
      sections: [
        { h: 'The Concept', body: `<p>A cannibal hunter run makes war on the Cannibal hordes of the eastern plains — clearing their patrols, raiding their camps, and hunting their leaders.</p>` },
        { h: 'Why It Works As Training', body: `<p>Cannibals are individually weak but endless. Fought from a chokepoint, they are a near-infinite supply of combat and Toughness XP for a developing squad.</p>` },
        { h: 'The Danger', body: `<p>Cannibals swarm and eat the downed. Always fight from a wall or chokepoint where only a few engage at once — never get surrounded in the open.</p>` },
        { h: 'Rewards', body: `<p>Bounties on Cannibal leaders provide income, and clearing the plains opens routes toward the eastern endgame regions.</p>` }
      ],
      related: [
        { href: '/factions/cannibals', label: 'The Cannibals' },
        { href: '/regions/cannibal-plains', label: 'Cannibal Plains' },
        { href: '/guides/toughness-training', label: 'Toughness Training' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'ironman-challenge',
      category: 'advanced', difficulty: 'Expert',
      title: 'Ironman Challenge',
      tagline: `One save. No reloads. Every mistake is permanent — and that is the entire point.`,
      summary: `Play with no save-scumming — accept every loss, every lost character, and every consequence as final.`,
      sections: [
        { h: 'The Rules', body: `<p>An ironman run forbids reloading to undo outcomes. Every defeat, capture, lost limb and lost character is permanent and must be played through.</p>` },
        { h: 'How It Changes The Game', body: `<p>Without reloads, caution becomes everything. Retreat, scouting and conservative play matter far more — there is no taking back a bad decision.</p>` },
        { h: 'Surviving It', body: `<p>Keep a squad rather than a solo character so a single loss is not fatal to the run. Build deep, play patient, and treat every fight as if it counts — because it does.</p>` },
        { h: 'Why Play This Way', body: `<p>Ironman is how Kenshi was arguably designed to be played. Permanent consequences make the "fail forward" philosophy real — your story is whatever actually happened.</p>` }
      ],
      related: [
        { href: '/guides/hardcore-settings', label: 'Hardcore Survival Settings' },
        { href: '/guides/avoiding-early-death', label: 'Avoiding Early Death' },
        { href: '/guides/why-running-away-matters', label: 'Why Running Away Matters' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'hardcore-settings',
      category: 'advanced', difficulty: 'Expert',
      title: 'Hardcore Survival Settings',
      tagline: `Kenshi lets you make it harder. The settings menu is its own difficulty mod.`,
      summary: `Tune game settings — squad limits, permanent death, harsher economy — to build a punishing custom survival experience.`,
      sections: [
        { h: 'What You Can Tune', body: `<p>Kenshi's game settings adjust how punishing the world is — squad size limits, character permadeath behaviour, economic harshness and more.</p>` },
        { h: 'Building A Hardcore Run', body: `<p>A hardcore setup might cap squad size, enable harsher death rules, and combine with self-imposed rules like ironman for a deliberately brutal experience.</p>` },
        { h: 'Settings vs Mods', body: `<p>Difficulty mods raise the challenge further, but the base settings alone can create a hard run. Master the settings before layering mods on top.</p>` },
        { h: 'Who It Is For', body: `<p>Hardcore settings are for players who have beaten Kenshi the normal way and want the wasteland to push back harder.</p>` }
      ],
      related: [
        { href: '/guides/ironman-challenge', label: 'Ironman Challenge' },
        { href: '/mods/difficulty-mods', label: 'Difficulty Mods' },
        { href: '/guides/solo-run', label: 'Solo Kenshi Run' }
      ],
      sources: ['kenshiWiki', 'redditCommunity']
    },
    {
      id: 'reactive-world-mod',
      category: 'advanced', difficulty: 'Intermediate',
      title: 'Reactive World Guide',
      tagline: `Vanilla Kenshi has a living world. Reactive World makes it a world that lives because of you.`,
      summary: `Install and play with the Reactive World mod for a wasteland whose towns and factions visibly respond to your actions.`,
      sections: [
        { h: 'What It Adds', body: `<p>Reactive World expands Kenshi's dynamic systems so factions, town control and the map respond far more dramatically to player actions and faction wars.</p>` },
        { h: 'Installing It', body: `<p>Reactive World touches town and faction data. Load it carefully, check for overhaul compatibility patches, and avoid stacking it with conflicting world-state mods.</p>` },
        { h: 'Playing With It', body: `<p>With Reactive World, clearing leaders, supporting factions and triggering wars produce visible consequences in the towns themselves — the world remembers what you did.</p>` },
        { h: 'Is It For You', body: `<p>If Kenshi's living, indifferent world is what draws you, Reactive World deepens exactly that. It is one of the most beloved mods in the scene.</p>` }
      ],
      related: [
        { href: '/mods/reactive-world', label: 'Reactive World' },
        { href: '/mods/overhaul-mods', label: 'Overhaul Mods' },
        { href: '/mods/essential-mods', label: 'Essential Mods' }
      ],
      sources: ['kenshiWiki', 'redditCommunity', 'steamGuides']
    }
  ],
  /* ---------------------------------------------------------- */
  /*                     PATCHES / UPDATES                      */
  /* ---------------------------------------------------------- */
  patches: [
    {
      version: 'Kenshi 2 — In Development',
      date: 'Ongoing',
      changes: [
        'Kenshi 2 is the announced prequel/sequel from Lo-Fi Games, set roughly a thousand years before the original.',
        'Built on Unreal Engine, a major shift from the original Kenshi engine, targeting better performance and visuals.',
        'Promises a more vibrant, less collapsed world that players will see fall toward the wasteland of Kenshi 1.',
        'No confirmed release date — treat all Kenshi 2 details as subject to change until Lo-Fi Games confirms them.'
      ]
    },
    {
      version: 'Kenshi 1.0.x — Stable',
      date: '2018–present',
      changes: [
        'Kenshi left early access and released as version 1.0 in December 2018 after years of development.',
        'Post-release 1.0.x patches focused on stability, performance, balance and bug fixes rather than major new content.',
        'Optimisation passes improved large-battle and big-town performance, long a pain point for the engine.',
        'Balance adjustments to factions, economy and combat refined the late-game experience.'
      ]
    },
    {
      version: 'Late Early Access',
      date: '2017–2018',
      changes: [
        'The world map was expanded and populated with the factions, regions and cities present at release.',
        'The base-building, research and production systems were deepened toward their final form.',
        'Combat, squad AI and the dynamic world systems received repeated iteration.',
        'Performance and modding support were strengthened ahead of the 1.0 launch.'
      ]
    }
  ],

  /* ---------------------------------------------------------- */
  /*                     WANDERER'S NOTES                       */
  /* ---------------------------------------------------------- */
  survivorTips: [
    'Running away is not losing. It is the most reliable survival tool you have.',
    'Check your squad’s races against a region before you travel into it.',
    'Train Athletics early — a fast squad chooses which fights happen.',
    'Toughness is trained by losing. Get downed where guards will save you, then heal and repeat.',
    'Never travel with a single character. A second body can drag the first to safety.',
    'A garru pack animal carries the loot you would otherwise leave in the sand.',
    'Squin is the safest beginner base. If you are lost, go there.',
    'Buy a Bonedog puppy early and raise it through your squad’s fights.',
    'Fight at chokepoints. Being surrounded, not being outmatched, is what kills squads.',
    'Heavy armour is stronger than it looks. Put it on your front-line tank.',
    'A bite from a slaver patrol is not the end — captivity trains Strength and Toughness.',
    'Beak Things are fast. The only safe response to one is a head start.',
    'Skeletons ignore hunger, sleep and acid rain. They are the wasteland’s explorers.',
    'Sell Ancient tech and research books to Tech Hunters — they pay far better.',
    'Pick your base location before your base design. Location decides the whole run.',
    'The Fog Islands eat the downed. A loss there is usually permanent.'
  ],

  /* ---------------------------------------------------------- */
  /*                        STATIC PAGES                        */
  /* ---------------------------------------------------------- */
  pages: {
    'getting-started': {
      title: 'Getting Started',
      body: `
        <p class="lore">Kenshi is not about becoming the chosen hero. It is about surviving long enough to matter.</p>
        <p>Kenshi drops you into a harsh, indifferent wasteland with no quests, no destiny and no safety net. Nobody is coming to help you. This page is the orientation a veteran wanderer would give a newcomer before the desert teaches the same lessons the expensive way.</p>
        <h3>The Survival Mindset</h3>
        <p>Kenshi works differently from most games. You are not meant to win every fight — you are meant to <em>survive</em> them, and losing is how characters grow. A defeat that everyone walks away from trains Toughness and teaches a lesson. The unrecoverable mistake is the fight you should have run from and did not.</p>
        <p>Internalise three things early: running away is a valid strategy, failure is progression, and the world does not scale to you. Regions and factions will happily kill a squad that wanders in unprepared.</p>
        <h3>Your First Hour</h3>
        <p>Pick a gentle start — ideally a Greenlander, who is tolerated almost everywhere. Head for a safe town; <a href="/cities/squin">Squin</a> is the community's standard recommendation, close to the <a href="/cities/the-hub">Hub</a> and defended by tough Shek guards who tolerate every race.</p>
        <p>Earn your first money mining copper near a guarded town. Use it to recruit a second character from a bar — a squad of two survives what a lone wanderer cannot. Then train Athletics by travelling on foot, so retreat is always an option.</p>
        <h3>Understanding Stats</h3>
        <p>Combat is resolved by stats and positioning, not reflexes. <a href="/skills/attack">Attack</a> lands hits, <a href="/skills/defense">Defence</a> blocks them, and <a href="/skills/toughness">Toughness</a> decides whether a beating is a lesson or a funeral. <a href="/skills/athletics">Athletics</a> — raw run speed — is the most underrated stat in the game.</p>
        <h3>How Combat Actually Works</h3>
        <p>You direct positioning and targets; the stats do the swinging. The single biggest cause of defeat is being surrounded, which splits your Defence across every attacker. Fight at chokepoints, keep your squad in a line, and never let enemies reach your back rank. When in doubt, read the <a href="/guides/melee-combat-basics">Melee Combat Basics</a> guide.</p>
        <h3>Where To Go Next</h3>
        <p>Start with <a href="/guides/surviving-first-week">Surviving Your First Week</a> and <a href="/guides/best-beginner-starts">Best Beginner Starts</a>. Learn the <a href="/factions">factions</a> — especially which ones your race angers — and study the <a href="/regions">regions</a> before you cross them. The wasteland rewards the wanderer who reads the map first.</p>
      `
    }
  }
};
  }
};
