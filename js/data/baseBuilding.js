/* Auto-generated lightweight Kenshi data chunk. */
(function () {
  const root = typeof window !== 'undefined' ? window : globalThis;
  root.WikiData = root.WikiData || {};
  Object.assign(root.WikiData, {
  "baseBuilding": [
    {
      "id": "best-base-locations",
      "name": "Best Base Locations",
      "summary": "Where you settle decides which problems you fight forever. Choose the location before you choose the walls.",
      "intro": "A bad base location is a slow defeat. You will fix water, raids and resources for the rest of the run.",
      "sections": [
        {
          "h": "What Makes A Location Good",
          "body": "<p>The best base sites combine usable resources (ore, water, fertile ground), a defensible shape, and a raid profile your squad can actually survive. No site has everything — you are choosing which compromise you can live with.</p>"
        },
        {
          "h": "Resources",
          "body": "<p>You want stone and iron or copper nearby, plus ground green or wet enough to farm or water you can pump. A site rich in ore but barren of water trades one chore for another.</p>"
        },
        {
          "h": "Defensibility",
          "body": "<p>Hills, narrow approaches and natural chokepoints let a small squad hold against larger raids. Open flat ground means longer walls and more turrets.</p>"
        },
        {
          "h": "Raid Profile",
          "body": "<p>Every region raids you with its local power — Holy Nation, dust bandits, Fogmen, Beak Things. Pick a region whose raids your squad can beat before you pick the exact tile.</p>"
        }
      ],
      "tip": "Set up a first, disposable base in safe territory before attempting an ambitious site. Your first base teaches you what your second one needs.",
      "infobox": [
        [
          "Decides",
          "Water, raids, resources"
        ],
        [
          "Want",
          "Ore + water + chokepoint"
        ],
        [
          "First base",
          "Safe region"
        ],
        [
          "Priority",
          "High"
        ]
      ],
      "related": [
        {
          "href": "/base-building/water-problems",
          "label": "Water Problems"
        },
        {
          "href": "/base-building/raid-defense",
          "label": "Raid Defense"
        },
        {
          "href": "/guides/best-base-locations",
          "label": "Best Base Locations Guide"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides",
        "redditCommunity"
      ]
    },
    {
      "id": "farming-systems",
      "name": "Farming Systems",
      "summary": "Crops turn a base from a money pit into a self-sufficient settlement — if the ground and water cooperate.",
      "intro": "Farming is what stops your squad starving the moment they stop adventuring. Get it running before you need it.",
      "sections": [
        {
          "h": "Overview",
          "body": "<p>Farms grow food and trade crops directly at your base. Wheat, rice, greenfruit, cactus and hemp each suit different ground and climates.</p>"
        },
        {
          "h": "Fertility & Climate",
          "body": "<p>Every crop has a fertility and climate requirement. Greenfruit wants green fertile ground; cactus tolerates arid land; hemp grows in the swamp. Check the ground before you plant.</p>"
        },
        {
          "h": "Water & Irrigation",
          "body": "<p>Most farms need water access or irrigation, which ties farming to your water supply. Arid sites can still farm cactus with minimal water.</p>"
        },
        {
          "h": "Scaling Up",
          "body": "<p>Start with enough food crops to feed the squad, then expand into trade crops or processing chains once survival is secured.</p>"
        }
      ],
      "tip": "Plant a small food farm first and confirm it feeds the squad before expanding into cash crops.",
      "infobox": [
        [
          "Produces",
          "Food & trade crops"
        ],
        [
          "Needs",
          "Fertility, water, climate"
        ],
        [
          "Key crops",
          "Wheat, rice, hemp, cactus"
        ],
        [
          "Priority",
          "High"
        ]
      ],
      "related": [
        {
          "href": "/base-building/water-problems",
          "label": "Water Problems"
        },
        {
          "href": "/base-building/automated-production",
          "label": "Automated Production"
        },
        {
          "href": "/guides/hashish-trading",
          "label": "Hashish Trading"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "power-systems",
      "name": "Power Systems",
      "summary": "Machines need power. Wind, generators and batteries keep production running through the night.",
      "intro": "A base with no power plan is a base that stops working at sundown. Build the grid before the machines.",
      "sections": [
        {
          "h": "Overview",
          "body": "<p>Power runs production machines, lights and defences. Your two main sources are wind turbines and fuel-burning generators, buffered by batteries.</p>"
        },
        {
          "h": "Wind vs Generators",
          "body": "<p>Wind power is free but unreliable — it depends on the region's wind levels. Generators are consistent but consume fuel you must produce or buy. Most bases use a mix.</p>"
        },
        {
          "h": "Batteries",
          "body": "<p>Small Battery and larger battery units store surplus power so machines keep running when wind drops or generators idle. Without storage, output stutters.</p>"
        },
        {
          "h": "Sizing The Grid",
          "body": "<p>Total your machines' draw, then build generation and storage above it. An under-powered grid silently throttles every production chain in the base.</p>"
        }
      ],
      "tip": "Check a region's wind level before relying on turbines — low-wind regions need generators or a much larger turbine array.",
      "infobox": [
        [
          "Sources",
          "Wind, generators"
        ],
        [
          "Storage",
          "Batteries"
        ],
        [
          "Needs",
          "Output > machine draw"
        ],
        [
          "Priority",
          "High"
        ]
      ],
      "related": [
        {
          "href": "/base-building/automated-production",
          "label": "Automated Production"
        },
        {
          "href": "/base-building/best-base-locations",
          "label": "Best Base Locations"
        },
        {
          "href": "/skills/engineering",
          "label": "Engineering"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "automated-production",
      "name": "Automated Production",
      "summary": "Production chains turn raw ore and crops into goods and money while your squad does something else.",
      "intro": "Automated production is how a base earns its keep. Set the chains, assign the workers, and the cats accumulate themselves.",
      "sections": [
        {
          "h": "Overview",
          "body": "<p>Production chains link raw materials to finished goods — ore to iron plates, hemp to hashish, crops to food, iron and fabrics to armour and weapons.</p>"
        },
        {
          "h": "Designing A Chain",
          "body": "<p>A good chain places storage between each step so machines never idle waiting on input. Map raw input to final output and stock every link.</p>"
        },
        {
          "h": "Assigning Workers",
          "body": "<p>Assign characters to machines and let them run jobs continuously. Higher relevant skills speed output and train the workers as a bonus.</p>"
        },
        {
          "h": "Choosing What To Make",
          "body": "<p>Pick products with strong margins and a reliable buyer — armour and weapons for high value, food for self-sufficiency, hashish for grey-market profit.</p>"
        }
      ],
      "tip": "Place storage between every production step. Machines that wait on input quietly halve your output.",
      "infobox": [
        [
          "Converts",
          "Raw goods to product"
        ],
        [
          "Needs",
          "Power, workers, storage"
        ],
        [
          "Earns",
          "Passive income"
        ],
        [
          "Pairs with",
          "Farming, mining"
        ]
      ],
      "related": [
        {
          "href": "/base-building/power-systems",
          "label": "Power Systems"
        },
        {
          "href": "/guides/base-economy",
          "label": "Base Economy"
        },
        {
          "href": "/skills/engineering",
          "label": "Engineering"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "raid-defense",
      "name": "Raid Defense",
      "summary": "Every base gets raided. Defence is not optional — it is the rent you pay for owning ground.",
      "intro": "The wasteland does not respect property. Build expecting raids, because they are coming whether you are ready or not.",
      "sections": [
        {
          "h": "Overview",
          "body": "<p>Owning a base attracts raids from the region's powers and local threats. Defence combines walls, gates, turrets and a squad able to win the fight at the wall.</p>"
        },
        {
          "h": "Layered Defence",
          "body": "<p>Strong defence is layered: outer walls funnel attackers, gates and chokepoints concentrate them, turrets thin them on approach, and your melee finishes them at a single controlled point.</p>"
        },
        {
          "h": "The Squad Still Matters",
          "body": "<p>Walls buy time; they do not win fights. A base with great walls and a weak squad still falls. Keep training fighters alongside building.</p>"
        },
        {
          "h": "Reading Raid Strength",
          "body": "<p>Raid difficulty scales with your wealth, squad size and faction relations. A rich, hostile-to-everyone base draws raids a young squad cannot survive.</p>"
        }
      ],
      "warn": "Raids scale with your wealth and notoriety. A base that grows rich faster than its squad grows strong will be overrun.",
      "infobox": [
        [
          "Inevitable",
          "Yes"
        ],
        [
          "Layers",
          "Walls, gates, turrets, squad"
        ],
        [
          "Scales with",
          "Wealth, size, relations"
        ],
        [
          "Priority",
          "Critical"
        ]
      ],
      "related": [
        {
          "href": "/base-building/wall-design",
          "label": "Wall Design"
        },
        {
          "href": "/base-building/turret-meta",
          "label": "Turret Meta"
        },
        {
          "href": "/guides/defending-against-raids",
          "label": "Defending Against Raids"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides",
        "redditCommunity"
      ]
    },
    {
      "id": "wall-design",
      "name": "Wall Design",
      "summary": "Walls do not just keep raiders out — they decide where and how the fight happens.",
      "intro": "A wall is not a barrier. It is a tool for choosing the battlefield, and good wall design wins fights before they start.",
      "sections": [
        {
          "h": "Overview",
          "body": "<p>Walls and gates define your base's perimeter and shape how raiders approach. Their real purpose is to control, not merely block.</p>"
        },
        {
          "h": "Funnelling Attackers",
          "body": "<p>Design walls so attackers are channelled toward a single gate or chokepoint where your turrets and melee are concentrated. A wall with one strong approach beats a wall with four weak ones.</p>"
        },
        {
          "h": "Gate Tactics",
          "body": "<p>Gates can be opened and closed to admit attackers in manageable numbers rather than all at once. Used well, a gate turns a swarm into a queue.</p>"
        },
        {
          "h": "Build Order & Skill",
          "body": "<p>Walls take time and the Engineering skill to raise. Build the perimeter before the base grows rich enough to attract serious raids.</p>"
        }
      ],
      "tip": "Design walls with one strong gate, not four weak sides. Concentrate your turrets and melee where the wall forces attackers to go.",
      "infobox": [
        [
          "Purpose",
          "Control the fight"
        ],
        [
          "Key idea",
          "Funnel to one chokepoint"
        ],
        [
          "Built with",
          "Engineering"
        ],
        [
          "Build",
          "Before getting rich"
        ]
      ],
      "related": [
        {
          "href": "/base-building/raid-defense",
          "label": "Raid Defense"
        },
        {
          "href": "/base-building/turret-meta",
          "label": "Turret Meta"
        },
        {
          "href": "/skills/engineering",
          "label": "Engineering"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "turret-meta",
      "name": "Turret Meta",
      "summary": "Turrets thin raids before they reach your walls — when they are placed where they can actually shoot.",
      "intro": "A well-sited turret is worth several fighters. A badly-sited one shoots your own squad in the back.",
      "sections": [
        {
          "h": "Overview",
          "body": "<p>Mounted turrets give your base ranged firepower. Manned by characters on harpoon-style weapons, they devastate raids during the approach.</p>"
        },
        {
          "h": "Placement",
          "body": "<p>Turrets need clear lines of fire over the ground attackers must cross. Place them on walls and towers overlooking the chokepoint your wall design funnels raiders into.</p>"
        },
        {
          "h": "Friendly Fire",
          "body": "<p>Turrets can hit your own characters. Keep melee out of turret firing lines, or stage them to engage only after the turrets have done their work.</p>"
        },
        {
          "h": "Crew & Skill",
          "body": "<p>Turret effectiveness depends on the operator's Turrets skill. Keep dedicated, trained gunners rather than rotating untrained workers in.</p>"
        }
      ],
      "warn": "Turrets cause friendly fire. Plan firing lines so your own melee is never standing in them.",
      "infobox": [
        [
          "Role",
          "Ranged base defence"
        ],
        [
          "Wants",
          "Clear lines of fire"
        ],
        [
          "Risk",
          "Friendly fire"
        ],
        [
          "Crew",
          "Trained gunners"
        ]
      ],
      "related": [
        {
          "href": "/base-building/wall-design",
          "label": "Wall Design"
        },
        {
          "href": "/base-building/raid-defense",
          "label": "Raid Defense"
        },
        {
          "href": "/weapons/crossbows",
          "label": "Crossbows"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "water-problems",
      "name": "Water Problems",
      "summary": "Water feeds farms, drink and production. The wrong site makes it the chore that never ends.",
      "intro": "Water is the quiet killer of ambitious bases. Solve it at the location stage, not after the walls are up.",
      "sections": [
        {
          "h": "Overview",
          "body": "<p>Bases need water for drinking, farming and some production. Water comes from wells over groundwater or from natural water sources, and availability varies enormously by region.</p>"
        },
        {
          "h": "Wells & Groundwater",
          "body": "<p>Wells tap groundwater, and a site's groundwater level sets how much you can draw. A green, wet region supports easy wells; an arid one barely supports any.</p>"
        },
        {
          "h": "Arid Sites",
          "body": "<p>Desert bases can survive on minimal water by farming cactus and limiting water-hungry production — but they will always feel water-starved compared to green sites.</p>"
        },
        {
          "h": "Planning Ahead",
          "body": "<p>Check groundwater before settling. A site with rich ore but no water forces a permanent supply problem onto the whole run.</p>"
        }
      ],
      "tip": "Check groundwater level before you build. It is far easier to pick a wet site than to fix a dry one later.",
      "infobox": [
        [
          "Feeds",
          "Drink, farms, production"
        ],
        [
          "Source",
          "Wells, water bodies"
        ],
        [
          "Varies by",
          "Region groundwater"
        ],
        [
          "Decide",
          "At site selection"
        ]
      ],
      "related": [
        {
          "href": "/base-building/best-base-locations",
          "label": "Best Base Locations"
        },
        {
          "href": "/base-building/farming-systems",
          "label": "Farming Systems"
        },
        {
          "href": "/guides/desert-survival",
          "label": "Desert Survival"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides"
      ]
    },
    {
      "id": "multi-base-strategy",
      "name": "Multi-Base Strategy",
      "summary": "A second base spreads risk, resources and reach — once your squad can defend two fronts at once.",
      "intro": "One base is a home. Two bases is an operation — and an operation that can be raided in two places at once.",
      "sections": [
        {
          "h": "Overview",
          "body": "<p>A multi-base strategy runs more than one settlement — for example a safe production base and a forward outpost near dangerous, resource-rich regions.</p>"
        },
        {
          "h": "Why Do It",
          "body": "<p>Multiple bases let you exploit resources spread across the map, stage expeditions closer to deep regions, and avoid putting every asset in one raidable place.</p>"
        },
        {
          "h": "The Cost",
          "body": "<p>Every base raids independently and needs its own defenders. Splitting a squad across bases risks each one being too thin to hold. Multi-basing demands a large, well-trained roster.</p>"
        },
        {
          "h": "When To Expand",
          "body": "<p>Expand to a second base only once your first is stable, profitable and defensible, and your squad is large enough to garrison both.</p>"
        }
      ],
      "warn": "Each base is raided separately. Do not build a second base until your squad can defend both at once.",
      "infobox": [
        [
          "Benefit",
          "Risk spread, more resources"
        ],
        [
          "Cost",
          "Separate raids, split squad"
        ],
        [
          "Needs",
          "Large trained roster"
        ],
        [
          "Stage",
          "Late game"
        ]
      ],
      "related": [
        {
          "href": "/base-building/best-base-locations",
          "label": "Best Base Locations"
        },
        {
          "href": "/base-building/raid-defense",
          "label": "Raid Defense"
        },
        {
          "href": "/guides/endgame-city-building",
          "label": "Endgame City Building"
        }
      ],
      "sources": [
        "kenshiWiki",
        "steamGuides",
        "redditCommunity"
      ]
    }
  ]
});
})();
