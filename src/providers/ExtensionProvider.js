export default class ExtensionProvider {
  constructor(entry) {
    this.entry = entry;
  }
  getNetwork() {
    return this.entry.request('getNetwork');
  }
  runGet(contract, method) {
    return this.entry.request('runGet', {contract, method});
  }
}