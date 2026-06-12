/**
 * Shared Framer Motion animation variant factories.
 *
 * Variants are automatically simplified when the user has enabled
 * "Reduce Motion" in their OS accessibility settings, eliminating
 * positional shifts and using near-instant fades instead.
 *
 * Usage:
 *   import { makeFadeUp, makeStagger, EASE } from '../../utils/animations';
 *   const fadeUp = makeFadeUp(30, 0.6);
 *   const stagger = makeStagger(0.15);
 */

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * The shared easing curve used across all transitions.
 * Equivalent to CSS cubic-bezier(0.22, 1, 0.36, 1).
 */
export const EASE = [0.22, 1, 0.36, 1];

/**
 * Creates a stagger container variant.
 *
 * @param {number} [staggerChildren=0.15] - Delay between each child animation (seconds).
 * @param {number} [delayChildren=0]      - Initial delay before staggering begins (seconds).
 * @returns {import('framer-motion').Variants}
 */
export const makeStagger = (staggerChildren = 0.15, delayChildren = 0) => {
  if (prefersReducedMotion) {
    // Collapse timing so children appear instantly in sequence
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0 } },
    };
  }
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        ...(delayChildren > 0 ? { delayChildren } : {}),
      },
    },
  };
};

/**
 * Creates a fade-up variant.
 *
 * @param {number} [y=30]        - Starting vertical offset in pixels.
 * @param {number} [duration=0.6] - Animation duration in seconds.
 * @returns {import('framer-motion').Variants}
 */
export const makeFadeUp = (y = 30, duration = 0.6) => {
  if (prefersReducedMotion) {
    // Pure opacity fade; no positional movement
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.15 } },
    };
  }
  return {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration, ease: EASE } },
  };
};

/**
 * Convenience: returns undefined when reduced motion is preferred,
 * otherwise returns the provided value.
 * Useful for conditionally applying whileHover / whileTap props.
 *
 * @param {*} value - The motion prop value to apply for normal users.
 * @returns {*|undefined}
 */
export const motionProp = (value) =>
  prefersReducedMotion ? undefined : value;
