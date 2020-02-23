package ca.nscc;

import java.text.DecimalFormat;

public class Staff extends Person {
    DecimalFormat df = new DecimalFormat("0.00");       // 2 decimale place

    private int yearOfService;
    public Staff(String name, String address,int yearOfService)
    {
        super(name,address);
        this.yearOfService=yearOfService;
    }

    public int getYearOfService() {
        return yearOfService;
    }

    public void setYearOfService(int yearOfService) {
        this.yearOfService = yearOfService;
    }

    public int staffSalary() {           // this will calculate the staff salary
        int regularSalary = 50000;
        int increaseSalary = 500 *  yearOfService;
        int totalSalary = regularSalary + increaseSalary;
        return totalSalary;

    }
    @Override
    public String toString(){           //Return a string containing data about a student.
        return "Name: "+getName()+", Address: "+getAddress()+", Year: "
                +getYearOfService()+", Fee: "+df.format(staffSalary())+"\n";
    }




}
