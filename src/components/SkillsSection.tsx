
import React from "react";

const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML & CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "TailwindCSS", level: 90 }
      ]
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Django", level: 75 },
        { name: "GraphQL", level: 70 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      name: "Other Skills",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Testing", level: 80 },
        { name: "UI/UX Design", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 rounded-lg border border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-purple-light">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map(skill => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple rounded-full" 
                        style={{ width: `${skill.level}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
