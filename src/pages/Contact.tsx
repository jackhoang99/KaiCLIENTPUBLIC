import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import PageLayout from '../components/layout/PageLayout';
import { colors } from '../constants/colors';
import { openInstructorEmail } from '../utils/email';

const Contact = () => {
  return (
    <PageLayout>
      <div className="min-h-screen" style={{ backgroundColor: colors.sand }}>
        <Container>
          <div className="pt-32 pb-20">
            <motion.h1 
              className="text-7xl md:text-[120px] font-display leading-none tracking-wider mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ color: colors.darkBrown }}
            >
              join the<br />
              team!
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img 
                  src="https://static.wixstatic.com/media/8c7d69_268c74ab59544b1489987da071422996~mv2.jpg/v1/crop/x_434,y_125,w_2205,h_1788/fill/w_978,h_794,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AdobeStock_671352882.jpg"
                  alt="Fitness Equipment"
                  className="w-full h-[600px] object-cover"
                />
              </motion.div>
              <motion.div 
                className="relative mt-20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <img 
                  src="https://static.wixstatic.com/media/8c7d69_a030207f15184cf4ba4daefeb5dedfde~mv2.png/v1/fill/w_1170,h_780,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/AdobeStock_814821139.png"
                  alt="Yoga Pose"
                  className="w-full h-[600px] object-cover"
                />
              </motion.div>
            </div>

            <motion.div 
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ color: colors.darkBrown }}
            >
              <p className="text-lg mb-2">Interested in becoming a certified instructor?</p>
              <p className="text-lg mb-12">
                Email us at{' '}
                <button 
                  onClick={openInstructorEmail}
                  className="underline hover:no-underline"
                  style={{ color: colors.darkBrown }}
                >
                  info@kailagreestudio.com
                </button>
                {' '}for details on FREE certification.
              </p>
              <button 
                onClick={openInstructorEmail}
                className="bg-[#B4BEB4] text-white px-16 py-3 rounded-full mb-12 hover:bg-[#a3aca3] transition-colors"
              >
                email
              </button>
              <div className="text-center">
                <p className="uppercase tracking-wider mb-1">LIMITED SPOTS AVALIBLE</p>
                <p className="tracking-wider">Sunnyvale, California</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default Contact;