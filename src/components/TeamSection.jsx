import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Card from './card'; // Adjust the import path as needed

const TeamSection = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimationStarted(true);
          observer.disconnect(); // Trigger once
        }
      },
      { threshold: 0.3 } // Animation triggers when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4"
    >
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ scale: 2, opacity: 1, zIndex: 20 }}
          animate={
            animationStarted
              ? { scale: 1, opacity: 1, zIndex: 20 }
              : { scale: 2, opacity: 1, zIndex: 20 }
          }
          transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ position: 'relative' }}
        >
          <Card
            title="Meet Our Team"
            content="At EDC DYPCOE, we strive to build a thriving entrepreneurial ecosystem within the campus by organizing a variety of events such as workshops, ideation camps, business plan competitions, start-up expos, guest lectures, and mentoring sessions. Through strategic collaborations and partnerships, we provide students with the knowledge, resources, and network necessary to transform innovative ideas into viable business ventures."
            variant="primary"
            titleSize="text-5xl"
            contentSize="text-3xl"
            customPadding="p-12"
            customShadow="shadow-2xl"
            className="max-w-3xl mx-auto rounded-3xl [&_.card-header_h3]:mb-6"
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
