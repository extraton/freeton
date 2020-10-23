import ExtensionWalletSigner from "../signer/ExtensionWalletSigner";

export default class ExtensionProvider {
  constructor(entry) {
    this.entry = entry;
  }
  getSigner() {
    return new ExtensionWalletSigner(this);
  }
  getNetwork() {
    return this.entry.request('getNetwork');
  }
  runGet(address, abi, method) {
    return this.entry.request('runGet', {address, abi, method});
  }
  deploy(abi, imageBase64, options, constructorParams) {
    return this.entry.request('deploy', {abi, imageBase64, options, constructorParams});
  }
  waitDeploy(message, processingState) {
    return this.entry.request('waitDeploy', {message, processingState});
  }
}