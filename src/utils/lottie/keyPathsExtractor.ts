type AnyObject = { [key: string]: any };

export default function keyPathExtractor(json: AnyObject) {
  let keyPaths: AnyObject = [];
  json.layers.forEach((path: AnyObject) => {
    if (path.nm.includes('tpa') || path.nm.includes('bca'))
      keyPaths.push(`${path.nm}.${path.shapes[0].nm}`);
  });
  return keyPaths;
}
