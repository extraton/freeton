export default class Signer {
  constructor(provider) {
    this.provider = provider;
  }

  getProvider() {
    return this.provider;
  }
}