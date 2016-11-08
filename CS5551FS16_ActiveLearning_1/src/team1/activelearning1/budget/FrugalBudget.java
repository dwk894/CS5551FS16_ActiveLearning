package team1.activelearning1.budget;

import org.joda.time.DateTime;

public class FrugalBudget extends Budget {
	
	public FrugalBudget(double income, DateTime start, DateTime end) {
		
		SetIncome(income);
		SetStart(start);
		SetEnd(end);

		// Calculate food, living, and entertainment budgets.
		double food = (1.0/2) * income;
		double living = (1.0/3) * income;
		double entertainment = (1.0/6) * income;

		SetFoodBudget(food);
		SetLivingBudget(living);
		SetEntertainmentBudget(entertainment);
		SetSaving();
	}
}
