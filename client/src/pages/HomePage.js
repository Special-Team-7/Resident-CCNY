import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';


class HomePage extends React.Component {
  state = {
    posts: [],
    loading: true,
    images: ["https://www.ccny.cuny.edu/sites/default/files/styles/large/public/2019-08/fastfacts_fullcampus_.jpg?itok=GuRkDzxN",
        "https://www.ccny.cuny.edu/sites/default/files/styles/large/public/2019-09/about_update.jpg?itok=5OWrNx8o",
        "https://www.ccny.cuny.edu/sites/default/files/CCNY_ShepardHall_Aug2017_6.jpg",
        "https://www.ccny.cuny.edu/sites/default/files/shepard_hall_image.jpg",
        "https://media.glassdoor.com/l/b5/95/77/7b/ccny-quad.jpg",
        "https://www.messynessychic.com/wp-content/uploads/2017/06/ccny.jpg"]
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
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Towers Events</h1>
          </div>
        </section>

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
                    <h2>Title</h2>
                    <p className="card-text"> {event.content} </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
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