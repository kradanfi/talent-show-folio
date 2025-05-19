
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you soon.'
      });
      
      // Reset form fields
      setForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
      
      // Reset status message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto mt-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={form.name} 
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={form.email} 
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
              <input 
                type="text" 
                id="subject" 
                value={form.subject} 
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea 
                id="message" 
                value={form.message} 
                onChange={handleChange}
                rows={5} 
                className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                required
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit" 
                className="w-full md:w-auto px-6 py-3 rounded-md bg-purple hover:bg-purple-dark text-white font-medium transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            
            {formStatus && (
              <div className={`text-sm ${formStatus.success ? 'text-green-500' : 'text-red-500'}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
