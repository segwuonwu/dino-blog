import React, { Component } from "react";
import "./App.css";

let elems = {
    title: "Dinosaure are awesome",
    author: "by Solomon Egwuonwu",
    content: ["Check out this body property!", "This is awesome"],
    comments: ["First", "Sencond", "Third"]
};

class Title extends Component {
    render() {
        return <h1> {this.props.title} </h1>;
    }
}

class Author extends Component {
    render() {
        return (<p>{this.props.author} </p>);
    }
}

class Content extends Component {
    render() {
        let content = this.props.content.map(x => {
            return (<p> {x} </p>);
        });
        return <p>{content}</p>
    }
}

class Comments extends Component {
    render() {
        let comment = this.props.comments.map(x => {
            return (<p> {x} </p>);
        });
        return (
            <div>
                <h2 > Comments: </h2>
                <p> {comment} </p>
            </div>
        );
    }
}

class PostHandle extends Component {
    constructor(props) {
        super(props)
        this.state = {
          body: this.props.content
        }
        this.changeContent = this.changeContent.bind(this)
      }
    
      changeContent(e) {
        // render alert on click
        let answer = prompt("What would you like to update to?")
    
        //update state
        this.setState((prevState, props) => {
          return {
            body: answer
          }
        })
      }
    
        render () {
          return (
            <div>
              <p>{this.state.body}</p>
              <button onClick= {this.changeContent}>Edith Body</button>
              </div>
                
            )
       }

}

class Post extends Component {
    render() {
        return (
            <div class="App">
                <Title title={elems.title} />
                <Author author={elems.author} />
                <Content content={elems.content} />
                <PostHandle />
                <Comments comments={elems.comments} />
            </div>
        );
    }
}

export default function App() {
    return <Post />;
}