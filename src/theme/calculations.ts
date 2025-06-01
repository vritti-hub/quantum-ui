// Screen width-based value selection utilities

interface BreakpointValues<T> {
  mobile: T; // 320-767px
  tablet: T; // 768-1023px
  desktop: T; // 1024px+
}

/**
 * Get the appropriate breakpoint based on screen width
 */
export const getBreakpoint = (
  screenWidth: number
): "mobile" | "tablet" | "desktop" => {
  if (screenWidth < 768) return "mobile";
  if (screenWidth < 1024) return "tablet";
  return "desktop";
};

/**
 * Select the appropriate value based on screen width
 * @param screenWidth Current screen width in pixels
 * @param values Object with mobile, tablet, desktop values
 * @returns The value for current screen width
 */
export const selectValueForWidth = <T>(
  screenWidth: number,
  values: BreakpointValues<T>
): T => {
  const breakpoint = getBreakpoint(screenWidth);
  return values[breakpoint];
};

/**
 * Calculate font size based on screen width
 */
export const calculateFontSize = (
  screenWidth: number,
  values: BreakpointValues<string>
): string => {
  return selectValueForWidth(screenWidth, values);
};

/**
 * Calculate spacing based on screen width
 */
export const calculateSpacing = (
  screenWidth: number,
  values: BreakpointValues<string>
): string => {
  return selectValueForWidth(screenWidth, values);
};

/**
 * Calculate line height based on screen width
 */
export const calculateLineHeight = (
  screenWidth: number,
  values: BreakpointValues<number>
): number => {
  return selectValueForWidth(screenWidth, values);
};
