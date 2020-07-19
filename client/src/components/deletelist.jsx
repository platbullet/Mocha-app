import React from 'react';
import axios from 'axios';

//deleting a user from the database
function DeleteList(){

    const [userValue, setUserValue] = React.useState("");
    const [visible, setVisible] = React.useState("hidden");

    //checking if the user to be deleted does in fact exist and if not, pops an alert that it doesn't exist. If it does, 
    // it will delete the user from the database
    function handleSubmit(event){
        if(userValue!= ""){
            console.log("if worked")
            event.preventDefault();
            axios({
                method: 'delete',
                url: '/api/users/delete',
                data: {
                  name: userValue
                }
              }).then(function(res){
                if(res.data === "there was an error"){
                    alert("User does not exist!")
                }
                else{
                    setVisible("visible");
                }
              });
        }
        

    }

    function handleUserChange(event){
        let temp = event.target.value;
        setUserValue(temp);
    }


    return <form onSubmit={handleSubmit}>
    <div className="input-div">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                    <span className="input-group-text task-title">Delete User</span>
            </div>
                    <input onChange={handleUserChange} value={userValue} type="text" className="form-control" placeholder="Type here" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <button type="submit" className="btn btn-danger input-submit" name="delete-user" >Delete</button>
    </div>
    <div className="successful-submit" style={{visibility: visible}}>
        <div>
            <h1> User Change Successful!</h1>
        </div>
    </div>
    </form>
}

export default DeleteList;