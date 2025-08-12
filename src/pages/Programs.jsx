import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react'; // dynamic icon access by name
import pageData from '../data/programs.json';

// Dynamically import ALL images in ../images with Vite
const imageModules = import.meta.glob('../images/*.{png,jpg,jpeg,webp,svg}', { eager: true });

// Helper to get image URL by filename in JSON (e.g., "art1.png")
const getImageSrc = (filename) => {
  if (!filename) return '';
  // Find a key that ends with the filename
  const entry = Object.entries(imageModules).find(([k]) => k.endsWith(`/${filename}`));
  const mod = entry?.[1];
  // Vite returns the URL as default or as the module itself depending on asset handling
  return (mod && ('default' in mod ? mod.default : mod)) || '';
};

// Helper to render an icon by name + className from JSON
const renderIcon = (icon) => {
  if (!icon?.name) return null;
  const IconComp = Icons[icon.name];
  return IconComp ? <IconComp className={icon.className || ''} /> : null;
};

const Programs = () => {
  const { meta, hero, programs, artSection, impact } = pageData;

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      {/* Hero */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">{hero.title}</h1>
            <p className="text-xl md:text-2xl">{hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programs-section" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((p, idx) => (
              <motion.div
                key={`${p.title}-${idx}`}
                className="card p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  {renderIcon(p.icon)}
                  <h3 className="text-2xl font-semibold text-navy ml-4">{p.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg">{p.description}</p>
                <ul className="space-y-2">
                  {p.features.map((f, i) => (
                    <li key={`${p.title}-f-${i}`} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Art / Expression */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">{artSection.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{artSection.subtitle}</p>
          </motion.div>

          {/* Rows (layout-driven) */}
          {artSection.rows.map((row, i) => (
            <div
              key={`art-row-${i}`}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i > 0 ? 'mt-16' : ''}`}
            >
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: row.layout === 'imageLeftQuoteRight' ? -50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={row.layout === 'textLeftImageRight' ? 'order-2 md:order-1' : ''}
              >
                {row.layout === 'imageLeftQuoteRight' ? (
                  <img
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                    alt={row.image.alt}
                    src={getImageSrc(row.image.src)}
                  />
                ) : (
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    {row.title && <h3 className="text-2xl font-semibold text-navy mb-4">{row.title}</h3>}
                    {(row.paragraphs || []).map((p, pi) => (
                      <p key={`p-${pi}`} className={`text-gray-700 ${pi === 0 ? 'mb-4' : ''}`}>{p}</p>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, x: row.layout === 'imageLeftQuoteRight' ? 50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={row.layout === 'textLeftImageRight' ? 'order-1 md:order-2' : ''}
              >
                {row.layout === 'imageLeftQuoteRight' ? (
                  <div className="quote-card">
                    <p className="text-2xl font-medium mb-4 font-display">"{row.quote}"</p>
                    <p className="text-lg font-semibold mb-6">{row.quoteBy}</p>
                    <p className="text-gray-700">{row.body}</p>
                  </div>
                ) : (
                  <img
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                    alt={row.image.alt}
                    src={getImageSrc(row.image.src)}
                  />
                )}
              </motion.div>
            </div>
          ))}

          {/* Mini gallery */}
          {artSection.miniGallery?.images?.length > 0 && (
            <div className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {artSection.miniGallery.images.map((img, i) => (
                  <div
                    key={`mini-${i}`}
                    className={`rounded-lg shadow-lg bg-white flex items-center justify-center p-2 ${i === 0 ? 'md:col-span-3' : ''}`}
                  >
                    <img
                      src={getImageSrc(img.src)}
                      alt={img.alt || `gallery-${i}`}
                      className="max-h-[420px] w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery link card */}
          {artSection.galleryLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <a
                href={artSection.galleryLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl bg-gradient-to-r from-gold to-yellow-400 p-1 shadow-lg hover:shadow-xl transition"
              >
                <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-navy">{artSection.galleryLink.title}</h3>
                    <p className="text-gray-600 mt-2">{artSection.galleryLink.subtitle}</p>
                  </div>
                  <div className="mt-6 md:mt-0 flex items-center gap-3 text-navy">
                    <span className="font-semibold">{artSection.galleryLink.cta}</span>
                    {renderIcon(artSection.galleryLink.icon)}
                  </div>
                </div>
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-display mb-6">{impact.title}</h2>
            <p className="text-xl mb-8">{impact.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {impact.items.map((it, i) => (
                <div className="text-center" key={`impact-${i}`}>
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    {renderIcon(it.icon)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  ); 
};

export default Programs;
