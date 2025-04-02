export const story = {
  "Y1": {
    "prompt": "Late at night in the Youngling dormitories, you are jolted awake by distant blaster fire and alarms...",
    "choices": [
      {
        "text": "Stay hidden in the dormitory.",
        "next": "Y3"
      },
      {
        "text": "Flee with the other younglings.",
        "next": "Y2"
      },
      {
        "text": "Seek out your Jedi teacher.",
        "next": "Y4"
      }
    ]
  },
  "Y2": {
    "prompt": "You and a handful of younglings rush into the dimly lit High Council Chamber...",
    "choices": [
      {
        "text": "Approach Anakin for help.",
        "next": "Y2_DEATH"
      },
      {
        "text": "Hide behind the seats.",
        "next": "Y5"
      },
      {
        "text": "Run away immediately.",
        "next": "Y5"
      }
    ]
  },
  "Y2_DEATH": {
    "ending": true,
    "type": "death",
    "text": "Anakin strikes you down instantly as you approach."
  },
  "Y3": {
    "prompt": "Curled in a tight ball beneath your bunk, you listen as clone troopers storm the dormitory...",
    "choices": [
      {
        "text": "Remain absolutely still and quiet.",
        "next": "Y5"
      },
      {
        "text": "Make a break for it now.",
        "next": "Y3_DEATH_RUN"
      },
      {
        "text": "Fight back with the Force.",
        "next": "Y3_DEATH_FORCE"
      }
    ]
  },
  "Y3_DEATH_RUN": {
    "ending": true,
    "type": "death",
    "text": "Gunned down while fleeing your hiding place."
  },
  "Y3_DEATH_FORCE": {
    "ending": true,
    "type": "death",
    "text": "You fall to clone trooper blasters after a brief struggle."
  },
  "Y4": {
    "prompt": "You dash through smoke-filled corridors, calling out for your Jedi instructor...",
    "choices": [
      {
        "text": "Run forward to help him fight.",
        "next": "Y6"
      },
      {
        "text": "Stay hidden and watch.",
        "next": "Y5"
      },
      {
        "text": "Call out to your teacher.",
        "next": "Y4_INQUISITOR"
      }
    ]
  },
  "Y4_INQUISITOR": {
    "ending": true,
    "type": "inquisitor",
    "text": "Captured and twisted by the Empire, you are turned into an Inquisitor."
  },
  "Y5": {
    "prompt": "The once-majestic Jedi Temple is now eerily quiet in places...",
    "choices": [
      {
        "text": "Hide and wait until dawn.",
        "next": "Y5_ESCAPE"
      },
      {
        "text": "Head to the Temple\u2019s hangar bay.",
        "next": "Y6"
      },
      {
        "text": "Try to slip out via the main entrance.",
        "next": "Y5_DEATH"
      }
    ]
  },
  "Y5_ESCAPE": {
    "ending": true,
    "type": "escape",
    "text": "You survive the night and vanish into the depths of Coruscant."
  },
  "Y5_DEATH": {
    "ending": true,
    "type": "death",
    "text": "You are cut down on the Temple steps."
  },
  "Y6": {
    "prompt": "You reach the Temple hangar, a vast chamber open to the Coruscant skyline...",
    "choices": [
      {
        "text": "Steal a Jedi starfighter.",
        "next": "Y6_DEATH_FIGHTER"
      },
      {
        "text": "Stow away on the clone transport.",
        "next": "Y6_ESCAPE_TRANSPORT"
      },
      {
        "text": "Ambush a lone clone trooper.",
        "next": "Y6_DEATH_AMBUSH"
      }
    ]
  },
  "Y6_DEATH_FIGHTER": {
    "ending": true,
    "type": "death",
    "text": "Your attempted getaway is cut short as the ship is destroyed."
  },
  "Y6_ESCAPE_TRANSPORT": {
    "ending": true,
    "type": "escape",
    "text": "You stow away and flee into the Coruscant undercity."
  },
  "Y6_DEATH_AMBUSH": {
    "ending": true,
    "type": "death",
    "text": "You are shot after a brave ambush."
  }
};