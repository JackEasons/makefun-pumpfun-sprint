import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy } from './strategy.ts';

await runBot({ onBatch: createStrategy().onBatch });
