import React from 'react';

// Catches render errors anywhere below it and shows a friendly fallback
// instead of a blank white screen, so one broken component can't take the
// whole site down.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Surface for debugging; analytics (gtag) can be hooked in here later.
    console.error('Uncaught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Something went wrong
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Sorry, an unexpected error occurred. Please try reloading the page.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn-primary text-lg px-8 py-4"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
