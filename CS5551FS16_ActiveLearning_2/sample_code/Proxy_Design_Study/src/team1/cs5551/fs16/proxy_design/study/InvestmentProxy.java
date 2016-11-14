package team1.cs5551.fs16.proxy_design.study;

import org.joda.time.DateTime;

public class InvestmentProxy implements GetInvestmentDetails{
	
	private Investment realInvestment;
	
	public InvestmentProxy(Investment realInv) {
		realInvestment = realInv;
	}

	@Override
	public String GetInvestor() {
		return realInvestment.GetInvestor();
	}

	@Override
	public String GetStock() {
		return realInvestment.GetStock();
	}

	@Override
	public DateTime GetPurchaseDate() {
		return realInvestment.GetPurchaseDate();
	}

	@Override
	public double GetPurchasePrice() {
		return realInvestment.GetPurchasePrice();
	}
}