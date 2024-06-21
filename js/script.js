function downloadFile(url, fileName) {
  fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
    .then(res => res.blob())
    .then(res => {
      const aElement = document.createElement('a');
      aElement.setAttribute('download', fileName);
      const href = URL.createObjectURL(res);
      aElement.href = href;
      aElement.setAttribute('target', '_blank');
      aElement.click();
      URL.revokeObjectURL(href);
    });
};
document.querySelector('button').onclick = function () {
  downloadFile('document/CV Goffar.pdf', 'CV-Abdul-Goffar.pdf');
}



// Define your programming language skills and their corresponding percentages
const programmingSkills = [
  { name: 'HTML', level: 90, displayPercent: 90 },
  { name: 'CSS', level: 81, displayPercent: 81 },
  { name: 'JavaScript', level: 75, displayPercent: 75 },
  { name: 'Dart', level: 65, displayPercent: 65 },
  { name: 'Java', level: 90, displayPercent: 90 },
  { name: 'Kotlin', level: 80, displayPercent: 80 },
  { name: 'PHP', level: 93, displayPercent: 93 },
  { name: 'Typescript', level: 55, displayPercent: 55 },
];

// Define your framework skills and their corresponding percentages
const frameworkSkills = [
  { name: 'Spring Boot', level: 82, displayPercent: 82 },
  { name: 'React', level: 83, displayPercent: 83 },
  { name: 'Laravel', level: 90, displayPercent: 90 },
  { name: 'Tailwind Css', level: 70, displayPercent: 70 },
  { name: 'Bootstrap Css', level: 80, displayPercent: 80 },
  { name: 'Android', level: 84, displayPercent: 84 },
];

// Function to render the skills
function renderSkills(skills, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear the container

  skills.forEach(skill => {
    // Create the skill element
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill';

    const skillNameDiv = document.createElement('div');
    skillNameDiv.className = 'skill-name';
    skillNameDiv.textContent = skill.name;

    const skillLevelDiv = document.createElement('div');
    skillLevelDiv.className = 'skill-level';

    const skillPercentDiv = document.createElement('div');
    skillPercentDiv.className = 'skill-percent';
    skillPercentDiv.style.width = `${skill.level}%`;

    const skillPercentNumberDiv = document.createElement('div');
    skillPercentNumberDiv.className = 'skill-percent-number';
    skillPercentNumberDiv.textContent = `${skill.displayPercent}%`;

    // Append the elements
    skillLevelDiv.appendChild(skillPercentDiv);
    skillDiv.appendChild(skillNameDiv);
    skillDiv.appendChild(skillLevelDiv);
    skillDiv.appendChild(skillPercentNumberDiv);
    container.appendChild(skillDiv);
  });
}

// Call the function to render the programming language skills
renderSkills(programmingSkills, 'programming-skills-container');

// Call the function to render the framework skills
renderSkills(frameworkSkills, 'framework-skills-container');
