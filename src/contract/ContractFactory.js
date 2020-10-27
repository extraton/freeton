import {Contract} from "./index";
import ContractDeployProcessing from "./ContractDeployProcessing";

export default class ContractFactory {
  constructor(abi, imageBase64, signer, options) {
    this.abi = abi;
    this.imageBase64 = imageBase64;
    this.signer = signer;
    this.options = options;
  }

  async deploy(constructorParams = {}) {
    const provider = this.signer.getProvider();
    const {message, processingState} = await provider.deploy(this.abi, this.imageBase64, this.options, constructorParams);
    const contract = new Contract(message.address, this.abi, this.signer);
    const deployProcessing = new ContractDeployProcessing(message, processingState, this.signer);
    contract.setDeployProcessing(deployProcessing);
    return contract;
  }
}