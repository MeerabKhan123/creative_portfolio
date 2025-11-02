const projects = {
            uiux: {
                title: "UI/UX Design",
                description: "Creating intuitive and beautiful user interfaces that delight users and drive engagement. My approach combines user research, prototyping, and iterative testing to deliver exceptional digital experiences.",
                features: [
                    "User Research & Persona Development",
                    "Wireframing & Prototyping",
                    "Interactive Design & Animation",
                    "Usability Testing & Iteration"
                ],
                link: "#"
            },
            webdev: {
                title: "Web Development",
                description: "Building responsive and performant websites using modern web technologies. From simple landing pages to complex web applications, I focus on clean code and optimal user experience.",
                features: [
                    "Responsive Design & Development",
                    "Modern JavaScript Frameworks",
                    "API Integration & Development",
                    "Performance Optimization"
                ],
                link: "#"
            },
            mobile: {
                title: "Mobile Apps",
                description: "Developing cross-platform mobile applications that work seamlessly on all devices. I specialize in creating native-feeling apps with excellent performance and intuitive interfaces.",
                features: [
                    "Cross-Platform Development",
                    "Native Performance Optimization",
                    "App Store Deployment",
                    "Push Notifications & Offline Functionality"
                ],
                link: "#"
            },
            performance: {
                title: "Performance Optimization",
                description: "Optimizing applications for speed, efficiency, and excellent user experience. I use advanced techniques to ensure your digital products load quickly and run smoothly.",
                features: [
                    "Website Speed Optimization",
                    "SEO Strategy & Implementation",
                    "Analytics & Performance Monitoring",
                    "Conversion Rate Optimization"
                ],
                link: "#"
            }
        };

        // DOM Elements
        const projectCards = document.querySelectorAll('.project-card');
        const projectModal = document.getElementById('projectModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalFeatures = document.getElementById('modalFeatures');
        const viewProjectBtn = document.getElementById('viewProject');
        const closeModalBtn = document.getElementById('closeModal');
        const closeProjectBtn = document.getElementById('closeProject');
        const contactForm = document.getElementById('contactForm');
        const contactLink = document.getElementById('contactLink');
        const closeFormBtn = document.getElementById('closeForm');
        const contactFormElement = document.getElementById('contactFormElement');
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        const themeToggle = document.getElementById('themeToggle');
        const homeLink = document.getElementById('homeLink');
        const projectsLink = document.getElementById('projectsLink');
        const aboutLink = document.getElementById('aboutLink');
        const aboutSection = document.getElementById('aboutSection');
        const homeSection = document.getElementById('homeSection');
        const projectsSection = document.getElementById('projectsSection');

        // Current project
        let currentProject = null;

        // Initialize animations
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s backwards`;
        });

        // Mouse move effect for shapes
        document.addEventListener('mousemove', (e) => {
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.01;
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;
                shape.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Project card click handler
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project');
                currentProject = projects[projectId];
                
                if (currentProject) {
                    modalTitle.textContent = currentProject.title;
                    modalDescription.textContent = currentProject.description;
                    
                    // Clear previous features
                    modalFeatures.innerHTML = '';
                    
                    // Add new features
                    currentProject.features.forEach(feature => {
                        const li = document.createElement('li');
                        li.textContent = feature;
                        modalFeatures.appendChild(li);
                    });
                    
                    // Set project link
                    viewProjectBtn.onclick = () => {
                        window.open(currentProject.link, '_blank');
                    };
                    
                    // Show modal
                    projectModal.style.display = 'flex';
                }
            });
        });

        // Close modal handlers
        closeModalBtn.addEventListener('click', () => {
            projectModal.style.display = 'none';
        });

        closeProjectBtn.addEventListener('click', () => {
            projectModal.style.display = 'none';
        });

        // Contact form handlers
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            contactForm.style.display = 'flex';
            navMenu.classList.remove('active');
        });

        closeFormBtn.addEventListener('click', () => {
            contactForm.style.display = 'none';
        });

        // Form submission
        contactFormElement.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
            
            // Reset form
            contactFormElement.reset();
            
            // Close form
            contactForm.style.display = 'none';
        });

        // Navigation toggle
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close nav when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });

        // Theme toggle
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            // Change icon based on theme
            if (document.body.classList.contains('dark-theme')) {
                themeToggle.textContent = '☀️';
            } else {
                themeToggle.textContent = '🌙';
            }
        });

        // Navigation links
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllSections();
            homeSection.style.display = 'block';
            projectsSection.style.display = 'grid';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navMenu.classList.remove('active');
        });

        projectsLink.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllSections();
            homeSection.style.display = 'block';
            projectsSection.style.display = 'grid';
            document.querySelector('.projects-grid').scrollIntoView({ behavior: 'smooth' });
            navMenu.classList.remove('active');
        });

        aboutLink.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllSections();
            aboutSection.style.display = 'block';
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            navMenu.classList.remove('active');
        });

        // Function to hide all sections
        function hideAllSections() {
            homeSection.style.display = 'none';
            projectsSection.style.display = 'none';
            aboutSection.style.display = 'none';
        }

        // Show home and projects by default
        homeSection.style.display = 'block';
        projectsSection.style.display = 'grid';

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.style.display = 'none';
            }
            if (e.target === contactForm) {
                contactForm.style.display = 'none';
            }
        });