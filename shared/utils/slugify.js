export default function slugify(string) {
  return string.toLowerCase().replace(/[^\w\d]/g, '');
}
