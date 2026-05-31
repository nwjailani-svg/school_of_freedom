import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - The School of Freedom</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="min-h-[70vh] flex items-center justify-center hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-7xl md:text-8xl font-bold font-display mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Sorry, we couldn't find the page you were looking for. It may have
            been moved or no longer exists.
          </p>
          <Link to="/" className="btn-primary text-lg px-8 py-4">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
