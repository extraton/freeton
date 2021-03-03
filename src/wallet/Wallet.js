import ContractMessageProcessing from "../contract/ContractMessageProcessing.js";

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

  async transfer(address, amount, bounce = true, payload = null) {
    const signer = this.getSigner();
    const provider = signer.getProvider();
    const network = signer.getNetwork();
    const {message, processingState} = await provider.transfer(this.address, address, amount, network, bounce, payload);
    return new ContractMessageProcessing(message, processingState, signer);
  }

  async confirmTransaction(txid) {
    const signer = this.getSigner();
    const provider = signer.getProvider();
    const network = signer.getNetwork();
    const {message, processingState} = await provider.confirmTransaction(this.address, txid, network);
    return new ContractMessageProcessing(message, processingState, signer);
  }
}
