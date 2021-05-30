import { mapGetters } from 'vuex';
import Web3 from 'web3';

export default {
  computed: {
    ...mapGetters('drizzle', ['drizzleInstance']),
    ...mapGetters('contracts', ['getContractData']),
  },
  data() {
    return {
      escrowAddress: '0x5011D48D4265b6fB8228600a111b2fAa1fDA3139',
      tokenIdMatic: '0x498E0A753840075c4925442D4d8863eEe49D61E2',
      tokenIdEth: '0x5011d48d4265b6fb8228600a111b2faa1fda3139',
      wrapEthAddress: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      ethTotalToken: 14000000,
      maticTotalToken: 16000000,
      ethPercentPurchased: 0,
      maticPercentPurchased: 0
    }
  },
  methods: {
    // getEthPercentage(currentBalance) {
    //   let getBalance = this.getEthBalance(currentBalance)
    //   let percentPurchased = (100 * getBalance) / this.ethTotalToken;

    //   return percentPurchased;
    // },
    // getMaticPercentage(currentBalance) {
    //   let getBalance = this.getMaticBalance(currentBalance)
    //   let percentPurchased = (100 * getBalance) / this.maticTotalToken;

    //   return percentPurchased;
    // },
    getEthBalance(currentBalance) {
      let balanceOf = this.ethTotalToken;
      let currBalance = this.getSerial(currentBalance)
      let balance = balanceOf - currBalance
      this.ethPercentPurchased = (100 * balance) / this.ethTotalToken;

      return balance;
    },
    getMaticBalance(currentBalance) {
      let balanceOf = this.maticTotalToken
      let currBalance = this.getSerial(currentBalance)
      let balance = balanceOf - currBalance
      console.log(balance)
      this.maticPercentPurchased = (100 * balance) / this.maticTotalToken;

      return balance;
    },
    addAnimate() {
      let i, percentage
      percentage = document.getElementsByClassName('percentage_off');

      for (i = 0; i < percentage.length; i++) {
        percentage[i].classList.add('animate');
      }

      setTimeout(function () {
        for (i = 0; i < percentage.length; i++) {
          percentage[i].classList.remove('animate');
        }
      }, 4000);
    },
    getMaticAmount(numberofBundle, price, factor) {
      let wei = factor * price
      let amount = wei * numberofBundle;
      let finalAmount = amount / 1000000000000000000;
      return finalAmount;
    },
    getSerial(amount) {
      let finalAmount = amount / 1000000000000000000;
      return finalAmount;
    },
    approveTrans() {
      let amount = 10000000000000000000;
      let amt = amount.toString();

      this.drizzleInstance.contracts['WrapEthErc20'].methods[
        'approve'
      ].cacheSend(this.escrowAddress, amt);
    },
    toWei(eth) {
      let weiValue = Web3.utils.toWei(eth, 'ether');
      return weiValue;
    },
    buyEthSmallBundle(numberofBundle, smallPrice) {
      let toWeiBundle = smallPrice * numberofBundle;
      console.log(toWeiBundle);
      this.drizzleInstance.contracts['SolidEscrow'].methods[
        'buySmallBundle'
      ].cacheSend(this.tokenIdEth, {
        value: toWeiBundle,
      });
    },
    buyEthBigBundle(numberofBundle, bigPrice) {
      let toWeiBundle = bigPrice * numberofBundle;
      console.log(toWeiBundle);
      this.drizzleInstance.contracts['SolidEscrow'].methods[
        'buyBigBundle'
      ].cacheSend(this.tokenIdEth, {
        value: toWeiBundle,
      });
    },

    // wrap eth bundle functions
    async buyWrapEthSmallBundle(numberofBundle, smallPrice) {
      let amount = smallPrice * numberofBundle;
      let finalAmount = amount.toString();

      console.log(finalAmount);

      await this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buySmallBundleEth'
      ].cacheSend(this.tokenIdMatic, this.wrapEthAddress, finalAmount);
    },

    // wrap eth big bundle
    buyWrapEthBigBundle(numberofBundle, bigPrice) {
      let amount = bigPrice * numberofBundle;
      let finalAmount = amount.toString();

      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buyBigBundleEth'
      ].cacheSend(this.tokenIdMatic, this.wrapEthAddress, finalAmount);
    },

    // matic bundles eth
    buyMaticBigBundle(numberofBundle, bigPrice, factor) {
      let wei = factor * bigPrice
      let amount = wei * numberofBundle;
      let finalAmount = amount.toString();

      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buyBigBundleMatic'
      ].cacheSend(this.tokenIdMatic, {
        value: finalAmount,
      });
    },
    buyMaticSmallBundle(numberofBundle, smallPrice, factor) {
      let wei = factor * smallPrice
      let amount = wei * numberofBundle;
      let finalAmount = amount.toString();

      this.drizzleInstance.contracts['MaticEscrow'].methods[
        'buySmallBundleMatic'
      ].cacheSend(this.tokenIdMatic, {
        value: finalAmount,
      });
    },
    checkNetwork(netId) {
      let id = parseInt(netId);
      let networks = [1, 2, 3, 4, 42, 61, 62, 137, 80001];
      if (networks.includes(id)) {
        return true;
      } else {
        // this.errorNotify('top-center', 'danger')
        return false
      }
    },
    getNetworkName(netId) {
      let id = parseInt(netId);
      let netName = "Wrong Network"
      switch (id) {
        case 1:
          netName = "Mainnet"
          break;
        case 3:
          netName = "Ropsten"
          break;
        case 4:
          netName = "Rinkeby"
          break;
        case 42:
          netName = "Kovan"
          break;
        case 137:
          netName = "Matic-Mainnet"
          break;
        case 80001:
          netName = "Mumbai-Testnet"
          break;
        case 61:
          netName = "ETH Classic Mainnet"
          break;
        case 62:
          netName = "ETH Classic Testnet"
          break;
        case 2:
          netName = "ETH Classic Testnet"
          break;
      }
      return netName;
    },
    copyToClip(text) {
      let textArea = document.createElement("textarea");
      textArea.value = text;

      textArea.select();
      textArea.setSelectionRange(0, 99999); /* For mobile devices */
      document.execCommand("copy");

      alert("Copied the text: " + text);
    },
    openNotification(position = null, color, title, text) {
      this.$vs.notification({
        progress: 'auto',
        color,
        position,
        title,
        text,
      });
    },
    connectedNotify(position = null, color) {
      this.$vs.notification({
        progress: 'auto',
        color,
        position,
        title: 'Already Connected.',
        text: `You already connected to a Matic Network`,
      });
    },
    errorNotify(position = null, color) {
      this.$vs.notification({
        color,
        position,
        title: 'Wrong Network.',
        text: `Choose an appropriate network to connect`,
      });
    },
  }
}