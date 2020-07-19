import React, { useEffect } from 'react';
import Lists from './Lists';
import axios from 'axios';
import uuid from 'react-uuid';

//lists all the users and makes each user clickable
//clicking the user will show the list of items under that user

function ComprehensiveList(){
    
    const [usersArray, setUsersArray] = React.useState([]);
    const [usersButtonsArray, setUsersButtonsArray] = React.useState([]);
    const [listDisplayed, setListDisplayed] = React.useState();
    const [visible, setVisible] = React.useState("visible");


//on initialization it finds all the users from the database and makes it interactable, clicking on your user to find 
// your items displayed under them

    useEffect(function(){
        axios.get("/api/users").then(function(res){
            let initUsersData = [];
            let initUsersButtons = [];
            for(let i = 0; i < res.data.length; i++){
                initUsersData.push(< Lists id={res.data[i].id} key={uuid()}/>);
                initUsersButtons.push(<button key={uuid()} id={res.data[i].id} className="dropdown-item" type="button" name={res.data[i].name}></button>);

            }


            setUsersArray(function(prev){
                return  [...prev, ...initUsersData]; 
            })

            setUsersButtonsArray(function(prev){
                return [...prev, ...initUsersButtons];

            })

            setListDisplayed(usersArray[0]);
             


        })
}, []);

function handleClick(event){
    let temp = event.target.id;
    setListDisplayed(function(){
        for(let i =0; i < usersArray.length; i++){
            if(usersArray[i].props.id === temp){
                console.log("success");
                return usersArray[i];
            }
        }
    })

    setVisible("hidden");
}

function setInit(){
    let temp = usersButtonsArray.map(function(e){
        return <button key={e.props.id} id={e.props.id} className="dropdown-item" type="button" onClick={handleClick}>{e.props.name}</button>
    });

    setUsersButtonsArray(temp);
}

    return <div className="comprehensive-list">
            <div className="dropdown">
                <button  onClick={setInit} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Users
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {usersButtonsArray}
                </div>
            </div>
            {listDisplayed}
            <div className="before-user-selected" style={{visibility: visible}}>
                <h1>Click on your user to get started!</h1>
                <img  src={process.env.PUBLIC_URL + "/images/mother-child.jpg"}  className="init-img"/>

            </div>
        </div>;
}


export default ComprehensiveList;