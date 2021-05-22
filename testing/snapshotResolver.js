module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath
      .replace(/.test.([tj]sx?)/, '.test' + snapshotExtension)
      .replace(/src([/\\]components)/, 'testing/__snapshots__'),

  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace(snapshotExtension, '.js')
      .replace('testing/__snapshots__', 'src/components'),

  testPathForConsistencyCheck: 'src/components/somecomponent/some.test.js',
}
