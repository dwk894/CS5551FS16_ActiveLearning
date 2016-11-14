package team1.cs5551.fs16.proxy_design.study;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;

public class InvestmentViewer {
	public static void main(String[] args) {
		// Input
		User a_user = new User("Team 1", "CS5551", "an_email@example.com");
		Investment an_investment = new Investment(a_user, DateTime.parse("2012-04-15"), "GOOG", 22.66);
		
		GetInvestmentDetails realInvestment = new Investment(an_investment);
		GetInvestmentDetails proxy = new InvestmentProxy(an_investment);
		
		// Output
		System.out.println("Investment Details:");
		System.out.println("User: " + proxy.GetInvestor());
		System.out.println("Stock: " + proxy.GetStock());
		System.out.println("Purchase Date: " + DateTimeFormat.forPattern("MM/dd/yy").print(proxy.GetPurchaseDate()));
		System.out.println("Purchased Price per Share: $" + proxy.GetPurchasePrice());
	}
}