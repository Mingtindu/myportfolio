// Sample projects data
const projects = [
    { name: 'Ecommerce website', description: 'An e-commerce website built with React and Node.js.', githubLink: 'https://github.com/Mingtindu/ecom.git' },
    { name: 'Project 2', description: 'Description of Project 2' },
    { name: 'Project 3', description: 'Description of Project 3' },
    { name: 'Project 4', description: 'Description of Project 4' },
  ];
  
  // Function to dynamically create project cards
  function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'bg-gray-200 p-4 shadow-md rounded-lg';
    card.innerHTML = `
      <h3 class="text-lg font-semibold">${project.name}</h3>
      <p class="text-gray-600">${project.description}</p>
      <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="text-blue-500 font-semibold mt-2 inline-block">GitHub Repo</a>
    `;
    return card;
  }
  
  // Function to render projects
  function renderProjects() {
    const projectsContainer = document.querySelector('#projectsContainer');
    projects.forEach((project) => {
      const card = createProjectCard(project);
      projectsContainer.appendChild(card);
    });
  }
  
  // Call renderProjects on page load
  window.onload = () => {
    renderProjects();
  };
  