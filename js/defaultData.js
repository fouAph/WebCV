/**
 * Real Game Developer & Project Portfolio Data
 * Based on Agus Prastiya Hidayatullah's CV and Roblox Favorites
 */
export const DEFAULT_DATA = {
  profile: {
    name: "Agus Prastiya Hidayatullah",
    title: "Game Programmer • Unity (C#) & Roblox (Luau)",
    tagline: "Game Programmer • Unity (C#) & Roblox (Luau) • Unity Certified Associate",
    bio: "Computer Engineering graduate and Game Programmer with hands-on experience building, scaling, and shipping games across both Roblox and Unity. In Roblox, I develop core gameplay loops, maintain and expand live titles with continuous content updates, and engineer in-game economies alongside monetization systems such as game passes and developer products. In Unity, as a Unity Certified Associate, I develop core gameplay mechanics, maintain live game systems with regular updates, and rapidly prototype new game concepts into playable builds.",
    location: "Aceh Tamiang, North Sumatera, Indonesia",
    email: "agusprastia1@gmail.com",
    phone: "+62 822 1459 4545",
    avatarUrl: "./assets/profile/agus-prastiya.png",
    stats: [],
    socials: {
      itch: "https://fouaph.itch.io",
      github: "https://github.com/fouAph",
      linkedin: "https://linkedin.com/in/agusprastiyahidayatullah"
    },
    skills: [
      "Luau / Lua", "Roblox Studio", "Rojo", "C#", "Unity Engine",
      "Monetization (Dev Products & Game Passes)", "In-Game Economies",
      "Multiplayer Networking", "Firebase", "Git", "Plastic SCM",
      "Gameplay Mechanics", "Client-Server Replication", "Procedural Systems"
    ]
  },

  // "Store Everything" - The Work & Games Hub
  games: [
    {
      id: "rbx-claw",
      title: "Brainrot Claw Machine",
      studio: "Rivrs x Sim",
      platform: "Roblox",
      category: "Roblox Games",
      status: "Live",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer",
      thumbnail: "https://tr.rbxcdn.com/180DAY-25c61be24b665390fc4fd230a1a85c76/512/512/Image/Png/noFilter",
      description: "Fast-paced claw collection and evolution game on Roblox.",
      contributions: [
        "Implemented the complete in-game lootbox system.",
        "Integrated monetization pipelines (Developer Products & Game Passes for boosts and currencies)."
      ],
      tags: ["Luau", "Lootbox System", "Monetization", "Dev Products", "Game Passes"],
      playUrl: "https://www.roblox.com/games/85068532902439"
    },
    {
      id: "rbx-reborn-sniper",
      title: "Reborn as Sniper",
      studio: "Rivrs x Sim",
      platform: "Roblox",
      category: "Roblox Games",
      status: "Live",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer",
      thumbnail: "https://tr.rbxcdn.com/180DAY-2641d248caeea9db390f3ed029cfc942/512/512/Image/Png/noFilter",
      description: "Action sniper progression shooter on Roblox.",
      contributions: [
        "Maintained and expanded existing codebase with regular content and feature updates.",
        "Integrated new gameplay maps, enemy types, and weapons/guns into the live game loop."
      ],
      tags: ["Luau", "LiveOps Updates", "Weapons & Guns", "Enemy Systems", "Maps"],
      playUrl: "https://www.roblox.com/games/80020897412121"
    },
    {
      id: "rbx-clean-room",
      title: "Clean Your Room before Mom Comes Home",
      studio: "Rivrs x Sim",
      platform: "Roblox",
      category: "Roblox Games",
      status: "Live",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer",
      thumbnail: "https://tr.rbxcdn.com/180DAY-2b03d49c12217913f29e2f14783dd9fa/512/512/Image/Png/noFilter",
      description: "Chaotic timed cleanup game where players scramble to clean messes before time expires.",
      contributions: [
        "Engineered procedural floor stain generation across room maps.",
        "Built the workstation task loop (pickup item -> place on workstation -> process cleaning).",
        "Created game-over state system integrating audio cues and character animations."
      ],
      tags: ["Luau", "Procedural Floor Stains", "Workstation Tasks", "Audio & Animation"],
      playUrl: "https://www.roblox.com/games/85081695804302"
    },
    {
      id: "rbx-sniper-npc",
      title: "Sniper vs NPC",
      studio: "Rivrs x Sim",
      platform: "Roblox",
      category: "Roblox Games",
      status: "Live",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer",
      thumbnail: "https://tr.rbxcdn.com/180DAY-b223dd0cc660393b41bdc09064df7e80/512/512/Image/Png/noFilter",
      description: "Party social deduction game where snipers attempt to spot spies disguised among NPC crowds.",
      contributions: [
        "Implemented full game phase loop from lobby matchmaking to gameplay map transitions.",
        "Engineered game-over state sequence with custom character animations.",
        "Built mission system and core round-based gameplay mechanics.",
        "Integrated monetization systems including cosmetic/perk Game Passes and Developer Products."
      ],
      tags: ["Luau", "Game Phase Loop", "Mission System", "Monetization", "Game Passes"],
      playUrl: "https://www.roblox.com/games/105963096382301"
    },
    {
      id: "rbx-snipe-brainrot",
      title: "Snipe a Brainrot",
      studio: "Rivrs x Sim",
      platform: "Roblox",
      category: "Roblox Games",
      status: "Live",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer",
      thumbnail: "https://tr.rbxcdn.com/180DAY-c06bbff88d2192c6d9dc2d9e4c179c23/512/512/Image/Png/noFilter",
      description: "Fast-paced target shooting game themed around popular brainrot characters.",
      contributions: [
        "Handled comprehensive game reskinning and feature adaptation from base engine.",
        "Adjusted gameplay parameters, character assets, and core shooting loop."
      ],
      tags: ["Luau", "Game Reskinning", "Gameplay Tuning", "Target Mechanics"],
      playUrl: "https://www.roblox.com/games/86784794715039"
    },
    {
      id: "rbx-push-train",
      title: "Push People In The Train",
      studio: "Rivrs x Sim",
      platform: "Roblox",
      category: "Roblox Games",
      status: "Live",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer",
      thumbnail: "https://tr.rbxcdn.com/180DAY-ac3680fb6e72565a82da0dd06af4aead/512/512/Image/Png/noFilter",
      description: "Strength simulator where players train power to grab and load NPC passengers into subway cars.",
      contributions: [
        "Implemented push and drag NPC interaction mechanics.",
        "Engineered dynamic NPC spawning systems and station crowd logic.",
        "Handled player monetization pipelines (multiplier Game Passes and strength Dev Products)."
      ],
      tags: ["Luau", "NPC Physics", "Spawning Systems", "Monetization", "Dev Products"],
      playUrl: "https://www.roblox.com/games/116657161396577"
    },
    {
      id: "rbx-glider-race",
      title: "Glider Racing",
      studio: "Rivrs x Sim",
      platform: "Roblox",
      category: "Roblox Games",
      status: "Live",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer",
      thumbnail: "https://tr.rbxcdn.com/180DAY-3845a72a78df8bd1aff2b73584a0d506/512/512/Image/Png/noFilter",
      description: "Aerial gliding and obstacle racing experience adapted from the Donut Wheel base.",
      contributions: [
        "Reskinned and re-engineered core mechanics from Donut Wheel Race.",
        "Handled player gliding mechanics (forward propulsion with custom gliding animations).",
        "Implemented monetization systems (Game Passes & Developer Products) and onboarding funnels."
      ],
      tags: ["Luau", "Gliding Mechanics", "Custom Animations", "Monetization", "Game Passes"],
      playUrl: "https://www.roblox.com/games/102834148834314"
    },
    {
      id: "rbx-leaf-raking",
      title: "Leaf Raking Simulator",
      studio: "Rivrs x Sim",
      platform: "Roblox",
      category: "Roblox Games",
      status: "Live",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer",
      thumbnail: "https://tr.rbxcdn.com/180DAY-9a5cd7240cf189917d0bdbe18f2cc391/512/512/Image/Png/noFilter",
      description: "Satisfying garden cleanup simulator with tool upgrades, lootboxes, and automation machines.",
      contributions: [
        "Engineered vacuum suction mechanics for leaf collection.",
        "Built the equipment view and tool inspection interface.",
        "Implemented decoration system and garden progression loop (EXP system and leveling model changes).",
        "Implemented lootbox rewards system and playtime tracking rewards.",
        "Handled in-game monetization (Developer Products, Game Passes, and currency bundles)."
      ],
      tags: ["Luau", "Vacuum Suction", "Garden EXP System", "Decorations", "Lootboxes", "Monetization"],
      playUrl: "https://www.roblox.com/games/121333076006902"
    },
    {
      id: "rbx-tsunami",
      title: "Climb a Tsunami",
      studio: "Rivrs x Sim",
      platform: "Roblox",
      category: "Roblox Games",
      status: "Live",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer",
      thumbnail: "https://tr.rbxcdn.com/180DAY-c946217af8432bb79efeaadf872a09b7/512/512/Image/Png/noFilter",
      description: "Wave climbing arcade game where players surf massive tidal waves to reach higher worlds.",
      contributions: [
        "Implemented surf up and surf down movement mechanics.",
        "Developed and maintained core gameplay systems and progression.",
        "Integrated monetization pipelines (surfboard Game Passes, coin Developer Products)."
      ],
      tags: ["Luau", "Surfing Mechanics", "Wave Physics", "Monetization", "Game Passes"],
      playUrl: "https://www.roblox.com/games/72827160525217"
    },
    {
      id: "rbx-dig-fossil",
      title: "Dig a Fossil",
      studio: "Rivrs x Sim",
      platform: "Roblox",
      category: "Roblox Games",
      status: "Live",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer",
      thumbnail: "https://tr.rbxcdn.com/180DAY-dac308e52aca7abe7c188c83919789dc/512/512/Image/Png/noFilter",
      description: "Archaeological exploration and fossil excavation simulator on Roblox.",
      contributions: [
        "Implemented lootbox system for decorative items and unlocks.",
        "Integrated in-game monetization pipelines."
      ],
      tags: ["Luau", "Lootbox System", "Decorations", "Monetization"],
      playUrl: "https://www.roblox.com/games/115309614120828"
    },
    {
      id: "rbx-soccer-rush",
      title: "Soccer Rush Simulator",
      studio: "Rivrs x Sim",
      platform: "Roblox",
      category: "Roblox Games",
      status: "Live",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer",
      thumbnail: "https://tr.rbxcdn.com/180DAY-0c785f9696df65601fd67b771774cdda/512/512/Image/Png/noFilter",
      description: "Fast-paced soccer simulator with character progression and companion pets.",
      contributions: [
        "Engineered player character switching and customization features.",
        "Expanded pet system with new companion pet types and stat modifiers."
      ],
      tags: ["Luau", "Character Customization", "Pet System"],
      playUrl: "https://www.roblox.com/games/88507071296732"
    },
    {
      id: "rbx-ghost-hunter",
      title: "Ghost Hunter",
      studio: "Digital Breeze Interactive",
      platform: "Roblox",
      category: "Unreleased",
      status: "Unreleased Project",
      isUnreleased: true,
      visits: "",
      visitsRaw: 0,
      role: "Gameplay & Systems Programmer",
      thumbnail: "",
      description: "Asymmetrical multiplayer game featuring ghost powers and vacuum hunter equipment.",
      contributions: [
        "Implemented and improved the game phase system.",
        "Engineered character equipping flows and inventory systems.",
        "Programmed all unique skills and abilities for playable characters.",
        "Integrated onboarding funnels and complete monetization pipeline (Dev Products & Game Passes)."
      ],
      tags: ["Luau", "Phase System", "Abilities", "Monetization", "Unreleased"],
      playUrl: ""
    },
    {
      id: "rbx-donut-race",
      title: "Donut Wheel Race",
      studio: "Digital Breeze Interactive",
      platform: "Roblox",
      category: "Roblox Games",
      status: "Live",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer",
      thumbnail: "",
      description: "Arcade racing game where players pilot high-speed customizable donut wheels.",
      contributions: [
        "Handled game reskinning and feature adaptation from base engine.",
        "Implemented monetization architecture (Developer Products, Game Passes, and progression funnels).",
        "Integrated custom donut ride animations and vehicle handling."
      ],
      tags: ["Luau", "Game Reskinning", "Monetization", "Dev Products", "Game Passes", "Custom Animations"],
      playUrl: ""
    },
    {
      id: "unity-fighting",
      title: "Battle of Guardians",
      studio: "Miracle Gates Entertainment",
      platform: "Unity",
      category: "Unity & Core Systems",
      status: "Completed",
      visits: "",
      visitsRaw: 0,
      role: "Gameplay & LiveOps Programmer",
      thumbnail: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2286560/capsule_616x353.jpg",
      description: "Real-time PVP and PVE fighting game. Built coupon system for in-game currency, resolved client-server replication for character progression, and supported live updates.",
      contributions: [
        "Designed and implemented coupon system for in-game currency purchases.",
        "Resolved server-client replication issues with character progression and in-game shop integration.",
        "Supported regular balance patches, content updates, and live game operations."
      ],
      tags: ["Unity", "C#", "Gameplay Systems", "In-Game Shop", "LiveOps"],
      playUrl: "https://store.steampowered.com/app/2286560/Battle_of_Guardians/"
    },
    {
      id: "unity-arena",
      title: "Multiplayer Arena Game (Brawl Stars Style)",
      studio: "Miracle Gates Entertainment",
      platform: "Unity",
      category: "Unity & Core Systems",
      status: "Prototype / In Dev",
      visits: "",
      visitsRaw: 0,
      role: "Multiplayer Network Programmer (Photon Fusion & C#)",
      thumbnail: "",
      description: "Transitioned singleplayer to real-time multiplayer using Photon Fusion. Integrated Firebase for Auth & Clan systems, along with client-server validated in-game purchases.",
      tags: ["Unity (C#)", "Photon Fusion", "Firebase", "Realtime Multiplayer"],
      playUrl: ""
    },
    {
      id: "unity-casual-14",
      title: "14 Mini-Games Rapid Prototyping",
      studio: "Miracle Gates Entertainment",
      platform: "Unity",
      category: "Prototypes",
      status: "Completed",
      visits: "",
      visitsRaw: 0,
      role: "Gameplay Prototyper (Unity / C#)",
      thumbnail: "",
      description: "Rapidly prototyped 14 unique casual mini-games. Designed gameplay loops, conducted user testing sessions, and iterated on control feel and visual feedback.",
      tags: ["Unity", "C#", "Rapid Prototyping", "Game Design"],
      playUrl: "https://fouaph.itch.io"
    },
    {
      id: "unity-math-edu",
      title: "Synchronous Multiplayer Math Game",
      studio: "Miracle Gates Entertainment",
      platform: "Unity",
      category: "Unity & Core Systems",
      status: "Completed",
      visits: "",
      visitsRaw: 0,
      role: "Network & Gameplay Programmer (Unity & Socket.IO)",
      thumbnail: "",
      description: "Transformed single-player educational math game into a synchronous competitive multiplayer experience using Socket.IO for low-latency communication.",
      tags: ["Unity", "Socket.IO", "Multiplayer", "EdTech"],
      playUrl: ""
    },
    {
      id: "unity-super-jumper",
      title: "Super Jumper Ranger",
      studio: "Personal Project",
      platform: "Unity",
      category: "Personal Projects",
      status: "Completed",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer (Co-developed with 2D Artist)",
      thumbnail: "./assets/projects/super-jumper-ranger.png",
      images: [
        "./assets/projects/super-jumper-ranger.png"
      ],
      description: "Survival platformer shooter co-developed with a 2D artist. Engineered complete game flow from main menu and character selection to survival loop and game-over state transitions.",
      contributions: [
        "Engineered responsive 2D platformer movement, jumping mechanics, shooting, and ammo management.",
        "Built complete game flow: main menu, character selection, active gameplay state, and game over handling.",
        "Integrated player health, ammo systems, score tracking, and dynamic enemy waves."
      ],
      tags: ["Unity", "C#", "Platformer Shooter", "Character Controller", "Game Flow"],
      playUrl: ""
    },
    {
      id: "unity-ball-it",
      title: "Ball It",
      studio: "Personal Project",
      platform: "Unity",
      category: "Personal Projects",
      status: "Completed",
      visits: "",
      visitsRaw: 0,
      role: "Game Programmer & Designer",
      thumbnail: "./assets/projects/ball-it-gameplay.png",
      images: [
        "./assets/projects/ball-it-gameplay.png",
        "./assets/projects/ball-it-stages.png",
        "./assets/projects/ball-it-menu.png"
      ],
      description: "2D physics puzzle game where players launch balls into target baskets to advance through levels. Features an Angry Birds-style 3-star rating system, progressive level lock/unlock progression, and optimized physics trajectory calculations.",
      contributions: [
        "Implemented 2D physics trajectory and ball launch mechanics.",
        "Built multi-level progression with lock/unlock stage system across 12 levels.",
        "Engineered 3-star rating performance scoring system based on launch efficiency."
      ],
      tags: ["Unity", "C#", "2D Physics", "Level Progression", "Puzzle Mechanics"],
      playUrl: ""
    },
    {
      id: "unity-tower-defender",
      title: "Tower Defender",
      studio: "Personal Project",
      platform: "Unity",
      category: "Personal Projects",
      status: "Completed",
      visits: "",
      visitsRaw: 0,
      role: "Gameplay & Systems Programmer",
      thumbnail: "./assets/projects/tower-defender-gameplay.png",
      images: [
        "./assets/projects/tower-defender-gameplay.png",
        "./assets/projects/tower-defender-level-select.png",
        "./assets/projects/tower-defender-level-locked.png"
      ],
      description: "Top-down tower defense game built on a custom 2D grid node placement system. Features precise center-node tower snapping, dynamic enemy wave pathfinding, and a multi-tier tower upgrade pipeline.",
      contributions: [
        "Developed custom 2D grid system with precise center-node placement and tile snapping.",
        "Built tower upgrade system scaling damage, firing speed, and dynamically swapping tower sprites.",
        "Engineered enemy wave progression, path following, health, and player economy systems."
      ],
      tags: ["Unity", "C#", "Grid System", "Tower Defense", "Upgrade Pipeline", "Pathfinding"],
      playUrl: ""
    }
  ],

  // Career Experience
  experiences: [
    {
      id: "exp-db",
      role: "Game Programmer",
      company: "Digital Breeze Interactive",
      period: "Sept 2025 - Sept 2026",
      type: "Onsite",
      isCurrent: true,
      description: "Developed and shipped 10+ Roblox games implementing gameplay mechanics, player interactions, backend integrations, and live updates.",
      highlights: [
        "Shipped 10+ games on Roblox using Roblox Studio and Luau.",
        "Collaborated with multidisciplinary teams to design, prototype, and improve core gameplay mechanics.",
        "Coordinated programming tasks, feature breakdown, weekly sprint planning, and blocker resolution.",
        "Identified, reproduced, and patched critical server-client gameplay and replication bugs."
      ],
      tags: ["Roblox Studio", "Luau", "Git", "Multiplayer", "LiveOps"]
    },
    {
      id: "exp-mg",
      role: "Game Programmer",
      company: "Miracle Gates Entertainment",
      period: "June 2024 - May 2025",
      type: "Onsite",
      isCurrent: false,
      description: "Hands-on development across Unity Engine and Roblox titles with C#, Luau, Plastic SCM, and third-party networking plugins.",
      highlights: [
        "Built coupon systems, in-game shop architectures, and character progression flows.",
        "Transitioned games to real-time multiplayer using Photon Fusion and Socket.IO.",
        "Prototyped 14 unique casual mini-games for rapid gameplay validation.",
        "Worked closely with QA testers and multidisciplinary teams using Git & Plastic SCM."
      ],
      tags: ["Unity (C#)", "Plastic SCM", "Photon Fusion", "Firebase", "Rojo"]
    }
  ],

  // Education & Credentials
  education: [
    {
      id: "edu-usm",
      degree: "Bachelor's Degree in Computer Engineering",
      institution: "Universitas Serambi Mekkah",
      location: "Aceh, Indonesia",
      period: "Sep 2017 - Dec 2022",
      honor: "B.S. Computer Engineering",
      description: "Comprehensive study in computer architecture, software engineering, systems design, and algorithms."
    }
  ],

  certifications: [
    {
      id: "cert-unity",
      title: "Unity Certified Associate: Programmer",
      issuer: "Unity Technologies",
      badge: "Certified Programmer",
      verifyUrl: "https://cp.certmetrics.com/unity/en/public/verify/credential/6d173c5a9293465583744f27291398a7",
      certificateImage: "./assets/projects/unity-certified-associate.jpg"
    },
    {
      id: "cert-google",
      title: "Google Play x Unity: Game Programmer Training Program",
      issuer: "Google Play & Unity",
      badge: "Graduate"
    }
  ]
};
