import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

// Primary background colours for each theme — used as the ripple fill colour
const THEME_BG = {
  dark: '#08080a',
  light: '#f5f5f7',
};

// How long the clip-path animation runs (ms) — must match CSS
const RIPPLE_DURATION = 700;

// The theme change fires partway through so it's hidden under the expanding ripple
const THEME_SWAP_DELAY = 350;

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  // ripple: null | { x: number, y: number, color: string }
  const [ripple, setRipple] = useState(null);

  // Apply / remove the data-theme attribute on <html> whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  /**
   * Animated toggle — call this from the button with the button's center coords.
   * @param {number} x  - pageX of the origin point (button center)
   * @param {number} y  - pageY of the origin point (button center)
   */
  const triggerToggle = useCallback((x, y) => {
    // If View Transitions API is not supported, just do a normal toggle
    if (!document.startViewTransition) {
      setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
      return;
    }

    // Capture the click coordinates so CSS can use them as the center of the ripple
    document.documentElement.style.setProperty('--ripple-x', `${x}px`);
    document.documentElement.style.setProperty('--ripple-y', `${y}px`);

    // Use the native View Transitions API
    const transition = document.startViewTransition(() => {
      setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    });

    transition.finished.finally(() => {
      document.documentElement.style.removeProperty('--ripple-x');
      document.documentElement.style.removeProperty('--ripple-y');
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, triggerToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
