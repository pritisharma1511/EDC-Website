import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Card from './card';

const AboutUsLayout = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimationStarted(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.2 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <divt
      ref={sectionRef}
      className="min-h-screen bg-white flex items-center justify-center p-8"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
          
          {/* Vision Card */}
          <motion.div
            className="w-full max-w-sm lg:max-w-sm xl:max-w-sm order-2 lg:order-1 lg:mt-5"
            initial={{ scale: 2, opacity: 1, zIndex: 1, x: '100%' }}
            animate={
              animationStarted
                ? { scale: 1, opacity: 1, zIndex: 1, x: 0 }
                : { scale: 2, opacity: 1, zIndex: 1, x: '100%' }
            }
            transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Card
              variant="primary"
              title="Vision"
              content="To empower the next generation of changemakers. DYPCOE aspires to be a platform that encourages creative ideas, nurtures start-up culture, and connects aspiring entrepreneurs with industry experts, mentors, and investors. To cultivate a culture of innovation and entrepreneurship by making DYPCOE a hub of student-led start-ups and impactful ventures."
              customPadding="p-6"
              titleSize="text-xl"
              contentSize="text-xl"
              spacing="space-y-3"
              customShadow="shadow-xl"
              className="h-full rounded-3xl"
            />
          </motion.div>

          {/* About Us Card */}
          <motion.div
            className="w-full max-w-2xl lg:max-w-2xl xl:max-w-3xl order-1 lg:order-2"
            initial={{ scale: 2, opacity: 1, zIndex: 20 }}
            animate={
              animationStarted
                ? { scale: 1, opacity: 1, zIndex: 20 }
                : { scale: 2, opacity: 1, zIndex: 20 }
            }
            transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Card
              title="About Us"
              content="The Entrepreneurship Development Cell (EDC) of D.Y. Patil College of Engineering, Akurdi, Pune is a dynamic and student-driven initiative dedicated to fostering the spirit of innovation, leadership, and entrepreneurial thinking among students."
              customBackground="bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500"
              customTextColor="text-white"
              customPadding="p-12 pt-16"
              titleSize="text-4xl"
              contentSize="text-2xl"
              spacing="space-y-6"
              customShadow="shadow-2xl"
              className="h-full rounded-3xl relative min-h-[400px]"
            />
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="w-full max-w-sm lg:max-w-sm xl:max-w-sm order-3 lg:order-3 lg:mt-5"
            initial={{ scale: 2, opacity: 1, zIndex: 1, x: '-100%' }}
            animate={
              animationStarted
                ? { scale: 1, opacity: 1, zIndex: 1, x: 0 }
                : { scale: 2, opacity: 1, zIndex: 1, x: '-100%' }
            }
            transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Card
              variant="primary"
              title="Mission"
              content="To ignite entrepreneurial spirit, promote self-employment as a career choice, and inculcate ethical skills such as leadership, problem-solving, and adaptability. We believe that entrepreneurship is not just about starting a business, but about thinking differently and creating impactful solutions for real-world challenges."
              customPadding="p-6"
              titleSize="text-xl"
              contentSize="text-xl"
              spacing="space-y-3"
              customShadow="shadow-xl"
              className="h-full rounded-3xl"
            />
          </motion.div>
        </div>
      </div>
    </divt>
  );
};

export default AboutUsLayout;
