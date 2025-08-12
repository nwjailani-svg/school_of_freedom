import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Users, Heart, Award, ArrowRight } from 'lucide-react';
import data from '../data/home.json';

// Map string keys from JSON → Lucide icon components
const ICONS = {
  BookOpen,
  Users,
  Heart,
  Award,
  ArrowRight,
};

const isExternal = (href) => typeof href === 'string' && /^https?:\/\//i.test(href);

const Button = ({ label, href = '#', variant = 'primary' }) => (
  <a
    href={href}
    target={isExternal(href) ? '_blank' : undefined}
    rel={isExternal(href) ? 'noopener noreferrer' : undefined}
    className={`${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} text-lg px-8 py-4`}
    aria-label={label}
  >
    {label}
  </a>
);

const Home = () => {
  // Defensive defaults so missing JSON fields don't crash the page
  const {
    seo = { title: 'Home', description: '' },
    hero = { title: '', subtitle: '', imageAlt: 'Hero image', imageUrl: '' , buttons: []},
    quote = { text: '', author: '' },
    stats = [],
    featuresSection = { title: '', subtitle: '', features: [] },
    mission = { title: '', paragraphs: [], cta: { label: '', href: '#', icon: 'ArrowRight' }, image: { alt: 'Mission image', url: '' } },
    finalCta = { title: '', subtitle: '', buttons: [] },
  } = data || {};

  return (
    <>
      <Helmet>
        <title>{seo.title || 'Home'}</title>
        {seo.description ? <meta name="description" content={seo.description} /> : null}
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          {hero.imageUrl ? (
            <img
              className="w-full h-full object-cover"
              alt={hero.imageAlt || 'Hero image'}
              src={hero.imageUrl}
              loading="eager"
            />
          ) : null}
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {hero.title ? (
            <motion.h1
              className="text-5xl md:text-7xl font-bold font-display mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {hero.title}
            </motion.h1>
          ) : null}

          {hero.subtitle ? (
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {hero.subtitle}
            </motion.p>
          ) : null}

          {Array.isArray(hero.buttons) && hero.buttons.length > 0 ? (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {hero.buttons.map((b, i) => (
                <Button key={i} {...b} />
              ))}
            </motion.div>
          ) : null}
        </div>
      </section>

      {/* Quote Section */}
      {(quote?.text || quote?.author) && (
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <motion.div
              className="quote-card max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {quote?.text ? (
                <p className="text-2xl md:text-3xl font-medium mb-4 font-display">
                  “{quote.text}”
                </p>
              ) : null}
              {quote?.author ? <p className="text-lg font-semibold">{quote.author}</p> : null}
            </motion.div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      {Array.isArray(stats) && stats.length > 0 && (
        <section className="py-16 bg-navy text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={`${stat?.label ?? 'stat'}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="stats-number">{stat?.number ?? '-'}</div>
                  <p className="text-lg font-medium">{stat?.label ?? ''}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {(featuresSection?.title || featuresSection?.subtitle || (featuresSection?.features ?? []).length) && (
        <section className="section-padding">
          <div className="container mx-auto px-4">
            {(featuresSection?.title || featuresSection?.subtitle) && (
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {featuresSection?.title ? <h2 className="section-title">{featuresSection.title}</h2> : null}
                {featuresSection?.subtitle ? (
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {featuresSection.subtitle}
                  </p>
                ) : null}
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(featuresSection?.features ?? []).map((feature = {}, index) => {
                const Icon = ICONS[feature.icon] || null;
                return (
                  <motion.div
                    key={`${feature.title ?? 'feature'}-${index}`}
                    className="card p-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-center mb-4">
                      {Icon ? <Icon className="w-8 h-8 text-gold" aria-hidden="true" /> : null}
                    </div>
                    {feature?.title ? (
                      <h3 className="text-xl font-semibold text-navy mb-3">
                        {feature.title}
                      </h3>
                    ) : null}
                    {feature?.description ? (
                      <p className="text-gray-600">{feature.description}</p>
                    ) : null}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Mission Section */}
      {(mission?.title || (mission?.paragraphs ?? []).length || mission?.image?.url) && (
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {mission?.title ? <h2 className="section-title mb-6">{mission.title}</h2> : null}

                {(mission?.paragraphs ?? []).map((p, i) =>
                  p ? (
                    <p key={i} className="text-lg text-gray-700 mb-6">
                      {p}
                    </p>
                  ) : null
                )}

                {mission?.cta?.label && mission?.cta?.href ? (
                  <a
                    href={mission.cta.href}
                    className="btn-primary inline-flex items-center space-x-2"
                    target={isExternal(mission.cta.href) ? '_blank' : undefined}
                    rel={isExternal(mission.cta.href) ? 'noopener noreferrer' : undefined}
                  >
                    <span>{mission.cta.label}</span>
                    {ICONS[mission?.cta?.icon]
                      ? React.createElement(ICONS[mission.cta.icon], { size: 20, 'aria-hidden': true })
                      : null}
                  </a>
                ) : null}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {mission?.image?.url ? (
                  <img
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                    alt={mission?.image?.alt || 'Mission image'}
                    src={mission.image.url}
                    loading="lazy"
                  />
                ) : null}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Final Call to Action */}
      {(finalCta?.title || finalCta?.subtitle || (finalCta?.buttons ?? []).length) && (
        <section className="py-16 hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {finalCta?.title ? (
                <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                  {finalCta.title}
                </h2>
              ) : null}
              {finalCta?.subtitle ? (
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                  {finalCta.subtitle}
                </p>
              ) : null}
              {Array.isArray(finalCta?.buttons) && finalCta.buttons.length > 0 ? (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {finalCta.buttons.map((b, i) => (
                    <Button key={i} {...b} />
                  ))}
                </div>
              ) : null}
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
