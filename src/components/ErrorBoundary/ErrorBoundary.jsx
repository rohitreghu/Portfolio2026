import React from 'react';

/**
 * A reusable React Error Boundary that catches:
 *  - Runtime rendering errors anywhere in the subtree
 *  - Failed lazy-load chunk requests (ChunkLoadError / dynamic import failures)
 *
 * Fallback UI uses only existing CSS variables so it automatically
 * inherits the current dark / light theme without any added stylesheet.
 *
 * Props:
 *  @prop {React.ReactNode} children  - The subtree to protect.
 *  @prop {React.ReactNode} [fallback] - Optional custom fallback to render on error.
 *  @prop {string} [minHeight='100vh'] - Min-height of the default fallback container.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Structured log — swap for your error monitoring service (Sentry, Datadog, etc.)
    console.error('[ErrorBoundary] Caught an error:', error, info.componentStack);
  }

  handleRetry = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    // Render a custom fallback if provided
    if (this.props.fallback) {
      return this.props.fallback;
    }

    const minHeight = this.props.minHeight ?? '100vh';

    return (
      <div
        role="alert"
        style={{
          minHeight,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          background: 'var(--bg-primary)',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <span
          className="material-symbols-outlined"
          aria-hidden="true"
          style={{
            fontSize: '2.5rem',
            color: 'var(--text-muted)',
          }}
        >
          error_outline
        </span>

        <p
          style={{
            margin: 0,
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: '40ch',
          }}
        >
          Something went wrong while loading this section.
        </p>

        <button
          onClick={this.handleRetry}
          style={{
            marginTop: '0.25rem',
            padding: '0.5rem 1.25rem',
            border: '1px solid var(--border-medium)',
            borderRadius: '6px',
            background: 'transparent',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontFamily: 'inherit',
          }}
        >
          Retry
        </button>
      </div>
    );
  }
}

export default ErrorBoundary;
