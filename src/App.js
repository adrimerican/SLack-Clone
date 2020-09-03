import React, { Component } from 'react'
import './App.css';

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

class App extends React.Component {
//Previous group messages stored as state 
  state = {
    Messages: [
      {message: "Hello how are you"},
      {message: "I'm fine thank you"},
      {message: "What are we doing today"},
      ],
      newMessage: '',
      
  }
  //enters a new message from the input using a class component
  enterMessage = (event) => {
    this.setState ({
      ...this.state,
      newMessage: event.target.value,
    })
  }
  //sends a message from the enter button using a class component
  sendMessage = (event) => {
    event.preventDefault()
    this.setState ({
      ...this.state,
      Messages: [...this.state.Messages, {message: this.state.newMessage}]
    })
  }
  //deletes messages using a button
  deleteMessage = (event, index) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      Messages: [...this.state.Messages].slice(index, -1)
    })
  }

   //This is when the SideDrawer is closed waiting to be opened.
   state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }
}

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
  

  render() {
    //renders the hard coded mesages from the array and delete/save message buttons
    const allMessages =  this.state.Messages.map( (sentMessage, index) => {
      return <p key={index}>{sentMessage.message} 
      <button onClick={this.deleteMessage}>Delete</button>
      <button onClick={this.saveMessage}>Save Message</button></p>
    })
    return( 
    // Div to display sent messages and new message input box/enter button
      <>
        <div className="messageDisplay">
          {allMessages}
        </div>
        <div className="messageInput">
          <input className="inputBox" type="text" name="newMessage" placeholder="Enter a message"
          onChange={this.enterMessage}
          />
          <button onClick={this.sendMessage}>Enter</button>
        </div>

      </>
  

    {
      let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>s
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}


export default App;
