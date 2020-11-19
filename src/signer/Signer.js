import Wallet from "../wallet/Wallet";

export default class Signer {
  constructor(provider, network, address) {
    this.provider = provider;
    this.network = network;
    this.wallet = new Wallet(this, address);
  }

  getProvider() {
    return this.provider;
  }

  getWallet() {
    return this.wallet;
  }

  getNetwork() {
    return this.network;
  }
}
