function parseVersion(version) {
  if (typeof version !== 'string') {
    throw new Error('Version must be a string');
  }
  if (!version) {
    throw new Error('Version string must not be empty');
  }
  let [major, minor, patch, bundle] = version.split('.');
  major = parseInt(major, 10);
  minor = minor ? parseInt(minor, 10) : 0;
  patch = patch ? parseInt(patch, 10) : 0;
  bundle = bundle ? parseInt(bundle, 10) : 0;
  return {
    major,
    minor,
    patch,
    bundle,
  };
}

function parseAndBumpVersion(version, mode) {
  let { major, minor, patch, bundle } = parseVersion(version);
  if (
    typeof mode !== 'string' ||
    (mode !== 'major' &&
      mode !== 'minor' &&
      mode !== 'patch' &&
      mode !== 'bundle')
  ) {
    throw new Error(
      'Requires a second argument of either major, minor or patch for semantic versioning.',
    );
  }
  switch (mode) {
    case 'major':
      major++;
      minor = 0;
      patch = 0;
      bundle = 0;
      break;
    case 'minor':
      minor++;
      patch = 0;
      bundle = 0;
      break;
    case 'bundle':
      bundle++;
      break;
    default:
      bundle = 0;
      patch++;
  }

  const semanticVersion = `${major}.${minor}.${patch}`;
  let bundleVersion = semanticVersion;
  const versionCode = parseInt(`${major}${minor}${patch}`, 10);
  bundleVersion = semanticVersion + '.' + bundle;
  return { semanticVersion, bundleVersion, versionCode };
}

module.exports = { parseAndBumpVersion, parseVersion };
