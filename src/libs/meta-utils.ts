export function setTitle(title?: string) {
  document.title = (title ? `${title} - ` : "") + import.meta.env.VITE_APP_NAME;
}
