package team1.activelearning1.budget;

import java.util.Scanner;

import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

public class NextMonthBudget {

	public static void main(String[] args) {
		
		BudgetCreator creator = new BudgetCreator();
		Budget myBudget = null;
		double income = 0;
		DateTimeFormatter format = DateTimeFormat.forPattern("yyyy-MM-dd");
		
		Scanner userInput = new Scanner(System.in);
		System.out.println("Please enter your monthly net income\n");
		
		if (userInput.hasNextLine()) {
			income = Double.parseDouble(userInput.nextLine());
			myBudget = creator.CreateBudget(income);
			System.out.println();
			
			if (myBudget != null) {
				System.out.println("My budget of the next month:");
				System.out.println("Income: $" + income);
				System.out.println("Start date: " + format.print(myBudget.GetStart()));
				System.out.println("End date: " + format.print(myBudget.GetEnd()));
				System.out.println("Food budget: $" + Math.round(myBudget.GetFoodBudget()));
				System.out.println("Living budget: $" + Math.round(myBudget.GetLivingBudget()));
				System.out.println("Entertainment budget: $" + Math.round(myBudget.GetEntertainmentBudget()));
				System.out.println("Expected saving: $" + Math.round(myBudget.GetSaving()));
			}
			else {
				System.out.println("Wrong input!");
			}
		}
	}
}
