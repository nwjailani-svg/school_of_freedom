import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Optional fallbacks (adjust paths as needed)
import maleIcon from '../images/male-icon.png';
import femaleIcon from '../images/female-icon.png';

const TeamCard = ({ member, index }) => {
  const [open, setOpen] = useState(false);

  // Close on Esc
  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && setOpen(false);
    if (open) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const photo = member?.img || (member?.gender === 'male' ? maleIcon : femaleIcon);
  const bioText =
    Array.isArray(member?.biography) && member.biography.length
      ? member.biography.join('\n\n')
      : member?.bio || 'Dedicated team member working to empower education and support students.';

  return (
    <>
      {/* Card */}
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className="card team-card flex flex-col h-full rounded-2xl bg-white/90 shadow hover:shadow-lg transition
                   focus:outline-none focus:ring-4 focus:ring-gold/40"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: (index || 0) * 0.06 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center p-5 sm:p-6">
          <img
            className="rounded-full object-cover mb-4 border-4 border-gold w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
            alt={`${member?.name || 'Team member'}${member?.role ? `, ${member.role}` : ''}`}
            src={photo}
            onError={(e) => {
              e.currentTarget.src = member?.gender === 'male' ? maleIcon : femaleIcon;
            }}
          />
          {member?.name && (
            <h3 className="text-lg sm:text-xl font-semibold text-navy mb-1 text-center">
              {member.name}
            </h3>
          )}
          {member?.position && (
            <p className="text-gold font-medium text-sm sm:text-base mb-3 text-center">
              {member.position}
            </p>
          )}
          {!member?.position && member?.role && (
            <p className="text-gold font-medium text-sm sm:text-base mb-3 text-center">
              {member.role}
            </p>
          )}
          <p className="text-gray-600 text-sm leading-relaxed text-center line-clamp-3">
            {Array.isArray(member?.biography) && member.biography.length
              ? member.biography[0]
              : member?.bio || 'Dedicated team member working to empower education and support students.'}
          </p>
          <span className="mt-3 text-center text-sm text-navy underline">Read more</span>
        </div>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="relative w-full max-w-3xl mx-4 sm:mx-6 bg-white rounded-2xl shadow-xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 p-2 rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="max-h-[85vh] overflow-y-auto p-5 sm:p-6">
                <div className="flex flex-col md:flex-row gap-5 sm:gap-6">
                  <img
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-gold self-center md:self-start flex-shrink-0"
                    alt={`${member?.name || 'Team member'}${member?.role ? `, ${member.role}` : ''}`}
                    src={photo}
                    onError={(e) => {
                      e.currentTarget.src = member?.gender === 'male' ? maleIcon : femaleIcon;
                    }}
                  />
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy">
                      {member?.name || 'Team member'}
                    </h3>
                    {(member?.position || member?.role) && (
                      <p className="text-gold font-semibold mb-3 sm:mb-4">
                        {member?.position || member?.role}
                      </p>
                    )}
                    <div className="prose max-w-none whitespace-pre-line text-sm sm:text-base">
                      {bioText}
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

export default TeamCard;
