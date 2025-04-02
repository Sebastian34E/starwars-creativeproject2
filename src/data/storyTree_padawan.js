export const story = {
  "P1": {
    "prompt": "You and your Jedi Master are walking through the Temple corridors when suddenly alarms blare...",
    "choices": [
      {
        "text": "Stand and fight alongside your Master.",
        "next": "P2"
      },
      {
        "text": "Follow your Master\u2019s orders to get help.",
        "next": "P3"
      },
      {
        "text": "Try to escape and survive.",
        "next": "P4"
      }
    ]
  },
  "P2": {
    "prompt": "You and your Master fall back to a pillared antechamber after defeating the first wave of clones...",
    "choices": [
      {
        "text": "Stay and defend your Master.",
        "next": "P2_DEATH"
      },
      {
        "text": "Honor his wish and run.",
        "next": "P4"
      },
      {
        "text": "Give in to anger and fight back.",
        "next": "P2_INQUISITOR"
      }
    ]
  },
  "P2_DEATH": {
    "ending": true,
    "type": "death",
    "text": "You die a heroic death beside your Master, defending the Temple to your last breath."
  },
  "P2_INQUISITOR": {
    "ending": true,
    "type": "inquisitor",
    "text": "Captured by Vader, your rage is twisted into power. You become an Inquisitor."
  },
  "P3": {
    "prompt": "Determined to carry out your Master\u2019s last order, you navigate the Temple\u2019s corridors alone...",
    "choices": [
      {
        "text": "Protect the fleeing younglings.",
        "next": "P3_DEATH"
      },
      {
        "text": "Continue to the communications beacon.",
        "next": "P5"
      },
      {
        "text": "Avoid the main halls and go stealth.",
        "next": "P3_ESCAPE"
      }
    ]
  },
  "P3_DEATH": {
    "ending": true,
    "type": "death",
    "text": "You die bravely protecting the younglings."
  },
  "P3_ESCAPE": {
    "ending": true,
    "type": "escape",
    "text": "You survive the night by hiding. You escape into Coruscant's streets at dawn."
  },
  "P4": {
    "prompt": "With your Master gone and the Temple overrun, you focus on escaping alive...",
    "choices": [
      {
        "text": "Disguise yourself as a clone trooper.",
        "next": "P4_DEATH"
      },
      {
        "text": "Use the maintenance tunnels.",
        "next": "P4_ESCAPE_TUNNELS"
      },
      {
        "text": "Leap from a mid-level balcony.",
        "next": "P4_ESCAPE_BALCONY"
      }
    ]
  },
  "P4_DEATH": {
    "ending": true,
    "type": "death",
    "text": "Your disguise fails, and you are executed by alert clones."
  },
  "P4_ESCAPE_TUNNELS": {
    "ending": true,
    "type": "escape",
    "text": "You escape through the tunnels and vanish into the lower city."
  },
  "P4_ESCAPE_BALCONY": {
    "ending": true,
    "type": "escape",
    "text": "You survive a daring Force-assisted rooftop jump and disappear into the cityscape."
  },
  "P5": {
    "prompt": "You slip into the communications center to alter the Temple beacon...",
    "choices": [
      {
        "text": "Recalibrate the beacon to warn Jedi away.",
        "next": "P5_DEATH_BEACON"
      },
      {
        "text": "Send a distress call for help.",
        "next": "P5_DEATH_DISTRESS"
      },
      {
        "text": "Hide in the comm room\u2019s shadows.",
        "next": "P5_ESCAPE_HIDE"
      }
    ]
  },
  "P5_DEATH_BEACON": {
    "ending": true,
    "type": "death",
    "text": "You successfully change the beacon but die as clone troopers burst in."
  },
  "P5_DEATH_DISTRESS": {
    "ending": true,
    "type": "death",
    "text": "You are executed after trying to call for help."
  },
  "P5_ESCAPE_HIDE": {
    "ending": true,
    "type": "escape",
    "text": "You survive by hiding and are rescued later by returning Jedi."
  }
};