
export const findTermByName = (name, terms) => terms.find(_t => _t.name === name);
export const findTermBySlug = (slug, terms) => terms.find(_t => _t.slug === slug);
export const findTermById = (id, terms) => terms.find(_t => _t.id === id);
export const findTerm = (s, terms) => findTermById(s, terms) || findTermBySlug(s, terms) || findTermByName(s, terms);