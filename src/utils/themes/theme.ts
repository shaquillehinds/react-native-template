import presets from './presets';
import Config from '@configuration';

const deepCopy = JSON.parse(JSON.stringify(presets[Config.defaultTheme]));
export const theme = deepCopy;
