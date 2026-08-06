import { demoMarkup as baselineDemoMarkup } from './demos.mjs';
import { w03bDemoMarkup } from './demos-w03b.mjs';

export function demoMarkup(demo) {
  return w03bDemoMarkup(demo) ?? baselineDemoMarkup(demo);
}
