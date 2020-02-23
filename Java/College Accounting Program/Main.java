package ca.nscc;
import javax.swing.JOptionPane;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Iterator;

public class Main {

    public static void main(String[] args) {
        // write your code here

        int choice;
        JOptionPane jop = new JOptionPane();


        DecimalFormat df = new DecimalFormat("0.00"); // It is used to convert the the number in 2 decimal places
        String[] options = {""};

        // Declare the variables
        String studentName="";
        String studentAddress="";
        String staffName="";
        String staffAddress="";

        String studentYearInput;
        String staffYearInput;

        // 2 Array to store the data
        ArrayList<Staff> staffArray = new ArrayList<Staff>();
        ArrayList<Student> studentArray= new ArrayList<Student>();

        do                                                          // It will stop asking input if click fininsh
        {
            choice = jop.showOptionDialog(null,
                    "Select student or staff",
                    "Accounting App",
                    JOptionPane.YES_NO_CANCEL_OPTION,
                    JOptionPane.QUESTION_MESSAGE,
                    null,
                    new String[]{"Student","Staff","Finish"},   // It will ask the user to choose a option
                    null);

            Boolean isStudentYearCorrect;
            Boolean isStudentNameCorrect;
            Boolean isStudentFeesCorrect;


            Boolean isName =true;
            Boolean isAddress =true;
            Boolean isInt = false;



            if(choice ==0)                                //If choose student it will ask name,address and year
            {
                int studentYear=0;
                do{
                    studentYearInput = jop.showInputDialog("Enter Student year(1-4)");
                   isInt = Person.verifyInteger(studentYearInput);

                   if(isInt) {
                       studentYear = Integer.parseInt(studentYearInput);
                       if (studentYear < 1 || studentYear > 4) {
                           JOptionPane.showMessageDialog(null,
                                   "Please input a number within range (1-4)",
                                   "ERROR!!!", JOptionPane.INFORMATION_MESSAGE);   //Pop up for invalid input.
                           isInt = false;
                       }
                   }
                }while(!isInt);


                while (isName)
                {
                    studentName= jop.showInputDialog("Enter Student name");
                    isName = Person.nameaddressVerify(studentName);     //Check user String input for validation.
                }
                while (isAddress)
                {
                studentAddress= jop.showInputDialog("Enter Student address");
                isAddress = Person.nameaddressVerify(studentAddress);     //Check user String input for validation.
                }

                Student student = new Student(studentName, studentAddress, studentYear);
                studentArray.add(student);

            }
            else if(choice == 1)                            //If choose Staff it will ask name,address and year
            {
            while (isName)
            {
                staffName =jop.showInputDialog("Enter staff name");
                isName = Person.nameaddressVerify(staffName);     //Check user String input for validation.
            }
            while (isAddress)
            {
                staffAddress =jop.showInputDialog("Enter staff address");
                isAddress = Person.nameaddressVerify(staffAddress);     //Check user String input for validation.
            }

                int staffYear=0;
                do{
                    staffYearInput = jop.showInputDialog("Year of Service");
                    isInt = Person.verifyInteger(staffYearInput);

                    if(isInt) {
                        staffYear = Integer.parseInt(staffYearInput);
                        if (staffYear < 1 || staffYear > 30) {
                            JOptionPane.showMessageDialog(null,
                                    "Please input a number within range (1-30)",
                                    "ERROR!!!", JOptionPane.INFORMATION_MESSAGE);   //Pop up for invalid input.
                            isInt = false;
                        }
                    }
                }while(!isInt);
                Staff staff = new Staff(staffName,staffAddress,staffYear);
                staffArray.add(staff);
            }

        }while(choice !=2);


        // Accounting calculation part
        int outgoing =0;
        int studentFee=0;
        String msg="";
        msg +="Students[Total:"+studentArray.size()+"]\n";
        for(int i=0;i<studentArray.size();i++)    // Loop used to display staff information
        {
            msg +=((i+1)+". "+studentArray.get(i).toString());

            studentFee= studentArray.get(i).fees();
            outgoing= outgoing +studentFee;
        }
        outgoing = outgoing /2;

        double staffPay=0;
        double incoming=0;

        msg +="\nStaff [Total:"+staffArray.size()+"]\n";

        for(int i=0;i<staffArray.size();i++) // Loop used to display staff information
        {
            msg +=((i+1)+". "+staffArray.get(i).toString());

            staffPay= staffArray.get(i).staffSalary();
            incoming= incoming +staffPay;
        }
        incoming = incoming /26;


        double total=incoming - outgoing;

        // Display the report
        msg += "\n\n\n\n\nResult\nOutgoing: $"+df.format(outgoing)+"\nIncoming: $"+df.format(incoming)+"\nTotal: $"+df.format(total);
        msg += "\n\n";
        JOptionPane.showMessageDialog(null, msg);


    }
}

