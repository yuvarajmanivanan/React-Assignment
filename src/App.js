import React, { useState, useEffect } from 'react';
import request from "superagent";
import { useHistory } from 'react-router-dom'
import './App.css';

function App() {
  const history = useHistory()
  const [user, setUser] = useState([]);
  useEffect(() => {
    request
   .get('https://reqres.in/api/users?per_page=12')
   .then(res => {
      // res.body, res.headers, res.status
      console.log(res.body, res.headers, res.status)
      setUser(res.body.data)
   })
   .catch(err => {
      // err.message, err.response
   });
  },[]);

  function handleAgeChange(e) {
    console.log(e)
    var data = user[user.map(function (item1) {return item1.id;}).indexOf(e)];
    console.log(data)
    history.push({
      pathname: '/User_Detail',
      data: data // your data array of objects
    })
  }

  return (
<div className="container">
<div className="row">
	<div className="col-lg-12">
		<div className="main-box clearfix">
			<div className="table-responsive">
				<table className="table user-list">
					<thead>
						<tr>
							<th>User</th>
							<th>Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						
            {user.map(d => (
              <tr key={d.id}>
              <td>
              <img src={d.avatar} alt="" />
            <span className="user-link">{d.first_name} {d.last_name}</span>
            </td>
            <td>
              <span>{d.email}</span>
            </td>
            <td>
              
              <button type="button" onClick={() => handleAgeChange(d.id)} className="btn btn-primary">View</button>
              
            </td>
            
						</tr>
					
            ))}
								
					</tbody>
				</table>
			</div>
		
		</div>
	</div>
</div>
</div>
  );
}

export default App;
