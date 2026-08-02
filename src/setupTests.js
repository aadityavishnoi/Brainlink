// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom in this Jest version doesn't provide TextEncoder/TextDecoder,
// which react-router v7 relies on internally.
import { TextEncoder, TextDecoder } from 'util';
if (typeof global.TextEncoder === 'undefined') global.TextEncoder = TextEncoder;
if (typeof global.TextDecoder === 'undefined') global.TextDecoder = TextDecoder;

// jsdom has no IntersectionObserver, which framer-motion's scroll-reveal
// (whileInView) relies on. A no-op stub is enough for rendering in tests.
if (typeof global.IntersectionObserver === 'undefined') {
  global.IntersectionObserver = class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

// jsdom has no window.matchMedia, used by framer-motion's useReducedMotion
// hook (Reveal, PageFade).
if (typeof window.matchMedia === 'undefined') {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

// jsdom logs a "not implemented" console error for window.scrollTo
// (ScrollToTop runs on every route render) — stub it out for clean test output.
window.scrollTo = () => {};
