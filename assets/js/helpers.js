const saveMnemonic = (mnemonic) => {
  localStorage.setItem("mnemonic", mnemonic);
};

const getMnemonic = () => {
  return localStorage.getItem("mnemonic");
};

const saveEncryptedWallet = (wallet) => {
  localStorage.setItem("encWallet", wallet);
};

const getEncryptedWallet = () => {
  return localStorage.getItem("encWallet");
};

const savePrivateKey = (privateKey) => {
  localStorage.setItem("privateKey", privateKey);
};

const getPrivatekey = () => {
  return localStorage.getItem("privateKey");
};

const saveAddress = (address) => {
  localStorage.setItem("address", address);
};

const getAddress = () => {
  return localStorage.getItem("address");
};

const saveCurrentNetwork = (network) => {
  localStorage.setItem("currentNetwork", network);
};

const getCurrentNetwork = () => {
  return localStorage.getItem("currentNetwork");
};

const saveSignMessage = (inputMsg) => {
  localStorage.setItem("signMessage", inputMsg);
};

const getSignMessage = () => {
  return localStorage.getItem("signMessage");
};

const resetSendForm = () => {
  $("#inputSendToAddress").val("");
  $("#inputAmount").val("");
};

const resetPasscodeFields = () => {
  $("#inputPasscode").val("");
  $("#inputConfirmPasscode").val("");
  $("#inputVerifyPasscode").val("");
  $("#inputMnemonic").val("");
};

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
  return true;
}

const networks = [
  {
    name: "rumsan",
    url: "http://172.110.7.136:8548",
    display: "Rumsan Network",
    default: true,
  },
  {
    name: "mainnet",
    url: "https://mainnet.infura.io/v3/ae22018377b14a61983be979df457b20",
    display: "Mainnet (Ethereum)",
  },
  {
    name: "rinkeby",
    url: "https://rinkeby.infura.io/v3/ae22018377b14a61983be979df457b20",
    display: "Rinkeby",
  },
  {
    name: "binance",
    url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    display: "Binance Testnet",
  },
  {
    name: "polygon",
    url: "https://rpc-mumbai.maticvigil.com/",
    display: "Polygon Mumbai",
  }
];

const getDefaultNetwork = () => {
  return networks.find((d) => d.default);
};

const getNetworkByName = (name) => {
  if (!name) return getDefaultNetwork();
  return networks.find((d) => d.name === name);
};
