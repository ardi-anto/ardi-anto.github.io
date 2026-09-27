document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProjects();
  renderAllProjects();
  renderSkillsMatrix();

  // Mobile menu toggle logic
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileBtn.querySelector('span');
      if (mobileMenu.classList.contains('hidden')) {
        icon.textContent = 'menu';
      } else {
        icon.textContent = 'close';
      }
    });
  }
});

function renderFeaturedProjects() {
  const container = document.getElementById('featured-projects-grid');
  if (!container) return;

  const featured = profileData.projects.slice(0, 3); // Get first 3 for featured
  container.innerHTML = featured.map(project => `
    <div class="group rounded-xl bg-surface-container-low p-space-lg flex flex-col justify-between shadow-md hover:bg-surface-container transition-all duration-300">
      <div class="flex flex-col gap-space-md">
        <div class="flex items-center justify-between">
          <div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-${project.iconColor} group-hover:bg-${project.iconColor} group-hover:text-on-${project.iconColor === 'primary' ? 'primary' : project.iconColor} transition-colors">
            <span class="material-symbols-outlined text-xl">${project.icon}</span>
          </div>
          <div class="flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-mono-sm text-label-mono-sm">
            <span class="material-symbols-outlined text-xs text-secondary">star</span>
            <span class="font-medium text-on-surface">${project.stars}</span>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <h3 class="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-${project.iconColor} transition-colors">
            ${project.title}
          </h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            ${project.description}
          </p>
        </div>
        ${project.stats ? `
        <div class="p-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between text-on-surface-variant font-label-mono-sm text-label-mono-sm">
          <span>${project.stats.label}</span>
          <span class="text-${project.stats.color} font-semibold">${project.stats.value}</span>
        </div>` : ''}
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${project.tags.map((tag, i) => `
            <span class="px-2 py-0.5 rounded bg-surface-container-high ${i === 1 ? `text-${project.iconColor}` : 'text-on-surface'} font-label-mono-sm text-label-mono-sm">${tag}</span>
          `).join('')}
        </div>
      </div>
      <div class="flex items-center justify-between pt-space-lg mt-space-md border-t-0 bg-surface-container-low/50">
        <a class="font-label-ui text-label-ui text-on-surface-variant hover:text-${project.iconColor} transition-colors flex items-center gap-1" href="${project.sourceUrl}" rel="noopener noreferrer" target="_blank">
          <span class="material-symbols-outlined text-sm">code</span>
          <span>Source</span>
        </a>
        <a class="font-label-ui text-label-ui text-primary hover:text-primary-fixed transition-colors flex items-center gap-1" href="${project.demoUrl}">
          <span>${project.demoLabel}</span>
          <span class="material-symbols-outlined text-sm">${project.demoIcon}</span>
        </a>
      </div>
    </div>
  `).join('');
}

function renderSkillsMatrix() {
  const container = document.getElementById('skills-matrix-grid');
  if (!container) return;

  container.innerHTML = profileData.skills.map(skill => `
    <div class="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-md">
      <div class="flex items-center gap-space-sm">
        <div class="p-2 rounded-lg bg-surface-container-high text-${skill.iconColor}">
          <span class="material-symbols-outlined text-xl">${skill.icon}</span>
        </div>
        <div>
          <h3 class="font-headline-sm text-headline-sm text-on-surface font-medium leading-none">${skill.title}</h3>
          <span class="font-label-mono-sm text-label-mono-sm text-on-surface-variant">${skill.subtitle}</span>
        </div>
      </div>
      <p class="font-body-sm text-body-sm text-on-surface-variant">
        ${skill.description}
      </p>
      <div class="flex flex-wrap gap-1.5 pt-2">
        ${skill.tags.map(tag => `
          <span class="px-2 py-1 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">${tag}</span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderAllProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  // Render all projects
  const renderList = (projects) => {
    container.innerHTML = projects.map(project => `
      <div class="project-card group flex flex-col justify-between rounded-xl bg-surface-container-low/90 backdrop-blur-md p-space-lg hover:bg-surface-container/95 transition-all duration-300 shadow-md" data-category="${project.category}">
        <div class="flex flex-col gap-space-sm">
          <div class="flex items-center justify-between">
            <div class="inline-flex items-center gap-space-xs px-2 py-0.5 rounded-full bg-surface-container-high text-${project.iconColor} font-label-mono-sm text-label-mono-sm">
              <span class="material-symbols-outlined text-[14px]">${project.icon}</span>
              <span>${project.version}</span>
            </div>
            <div class="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-on-surface-variant">
              <span class="inline-flex items-center gap-0.5 text-on-surface"><span class="material-symbols-outlined text-[16px] text-tertiary">star</span> ${project.stars}</span>
              <span class="inline-flex items-center gap-0.5"><span class="material-symbols-outlined text-[16px]">fork_right</span> ${project.forks}</span>
            </div>
          </div>
          <div class="mt-space-xs">
            <h2 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors flex items-center gap-space-xs">
              ${project.title}
              <span class="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
            </h2>
            <p class="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
              ${project.expandedDescription || project.description}
            </p>
          </div>
          ${project.expandedStats && project.expandedStats.length > 0 ? `
          <div class="p-space-sm rounded-lg bg-surface-container-lowest/80 flex flex-col gap-1.5 mt-space-xs font-label-mono-sm text-label-mono-sm">
            ${project.expandedStats.map(stat => `
              <div class="flex justify-between items-center text-on-surface-variant">
                <span>${stat.label}</span>
                <span class="text-${stat.color}">${stat.value}</span>
              </div>
            `).join('')}
          </div>` : ''}
          <div class="flex flex-wrap gap-1.5 pt-space-xs">
            ${project.tags.map(tag => `
              <span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-mono-sm text-label-mono-sm">${tag}</span>
            `).join('')}
          </div>
        </div>
        <div class="pt-space-md mt-space-md flex items-center justify-between bg-surface-container/40 p-space-sm rounded-lg">
          <a class="font-label-mono-sm text-label-mono-sm text-primary hover:underline flex items-center gap-1" href="${project.sourceUrl}" rel="noopener noreferrer" target="_blank">
            <span class="material-symbols-outlined text-[16px]">code</span> ${project.repoUrl}
          </a>
          <span class="material-symbols-outlined text-[18px] text-on-surface-variant/60">${project.repoIcon}</span>
        </div>
      </div>
    `).join('');
  };

  renderList(profileData.projects);
  
  // Attach filter handlers
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class from all
      filterBtns.forEach(b => {
        b.classList.remove('active-tab', 'bg-primary-container', 'text-on-primary-container', 'shadow-sm');
        b.classList.add('text-on-surface-variant');
      });
      
      // Add active to clicked
      e.target.classList.add('active-tab', 'bg-primary-container', 'text-on-primary-container', 'shadow-sm');
      e.target.classList.remove('text-on-surface-variant');
      
      const filter = e.target.getAttribute('data-filter');
      
      if (filter === 'all') {
        renderList(profileData.projects);
      } else {
        const filtered = profileData.projects.filter(p => p.category === filter);
        renderList(filtered);
      }
    });
  });
}
