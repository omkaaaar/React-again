import React from "react";

const Profile = ({users}) => { 
  return (
    <>
      <h1>Hi this the example of Props</h1>
      <br />
      <div>
        {
          users.map((user,index)=>(
            <div key={index}>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Address: {user.address}</p>
              <hr />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Profile;
