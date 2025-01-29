const StockPortfolio = require('./stockPortfolio');

test('A new portfolio is empty', () => {
	  const portfolio = new StockPortfolio();
	  expect(portfolio.getStocks()).toEqual({});
});


test('Portfolio should be empty initially', () => {
	  const portfolio = new StockPortfolio();
	  expect(portfolio.isEmpty()).toBe(true);
});

test('Adding shares updates the portfolio', () => {
	  const portfolio = new StockPortfolio();
	  portfolio.buy('AAPL', 10);
	  expect(portfolio.getStocks()).toEqual({ AAPL: 10 });
});

test('Selling shares updates the portfolio', () => {
	  const portfolio = new StockPortfolio();
	  portfolio.buy('AAPL', 10);
	  portfolio.sell('AAPL', 5);
	  expect(portfolio.getStocks()).toEqual({ AAPL: 5 });
});

test('Count unique stock symbols', () => {
	  const portfolio = new StockPortfolio();
	  portfolio.buy('AAPL', 10);
	  portfolio.buy('GOOG', 15);
	  expect(portfolio.countUniqueSymbols()).toBe(2);
});

test('Portfolio should not contain stocks with zero shares', () => {
	  const portfolio = new StockPortfolio();
	  portfolio.buy('AAPL', 10);
	  portfolio.sell('AAPL', 10);
	  expect(portfolio.getStocks()).toEqual({});
});

test('Get shares of a given stock symbol', () => {
	  const portfolio = new StockPortfolio();
	  portfolio.buy('AAPL', 10);
	  expect(portfolio.getShares('AAPL')).toBe(10);
	  expect(portfolio.getShares('TSLA')).toBe(0);
});

test('Selling more shares than owned should throw an error', () => {
	  const portfolio = new StockPortfolio();
	  portfolio.buy('AAPL', 5);
	  expect(() => portfolio.sell('AAPL', 10)).toThrow('Not possible to sell this number of shares.');
});

//Using the TDD approach to software development was interesting. As far as projects in the past, I have not utilized this approach. In doing so, I found the approach unqiue in the sense that I am doing the bare minimum at first, then implementing a better design later. Usually, I do my best to develop code with all the features in mind, and test after. I found that this method was easier given that there are actual goals in mind, rather than overexerting effort in the first coding approach with no clear goal.
