
import { useEffect } from "react";

// Import Vue components
const Navbar = () => <div id="vue-navbar"></div>;
const Hero = () => <div id="vue-hero"></div>;
const ProjectsSection = () => <div id="vue-projects"></div>;
const SkillsSection = () => <div id="vue-skills"></div>;
const ContactForm = () => <div id="vue-contact"></div>;
const Footer = () => <div id="vue-footer"></div>;

// Pre-import Vue to avoid dynamic import issues
import * as Vue from 'vue';

const Index = () => {
  useEffect(() => {
    // We need to load and mount our Vue components
    const loadVueComponents = async () => {
      try {
        const { createApp } = Vue;
        
        // Import Vue components
        const NavbarComponent = (await import('../components/Navbar.vue')).default;
        const HeroComponent = (await import('../components/Hero.vue')).default;
        const ProjectsSectionComponent = (await import('../components/ProjectsSection.vue')).default;
        const SkillsSectionComponent = (await import('../components/SkillsSection.vue')).default;
        const ContactFormComponent = (await import('../components/ContactForm.vue')).default;
        const FooterComponent = (await import('../components/Footer.vue')).default;
        
        // Create and mount each Vue component
        const mountComponent = (component: any, elementId: string) => {
          const targetEl = document.getElementById(elementId);
          if (targetEl) {
            createApp(component).mount(targetEl);
          }
        };
        
        mountComponent(NavbarComponent, 'vue-navbar');
        mountComponent(HeroComponent, 'vue-hero');
        mountComponent(ProjectsSectionComponent, 'vue-projects');
        mountComponent(SkillsSectionComponent, 'vue-skills');
        mountComponent(ContactFormComponent, 'vue-contact');
        mountComponent(FooterComponent, 'vue-footer');
        
      } catch (error) {
        console.error('Failed to load Vue components:', error);
      }
    };

    loadVueComponents();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
