import {Contract} from "./index.js";
import ContractDeployProcessing from "./ContractDeployProcessing.js";

export default class ContractBuilder {
  constructor(signer, abi, imageBase64) {
    this.signer = signer;
    this.abi = abi;
    this.imageBase64 = imageBase64;
    this.options = {initParams: {}};
  }

  setInitialAmount(amount) {
    this.options.initAmount = amount;
  }

  setInitialParams(params) {
    this.options.initParams = params;
  }

  async deploy(constructorParams = {}) {
    const provider = this.signer.getProvider();
    const {message, processingState} = await provider.deploy(this.abi, this.imageBase64, this.options, constructorParams);
    const contract = new Contract(this.signer, this.abi, message.address);
    const deployProcessing = new ContractDeployProcessing(message, processingState, this.signer);
    contract.setDeployProcessing(deployProcessing);
    return contract;
  }
}
