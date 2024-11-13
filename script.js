const containerEl = document.querySelector(".container");

const careersArray = [
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Mobile Developer",
  "Game Developer",
  "Data Scientist",
  "Data Analyst",
  "DevOps Engineer",
];

let careersIndex = 0;
let lettersIndex = 0;

const updateCareers = () => {
  containerEl.innerHTML = `<h1>I am a ${careersArray[careersIndex].slice(
    0,
    lettersIndex
  )}.</h1>`;
  lettersIndex++;

  if (lettersIndex === careersArray[careersIndex].length + 1) {
    lettersIndex = 0;
    careersIndex++;
    if (careersIndex === careersArray.length) {
      careersIndex = 0;
    }
  }
  setTimeout(updateCareers, 200);
};

updateCareers();
