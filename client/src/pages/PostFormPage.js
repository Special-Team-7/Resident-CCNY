import React from 'react';
import { Redirect } from 'react-router-dom';
import Calendar from 'react-calendar';

class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    title: '',
    author: '',
    tag: '',
    content: '',
    date: new Date()
    
    
  }

  titleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  authorChanged = (e) => {
    this.setState({author: e.target.value});
  }

  contentChanged = (event) => {
    this.setState({
      content: event.target.value
    });
  }

  dateChanged = date => {
    this.setState({ date });
    console.log(this.state.date);
  }

  tagChanged = (e) => {
    this.setState({tag:e.target.value});
  }

  savePost = (event) => {
    //Parsing date to the correct format for api


    console.log(this.formatDate(this.state.date));
    
    console.log(this.state);

    fetch("/api/posts/create", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: this.state}),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }
        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }

  formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day].join('-');
}

  render() {
    if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }

    return (
      <div className="col-10 col-md-8 col-lg-7">
        { errorMessage }
        <div>
          <h2>Fill out your event information</h2>
          <br/>
          <input 
            type="text" 
            placeholder="Add your event Name ....." 
            value={this.state.title}
            className="form-control mr-6 rounded"
            onChange={this.titleChange}
          />
          <br/>
          <input 
            type="text" 
            placeholder="Name of Organizer ....." 
            value={this.state.author}
            className="form-control mr-6 rounded"
            onChange={this.authorChanged}
          />
          <br/>
          <h5>Category:{" "}
          <select onChange={this.tagChanged}>
            <option value="Study">Study</option>
            <option value="Party">Party</option>
            <option value="Sports">Sports</option>
            <option value="Games">Games</option>
            <option value="Outdoors">Outdoors</option>
          </select> 
          </h5>
          
          <br/>

          <textarea cols="112" rows="8" placeholder="Add event description " onChange={this.contentChanged}/>
          <br/>
          <br/>
          <Calendar
              onChange={this.dateChanged}
              value={this.state.date}
              className="container-fluid"
          />
          <br/>
          <button className="btn btn-primary" onClick={this.savePost}>Save Event</button>
        </div>
      </div>
    );
  }
}

export default PostFormPage;