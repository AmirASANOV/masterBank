export const setInputFocus = (selector: string, container?: string) => {
  let input: HTMLElement | null | undefined;
  if (!container) {
    input = document.querySelector(selector) as HTMLElement;
  } else {
    input = document.querySelector(container)?.querySelector(selector) as HTMLElement;
  }
  if (input) {
    input?.focus();
    input?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  return !!input;
};
