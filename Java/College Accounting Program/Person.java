package ca.nscc;

import javax.swing.*;
import java.lang.reflect.Array;

public abstract class Person {

    private String name;
    private String address;

    public Person(String name,String address) {
        this.name=name;
        this.address=address;
    }

    public abstract String toString();      //Abstract method.

    public String getAddress() {
        return address;
    }

    public String getName() {
        return name;
    }

    public static boolean verifyInteger(String checkYear)  // this function will check the input is integrer or not, if not it will show the invalid message
    {
        try{
            int year =  Integer.parseInt(checkYear);
            return true;
        }catch (Exception e){
            JOptionPane.showMessageDialog(null, "Please input a integer number",
                    "ERROR!!!", JOptionPane.INFORMATION_MESSAGE);
            return false;
        }
    }

    public static boolean nameaddressVerify(String NameorAddress){      //Function to check user input validity
        //for name and address. Empty String not acceptable.
        boolean checkString=true;
        String[] nameArray=NameorAddress.split("");
        if (NameorAddress.equals("")) {
            checkString= true;
        }else if (nameArray.length>0){
            for (int k=0;k<nameArray.length;k++){
                if(Array.get(nameArray,k).equals(" ")){
                    checkString= true;
                }
                else{
                    checkString=false;
                    break;
                }
            }
        }
        if(checkString==true){
            JOptionPane.showMessageDialog(null,
                    "No input given.\nPlease Give a valid input",
                    "ERROR!!!", JOptionPane.INFORMATION_MESSAGE);
        }
        return checkString;
    }



}
