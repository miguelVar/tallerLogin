/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package login.logic;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author miguel
 */
public class ManagementUser {
    
    public DaoUser daoUser;

    public ManagementUser() {
        daoUser=new DaoUser();
        
    }
    public String queryUser() throws SQLException{
        ResultSet rs=daoUser.queryUser();
        String dat="miguel";
        while(rs.next()){
           // dat=rs.getString(1);
        }
        return dat;
    }
    
    
    
}
