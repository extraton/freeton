import Signer from "../signer/Signer";

export default class ExtensionProvider {
  constructor(address, abi, signerOrProvider) {
    this.address = address;
    this.abi = abi;
    this.signerOrProvider = signerOrProvider;
    this.deployProcessing = null;
    this.functions = {};
    const provider = signerOrProvider instanceof Signer ? signerOrProvider.getProvider() : signerOrProvider;

    for (const func of abi.functions) {
      if (func.name === constructor) {
        continue;
      }
      this.functions[func.name] = () => provider.runGet(address, abi, func.name);
    }
  }

  setDeployProcessing(deployProcessing) {
    this.deployProcessing = deployProcessing;
  }

  getDeployProcessing() {
    return this.deployProcessing;
  }
}