package team1.cs5551.fs16.proxy_design.study;

import org.joda.time.DateTime;

public interface GetInvestmentDetails {
	public String GetInvestor();
	public String GetStock();
	public DateTime GetPurchaseDate();
	public double GetPurchasePrice();
}