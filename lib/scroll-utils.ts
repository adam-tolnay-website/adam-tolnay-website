/**
 * Smoothly scrolls to an element with the given ID
 * @param elementId - The ID of the element to scroll to (without the # prefix)
 * @param offset - Optional offset in pixels from the top (useful for fixed headers)
 */
export const scrollToElement = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Handles click events for anchor links and provides smooth scrolling
 * @param e - The click event
 * @param href - The href attribute (e.g., "#section-id")
 * @param offset - Optional offset in pixels from the top
 */
export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>, 
  href: string, 
  offset: number = 80 // Default offset for sticky headers
) => {
  // Only handle internal anchor links
  if (href.startsWith('#')) {
    e.preventDefault();
    const targetId = href.substring(1);
    scrollToElement(targetId, offset);
  }
};

/**
 * Scrolls to an element by ID with smooth behavior
 * Useful for programmatic scrolling (e.g., from button clicks)
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset in pixels from the top
 */
export const smoothScrollToId = (elementId: string, offset: number = 80) => {
  scrollToElement(elementId, offset);
};
