import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Newspaper, Play } from 'lucide-react';

// Data (your JSON exactly as you shared)
import data from '../data/updates.json';

// Helpers — robust YouTube embed from any common URL format
const getYouTubeId = (url) => {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) return u.pathname.slice(1);
    if (u.hostname.includes('youtube.com')) {
      if (u.searchParams.get('v')) return u.searchParams.get('v');
      const parts = u.pathname.split('/');
      const idx = parts.findIndex((p) => p === 'embed' || p === 'shorts' || p === 'watch');
      if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];
    }
  } catch {}
  return null;
};
const getYouTubeEmbedUrl = (url) => {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1` : null;
};

const TypeBadge = ({ type }) => (
  <div className="flex items-center space-x-2 mb-4">
    {(type === 'podcast' || type === 'video') && <Play className="w-5 h-5 text-gold" />}
    {(type === 'article' || type === 'news') && <Newspaper className="w-5 h-5 text-gold" />}
    <span className="text-sm font-medium text-gold uppercase tracking-wide">{type}</span>
  </div>
);

const Updates = () => {
  const { pressItems = [], programHighlights = [], mediaKit = [] } = data || {};

  const renderAction = (item) => {
    if (!item?.url || item.url === '#') return <span className="text-gray-500 italic">Link coming soon</span>;
    const label =
      item.type === 'video'
        ? 'Watch Now'
        : item.type === 'podcast'
        ? 'Listen / Read'
        : item.type === 'news' && item.title?.includes('Elk Grove')
        ? 'Open Volunteer Form'
        : 'Read Full Article';

    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-gold hover:text-navy transition-colors duration-300 font-medium"
      >
        <span>{label}</span>
        <ExternalLink size={16} />
      </a>
    );
  };

  // Media renderer — shows image ONLY if item.imgSrc exists
  const renderMediaBlock = (item) => {
    const isVideo = item.type === 'video';
    const isPodcast = item.type === 'podcast';

    // Full-width row for video & podcast
    if (isVideo || isPodcast) {
      return (
        <div className="lg:col-span-2">
          {isVideo ? (
            <div className="relative w-full overflow-hidden rounded-xl shadow-xl" style={{ paddingTop: '56.25%' }}>
              {getYouTubeEmbedUrl(item.url) ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={getYouTubeEmbedUrl(item.url)}
                  title={item.title || 'Video'}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                // If not embeddable and no imgSrc, render nothing (no broken image)
                item.imgSrc && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={item.imgSrc}
                      alt={item.imageAlt || 'Video'}
                      className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-xl cursor-pointer"
                    />
                  </a>
                )
              )}
            </div>
          ) : (
            // Podcast: only show image if provided
            item.imgSrc && (
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={item.imgSrc}
                  alt={item.imageAlt || 'Podcast'}
                  className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-xl cursor-pointer"
                />
              </a>
            )
          )}
        </div>
      );
    }

    // Image column for article/news — only if imgSrc exists
    return (
      <div className="lg:order-2">
        {item.imgSrc && (
          <img
            className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-xl"
            alt={item.imageAlt || ''}
            src={item.imgSrc}
          />
        )}
      </div>
    );
  };

  const renderTextBlock = (item, index) => {
    const isWide = item.type === 'video' || item.type === 'podcast';
    return (
      <div className={!isWide && index % 2 === 1 ? 'lg:order-1' : ''}>
        <TypeBadge type={item.type} />
        <h3 className="text-2xl font-semibold text-navy mb-3">{item.title}</h3>

        <div className="flex items-center space-x-4 mb-4 text-gray-600">
          {item.publication && <span className="font-medium">{item.publication}</span>}
          {item.date && (
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>{item.date}</span>
            </div>
          )}
        </div>

        {item.description && <p className="text-gray-700 mb-6">{item.description}</p>}

        {/* For embedded video, we usually skip an external button. Keep it for podcasts/articles/news; hide for video */}
        {item.type !== 'video' && renderAction(item)}
        {item.type === 'video' && (!item?.url || item.url === '#') && (
          <span className="text-gray-500 italic">Link coming soon</span>
        )}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Press & Media - The School of Freedom</title>
        <meta
          name="description"
          content="Latest press coverage and media resources for The School of Freedom, including articles from The Aggie, YouTube features, and podcasts."
        />
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
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">Press & Media</h1>
            <p className="text-xl md:text-2xl">
              Discover how The School of Freedom is making headlines and inspiring communities around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recent Coverage */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Recent Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission to educate Afghan girls and support refugee youth has captured
              the attention of major media outlets and educational institutions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {pressItems.map((item, index) => {
              const isWide = item.type === 'video' || item.type === 'podcast';
              return (
                <motion.div
                  key={`${item.type}-${item.title}-${index}`}
                  className={`grid grid-cols-1 ${isWide ? '' : 'lg:grid-cols-2'} gap-8 items-center`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Media/Image (right on desktop for articles/news) */}
                  {(item.type === 'article' || item.type === 'news') && renderMediaBlock(item)}

                  {/* Text */}
                  {renderTextBlock(item, index)}

                  {/* Full-width media row for video & podcast */}
                  {(item.type === 'video' || item.type === 'podcast') && renderMediaBlock(item)}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="section-padding bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Program Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with our mission through stories of impact, program updates, and announcements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programHighlights.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    {item.date}{item.author ? ` by ${item.author}` : ''}
                  </p>
                  {item.description && <p className="text-gray-700 mb-4">{item.description}</p>}
                </div>
                {item?.link && item.link !== '#' ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-navy font-medium mt-auto inline-block"
                  >
                    Read More →
                  </a>
                ) : (
                  <span className="text-gray-500 italic mt-auto">Link coming soon</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Media Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our media kit for high-quality images, background information, and key statistics about The School of Freedom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => {
              const isLink = item?.url && item.url !== '#';

              const CardInner = () => (
                <>
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                  {item.description && <p className="text-gray-600 text-sm mb-3">{item.description}</p>}
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      isLink ? 'bg-navy text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {item.type}{!isLink ? ' • coming soon' : ''}
                  </span>
                </>
              );

              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  className="card p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {isLink ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold rounded-lg"
                    >
                      <CardInner />
                    </a>
                  ) : (
                    <div className="opacity-80 select-none cursor-not-allowed" aria-disabled>
                      <CardInner />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Updates;
