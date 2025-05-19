
<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      
      <div class="max-w-2xl mx-auto mt-12">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="name" class="block text-sm font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                class="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                required
              />
            </div>
            
            <div class="space-y-2">
              <label for="email" class="block text-sm font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                class="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                required
              />
            </div>
          </div>
          
          <div class="space-y-2">
            <label for="subject" class="block text-sm font-medium">Subject</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject" 
              class="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
              required
            />
          </div>
          
          <div class="space-y-2">
            <label for="message" class="block text-sm font-medium">Message</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="5" 
              class="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
              required
            ></textarea>
          </div>
          
          <div>
            <button 
              type="submit" 
              class="w-full md:w-auto px-6 py-3 rounded-md bg-purple hover:bg-purple-dark text-white font-medium transition-colors"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </div>
          
          <div v-if="formStatus" :class="formStatus.success ? 'text-green-500' : 'text-red-500'" class="text-sm">
            {{ formStatus.message }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const formStatus = ref(null);

const handleSubmit = () => {
  isSubmitting.value = true;
  
  // Simulate API call
  setTimeout(() => {
    formStatus.value = {
      success: true,
      message: 'Your message has been sent successfully! I\'ll get back to you soon.'
    };
    
    // Reset form fields
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
    
    isSubmitting.value = false;
    
    // Reset status message after 5 seconds
    setTimeout(() => {
      formStatus.value = null;
    }, 5000);
  }, 1500);
};
</script>
