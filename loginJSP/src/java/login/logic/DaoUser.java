/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package login.logic;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import login.persistence.ConnectBD;

/**
 *
 * @author miguel
 */
public class DaoUser {
    
    private ConnectBD connectBD;

    public DaoUser() {
        
        connectBD=new ConnectBD();
    }
    
    public ResultSet queryUser() throws SQLException{
        Statement st=connectBD.getConnection().createStatement();
        ResultSet rs=st.executeQuery("Select *from user;");
        return rs;
    }
    
    
}
