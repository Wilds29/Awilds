import java.util.ArrayList;

public class CafeUtil {

    // get streak goal
    /* 
    Cafe Java wants to implement a reward system for customers who always buy more drinks than they did the week before. 
    To calculate how many drinks they need after 10 weeks, write a method that sums together every consecutive integer from 1 to 10
    and returns the sum. In other words, add 1 + 2 + 3.. and so on up to 10 and return the result.
    */
    /*
    Ninja Bonus:  Add a parameter, numWeeks so that an admin can change the number from 10 to whatever they want.
    */

    public int getStreakGoal() {
        int sum = 0;
        for(int week = 1; week <= 10; week++) {
            sum += week;
        }
        return sum;
    }


    /* 
    double getOrderTotal(double[] prices)
    Given an array of item prices from an order, sum all of the prices in the array and return the total. 
    */

    public double getOrderTotal(double[] prices) {
        double total = 0;
        for(int i = 0; i < prices.length; i++) {
            total = total + prices[i];
        }
        return total;
    }



    // display coffee menu
    public void displayMenu(ArrayList<String> menuItems) {

        // to access an element in an ArrayList using an index
        for(int i= 0; i < menuItems.size(); i++) {
            System.out.printf("%s %s\n", i, menuItems.get(i));
        }
    }





    // addCustomer

    public void addCustomer(ArrayList<String> customerList) {
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();
        System.out.printf("Hello, %s!", userName);
        System.out.printf("There are %s people ahead of you.\n", customerList.size());
        customerList.add(userName);
        System.out.println(customerList);
    }

    // Ninja Bonuses





} // end of public 
