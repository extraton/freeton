import ContractMessageProcessing from "../contract/ContractMessageProcessing";

export default class Token {
  constructor(wallet, type, name, symbol, balance, decimals, rootAddress, data, isActive, walletAddress = null) {
    this.wallet = wallet;
    this.type = type;
    this.name = name;
    this.symbol = symbol;
    this.balance = balance;
    this.decimals = decimals;
    this.rootAddress = rootAddress;
    this.data = data;
    this.isActive = isActive;
    this.walletAddress = walletAddress;
  }

  async transfer(address, amount) {
    const signer = this.wallet.getSigner();
    const provider = signer.getProvider();
    const network = signer.getNetwork();
    const {
      message,
      shardBlockId,
      abi
    } = await provider.transferToken(this.wallet.address, network, this.rootAddress, address, amount);
    return new ContractMessageProcessing(message, shardBlockId, signer, abi);
  }
}
