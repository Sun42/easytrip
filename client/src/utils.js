import slugify from 'slugify';

export const slugifyNameCarnet = (name) => `/carnets/${slugify(name, { strict: true, lower: true })}`