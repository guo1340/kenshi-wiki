/* Auto-generated lightweight Kenshi data chunk. */
(function () {
  const root = typeof window !== 'undefined' ? window : globalThis;
  root.WikiData = root.WikiData || {};
  Object.assign(root.WikiData, {
  "skills": [
    {
      "id": "attack",
      "name": "Attack",
      "category": "Combat",
      "governs": "Your chance to land a hit and break through an opponent's defence.",
      "intro": "Attack does not make you hit harder. It makes you hit at all — and against a good blocker, that is the whole fight.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>Attack determines how often your strikes connect rather than being blocked or missed. It is checked against the enemy's Defence in every exchange.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>A large Attack–Defence gap does not just change hit chance — it changes the rhythm of combat, letting you stagger and chain an opponent who can never counter.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>You gain Attack XP by fighting enemies near or above your level. Beating up trivially weak foes gives almost nothing; losing carefully to stronger ones gives plenty.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Fight enemies slightly stronger than you, with allies or town guards nearby to finish the job. Bounty hunting and supervised brawls outside Squin are reliable early routes.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Grinding Attack on weak bandits caps you at mediocrity. The skill only climbs against opposition that can actually challenge it.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Combat"
        ],
        [
          "Paired with",
          "Defence, Dexterity"
        ],
        [
          "Trains vs",
          "Equal-or-stronger foes"
        ],
        [
          "Soft cap feel",
          "Slows after ~70"
        ]
      ],
      "related": [
        {
          "href": "/skills/defense",
          "label": "Defence"
        },
        {
          "href": "/skills/dodge",
          "label": "Dodge"
        },
        {
          "href": "/guides/melee-combat-basics",
          "label": "Melee Combat Basics"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "defense",
      "name": "Defence",
      "category": "Combat",
      "governs": "Your chance to block incoming melee attacks.",
      "intro": "Defence is the skill that decides whether your squad survives being outnumbered. Everything else is secondary.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>Defence sets how reliably you block melee strikes. High Defence lets a single fighter hold a chokepoint against a crowd.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Defence is checked against each attacker individually. Being surrounded splits your effective defence — three attackers are far more than three times the danger.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>You gain Defence XP by being attacked. Blocking, and being struck by, capable enemies trains it fast.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Stand a tough, well-armoured character in front of a manageable group and let them weather it. Fighting near town guards keeps the training survivable.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Letting a low-Defence character get surrounded. Defence falls apart against multiple attackers — formation matters more than the number itself.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Combat"
        ],
        [
          "Paired with",
          "Attack, Toughness"
        ],
        [
          "Trains vs",
          "Being attacked"
        ],
        [
          "Weakness",
          "Being surrounded"
        ]
      ],
      "related": [
        {
          "href": "/skills/attack",
          "label": "Attack"
        },
        {
          "href": "/skills/toughness",
          "label": "Toughness"
        },
        {
          "href": "/guides/squad-formation",
          "label": "Squad Formation Guide"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "toughness",
      "name": "Toughness",
      "category": "Combat",
      "governs": "How much punishment you take before going down, and how well you recover.",
      "intro": "In Kenshi you grow strong by losing. Toughness is the skill that turns defeats into progress instead of funerals.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>Toughness reduces the lasting consequences of being hit — it raises the damage you can absorb before being knocked out and improves how you recover afterward.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>High Toughness makes characters get back up after a beating instead of dying, and resist losing limbs. It is the backbone of Kenshi's \"fail forward\" design.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>You gain Toughness by taking damage and surviving — by losing fights, not winning them. Getting beaten unconscious and recovering is the training loop.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Lose fights you can survive: get knocked down near town guards or allies who will drive the enemy off, then heal and repeat. Controlled defeat is the method.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Treating every knockdown as a disaster. With decent Toughness, being downed is a training event. Without it, the same hit is a lost character.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Combat"
        ],
        [
          "Trains via",
          "Taking damage, losing"
        ],
        [
          "Protects against",
          "Death, lost limbs"
        ],
        [
          "Priority",
          "Very high"
        ]
      ],
      "related": [
        {
          "href": "/guides/toughness-training",
          "label": "Toughness Training"
        },
        {
          "href": "/skills/defense",
          "label": "Defence"
        },
        {
          "href": "/guides/injury-recovery",
          "label": "Injury Recovery Guide"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides",
        "redditCommunity"
      ]
    },
    {
      "id": "martial-arts",
      "name": "Martial Arts",
      "category": "Combat",
      "governs": "Unarmed combat effectiveness — strikes, throws and damage with no weapon equipped.",
      "intro": "An empty hand never jams, never breaks and never gets confiscated by slavers. Martial Arts is the build that cannot be disarmed.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>Martial Arts governs how effective you are fighting unarmed. At high levels a martial artist throws and pummels enemies with surprising force.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Martial Arts performs best with little or no armour on the hands and light overall encumbrance — heavy gear penalises it. It also keeps working when you are imprisoned and stripped of weapons.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>You train it by fighting unarmed against capable enemies, the same as any combat skill.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Fight bandits unarmed near guards, and lean on the slavery loop — enslaved characters keep no weapon, so captivity is natural Martial Arts training.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Wearing heavy armour on a martial artist. Encumbrance and armour penalties gut the build. Keep them light and fast.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Combat"
        ],
        [
          "Weapon",
          "None (unarmed)"
        ],
        [
          "Wants",
          "Light armour, low weight"
        ],
        [
          "Strength",
          "Cannot be disarmed"
        ]
      ],
      "related": [
        {
          "href": "/guides/martial-arts-guide",
          "label": "Martial Arts Guide"
        },
        {
          "href": "/skills/dodge",
          "label": "Dodge"
        },
        {
          "href": "/armor/light-armor",
          "label": "Light Armor"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "dodge",
      "name": "Dodge",
      "category": "Combat",
      "governs": "Your chance to evade attacks entirely instead of blocking them.",
      "intro": "Dodge is the defence that does not depend on a weapon. For light, fast builds it is the only thing standing between you and the sand.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>Dodge gives a chance to avoid incoming attacks outright. It is especially important for unarmed and lightly-equipped characters who lack strong weapon-based blocking.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Dodge favours low encumbrance — heavy loads and heavy armour reduce its effectiveness. It pairs naturally with Martial Arts and Athletics.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>You train Dodge by being attacked while not blocking — it climbs through combat exposure like the other defensive skills.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Fight lightly-armoured against manageable groups with backup nearby. Martial artist training naturally builds Dodge alongside it.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Expecting Dodge to carry a heavily-armoured tank. It is a light-build skill — load the character down and it stops mattering.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Combat"
        ],
        [
          "Wants",
          "Low encumbrance"
        ],
        [
          "Pairs with",
          "Martial Arts, Athletics"
        ],
        [
          "Weak with",
          "Heavy armour"
        ]
      ],
      "related": [
        {
          "href": "/skills/martial-arts",
          "label": "Martial Arts"
        },
        {
          "href": "/skills/athletics",
          "label": "Athletics"
        },
        {
          "href": "/guides/stealth-builds",
          "label": "Stealth Builds"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "heavy-weapons",
      "name": "Heavy Weapons",
      "category": "Weapon",
      "governs": "Effectiveness with the largest, hardest-hitting weapon class.",
      "intro": "Heavy weapons do not duel. They demolish. One good swing can end an enemy — and several at once.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>The Heavy Weapons skill governs your use of the heaviest weapon class — massive damage, strong armour penetration, and the ability to hit multiple enemies in an arc.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Heavy weapons demand high Strength to swing without penalty. Below the strength requirement, attack speed and effectiveness drop sharply.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>It trains like any weapon skill — by fighting capable enemies with a heavy weapon equipped.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Build Strength first, then fight bandit groups where the wide swing arc lets you hit several enemies at once.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Handing a heavy weapon to a low-Strength character. They will swing slowly, miss, and get punished. Strength is the prerequisite, not an option.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Weapon"
        ],
        [
          "Needs",
          "High Strength"
        ],
        [
          "Strength",
          "Multi-hit, armour pen"
        ],
        [
          "Weakness",
          "Indoors, low speed"
        ]
      ],
      "related": [
        {
          "href": "/weapons/heavy-weapons",
          "label": "Heavy Weapons (Class)"
        },
        {
          "href": "/skills/strength",
          "label": "Strength"
        },
        {
          "href": "/guides/tank-builds",
          "label": "Tank Builds"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "katanas",
      "name": "Katanas",
      "category": "Weapon",
      "governs": "Effectiveness with katana-class weapons — fast, sharp cutting blades.",
      "intro": "The katana is the duellist's answer: quick, vicious against unarmoured flesh, and merciless once your skill outpaces theirs.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>The Katanas skill governs fast cutting weapons that excel at carving through unarmoured or lightly-armoured targets.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Katanas struggle against heavy armour — their cutting damage is blunted by plate. They shine against flesh, not steel.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>Trains through combat with a katana equipped against worthwhile opponents.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Hunt lightly-armoured bandits and animals where the katana's speed and cutting damage are at their best.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Charging heavily-armoured Holy Nation Paladins with a katana. Bring a hacker or heavy weapon for armour; save the katana for soft targets.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Weapon"
        ],
        [
          "Strength",
          "Fast, anti-flesh"
        ],
        [
          "Weakness",
          "Heavy armour"
        ],
        [
          "Speed",
          "Very fast"
        ]
      ],
      "related": [
        {
          "href": "/weapons/katanas",
          "label": "Katanas (Class)"
        },
        {
          "href": "/weapons/nodachi",
          "label": "Nodachi"
        },
        {
          "href": "/skills/attack",
          "label": "Attack"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "sabres",
      "name": "Sabres",
      "category": "Weapon",
      "governs": "Effectiveness with sabre-class weapons — balanced, versatile cutting blades.",
      "intro": "The sabre asks nothing exotic of you. It just works — which is exactly why so many wanderers carry one.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>The Sabres skill governs versatile mid-weight blades that balance cutting power, speed and reach. The most all-round weapon class in the game.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Sabres have generous reach and decent multi-hit potential, making them strong in open-field group fights without the strength demands of heavy weapons.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>Trains through general combat with a sabre equipped.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Sabres train well in almost any fight — bounty hunting and bandit clearing both work. Their versatility is the point.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Few — the sabre's flexibility is its strength. The only real error is expecting it to out-penetrate a dedicated heavy weapon against full plate.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Weapon"
        ],
        [
          "Strength",
          "Versatile, good reach"
        ],
        [
          "Speed",
          "Moderate"
        ],
        [
          "Best for",
          "All-round fighters"
        ]
      ],
      "related": [
        {
          "href": "/weapons/sabres",
          "label": "Sabres (Class)"
        },
        {
          "href": "/weapons/desert-sabre",
          "label": "Desert Sabre"
        },
        {
          "href": "/skills/attack",
          "label": "Attack"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "polearms",
      "name": "Polearms",
      "category": "Weapon",
      "governs": "Effectiveness with long-reach polearm weapons.",
      "intro": "The polearm fights the battle a step before it reaches you. Reach is its whole philosophy — and reach wins crowds.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>The Polearms skill governs long weapons with exceptional reach, letting you strike enemies before they close and hit several in a line.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Polearms are outstanding against large creatures and in formation fighting, but their long reach is penalised heavily indoors and in tight spaces.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>Trains through combat with a polearm equipped.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Fight in open ground against groups and large beasts where reach and multi-hit pay off — Beak Things and animal hunts suit polearms well.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Bringing a polearm into a building. The indoor penalty is severe — switch to a shorter weapon for ruin interiors.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Weapon"
        ],
        [
          "Strength",
          "Reach, anti-creature"
        ],
        [
          "Weakness",
          "Indoor penalty"
        ],
        [
          "Best for",
          "Open-field combat"
        ]
      ],
      "related": [
        {
          "href": "/weapons/polearms",
          "label": "Polearms (Class)"
        },
        {
          "href": "/creatures/beak-things",
          "label": "Beak Things"
        },
        {
          "href": "/skills/attack",
          "label": "Attack"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "hackers",
      "name": "Hackers",
      "category": "Weapon",
      "governs": "Effectiveness with hacker-class weapons — heavy cleaving blades built to dismember.",
      "intro": "Hackers are not subtle. They are designed to take limbs, and against armoured enemies that is exactly the point.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>The Hackers skill governs heavy cleaving blades with high cutting damage and a strong tendency to sever limbs.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Hackers have notably high limb-damage, so they cripple enemies fast — but a dismembered foe can no longer be sold to slavers or healed for recruitment.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>Trains through combat with a hacker equipped.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Use them against tougher, armoured enemies where their cutting power matters most.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Using hackers when you want prisoners. They maim too readily — switch to blunt or a gentler blade if you are taking enemies alive.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Weapon"
        ],
        [
          "Strength",
          "High limb damage"
        ],
        [
          "Trade-off",
          "Dismembers (no prisoners)"
        ],
        [
          "Speed",
          "Slow–moderate"
        ]
      ],
      "related": [
        {
          "href": "/weapons/hackers",
          "label": "Hackers (Class)"
        },
        {
          "href": "/weapons/fragment-axe",
          "label": "Fragment Axe"
        },
        {
          "href": "/skills/heavy-weapons",
          "label": "Heavy Weapons"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "athletics",
      "name": "Athletics",
      "category": "Utility",
      "governs": "Run speed — how fast your character moves across the world.",
      "intro": "Athletics is the most underrated stat in Kenshi. In a game where running away is a valid strategy, speed is survival.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>Athletics sets your running speed. A faster character escapes danger, outpaces patrols, and chooses which fights happen.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Speed is reduced by encumbrance — carrying too much weight slows you and starves Athletics XP. A light, fast character controls the entire pace of the game.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>Athletics trains simply by running, and trains faster while carrying weight (such as a body or heavy pack), since the character is \"working\" against load.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Travel everywhere on foot, and carry a knocked-out body or full pack while doing it to accelerate gains. Long marches double as free training.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Ignoring Athletics until something faster than you is chasing your squad. Train it early — slow characters die to things they could have outrun.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Utility"
        ],
        [
          "Trains via",
          "Running, carrying weight"
        ],
        [
          "Reduced by",
          "Encumbrance"
        ],
        [
          "Priority",
          "High (early)"
        ]
      ],
      "related": [
        {
          "href": "/guides/why-running-away-matters",
          "label": "Why Running Away Matters"
        },
        {
          "href": "/skills/strength",
          "label": "Strength"
        },
        {
          "href": "/guides/avoiding-early-death",
          "label": "Avoiding Early Death"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides",
        "redditCommunity"
      ]
    },
    {
      "id": "strength",
      "name": "Strength",
      "category": "Utility",
      "governs": "Carry capacity and the ability to use heavy weapons and armour without penalty.",
      "intro": "Strength is the quiet prerequisite. Heavy weapons, heavy armour and hauling loot all sit behind it.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>Strength raises carry capacity and is required to wield heavy weapons and wear heavy armour without speed and effectiveness penalties.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Strength contributes to melee damage with heavy weapons and lets a character carry more without becoming encumbered — important for both fighters and haulers.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>Strength trains by moving while carrying heavy loads — bodies, ore, full backpacks — and by fighting with heavy gear that exceeds your comfortable load.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Carry knocked-out enemies and heavy ore over long distances, and equip slightly-too-heavy weapons and armour so the character trains against the load.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Forgetting that low Strength makes heavy weapons slow and clumsy. Build Strength before committing a character to a heavy-weapon build.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Utility"
        ],
        [
          "Trains via",
          "Carrying weight, heavy gear"
        ],
        [
          "Enables",
          "Heavy weapons & armour"
        ],
        [
          "Pairs with",
          "Athletics"
        ]
      ],
      "related": [
        {
          "href": "/skills/heavy-weapons",
          "label": "Heavy Weapons"
        },
        {
          "href": "/skills/athletics",
          "label": "Athletics"
        },
        {
          "href": "/guides/tank-builds",
          "label": "Tank Builds"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "stealth",
      "name": "Stealth",
      "category": "Utility",
      "governs": "How well you move and act unseen.",
      "intro": "Stealth is the skill that lets you win fights by never having them.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>Stealth governs sneaking — moving past enemies, slipping into towns, and setting up theft or assassination without being detected.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Stealth is influenced by lighting, distance, encumbrance and whether enemies are alert. Darkness and light loads make a stealthy character nearly invisible.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>Stealth trains while you are actually sneaking near enemies — crouched movement around alert NPCs builds it steadily.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Sneak through patrolled towns at night, especially around guards, while crouched. It pairs naturally with Lockpicking, Assassination and Thievery training.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Trying to stealth in heavy armour and full encumbrance. Stealth builds want light gear and light loads.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Utility"
        ],
        [
          "Trains via",
          "Sneaking near enemies"
        ],
        [
          "Helped by",
          "Darkness, low weight"
        ],
        [
          "Pairs with",
          "Lockpicking, Assassination"
        ]
      ],
      "related": [
        {
          "href": "/skills/lockpicking",
          "label": "Lockpicking"
        },
        {
          "href": "/skills/assassination",
          "label": "Assassination"
        },
        {
          "href": "/factions/shinobi-thieves",
          "label": "Shinobi Thieves"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "lockpicking",
      "name": "Lockpicking",
      "category": "Utility",
      "governs": "Your ability to open locked doors, gates and containers.",
      "intro": "Every locked door in Kenshi is a question. Lockpicking is how you stop asking permission.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>Lockpicking lets you open locked doors and containers. Higher skill opens tougher locks and reduces the chance of failing and alerting nearby NPCs.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Failed lockpick attempts can raise an alarm and turn a town hostile. High Lockpicking is as much about not getting caught as it is about access.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>You train Lockpicking by picking locks — start on easy doors and work up as the skill climbs.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Pick low-level locks repeatedly in safe conditions, then graduate to tougher locks. Doing it crouched also trains Stealth.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Attempting hard locks too early. Repeated failures draw guards. Build the skill on cheap locks before reaching for the valuable ones.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Utility"
        ],
        [
          "Trains via",
          "Picking locks"
        ],
        [
          "Risk",
          "Failed picks raise alarms"
        ],
        [
          "Pairs with",
          "Stealth, Thievery"
        ]
      ],
      "related": [
        {
          "href": "/skills/stealth",
          "label": "Stealth"
        },
        {
          "href": "/skills/assassination",
          "label": "Assassination"
        },
        {
          "href": "/factions/shinobi-thieves",
          "label": "Shinobi Thieves"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "assassination",
      "name": "Assassination",
      "category": "Utility",
      "governs": "Knocking out unaware targets instantly with a stealth attack.",
      "intro": "Assassination ends a fight before the enemy knows there was one. Used well, it empties a guarded room one body at a time.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>Assassination lets a sneaking character knock out an unaware target. A high-skill assassin can drop guards, leaders and patrols silently.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Success depends on the target's awareness and relative strength. Assassination knocks out rather than kills, which suits prisoner-taking and bounty captures.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>It trains through successful and attempted assassinations on enemies — meaningful targets give meaningful XP.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Sneak up on sleeping or unaware enemies and knock them out. Bounty targets are ideal — capture instead of fight.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Attempting assassinations on alert or far-stronger targets. A failed attempt wakes them and starts the fight you were trying to avoid.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Utility"
        ],
        [
          "Effect",
          "Knocks out unaware foes"
        ],
        [
          "Needs",
          "Stealth, unaware target"
        ],
        [
          "Use",
          "Bounties, infiltration"
        ]
      ],
      "related": [
        {
          "href": "/skills/stealth",
          "label": "Stealth"
        },
        {
          "href": "/guides/stealth-builds",
          "label": "Stealth Builds"
        },
        {
          "href": "/skills/lockpicking",
          "label": "Lockpicking"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "science",
      "name": "Science",
      "category": "Utility",
      "governs": "Researching technologies and unlocking better crafting and base options.",
      "intro": "Science is how a squad stops scavenging and starts manufacturing. Every tech tier you want sits behind it.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>Science lets a character research technologies at a Research Bench, unlocking improved crafting, building and equipment options.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Higher Science speeds research, and advanced research requires Ancient Science Books and AI Cores recovered from ruins — tying the skill to exploration.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>Science trains by performing research at a bench. The more your researcher works, the faster future research goes.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Dedicate a squad member to the Research Bench and keep them working continuously. Feed them Ancient Science Books from ruins.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Trying to research advanced tech without the Ancient Science Books it requires. Plan ruin runs around the research you want.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Utility"
        ],
        [
          "Trains via",
          "Research Bench work"
        ],
        [
          "Needs",
          "Ancient Science Books"
        ],
        [
          "Unlocks",
          "Crafting & base tech"
        ]
      ],
      "related": [
        {
          "href": "/skills/engineering",
          "label": "Engineering"
        },
        {
          "href": "/skills/robotics",
          "label": "Robotics"
        },
        {
          "href": "/base-building/automated-production",
          "label": "Automated Production"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "engineering",
      "name": "Engineering",
      "category": "Utility",
      "governs": "Constructing and the speed of building base structures.",
      "intro": "Engineering turns a patch of dirt into a fortress. It is the difference between sheltering and settling.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>Engineering governs how fast a character builds and repairs base structures — walls, buildings, production machines and defences.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Higher Engineering dramatically cuts construction time, which matters most under raid pressure when walls need to go up before the next attack.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>Engineering trains through construction — the more building a character does, the faster they build.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Assign dedicated builders and keep them constructing. Early base projects double as Engineering training.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Spreading construction across many low-skill characters. A couple of dedicated, high-Engineering builders finish a base far faster.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Utility"
        ],
        [
          "Trains via",
          "Building structures"
        ],
        [
          "Speeds up",
          "Base construction"
        ],
        [
          "Pairs with",
          "Labouring"
        ]
      ],
      "related": [
        {
          "href": "/base-building/wall-design",
          "label": "Wall Design"
        },
        {
          "href": "/skills/science",
          "label": "Science"
        },
        {
          "href": "/base-building/raid-defense",
          "label": "Raid Defense"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "robotics",
      "name": "Robotics",
      "category": "Utility",
      "governs": "Repairing Skeletons and crafting and maintaining robotic limbs.",
      "intro": "Robotics is medicine for the metal. In a squad with Skeletons, it is not optional — it is the medkit.",
      "sections": [
        {
          "h": "What It Does",
          "body": "<p>Robotics governs repairing Skeleton characters and working with robotic limbs — both crafting them and fitting them to organic characters who have lost limbs.</p>"
        },
        {
          "h": "Hidden Effects",
          "body": "<p>Skeletons cannot be healed with normal first aid; they need Skeleton Repair Kits applied through Robotics. A squad with Skeletons must have a robotics specialist.</p>"
        },
        {
          "h": "How XP Works",
          "body": "<p>Robotics trains by repairing Skeletons and working with robotic components.</p>"
        },
        {
          "h": "Best Training Methods",
          "body": "<p>Keep a dedicated repair specialist and let them patch up Skeleton squadmates after fights. Robotic-limb crafting also builds the skill.</p>"
        },
        {
          "h": "Common Mistakes",
          "body": "<p>Running Skeletons without a Robotics character or Repair Kits. A damaged Skeleton with no repair option is dead weight.</p>"
        }
      ],
      "infobox": [
        [
          "Type",
          "Utility"
        ],
        [
          "Trains via",
          "Repairing Skeletons"
        ],
        [
          "Needs",
          "Skeleton Repair Kits"
        ],
        [
          "Essential for",
          "Skeleton squads"
        ]
      ],
      "related": [
        {
          "href": "/races/skeletons",
          "label": "Skeletons (Race)"
        },
        {
          "href": "/armor/robotic-limbs",
          "label": "Robotic Limbs"
        },
        {
          "href": "/guides/skeleton-squad",
          "label": "Skeleton Squad Guide"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    }
  ]
});
})();
