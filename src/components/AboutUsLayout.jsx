import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from './card'; // Import your Card component

const AboutUsLayout = () => {
  const [showSideCards, setShowSideCards] = useState(false);

  // Trigger side cards animation after about us card completes its scaling
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSideCards(true);
    }, 1200); // Reduced delay to match faster About Us animation

    return () => clearTimeout(timer);
  }, []);

  // Icon component for the About Us card - matches the black circle with white P
  const PIcon = () => (
    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
      P
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Main container with 3D perspective */}
        <div 
          className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8"
          style={{ 
            perspective: '1500px',
            transformStyle: 'preserve-3d'
          }}
        >
          
          {/* Vision Card - Starts behind and slides out */}
          <motion.div
            className="w-full max-w-sm lg:max-w-sm xl:max-w-sm order-2 lg:order-1 lg:mt-5"
            initial={{ 
              scale: 0.7,
              opacity: 0,
              rotateY: 15,
              translateZ: -200,
              translateX: 100
            }}
            animate={showSideCards ? { 
              scale: 1,
              opacity: 1,
              rotateY: 0,
              translateZ: 0,
              translateX: 0
            } : { 
              scale: 0.7,
              opacity: 0,
              rotateY: 15,
              translateZ: -200,
              translateX: 100
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 60,
              damping: 20
            }}
            style={{
              transformStyle: "preserve-3d",
              zIndex: 1
            }}
          >
            <Card
              variant="primary"
              title="Vision"
              content="To empower the next generation of changemakers. DYPCOE aspires to be a platform that encourages creative ideas, nurtures start-up culture, and connects aspiring entrepreneurs with industry experts, mentors, and investors. To cultivate a culture of innovation and entrepreneurship by making DYPCOE a hub of student-led start-ups and impactful ventures."
              customPadding="p-6"
              titleSize="text-xl"
              contentSize="text-xl"
              iconSize="w-5 h-5"
              spacing="space-y-3"
              customShadow="shadow-xl"
              className="h-full rounded-3xl"
            />
          </motion.div>

          {/* About Us Card - Starts large and shrinks, stays in front */}
          <motion.div
            className="w-full max-w-2xl lg:max-w-2xl xl:max-w-3xl order-1 lg:order-2"
            initial={{ 
              scale: 6, 
              opacity: 0.9,
              translateZ: 50,
              rotateX: 5
            }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              translateZ: 0,
              rotateX: 0
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1],
              stiffness: 80,
              damping: 25,
              mass: 1
            }}
            style={{
              transformStyle: "preserve-3d",
              zIndex: 10,
              willChange: "transform, opacity"
            }}
          >
            <Card
              title="About Us"
              content="The Entrepreneurship Development Cell (EDC) of D.Y. Patil College of Engineering, Akurdi, Pune is a dynamic and student-driven initiative dedicated to fostering the spirit of innovation, leadership, and entrepreneurial thinking among students."
              customBackground="bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500"
              customTextColor="text-white"
              customPadding="p-12 pt-16"
              titleSize="text-4xl"
              contentSize="text-2xl"
              iconSize="w-8 h-8"
              spacing="space-y-6"
              customShadow="shadow-2xl"
              iconPosition="topRight"
              className="h-full rounded-3xl relative min-h-[400px]"
            />
          </motion.div>

          {/* Mission Card - Starts behind and slides out */}
          <motion.div
            className="w-full max-w-sm lg:max-w-sm xl:max-w-sm order-3 lg:order-3 lg:mt-5"
            initial={{ 
              scale: 0.7,
              opacity: 0,
              rotateY: -15,
              translateZ: -200,
              translateX: -100
            }}
            animate={showSideCards ? { 
              scale: 1,
              opacity: 1,
              rotateY: 0,
              translateZ: 0,
              translateX: 0
            } : { 
              scale: 0.7,
              opacity: 0,
              rotateY: -15,
              translateZ: -200,
              translateX: -100
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 60,
              damping: 20,
              delay: 0.2 // Slight delay after Vision card for staggered effect
            }}
            style={{
              transformStyle: "preserve-3d",
              zIndex: 1
            }}
          >
            <Card
              variant="primary"
              title="Mission"
              content="To ignite entrepreneurial spirit, promote self-employment as a career choice, and inculcate ethical skills such as leadership, problem-solving, and adaptability. We believe that entrepreneurship is not just about starting a business, but about thinking differently and creating impactful solutions for real-world challenges."
              customPadding="p-6"
              titleSize="text-xl"
              contentSize="text-xl"
              iconSize="w-5 h-5"
              spacing="space-y-3"
              customShadow="shadow-xl"
              className="h-full rounded-3xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsLayout;