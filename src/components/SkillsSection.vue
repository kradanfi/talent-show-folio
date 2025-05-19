
<template>
  <section id="skills" class="section bg-card">
    <div class="container">
      <h2 class="section-title">My Skills</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div v-for="(category, index) in skillCategories" :key="index" class="p-6 rounded-lg border border-border/50">
          <h3 class="text-xl font-semibold mb-4 text-purple-light">{{ category.name }}</h3>
          <div class="space-y-4">
            <div v-for="skill in category.skills" :key="skill.name" class="space-y-1">
              <div class="flex justify-between text-sm">
                <span>{{ skill.name }}</span>
                <span>{{ skill.level }}%</span>
              </div>
              <div class="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div class="h-full bg-purple rounded-full" :style="{ width: `${skill.level}%` }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "React", level: 80 },
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
</script>
