import React,{Component} from "react";
import {connect} from "react-redux";
import  * as actions from "./actions/actions";
import './App.css';
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/form";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

  

class App extends React.Component{

constructor(){
    super();
    this.state = {
        status : false,
        updatePopup : false,
        insertPopup : false
    };
};



 componentDidMount(){
    this.props.getProducts();
  };

  showPopup = (msg)=>{
    if(msg === "update"){
        this.setState({
            status : true,
            updatePopup:true,
            insertPopup:false
        })
    }

    if(msg === "insert"){
        this.setState({
            status : true,
            insertPopup:true,
            updatePopup:false
        })
    };
    
    
};

deleteProduct = (id)=>{
    this.props.deleteProduct(id);
};

  closePopup = ()=>{
    this.setState({
        status : false,
        insertPopup : false,
        updatePopup : false
    })
};

  save = ()=>{
    if(this.state.updatePopup){
      
      this.props.updateProduct({"id":this.refs.p_id.value,
                              "firstName":this.refs.c_firstName.value,
                              "lastName":this.refs.c_lastName.value,
                              "email":this.refs.c_email.value});
    }else if(this.state.insertPopup){
      this.props.addProduct({//"id":this.refs.id.value,
                        	  "firstName":this.refs.c_firstName.value,
                        	  "lastName":this.refs.c_lastName.value,
                                "email":this.refs.c_email.value});
      }
    this.closePopup();

};
  render(){
      
      return(
          
          <Container fluid id="pic" style={{fontSize:25}}>
              <button className="btn btn-outline-warning" style={{marginLeft:1300,marginTop:10}}>Logout</button>
        <Button className="float-right mt-4 btn-lg" onClick={ ()=>{this.showPopup("insert") }}>
        Add  <FontAwesomeIcon icon={faPlusSquare} />
    </Button>
        
        
        <Modal show={this.state.status}
               onHide={this.closePopup}
               size="sm"
               centered>
            <Modal.Header closeButton>
                <Modal.Title>Add/Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                 <Form.Group>
                      <Form.Label>Customer Id</Form.Label>
                       <Form.Control type="number"
                                   placeholder="p id"
                                   ref="p_id"></Form.Control>
                  </Form.Group>

                    <Form.Group>
                        <Form.Label>First NAME</Form.Label>
                        <Form.Control type="text"
                                      placeholder="First Name"
                                      ref="c_firstName"></Form.Control>
                    </Form.Group>
                    
                    <Form.Group>
                    <Form.Label>Last NAME</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Last Name"
                                  ref="c_lastName"></Form.Control>
                </Form.Group>
                    
                    
                    
                    

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Customer email"
                                      ref="c_email"></Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>

             <Modal.Footer>
                 <Button variant="success" onClick={()=>{this.save()}}>Add/Update</Button>
                 <Button variant="danger" onClick={this.closePopup}>Close</Button>
            </Modal.Footer>
        </Modal>


    <Table bordered
           hover
           striped
           size="sm"
           variant="dark" style={{marginTop:40}}>
          <thead>
              <tr>
                 <th>SNO</th>
                 <th>Customer ID</th>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Email</th>
                 <th>EDIT</th>
                 <th>DELETE</th>
              </tr>
          </thead>
          <tbody>
              {this.props.data.map((element,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{element.id}</td>
                    <td>{element.firstName}</td>
                    <td>{element.lastName}</td>
                    <td>{element.email}</td>
                    <td><FontAwesomeIcon icon={faEdit}  onClick={()=>{this.showPopup("update")}} /></td>
                    <td><FontAwesomeIcon icon={faTrashAlt} 
                    onClick={ ()=>{this.deleteProduct(element.id)} } /></td>
                  </tr>
              ))}
          </tbody>
    </Table>
    </Container>
      )

  }

}
const receive=(state)=>{
    
    if(state.hasOwnProperty("status")){
        if(state.status.update === "success"){
            state.data.forEach((element,index)=>{
                if(element.id===state.status.record.id){
                    element.firstName = state.status.record.firstName;
                    element.lastName = state.status.record.lastName;
                    element.email = state.status.record.email;
                }
            });
            
        };
        
        if(state.status.delete === "success"){
            let cid = state.data.findIndex((element,index)=>{
                return element.id === state.status.id;
            })
            state.data.splice(cid,1);
            
        }
            
            
        if(state.status.insert === "success"){
            state.data.push(state.status.record);
        }

    }
   
    return{
        data:state.data,
         status : state.status
    }
}
const send=(dispatch)=>{
    return{
      getProducts:()=>{ dispatch(actions.getProducts()) },
      deleteProduct : (cid)=>{ dispatch(actions.deleteProduct({"id":cid})) },
      addProduct : (record)=>{ dispatch(actions.addProduct(record)) },
      updateProduct : (record)=>{ dispatch(actions.updateProduct(record)) }
    }
}
export default connect(receive,send)(App);



