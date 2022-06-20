export const getCssValueByUnit = (prop, unit = 'rem') =>
  typeof prop === 'number' ? `${prop}${unit}` : prop;
