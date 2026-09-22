'use client'
import React, { useState } from "react";

const GetInTouch = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! ");
        e.target.reset(); 
      } else {
        setResult(data.message || "Something went wrong. Please try again. ");
      }
    } catch (error) {
      setResult("Network error. Please check your connection. ");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#050b11] text-white py-16 px-6 md:px-16 flex flex-col justify-between min-h-[60vh]">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div>
            <h1 className="text-4xl font-bold text-[#00df9a] mb-4">Get In Touch</h1>
            <p className="text-gray-400 mb-8 max-w-md">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
            <div className="space-y-5">
           
              <div className="flex items-center gap-4">
                <svg className="text-[#00df9a] w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span className="text-gray-300 text-sm md:text-base">kanwlshakeel345@gmail.com</span>
              </div>
              
              
              
              <div className="flex items-center gap-4">
                <svg className="text-[#00df9a] w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span className="text-gray-300 text-sm md:text-base">Pakistan</span>
              </div>
            </div>
          </div>

          
          <form onSubmit={handleSubmit} className="space-y-4">
            
           
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required
                className="w-full bg-transparent border border-gray-700/60 rounded-md px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#00df9a] transition" 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required
                className="w-full bg-transparent border border-gray-700/60 rounded-md px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#00df9a] transition" 
              />
            </div>
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              required
              className="w-full bg-transparent border border-gray-700/60 rounded-md px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#00df9a] transition" 
            />
            <textarea 
              rows="5" 
              name="message" 
              placeholder="Your Message" 
              required
              className="w-full bg-transparent border border-gray-700/60 rounded-md px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#00df9a] transition resize-none" 
            ></textarea>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#00df9a] text-[#050b11] font-semibold py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#00c789] transition duration-200 disabled:opacity-50" 
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

          
            {result && (
              <p className={`text-center text-sm font-medium mt-2 ${result.includes("Successfully") ? "text-[#00df9a]" : "text-red-500"}`}>
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto border-t border-gray-800/60 mt-16 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
        <p>© 2026 Kanwal Shakeel. All rights reserved.</p>
      </div>
    </section>
  );
};

export default GetInTouch;
