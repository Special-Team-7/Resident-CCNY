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
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content />
      <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
      <meta name="generator" content="Jekyll v3.8.5" />
      <title>Album example · Bootstrap</title>
      <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/album/" />
      {/* Bootstrap core CSS */}
      <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      <style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n    " }} />
      {/* Custom styles for this template */}
      <link href="album.css" rel="stylesheet" />
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </div>
      </header>
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
  //{ this.state.posts }
}

export default HomePage;