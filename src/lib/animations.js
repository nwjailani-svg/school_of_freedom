// Shared Framer Motion variants.
//
// Usage:
//   <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} />
//   // or for on-mount animations:
//   <motion.div variants={fadeUp} initial="hidden" animate="show" />
//
// Per-item timing (e.g. staggered cards) can still be tuned with a
// `transition` prop, which overrides the variant's own transition:
//   <motion.div variants={fadeUp} ... transition={{ duration: 0.6, delay: i * 0.1 }} />

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};
