export default class ExtensionProvider {
  constructor(contract, provider) {
    // this.contract = contract;
    // this.provider = provider;
    for (const func of contract.abi.functions) {
      if (func.name === constructor) {
        continue;
      }
      this[func.name] = () => ({
        get: () => provider.runGet(contract, func.name),
      });
    }
  }
}