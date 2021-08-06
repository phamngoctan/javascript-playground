import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    return (
        <h1>
            Hello World
        </h1>
    );
}

// Create new Component
function Username(props) {
  return (
    <p onClick={() => props.nameClickedHandler(props.username)}>{props.username}</p>
  );
}

// HTML in the javascript???
// It is the JSX, javascript syntax extension
// ReactDOM.render(<HelloWorld />, document.getElementById("app"));

// const element = React.createElement('p', null, 'John');
// ReactDOM.render(element, document.getElementById("app"));

// First basic component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      elements: [],
      message: 'ssss'
    };
  }

  changeName() {
    this.setState({
      name: 'Anna',
    });
  }

  addElement() {
    const oldElements = this.state.elements;
    this.setState({
      elements: oldElements.concat(oldElements.length + 1)
    });
  }

  changeMessageInput(event) {
    this.setState({
      // event.target simply is the input field
      message: event.target.value
    })
  }
  
  userWasClick(name) {
    alert(name);
  }

  render() {
    // The below code for button change name will not work
    // because the changeName method for this.setState is undefined
    // we have to bind the current component
    // <button onClick={this.changeName}>Change Name</button>
    let updateParagraph = '';
    let nameParagraphClass = '';
    if (this.state.name != this.props.name) {
      updateParagraph = <p>Name updated</p>;
      nameParagraphClass = 'updated';
    }

    let myList = this.state.elements.map(el => {
      const liStyle = {
        backgroundColor: el % 2 == 0 ? 'orange' : 'green'
      };
      return <li key={el} style={ liStyle }>{el}</li>;
    });

    return (
    <div>
      <HobbyApp name="Player" />
      <hr/>
      <h3>Reuseable components demo and calling method from child component</h3>
      <Username username="Chris" nameClickedHandler={this.userWasClick} />
      <Username username="Anna" nameClickedHandler={this.userWasClick} />

      <hr></hr>
      <h3>Demo changing value of paragraph</h3>
      <p className={nameParagraphClass}>{this.state.name}</p>
      {updateParagraph}
      <button onClick={this.changeName.bind(this)}>Change Name</button>
      
      <hr></hr>
      <h3>Demo adding item to the list and style</h3>
      <button onClick={this.addElement.bind(this)}>Add new element</button>
      <ul>
        {myList}
      </ul>

      <hr></hr>
      <h3>Demo changing the value of input text</h3>
      <input type="text" 
              value={this.state.message} 
              onChange={this.changeMessageInput.bind(this)}></input>
      <p>{this.state.message}</p>
    </div>);
  }
}

function HobbyLi(props) {
  return (
  <li 
    id={props.hobbyIndex}
    onClick={() => {props.hobbyClicked(props.hobbyName)}}>{props.hobbyName}</li>
  );
}

class HobbyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      hobbies: ['Cooking', 'Sports'],
      inputTextHobby: '',
      hobbyWasDeleted: false
    };
  }

  getHobbiesLi(inputHobbies) {
    // return inputHobbies.map(
    //   (hobby, index) => {
    //     return <li key={index} onClick={() => {this.removeHobby(hobby)}}>
    //       {hobby}
    //     </li>;
    //   }
    // );
    return inputHobbies
            .map((hobby, index) => 
            <HobbyLi 
              key={index}
              // hobbyIndex={index} 
              hobbyName={hobby}
              hobbyClicked={this.removeHobby.bind(this)} />);
  }

  addHobby() {
    if (!this.state.inputTextHobby) {
      console.log('Ignore the empty when adding the new hobby')
      return;
    }
    this.state.hobbies.push(this.state.inputTextHobby);
    this.setState({
      hobbies: this.state.hobbies,
      inputTextHobby: ''
    });
  }

  changeHobbyInputText(event) {
    this.setState({
      inputTextHobby: event.target.value
    });
  }

  removeHobby(hobby) {
    console.log('Remove hobby ' + hobby)
    const position = this.state.hobbies.indexOf(hobby);
    // this.state.hobbies.splice(position, 1);
    const newHobbies = this.state.hobbies.filter(
      (el, index) => index != position
    );
    this.setState({
      hobbies: newHobbies,
      hobbyWasDeleted: true
    });
  }

  render() {
    let hobbyDeletedMessage= this.state.hobbyWasDeleted ? 'Hobby was deleted' : '';

    let hobbyCounterStyle = {
      color: this.state.hobbies.length > 3 ? 'red' : 'black'
    }

    let hobbyCounterClass = this.state.hobbies.length > 3 ? 'multiple-hobbies' : '';
    // In the render method, we must have only on root element :)
    return (
      <div>
        <h3>Welcome "{this.state.name}" to Hobby App</h3>
        <input type="text"
                value={this.state.inputTextHobby}
                onChange={this.changeHobbyInputText.bind(this)}/>
        <button onClick={this.addHobby.bind(this)}>Add hobby</button>
        <p>{hobbyDeletedMessage}</p>
        <p style={hobbyCounterStyle} className={hobbyCounterClass}>Hobbies counts: {this.state.hobbies.length}</p>
        <ul>
          {this.getHobbiesLi(this.state.hobbies)}
        </ul>
      </div>
    );
  }
}

// function changeName() {
//   name = 'Anna';
//   alert('Hey');
  // const element = (<div>
  //   <p>{name}</p>
  //   <button onClick={changeName}>Change Name</button>
  // </div>);
  // ReactDOM.render(element, document.getElementById("app"));
// }

// const element = (<div>
//   <p>{name}</p>
//   <button onClick={changeName}>Change Name</button>
// </div>);
// ReactDOM.render(element, document.getElementById("app"));

ReactDOM.render(<App name="John" />, document.querySelector('#app'));

