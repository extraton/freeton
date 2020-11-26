export default class ContractDeployProcessing {
  constructor(message, processingState, signer) {
    this.message = message;
    this.processingState = processingState;
    this.signer = signer;
    this.isRun = false;
    this.txid = null;
  }

  async wait() {
    const provider = this.signer.getProvider();
    const txid = await provider.waitRun(this.message, this.processingState);
    this.isRun = true;
    this.txid = txid;
  }
}
