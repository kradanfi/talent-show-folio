
<template>
  <header class="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-sm z-50 border-b border-border/50">
    <div class="container flex items-center justify-between h-16">
      <a href="#" class="text-xl font-bold text-purple">
        Portfolio<span class="text-purple-light">.dev</span>
      </a>
      
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <nav class="hidden md:flex items-center space-x-8">
        <a v-for="item in navItems" :key="item.name" :href="item.href" 
          class="text-sm font-medium hover:text-purple-light transition-colors">
          {{ item.name }}
        </a>
      </nav>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border/50">
      <nav class="container py-4 flex flex-col space-y-4">
        <a v-for="item in navItems" :key="item.name" :href="item.href" 
          class="text-sm font-medium hover:text-purple-light transition-colors"
          @click="isMenuOpen = false">
          {{ item.name }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];
</script>
