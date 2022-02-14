// import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
// import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
  {
    navId: 1,
    title: 'Home',
    path: '/',
    icon: '/assets/icons/home.svg',
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: []
  },
  {
    navId: 2,
    title: 'Characters',
    path: '/characters',
    icon: '/assets/icons/character.svg',
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Alignment',
        path: '/characters/alignment',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Backgrounds',
        path: '/characters/backgrounds',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Inspiration',
        path: '/characters/inspiration',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Languages',
        path: '/characters/languages',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Leveling Up',
        path: '/characters/leveling-up',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Multiclassing',
        path: '/characters/multiclassing',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    navId: 3,
    title: 'Races',
    path: '/races',
    icon: '/assets/icons/race.svg',
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Dwarf',
        path: '/races/dwarf',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Elf',
        path: '/races/elf',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Halfling',
        path: '/races/halfling',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Human',
        path: '/races/human',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Dragonborn',
        path: '/races/dragonborn',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Gnome',
        path: '/races/gnome',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Half-Elf',
        path: '/races/half-elf',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Half-Orc',
        path: '/races/half-orc',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Tiefling',
        path: '/races/tiefling',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    navId: 4,
    title: 'Classes',
    path: '/classes',
    icon: '/assets/icons/class.svg',
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Barbarian',
        path: '/classes/barbarian',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Bard',
        path: '/classes/bard',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Cleric',
        path: '/classes/cleric',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Druid',
        path: '/classes/druid',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Fighter',
        path: '/classes/fighter',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Monk',
        path: '/classes/monk',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Paladin',
        path: '/classes/paladin',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Ranger',
        path: '/classes/ranger',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Rogue',
        path: '/classes/rogue',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Sorcerer',
        path: '/classes/sorcerer',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Warlock',
        path: '/classes/warlock',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Wizard',
        path: '/classes/wizard',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    navId: 5,
    title: 'Gear',
    path: '/equipment',
    icon: '/assets/icons/equipment.svg',
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Adventuring Gear',
        path: '/equipment/adventuring-gear',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Armor',
        path: '/equipment/armor',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Equipment',
        path: '/equipment/equipment',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Equipment Packs',
        path: '/equipment/equipment-packs',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Expenses',
        path: '/equipment/expenses',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Mounts and Vehicles',
        path: '/equipment/mounts-and-vehicles',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Selling Treasure',
        path: '/equipment/selling-treasure',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Tools',
        path: '/equipment/tools',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Trade Goods',
        path: '/equipment/trade-goods',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Weapons',
        path: '/equipment/weapons',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    navId: 6,
    title: 'Combat',
    path: '/combat',
    icon: '/assets/icons/combat.svg',
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Actions in Combat',
        path: '/combat/actions-in-combat',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Attacking',
        path: '/combat/attacking',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Combat Sequence',
        path: '/combat/combat-sequence',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Cover',
        path: '/combat/cover',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Damage & Healing',
        path: '/combat/damage-and-healing',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Mounted Combat',
        path: '/combat/mounted-combat',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Movement in Combat',
        path: '/combat/movement-in-combat',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Underwater Combat',
        path: '/combat/underwater-combat',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    navId: 7,
    title: 'Running a Game',
    path: '/running',
    icon: '/assets/icons/running.svg',
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Conditions',
        path: '/running/conditions',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Diseases',
        path: '/running/diseases',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Madness',
        path: '/running/madness',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Objects',
        path: '/running/objects',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Poisons',
        path: '/running/poisons',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Traps',
        path: '/running/traps',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    navId: 8,
    title: 'Gameplay Mechanics',
    path: '/gameplay-mechanics',
    icon: '/assets/icons/gameplay.svg',
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Ability Scores',
        path: '/gameplay-mechanics/ability-scores',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Between Adventures',
        path: '/gameplay-mechanics/between-adventures',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Environment',
        path: '/gameplay-mechanics/environment',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Movement',
        path: '/gameplay-mechanics/movement',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Rest',
        path: '/gameplay-mechanics/rest',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Saving Throws',
        path: '/gameplay-mechanics/saving-throws',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Time',
        path: '/gameplay-mechanics/time',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    navId: 9,
    title: 'Magic Item',
    path: '/magicitems',
    icon: '/assets/icons/magicitem.svg',
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: []
  },
  {
    navId: 10,
    title: 'Spells',
    path: '/spells',
    icon: '/assets/icons/spell.svg',
    iconClosed: 'CLOSED',
    iconOpened: 'OPENED',

    subNav: [
      {
        title: 'Bard Spells',
        path: '/spells/by-class/bard',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Cleric Spells',
        path: '/spells/by-class/cleric',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Druid Spells',
        path: '/spells/by-class/druid',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Paladin Spells',
        path: '/spells/by-class/paladin',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Sorcerer Spells',
        path: '/spells/by-class/sorcerer',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Warlock Spells',
        path: '/spells/by-class/warlock',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Wizard Spells',
        path: '/spells/by-class/wizard',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    navId: 11,
    title: 'Monsters',
    path: '/monsters',
    icon: '/assets/icons/monster.svg',
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: []
  },
];


