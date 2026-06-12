import { useEffect } from 'react';

/**
 * Sets the document <title> for the current page and restores
 * the previous title when the component unmounts.
 *
 * @param {string} title - The complete page title to set.
 *
 * @example
 * useDocumentTitle('Rohit Reghu | Senior Frontend Engineer');
 * useDocumentTitle(`${caseStudy.cardTitle} | Rohit Reghu`);
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
