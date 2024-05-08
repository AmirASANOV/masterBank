export const tabletWidth: number = 768;
export const desktopWidth: number = 992;
export const resolution = (viewport: number): 'desktop' | 'tablet' | 'mobile' => {
  if (viewport >= desktopWidth) {
    return 'desktop';
  }
  if (viewport >= tabletWidth && viewport < desktopWidth) {
    return 'tablet';
  }
  if (viewport < tabletWidth) {
    return 'mobile';
  }
  return 'desktop';
};
