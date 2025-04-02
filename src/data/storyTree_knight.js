export const story = {
  "K1": {
    "prompt": "The Temple is under siege. Anakin Skywalker is leading the 501st Legion into the Jedi Temple...",
    "choices": [
      {
        "text": "Rally Jedi to defend the Temple.",
        "next": "K2"
      },
      {
        "text": "Secure the Jedi Archives.",
        "next": "K3"
      },
      {
        "text": "Evacuate survivors.",
        "next": "K4"
      }
    ]
  },
  "K2": {
    "prompt": "In the grand lobby, you come face-to-face with Anakin Skywalker. Clone troopers surround you...",
    "choices": [
      {
        "text": "Confront Anakin in a duel.",
        "next": "K2_DEATH"
      },
      {
        "text": "Fall back deeper into the Temple.",
        "next": "K4"
      },
      {
        "text": "Surrender to Lord Vader.",
        "next": "K2_INQUISITOR"
      }
    ]
  },
  "K2_DEATH": {
    "ending": true,
    "type": "death",
    "text": "You fall in single combat against Darth Vader, sacrificing yourself in a valiant effort."
  },
  "K2_INQUISITOR": {
    "ending": true,
    "type": "inquisitor",
    "text": "You surrender to Anakin and are later turned into an Inquisitor through torture and manipulation."
  },
  "K3": {
    "prompt": "You stand in the Archives, guarding Jedi knowledge. Clone troopers are about to break through...",
    "choices": [
      {
        "text": "Defend the Archives to the end.",
        "next": "K3_DEATH"
      },
      {
        "text": "Save what knowledge you can and flee.",
        "next": "K3_ESCAPE"
      },
      {
        "text": "Lure the attackers away from the Archives.",
        "next": "K3_DEATH_LURE"
      }
    ]
  },
  "K3_DEATH": {
    "ending": true,
    "type": "death",
    "text": "You die defending the Archives after a valiant stand."
  },
  "K3_DEATH_LURE": {
    "ending": true,
    "type": "death",
    "text": "You sacrifice yourself as bait, drawing troopers away from the Archives."
  },
  "K3_ESCAPE": {
    "ending": true,
    "type": "escape",
    "text": "You save valuable Jedi knowledge and flee through a secret exit into Coruscant."
  },
  "K4": {
    "prompt": "You lead a group of survivors through the Temple, seeking escape. A clone patrol approaches...",
    "choices": [
      {
        "text": "Stand and fight so the others can run.",
        "next": "K4_DEATH"
      },
      {
        "text": "Lead the group through a secret escape route.",
        "next": "K4_ESCAPE_BAIL"
      },
      {
        "text": "Split up to improve odds.",
        "next": "K4_ESCAPE_SPLIT"
      }
    ]
  },
  "K4_DEATH": {
    "ending": true,
    "type": "death",
    "text": "You sacrifice yourself to save the younglings under your care."
  },
  "K4_ESCAPE_BAIL": {
    "ending": true,
    "type": "escape",
    "text": "You escape with the survivors in Senator Bail Organa\u2019s speeder."
  },
  "K4_ESCAPE_SPLIT": {
    "ending": true,
    "type": "escape",
    "text": "You lead part of the group to safety. Some survive, others are lost."
  }
};