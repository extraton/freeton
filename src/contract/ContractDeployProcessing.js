export default class ContractDeployProcessing {
  constructor(message, processingState, signer) {
    this.message = message;
    this.processingState = processingState;
    this.signer = signer;
    this.isDeployed = false;
    this.txid = null;
  }

  async wait() {
    const provider = this.signer.getProvider();
    const txid = await provider.waitDeploy(this.message, this.processingState);
    this.isDeployed = true;
    this.txid = txid;
  }
}