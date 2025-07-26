import React from 'react';
import { motion } from 'framer-motion';
import Card from './card'; // Adjust the import path as needed

const TeamSection = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            y: 50
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: 0
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <Card
            title="Meet Our Team"
            content="At EDC DYPCOE, we strive to build a thriving entrepreneurial ecosystem within the campus by organizing a variety of events such as workshops, ideation camps, business plan competitions, start-up expos, guest lectures, and mentoring sessions. Through strategic collaborations and partnerships, we provide students with the knowledge, resources, and network necessary to transform innovative ideas into viable business ventures."
            variant="primary"
            titleSize="text-5xl"
            contentSize="text-3xl"
            customPadding="p-12"
            customShadow={"shadow-2xl"}
            className="max-w-3xl mx-auto rounded-3xl [&_.card-header_h3]:mb-6"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;