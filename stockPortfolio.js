class StockPortfolio {
	  constructor() {
		      this.stocks = {}; 
		    }

	  getStocks() {
		      return this.stocks;
		    }

	  isEmpty() {
		      return Object.keys(this.stocks).length === 0;
		    }

	  buy(symbol, shares) {
		      this.stocks[symbol] = (this.stocks[symbol] || 0) + shares;
		    }

	  sell(symbol, shares) {
		      if (!this.stocks[symbol] || this.stocks[symbol] < shares) {
			            throw new Error('Not possible to sell this number of shares.');
			          }
		      this.stocks[symbol] -= shares;
		      if (this.stocks[symbol] === 0) delete this.stocks[symbol];
		    }

	  countUniqueSymbols() {
		      return Object.keys(this.stocks).length;
		    }

	  getShares(symbol) {
		      return this.stocks[symbol] || 0;
		    }
}

module.exports = StockPortfolio;

