import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import './App.css';

function User_Details() {
  const history = useHistory();
  const [user, setUser] = useState([]);
  useEffect(() => {
    var userid;
    if(history.location.data === undefined)
    {
      userid = localStorage.getItem('userobj');
      console.log(JSON.parse(userid));
      setUser(JSON.parse(userid))
    }
    else
    {
      localStorage.setItem('userobj', JSON.stringify(history.location.data));
      setUser(history.location.data)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    
<div className="container">
<div className="panel-body inf-content">

    <div className="row">
        <div className="col-md-4">
            <img  className="img-circle img-thumbnail isTooltip" src={user.avatar}  alt=""/>  
           
        </div>
        <div className="col-md-6">
            <strong>Information</strong><br />
            <div className="table-responsive">
            <table className="table table-condensed table-responsive table-user-information">
                <tbody>
                    <tr>        
                        <td>
                            <strong>
                                
                                Name                                                
                            </strong>
                        </td>
                        <td className="text-primary">
                            {user.first_name}  {user.last_name}    
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                
                                Email                                                
                            </strong>
                        </td>
                        <td className="text-primary">
                            {user.email}   
                        </td>
                    </tr>
                    
                   

                                                 
                </tbody>
            </table>
            </div>
        
    </div>
</div>
</div>      
<button style={{ marginTop:25}} onClick={() => history.goBack()} type="button" className="btn btn-primary pull-right">Back</button>
</div>  
        
  );
}

export default User_Details;
