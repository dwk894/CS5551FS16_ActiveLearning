package team1.activelearning1.budget;

import org.joda.time.DateTime;

public class IntermediateBudget extends Budget {

	public IntermediateBudget(double income, DateTime start, DateTime end) {
		SetIncome(income);
		SetStart(start);
		SetEnd(end);

		// Calculate food, living, and entertainment budgets.
		double food = (1.0/3) * income;
		double living = (1.0/4) * income;
		double entertainment = (1.0/4) * income;

		SetFoodBudget(food);
		SetLivingBudget(living);
		SetEntertainmentBudget(entertainment);
		SetSaving();
	}
}
