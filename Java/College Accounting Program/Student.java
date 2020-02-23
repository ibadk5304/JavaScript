package ca.nscc;

import java.text.DecimalFormat;

public class Student extends Person {
   private int yearOfStudy;
    DecimalFormat df = new DecimalFormat("0.00");
    public Student(String name,String address, int yearOfStudy) {
        super(name,address);
        this.yearOfStudy = yearOfStudy;
    }

    public int fees() {        //  //Method to get tution fee of a student.
        int regularFees = 3000;
        int increaseFees = 100 * (yearOfStudy-1);

        int totalFees = regularFees + increaseFees;
        return totalFees;

    }

    public int getYearOfStudy() {
        return yearOfStudy;
    }

    public void setYearOfStudy(int yearOfStudy) {
        this.yearOfStudy = yearOfStudy;
    }

    @Override                           //Method override.
    public String toString(){           //Return a string containing data about a student.
        return "Name: "+getName()+", Address: "+getAddress()+", Year: "
                +getYearOfStudy()+", Fee: "+df.format(fees())+"\n";
    }
}
