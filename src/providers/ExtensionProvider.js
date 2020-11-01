import ExtensionWalletSigner from "../signer/ExtensionWalletSigner";

export default class ExtensionProvider {
  constructor(entry) {
    this.entry = entry;
  }
  getSigner() {
    return new ExtensionWalletSigner(this);
  }
  getVersion() {
    return this.entry.request('getVersion');
  }
  getNetwork() {
    return this.entry.request('getNetwork');
  }
  run(address, abi, method, params) {
    return this.entry.request('run', {address, abi, method, params});
  }
  runGet(address, abi, method, params) {
    return this.entry.request('runGet', {address, abi, method, params});
  }
  deploy(abi, imageBase64, options, constructorParams) {
    return this.entry.request('deploy', {abi, imageBase64, options, constructorParams});
  }
  waitDeploy(message, processingState) {
    return this.entry.request('waitDeploy', {message, processingState});
  }
}