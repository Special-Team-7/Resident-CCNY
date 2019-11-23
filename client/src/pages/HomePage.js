import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import Modal from 'react-awesome-modal';


class HomePage extends React.Component {

  constructor() {
    super();

    this.state = {
      visible : false
    }

    this.state = { // what does this.state do
      posts: [],
      loading: true,
      images: ["https://www.ccny.cuny.edu/sites/default/files/styles/large/public/2019-08/fastfacts_fullcampus_.jpg?itok=GuRkDzxN",
          "https://www.ccny.cuny.edu/sites/default/files/styles/large/public/2019-09/about_update.jpg?itok=5OWrNx8o",
          "https://www.ccny.cuny.edu/sites/default/files/CCNY_ShepardHall_Aug2017_6.jpg",
          "https://www.ccny.cuny.edu/sites/default/files/shepard_hall_image.jpg",
          "https://media.glassdoor.com/l/b5/95/77/7b/ccny-quad.jpg",
          "https://www.messynessychic.com/wp-content/uploads/2017/06/ccny.jpg"]
    }
  }
  
  openModal() {
    this.setState({
        visible : true
    });
}

  closeModal() {
      this.setState({
          visible : false
      });
  }

  componentDidMount() {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts: posts.map((p,ii) => <Post {...p} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }
    

    return (
      <div>

      <main role="main">
       
          <div className="container">
            <br/>
            <h1 className="jumbotron-heading">Towers Events</h1>
            <br/>
          </div>
        

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
            {this.state.posts.map(post => {
              let event = post.props;
              return (
                <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <img src= {this.state.images[Math.round(Math.random()*5)]} height="200" width="300"></img>
                    <hr/>
                    <h2>{event.title}</h2>
                    <p className="card-text"> {event.content.substring(0, 20)}... </p>
                    
                    <button type="button" className="btn btn-sm btn-outline-secondary" value="Open" onClick={() => this.openModal()}>View</button>
                    <Modal 
                        visible={this.state.visible}
                        width="500"
                        height="400"
                        effect="fadeInUp"
                        onClickAway={() => this.closeModal()}
                    >
                      <div>
                          <h1>{event.title}</h1>
                          <hr/>
                          <p><strong>Event Date:</strong> {event.date}</p>
                          <p><strong>Summary:</strong><br/> {event.content}</p>
                          <p><strong>Category:</strong> {event.tag}</p>
                          <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                      </div>
                    </Modal>

                    <br/>
                    <div className="d-flex justify-content-between align-items-center">
                      <medium className="text-muted">{event.author}</medium>
                      <medium className="text-muted">{event.date}</medium>
                    </div>
                    
                  </div>
                </div>
              </div>  
              );
            })}

            </div>
          </div>
        </div>
      </main>
      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
        </div>
      </footer>
    </div>
    );
  }
}

export default HomePage;