
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-purple-light font-mono mb-5 animate-fade-in">Hi, my name is</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
            John Doe
          </h1>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            I build things for the web.
          </h3>
          <p className="text-gray-400 max-w-lg mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
            I'm a full-stack developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating accessible, human-centered products.
          </p>
          <div className="space-x-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <a href="#projects" 
               className="inline-block px-6 py-3 rounded-md bg-purple hover:bg-purple-dark text-white font-medium transition-colors">
              View Projects
            </a>
            <a href="#contact" 
               className="inline-block px-6 py-3 rounded-md border border-purple text-purple hover:bg-purple/10 font-medium transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
