
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A feature-rich admin dashboard for e-commerce platforms with real-time analytics and inventory management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "Vuex", "TailwindCSS", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A responsive weather application displaying current conditions and 5-day forecasts using the OpenWeather API.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "Axios", "SCSS", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Crypto Tracker",
      description: "Cryptocurrency price tracker with real-time updates, interactive charts, and portfolio management.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "Pinia", "TailwindCSS", "CoinGecko API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Real Estate Listings",
      description: "A property search platform with filtering, saved searches, and virtual tour capabilities.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "Firebase", "Google Maps API", "Algolia"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "A culinary application allowing users to search for recipes by ingredients, dietary restrictions, and cuisine type.",
      image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "Vuetify", "Node.js", "Spoonacular API"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
