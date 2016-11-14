package team1.cs5551.fs16.proxy_design.study;

import org.joda.time.DateTime;

public class Investment implements GetInvestmentDetails {
	private User investor;
	private DateTime purchaseDate;
	private String stockSymbol; // All uppercase letters
	private double purchaseUnitPrice; // Price per share (in USD)
	
	// Proxy does not allow others to see the total investment amount by hiding the stockShares.
	private int stockShares;
	
	public Investment(User theUser, DateTime date, String symbol, double unitPrice) {
		investor = theUser;
		purchaseDate = date;
		stockSymbol = symbol;
		purchaseUnitPrice = unitPrice;
	}
	
	public Investment(Investment other) {
		this.investor = other.investor;
		this.purchaseDate = other.purchaseDate;
		this.stockSymbol = other.stockSymbol;
		this.purchaseUnitPrice = other.purchaseUnitPrice;
		this.stockShares = other.stockShares;
	}
	
	public User GetFullUser() { return investor; }
	public int getShares() { return stockShares; }

	@Override
	public String GetInvestor() {
		return investor.getUserName();
	}

	@Override
	public String GetStock() {
		return stockSymbol;
	}

	@Override
	public DateTime GetPurchaseDate() {
		return purchaseDate;
	}

	@Override
	public double GetPurchasePrice() {
		return purchaseUnitPrice;
	}
}