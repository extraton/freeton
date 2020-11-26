import ExtensionWalletSigner from "../signer/ExtensionWalletSigner";

export default class ExtensionProvider {
  constructor(entry) {
    this.entry = entry;
  }

  async getSigner() {
    const address = await this.entry.request('getAddress');
    const network = await this.getNetwork();
    return new ExtensionWalletSigner(this, network, address);
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

  waitRun(message, processingState) {
    return this.entry.request('waitRun', {message, processingState});
  }

  transfer(address, amount, network, bounce, payload) {
    return this.entry.request('transfer', {address, amount, network, bounce, payload});
  }
}
