const { parseAndBumpVersion } = require('./semanticVersionHandler');

const { readFileSync, writeFileSync } = require('fs');

const keys = {
  iosProjectVersion: 'CURRENT_PROJECT_VERSION',
  iosMarketingVersion: 'MARKETING_VERSION',
  bundleVersionShort: '<key>CFBundleShortVersionString</key>',
  bundleVersion: '<key>CFBundleVersion</key>',
};

const files = {
  iosProject: 'ios/Casuarina.xcodeproj/project.pbxproj',
  infoPlist: 'ios/casuarina/Info.plist',
  // iosProject: 'temp/project.pbxproj',
  // infoPlist: 'temp/Info.plist',
};

function bumpIOSVersion(mode) {
  if (
    typeof mode !== 'string' ||
    (mode !== 'major' &&
      mode !== 'minor' &&
      mode !== 'patch' &&
      mode !== 'bundle')
  ) {
    throw new Error(
      'Requires a second argument of either major, minor, patch or bundle for semantic versioning.',
    );
  }

  const isBundle = mode === 'bundle';

  const iosProject = readFileSync(files.iosProject, 'utf-8');

  const iosProjectVersionIndex =
    iosProject.indexOf(keys.iosProjectVersion) +
    keys.iosProjectVersion.length +
    1;
  const iosProjectVersion = iosProject
    .substring(iosProjectVersionIndex, iosProjectVersionIndex + 15)
    .trim()
    .split('= ')[1]
    .split(';')[0];
  const iosMarketingVersionIndex =
    iosProject.indexOf(keys.iosMarketingVersion) +
    keys.iosMarketingVersion.length +
    1;
  const iosMarketingVersion = iosProject
    .substring(iosMarketingVersionIndex, iosMarketingVersionIndex + 15)
    .trim()
    .split('= ')[1]
    .split(';')[0];
  console.log('Previous iOS Versions: ');
  console.dir({
    iosMarketingVersion,
    iosProjectVersion,
  });

  const { semanticVersion, bundleVersion } = parseAndBumpVersion(
    iosProjectVersion,
    mode,
  );

  console.log('Current iOS Versions: ');
  console.dir({
    newIOSMarketingVersion: semanticVersion,
    newIOSProjectVersion: bundleVersion,
  });

  let contents = iosProject.replaceAll(
    `${keys.iosProjectVersion} = ${iosProjectVersion}`,
    `${keys.iosProjectVersion} = ${bundleVersion}`,
  );
  if (!isBundle) {
    contents = contents.replaceAll(
      `${keys.iosMarketingVersion} = ${iosMarketingVersion}`,
      `${keys.iosMarketingVersion} = ${semanticVersion}`,
    );
  }

  // let fileName = files.iosProject.split('/');
  // fileName = fileName[fileName.length - 1];
  // writeFileSync(`temp/${fileName}`, contents);
  writeFileSync(files.iosProject, contents);

  // let plistFileName = files.infoPlist.split('/');
  // plistFileName = plistFileName[plistFileName.length - 1];

  const infoPlist = readFileSync(files.infoPlist, 'utf-8');
  let newInfoPlist = infoPlist.replace(
    /<key>CFBundleVersion<\/key>\s+.+/,
    `<key>CFBundleVersion</key>\n\t<string>${bundleVersion}</string>`,
  );
  writeFileSync(files.infoPlist, newInfoPlist);
  // writeFileSync(`temp/${plistFileName}`, newInfoPlist);
  newInfoPlist = newInfoPlist.replace(
    /<key>CFBundleShortVersionString<\/key>\s+.+/,
    `<key>CFBundleShortVersionString</key>\n\t<string>${semanticVersion}</string>`,
  );
  writeFileSync(files.infoPlist, newInfoPlist);
  // writeFileSync(`temp/${plistFileName}`, newInfoPlist);
}

module.exports = bumpIOSVersion;
