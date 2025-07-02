import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Palkin",
    location: "Chandigarh",
    content: "I have been practicing yoga with Swati for more than 3 years. Teaching yoga is her passion and she believes in transforming and healing your body with yoga and meditation. The most important lesson she has taught me about Yoga is, you don't need to be perfect in an asana, all you need is patience to reach the perfect position. I have continued practicing yoga even during my injuries and post-fracture rehabilitation. Swati is highly focused in her practice and has helped me get through my painful days. Light stretches and pranayam also helped me recover faster from my injuries.",
    rating: 5
  },
  {
    id: 2,
    name: "Sonia",
    role: "Yoga student and teacher",
    location: "Bangalore",
    content: "Swati's dedication and commitment to the practice is unparalleled — and that's exactly what she brings to her teaching as well. She's full of knowledge and offers a structure that somehow works for everyone. She just makes things happen. ✨✨ 🙃🙃 I'm so grateful to her for all the learning I've had in my own yoga journey.",
    rating: 5
  },
  {
    id: 3,
    name: "Ranju",
    location: "Poland",
    content: "I started practising yoga with Swati through her online classes, and honestly, I was quite skeptical at first. I wasn't sure how effective or engaging virtual yoga could be—but from the very first session, I was surprised by how quickly I felt comfortable and connected. Swati's attention to detail is what sets her apart. She doesn't just guide you through poses—she observes, corrects, and explains. If my posture was off, she would gently point it out, explain why it matters, and what could happen if done incorrectly. These small but crucial insights have helped me understand yoga on a much deeper level.",
    rating: 5
  },
  {
    id: 4,
    name: "Bhavya Pandya Patel",
    location: "Canada",
    content: "Prenatal yoga has been a game-changer for me during my pregnancy! Swati's guidance and support have helped me physically, emotionally, and mentally. Starting from gentle stretches and breathing techniques, progressing every trimester, I've been able to manage stress, improve my flexibility, and prepare my body for childbirth. Her expertise and care have made me feel seen, heard, and empowered throughout this journey. I'm so grateful for the calm, centred feeling prenatal yoga has brought me - it's truly been a lifesaver!",
    rating: 5
  },
  {
    id: 5,
    name: "Aivinor",
    location: "Bangalore",
    content: "Practising yoga with Swati is one of the best decisions I've taken in recent times. As an instructor her heightened sense of awareness ensures that even small details in students posture and practice is registered. She is also creative in the way in which she mixes up the yoga routine. Her ability to read bodies allows her to make tailor made interventions and keep classes dynamic while still maintaining the rigor and disciplinary throughness of an expert.",
    rating: 5
  },
  {
    id: 6,
    name: "Neethu",
    location: "Coimbatore",
    content: "Dear Swati, Your guidance has made such a difference in my life. Since joining ur classes, I feel calmer & more balanced. My flexibility & strength have improved. Now I start each day with more energy and a positive mindset. I wish u could come back-I still have so much more to learn from u. Waiting to see u soon again in India,so that the timings suits me.",
    rating: 5
  }
];

const Testimonials = () => {
  const [duplicatedTestimonials, setDuplicatedTestimonials] = useState([...testimonials]);
  const containerRef = useRef(null);
  const scrollSpeed = 0.8; // Slower scroll speed for better readability

  useEffect(() => {
    // Duplicate the testimonials to create seamless loop
    setDuplicatedTestimonials([...testimonials, ...testimonials]);
    
    const scrollContainer = containerRef.current;
    let animationFrameId;
    let scrollPosition = 0;
    let isHovered = false;

    const scroll = () => {
      if (scrollContainer && !isHovered) {
        scrollPosition += scrollSpeed;
        
        // Reset to start when reaching the end
        if (scrollPosition >= scrollContainer.scrollHeight / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollTop = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start scrolling after 2 second delay
    const startDelay = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scroll);
    }, 2000);

    // Event handlers
    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    scrollContainer?.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer?.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer?.addEventListener('touchstart', handleMouseEnter);
    scrollContainer?.addEventListener('touchend', handleMouseLeave);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(animationFrameId);
      scrollContainer?.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer?.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer?.removeEventListener('touchstart', handleMouseEnter);
      scrollContainer?.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={i < rating ? "star filled" : "star"} 
      />
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Transformative Experiences</h2>
        <p className="section-subtitle">Hear from Swati's students around the world</p>
        
        <div 
          className="testimonials-container" 
          ref={containerRef}
        >
          <div className="testimonials-track">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="testimonial-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="student-info">
                  <h4 className="student-name">{testimonial.name}</h4>
                  <p className="student-details">
                    {testimonial.role ? `${testimonial.role} • ` : ''}
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;