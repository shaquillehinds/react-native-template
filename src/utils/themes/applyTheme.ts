import { retrieveAppInfo, storeAppInfo } from '@utils/storage';
import appThemes from './presets';
import { theme } from './theme';

export default async function applyTheme({
  appTheme,
  system,
}: {
  appTheme: AppTheme;
  system?: boolean;
}) {
  const appInfo = await retrieveAppInfo();
  if (appInfo) {
    if (system) {
      delete appInfo.theme;
      storeAppInfo(appInfo);
    } else if (appInfo.theme !== appTheme)
      storeAppInfo({ ...appInfo, theme: appTheme });
    const newAppColors = { ...appThemes[appTheme] };
    for (let colorProp in theme) {
      //@ts-ignore
      theme[colorProp] = newAppColors[colorProp];
    }
  }
}
