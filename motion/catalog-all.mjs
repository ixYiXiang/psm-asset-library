import {
  motionCatalog as baselineCatalog,
  motionCategories,
} from './catalog.mjs';
import { motionBatchW03B } from './catalog-w03b.mjs';

export { motionCategories };
export const motionCatalog = [...baselineCatalog, ...motionBatchW03B];
export const motionCounts = Object.fromEntries(
  motionCategories.map((category) => [
    category.id,
    motionCatalog.filter((item) => item.category === category.id).length
  ])
);
