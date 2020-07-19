import React, { useEffect } from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import ListItem from './ListItem';
import DefaultTextBox from  './DefaultTextBox';
import InputArea from './InputArea';
import axios from 'axios';
import uuid from 'react-uuid';

function Lists(props){


    const [items, setItems] = React.useState([]);



    let randomColor = function(){
        return "#"+ Math.floor(Math.random()*16777215).toString(16);
    }



    function handleAdd(titleS, descS){
        console.log("area reached");
        let x = uuid();

        axios.post("/api/items", {
            title: titleS,
            description: descS,
            id: x
        });


        let newItem = < ListItem id={x} key={x} color={randomColor()} title={titleS} desc={descS} deleteClicked={handleDelete}/>;
        setItems(function(prev){
            return  [...prev, newItem]; 
        })


        axios.get("/api/items").then(function(res){
            axios.patch('/api/users',{

                  id:props.id,
                  list: res.data
              })
        })

    }

    function handleDelete(idz){
        axios({
            method: 'delete',
            url: '/api/items/delete',
            data: {
              id:idz
            }
          })
        setItems(function(prev)
        {
           return  prev.filter(function(element){
                return element.props.id !== idz;
            })
        })

        axios.get("/api/items").then(function(res){
            axios.patch('/api/users/deleteItem',{

                  id:props.id,
                  list: idz
              })
        })
    }

    useEffect(function(){
        console.log(props.id)
        axios.get("/api/users/initList", {params:{id:props.id}}).then(function(res){
            console.log(res.data[0].list);
            let temp1 = res.data[0].list;
            let temp2 = temp1.map(function(e){
                return < ListItem id={e.id} key={e.id} color={randomColor()} title={e.title} desc={e.description} deleteClicked={handleDelete}/>;
                

            })
            setItems(function(prev){
                return  [...prev, ...temp2]; 
            })
        })
}, []);


    return <div className="lists" >
    <InputArea formSubmit={handleAdd}/>
    <CSSTransitionGroup
        transitionName="note-transition"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {items}
    </CSSTransitionGroup>
    {items.length === 0 && <DefaultTextBox />}

    </div>;
}

export default Lists;
