package team1.activelearning1.budget;

import org.joda.time.DateTime;
import org.joda.time.LocalDate;

public class BudgetCreator {

	public Budget CreateBudget(double income) {

		// Get the next month.
		LocalDate localDate = new LocalDate();
		DateTime start = localDate.plusMonths(1).withDayOfMonth(1).toDateTimeAtStartOfDay();
		DateTime end = localDate.plusMonths(1).withDayOfMonth(localDate.plusMonths(1).dayOfMonth().getMaximumValue()).toDateTimeAtStartOfDay();

		// Return different budgets based on the income.
		if (income > 800 && income < 1200) {
			return new FrugalBudget(income, start, end);
		}
		else if (income >= 1200 && income < 1800) {
			return new IntermediateBudget(income, start, end);
		}
		else if (income >= 1800) {
			return new AmusementBudget(income, start, end);
		}
		else {
			return null;
		}
	}
}
