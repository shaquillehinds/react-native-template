const bumpAndroidVersion = require('./bumpAndroid');
const bumpIOSVersion = require('./bumpIOSVersion');

function versionBump() {
  const mode = process.argv[2];
  const platform = process.argv[3];
  if (
    !mode ||
    (mode !== 'major' &&
      mode !== 'minor' &&
      mode !== 'patch' &&
      mode !== 'bundle')
  ) {
    throw new Error(
      'Requires a second argument of either major, minor, patch or bundle for semantic versioning.',
    );
  }
  if (platform && platform !== 'ios' && platform !== 'android') {
    throw new Error(
      'The third argument can only be "ios" or "android" or left blank.',
    );
  }
  if (platform === 'ios') {
    bumpIOSVersion(mode);
  } else if (platform === 'android') {
    bumpAndroidVersion(mode);
  } else {
    bumpIOSVersion(mode);
    bumpAndroidVersion(mode);
  }
}
versionBump();
