import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import TeamCard from '../components/TeamCard';


// Your JSON with fields: name, position, biography[], locality, order, img
import teamData from '../data/team.json';

const Team = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && setSelected(null);
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);



  const bioToText = (biography) =>
    Array.isArray(biography) && biography.length
      ? biography.join('\n\n')
      : 'Dedicated team member working to empower education and support students.';

  // ---- Data prep from JSON ----
  const teamSorted = [...teamData].sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));

  const americanTeamAll = teamSorted.filter((m) => m.locality === 'American');
  const afghanistanTeam = teamSorted.filter((m) => m.locality === 'Afghanistan');



  const renderTeam = (team, title) => (
    <div className="mb-16 sm:mb-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-navy mb-6 sm:mb-10">{title}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
        {team.map((m, i) => (
          <TeamCard key={`${m.name}-${i}`} member={m} index={i} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Meet Our Team - The School of Freedom</title>
        <meta
          name="description"
          content="Meet the dedicated team behind The School of Freedom, including founder Walid Jailani and our passionate educators, coordinators, and specialists."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-14 sm:py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl sm:max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-4 sm:mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              Dedicated individuals working together to transform lives through education and empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-2xl sm:text-3xl">Our Passionate Team</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Each member of our team brings unique skills, experiences, and unwavering dedication to our mission.
            </p>
          </motion.div>
          {renderTeam(americanTeamAll, "American Team")}
          {renderTeam(afghanistanTeam, 'Afghan Team')}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="relative w-full max-w-3xl mx-4 sm:mx-6 bg-white rounded-2xl shadow-xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 p-2 rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="max-h-[85vh] overflow-y-auto p-5 sm:p-6">
                <div className="flex flex-col md:flex-row gap-5 sm:gap-6">
                  <img
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-gold self-center md:self-start flex-shrink-0"
                    alt={`${selected.name}, ${selected.position || ''}`}
                    src={getPhotoSrc(selected)}
                    onError={(e) => {
                      const fb = getFallbackByPath(selected?.img);
                      e.currentTarget.src = fb || maleIcon;
                    }}
                  />
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy">{selected.name}</h3>
                    {selected.position && (
                      <p className="text-gold font-semibold mb-3 sm:mb-4">{selected.position}</p>
                    )}
                    <div className="prose max-w-none whitespace-pre-line text-sm sm:text-base">
                      {bioToText(selected.biography)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Team;
