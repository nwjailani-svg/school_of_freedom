import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Globe, Target, Heart, Users } from 'lucide-react';
import aboutData from '../data/about.json';

// Map icon names from JSON to actual Lucide components
const iconMap = {
  Globe: <Globe className="w-8 h-8 text-gold" />,
  Target: <Target className="w-8 h-8 text-gold" />,
  Heart: <Heart className="w-8 h-8 text-gold" />,
  Users: <Users className="w-8 h-8 text-gold" />
};

const About = () => {
  const {
    title,
    metaDescription,
    hero,
    ourStory,
    expandingReach,
    usPrograms,
    coreValues,
    quote
  } = aboutData.about;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">{hero.heading}</h1>
            <p className="text-xl md:text-2xl">{hero.subheading}</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">{ourStory.title}</h2>
              <div className="space-y-6 text-lg text-gray-700">
                {ourStory.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                alt={ourStory.image.alt}
                src={ourStory.image.src}
              />
            </motion.div>
          </div>

          {/* Expanding Our Reach */}
          <motion.div
            className="bg-light-gray rounded-lg p-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-navy mb-4">{expandingReach.title}</h3>
            <p className="text-lg text-gray-700 mb-4">{expandingReach.paragraph}</p>
          </motion.div>
        </div>
      </section>

      {/* US Programs Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                alt={usPrograms.image.alt}
                src={usPrograms.image.src}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-display mb-6">{usPrograms.title}</h2>
              <div className="space-y-6 text-lg">
                {usPrograms.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">{coreValues.sectionTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {coreValues.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.values.map((value, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {iconMap[value.icon]}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Quote */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div
            className="quote-card max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-medium mb-4 font-display">
              "{quote.text}"
            </p>
            <p className="text-lg font-semibold">— {quote.author}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
