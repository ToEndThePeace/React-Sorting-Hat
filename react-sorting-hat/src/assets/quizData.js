const questions = [
  {
    question: "Which of the following would you most hate people to call you?",
    responses: ["Ordinary", "Ignorant", "Cowardly", "Selfish"]
  },
  {
    question: "You have the power to brew any potion. What does it grant you?",
    responses: ["Glory", "Wisdom", "Love", "Power"]
  },
  {
    question: "You enter an enchanted garden. What catches your eye first?",
    responses: [
      "The silver-leafed tree with golden apples",
      "The fat red toadstools which appear to be speaking with each other",
      "The bubbling pool, in the depths of which something luminous swirls",
      "The statue of an old wizard whose eyes twinkle mysteriously"
    ]
  },
  {
    question: "Which of the following do you find most difficult to deal with?",
    responses: ["Being ignored", "Boredom", "Rudeness", "Weakness"]
  },
  {
    question: "Which of the following would you most like to study?",
    responses: ["Centaurs", "Vampires", "Merpeople", "Werewolves"]
  },
  {
    question:
      "You and your friends stumble across a river troll. He won't let you pass unless one of you fights him. What do you do?",
    responses: [
      "Attempt to confuse the troll into letting you all pass without fighting",
      "Suggest rock paper scissors to decide who fights",
      "Suggest surprising the troll with a 3-person ambush",
      "Volunteer to take the troll on yourself"
    ]
  }
];

const resultCalc = (responses) => {
  //In order: gryffindor, ravenclaw, hufflepuff, slytherin
  let totals = new Array(4).fill(0);
  if (responses[0] === 0) totals[3]++;
  else if (responses[0] === 1) totals[1]++;
  else if (responses[0] === 2) totals[0]++;
  else if (responses[0] === 3) totals[2]++;

  if (responses[1] === 0) totals[3]++;
  else if (responses[1] === 1) totals[1]++;
  else if (responses[1] === 2) totals[0]++;
  else if (responses[1] === 3) totals[2]++;

  if (responses[2] === 0) totals[0]++;
  else if (responses[2] === 1) totals[2]++;
  else if (responses[2] === 2) totals[3]++;
  else if (responses[2] === 3) totals[1]++;

  if (responses[3] === 0) totals[2]++;
  else if (responses[3] === 1) totals[1]++;
  else if (responses[3] === 2) totals[0]++;
  else if (responses[3] === 3) totals[3]++;

  if (responses[4] === 0) totals[1]++;
  else if (responses[4] === 1) totals[3]++;
  else if (responses[4] === 2) totals[2]++;
  else if (responses[4] === 3) totals[0]++;

  if (responses[5] === 0) totals[1]++;
  else if (responses[5] === 1) totals[2]++;
  else if (responses[5] === 2) totals[3]++;
  else if (responses[5] === 3) totals[0]++;

  const max = Math.max(...totals);
  const top = totals.filter((x) => x === max);
  debugger;
  if (top.length === 1) {
    switch (top) {
      case 0:
        return "Gryffindor";
      case 1:
        return "Ravenclaw";
      case 2:
        return "Hufflepuff";
      case 3:
        return "Slytherin";
    }
  }
};

export { questions, resultCalc };
