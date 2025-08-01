document.addEventListener("DOMContentLoaded", function () {
  const profiles = {
    disha: {
      name: "Disha Namdeo",
      image: "images/disha.jpg",
      about: "I am a passionate learner with an interest in biology and environmental science.",
      academics: "Class 12th - Science (Biology stream)",
      projects: ["Plant Cell Model", "Environmental Impact Report"],
      hobbies: ["Sketching", "Reading novels", "Volunteering for eco clubs"],
      contact: "disha12@gmail.com"
    },
    sneha: {
      name: "Sneha Gour",
      image: "images/sneha.png",
      about: "Aspiring software engineer with a passion for programming and web development.",
      academics: "Class 12th - Science (Computer stream)",
      projects: ["Weather App using Python", "Portfolio Website"],
      hobbies: ["Coding", "Singing", "Designing"],
      contact: "sneha.gour@gmail.com"
    },
    bhavishya: {
      name: "Bhavishya Singh Thakur",
      image: "images/bhavishya.jpg",
      about: "Creative and analytical student with an interest in physics and robotics.",
      academics: "Class 12th - Science (Maths stream)",
      projects: ["Line Following Robot", "Physics Quiz Game"],
      hobbies: ["Gaming", "Robotics", "Mathematics puzzles"],
      contact: "bhavishya12@gmail.com"
    }
  };

  window.showProfile = function(key) {
    const student = profiles[key];
    const container = document.getElementById('portfolioContainer');
    container.innerHTML = `
      <div class="profile">
        <img src="${student.image}" alt="${student.name}" />
        <h2>${student.name}</h2>
        <p><strong>About Me:</strong> ${student.about}</p>
        <p><strong>Academic Info:</strong> ${student.academics}</p>
        <h3>Projects:</h3>
        <ul>${student.projects.map(p => `<li>${p}</li>`).join('')}</ul>
        <h3>Hobbies:</h3>
        <ul>${student.hobbies.map(h => `<li>${h}</li>`).join('')}</ul>
        <p><strong>Contact:</strong> ${student.contact}</p>
      </div>
    `;
  };
});
