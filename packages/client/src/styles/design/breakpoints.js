export const breakpoints = {
  xs: (rule) => `@media (min-width: 520px) { ${rule} }`,
  sm: (rule) => `@media (min-width: 680px) { ${rule} }`,
  md: (rule) => `@media (min-width: 760px) { ${rule} }`,
  lg: (rule) => `@media (min-width: 1000px) { ${rule} }`,
  xl: (rule) => `@media (min-width: 1200px) { ${rule} }`,
}
