package team1.activelearning1.budget;

import org.joda.time.DateTime;

public abstract class Budget {
	
	// Generic data fields	
	private double monthlyIncome;
	private DateTime startDate;
	private DateTime endDate;
	
	// Data fields that may vary for different budgets
	private double foodBudget;
	private double livingBudget;
	private double entertainmentBudget;
	private double saving;
	
	// Generic setters and getters
	public void SetIncome(double income) {
		monthlyIncome = income;
	}
	
	public double GetIncome() {
		return monthlyIncome;
	}
	
	public void SetStart(DateTime start) {
		startDate = start;
	}
	
	public DateTime GetStart() {
		return startDate;
	}
	
	public void SetEnd(DateTime end) {
		endDate = end;
	}
	
	public DateTime GetEnd() {
		return endDate;
	}
	
	public double GetFoodBudget() {
		return foodBudget;
	}
	
	public double GetLivingBudget() {
		return livingBudget;
	}
	
	public double GetEntertainmentBudget() {
		return entertainmentBudget;
	}
	
	public void SetSaving() {
		saving = monthlyIncome - foodBudget - livingBudget - entertainmentBudget;
	}
	
	public double GetSaving() {
		return saving;
	}
	
	public void SetFoodBudget(double food) {
		foodBudget = food;
	}
	
	public void SetLivingBudget(double living) {
		livingBudget = living;
	}
	
	public void SetEntertainmentBudget(double entertainment) {
		entertainmentBudget = entertainment;
	}
}
