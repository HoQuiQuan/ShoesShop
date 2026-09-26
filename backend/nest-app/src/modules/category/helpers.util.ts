export const makeSlugFromString = (text: string) => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace('đ', 'd')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-');
};
