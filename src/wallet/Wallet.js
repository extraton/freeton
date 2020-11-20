export default class Wallet {
  constructor(signer, address) {
    this.signer = signer;
    this.address = address;
  }

  getSigner() {
    return this.signer;
  }

  getAddress() {
    return this.address;
  }

  transfer(address, amount, bounce = true, payload = null) {
    const signer = this.getSigner();
    const provider = signer.getProvider();
    const network = signer.getNetwork();
    return provider.transfer(address, amount, network, bounce, payload);
  }
}
