import Signer from "../signer/Signer";

export default class Contract {
  constructor(signerOrProvider, abi, address) {
    this.address = address;
    this.deployProcessing = null;
    this.functions = {};
    const isSigner = signerOrProvider instanceof Signer;
    const provider = isSigner ? signerOrProvider.getProvider() : signerOrProvider;

    for (const func of abi.functions) {
      if (func.name === 'constructor') {
        continue;
      }
      this.functions[func.name] = {};
      this.functions[func.name].runGet = (params = {}) => provider.runGet(address, abi, func.name, params);
      if (isSigner) {
        this.functions[func.name].run = (params = {}) => provider.run(address, abi, func.name, params);
      }
    }
  }

  setDeployProcessing(deployProcessing) {
    this.deployProcessing = deployProcessing;
  }

  getDeployProcessing() {
    return this.deployProcessing;
  }
}