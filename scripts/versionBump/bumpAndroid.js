const { readFileSync, writeFileSync } = require('fs');
const { parseAndBumpVersion } = require('./semanticVersionHandler');

const keys = {
  androidVersionName: 'versionName',
  androidVersionCode: 'versionCode',
};

const files = {
  gradle: 'android/app/build.gradle',
  // gradle: 'temp/build.gradle',
};

function bumpAndroidVersion(mode) {
  if (mode === 'bundle') {
    return;
  }
  if (
    typeof mode !== 'string' ||
    (mode !== 'major' && mode !== 'minor' && mode !== 'patch')
  ) {
    throw new Error(
      'Requires a second argument of either major, minor or patch for semantic versioning.',
    );
  }

  const gradle = readFileSync(files.gradle, 'utf-8');

  const versionNameIndex =
    gradle.indexOf(keys.androidVersionName) +
    keys.androidVersionName.length +
    1;
  const androidVersionName = gradle
    .substring(versionNameIndex, versionNameIndex + 15)
    .split('\n')[0]
    .trim()
    .replaceAll('"', '');

  const versionCodeIndex =
    gradle.indexOf(keys.androidVersionCode) +
    keys.androidVersionCode.length +
    1;
  const androidVersionCode = parseFloat(
    gradle
      .substring(versionCodeIndex, versionCodeIndex + 15)
      .split('\n')[0]
      .trim(),
  );
  console.log('Previous Android Versions: ');
  console.dir({
    androidVersionCode,
    androidVersionName,
  });

  const { semanticVersion, versionCode } = parseAndBumpVersion(
    androidVersionName,
    mode,
  );

  console.log('Current Android Versions: ');
  console.dir({
    newAndroidVersionCode: versionCode,
    newAndroidVersionName: semanticVersion,
  });

  let contents = gradle.replace(
    `${keys.androidVersionCode} ${androidVersionCode}`,
    `${keys.androidVersionCode} ${versionCode}`,
  );
  contents = contents.replace(
    `${keys.androidVersionName} "${androidVersionName}"`,
    `${keys.androidVersionName} "${semanticVersion}"`,
  );
  // let fileName = files.gradle.split('/');
  // fileName = fileName[fileName.length - 1];
  // writeFileSync(`temp/${fileName}`, contents);
  writeFileSync(files.gradle, contents);
}
module.exports = bumpAndroidVersion;
