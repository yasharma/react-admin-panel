import React, { Component } from 'react';
import CarouselImage from 'assets/images/05.jpg';

const style = {
  height: '440px'
};
class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-xs-12">
            <div className="card">
              <div className="card-body">
                <div className="card-block">
                  <div className="media">
                    <div className="media-body text-xs-left">
                      <h3 className="pink">278</h3>
                      <span>New Projects</span>
                    </div>
                    <div className="media-right media-middle">
                      <i className="icon-bag2 pink font-large-2 float-xs-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-xs-12">
            <div className="card">
              <div className="card-body">
                <div className="card-block">
                  <div className="media">
                    <div className="media-body text-xs-left">
                      <h3 className="teal">156</h3>
                      <span>New Clients</span>
                    </div>
                    <div className="media-right media-middle">
                      <i className="icon-user1 teal font-large-2 float-xs-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-xs-12">
            <div className="card">
              <div className="card-body">
                <div className="card-block">
                  <div className="media">
                    <div className="media-body text-xs-left">
                      <h3 className="deep-orange">64.89 %</h3>
                      <span>Conversion Rate</span>
                    </div>
                    <div className="media-right media-middle">
                      <i className="icon-diagram deep-orange font-large-2 float-xs-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-xs-12">
            <div className="card">
              <div className="card-body">
                <div className="card-block">
                  <div className="media">
                    <div className="media-body text-xs-left">
                      <h3 className="cyan">423</h3>
                      <span>Support Tickets</span>
                    </div>
                    <div className="media-right media-middle">
                      <i className="icon-ios-help-outline cyan font-large-2 float-xs-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-12">
            <div className="card">
              <div className="card-body">
                <ul className="list-inline text-xs-center pt-2 m-0">
                  <li className="mr-1">
                    <h6>
                      <i className="icon-circle warning" />{' '}
                      <span className="grey darken-1">Remaining</span>
                    </h6>
                  </li>
                  <li className="mr-1">
                    <h6>
                      <i className="icon-circle success" />{' '}
                      <span className="grey darken-1">Completed</span>
                    </h6>
                  </li>
                </ul>
                <div className="chartjs height-250">
                  <canvas id="line-stacked-area" height="250" />
                </div>
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col-xs-3 text-xs-center">
                    <span className="text-muted">Total Projects</span>
                    <h2 className="block font-weight-normal">18</h2>
                    <progress
                      className="progress progress-xs mt-2 progress-success"
                      value="70"
                      max="100"
                    />
                  </div>
                  <div className="col-xs-3 text-xs-center">
                    <span className="text-muted">Total Task</span>
                    <h2 className="block font-weight-normal">125</h2>
                    <progress
                      className="progress progress-xs mt-2 progress-success"
                      value="40"
                      max="100"
                    />
                  </div>
                  <div className="col-xs-3 text-xs-center">
                    <span className="text-muted">Completed Task</span>
                    <h2 className="block font-weight-normal">242</h2>
                    <progress
                      className="progress progress-xs mt-2 progress-success"
                      value="60"
                      max="100"
                    />
                  </div>
                  <div className="col-xs-3 text-xs-center">
                    <span className="text-muted">Total Revenue</span>
                    <h2 className="block font-weight-normal">$11,582</h2>
                    <progress
                      className="progress progress-xs mt-2 progress-success"
                      value="90"
                      max="100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12">
            <div className="card card-inverse bg-info">
              <div className="card-body">
                <div className="position-relative">
                  <div className="chart-title position-absolute mt-2 ml-2 white">
                    <h1 className="display-4">84%</h1>
                    <span>Employees Satisfied</span>
                  </div>
                  <canvas id="emp-satisfaction" className="height-400 block" />
                  <div className="chart-stats position-absolute position-bottom-0 position-right-0 mb-2 mr-3 white">
                    <a className="btn bg-info bg-darken-3 mr-1 white">
                      Statistics <i className="icon-stats-bars" />
                    </a>{' '}
                    for the last year.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row match-height">
          <div className="col-xl-4 col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="media">
                  <div className="p-2 text-xs-center bg-deep-orange media-left media-middle">
                    <i className="icon-user1 font-large-2 white" />
                  </div>
                  <div className="p-2 media-body">
                    <h5 className="deep-orange">New Users</h5>
                    <h5 className="text-bold-400">1,22,356</h5>
                    <progress
                      className="progress progress-sm progress-deep-orange mt-1 mb-0"
                      value="45"
                      max="100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="media">
                  <div className="p-2 text-xs-center bg-cyan media-left media-middle">
                    <i className="icon-camera7 font-large-2 white" />
                  </div>
                  <div className="p-2 media-body">
                    <h5>New Products</h5>
                    <h5 className="text-bold-400">28</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="media">
                  <div className="p-2 media-body text-xs-left">
                    <h5>New Users</h5>
                    <h5 className="text-bold-400">1,22,356</h5>
                  </div>
                  <div className="p-2 text-xs-center bg-teal media-right media-middle">
                    <i className="icon-user1 font-large-2 white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Recent Invoices</h4>
                <a className="heading-elements-toggle">
                  <i className="icon-ellipsis font-medium-3" />
                </a>
                <div className="heading-elements">
                  <ul className="list-inline mb-0">
                    <li>
                      <a data-action="reload">
                        <i className="icon-reload" />
                      </a>
                    </li>
                    <li>
                      <a data-action="expand">
                        <i className="icon-expand2" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <div className="card-block">
                  <p>
                    Total paid invoices 240, unpaid 150.{' '}
                    <span className="float-xs-right">
                      <a>
                        Invoice Summary <i className="icon-arrow-right2" />
                      </a>
                    </span>
                  </p>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Invoice#</th>
                        <th>Customer Name</th>
                        <th>Status</th>
                        <th>Due</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-truncate">
                          <a>INV-001001</a>
                        </td>
                        <td className="text-truncate">Elizabeth W.</td>
                        <td className="text-truncate">
                          <span className="tag tag-default tag-success">
                            Paid
                          </span>
                        </td>
                        <td className="text-truncate">10/05/2016</td>
                        <td className="text-truncate">$ 1200.00</td>
                      </tr>
                      <tr>
                        <td className="text-truncate">
                          <a>INV-001012</a>
                        </td>
                        <td className="text-truncate">Andrew D.</td>
                        <td className="text-truncate">
                          <span className="tag tag-default tag-success">
                            Paid
                          </span>
                        </td>
                        <td className="text-truncate">20/07/2016</td>
                        <td className="text-truncate">$ 152.00</td>
                      </tr>
                      <tr>
                        <td className="text-truncate">
                          <a>INV-001401</a>
                        </td>
                        <td className="text-truncate">Megan S.</td>
                        <td className="text-truncate">
                          <span className="tag tag-default tag-success">
                            Paid
                          </span>
                        </td>
                        <td className="text-truncate">16/11/2016</td>
                        <td className="text-truncate">$ 1450.00</td>
                      </tr>
                      <tr>
                        <td className="text-truncate">
                          <a>INV-01112</a>
                        </td>
                        <td className="text-truncate">Doris R.</td>
                        <td className="text-truncate">
                          <span className="tag tag-default tag-warning">
                            Overdue
                          </span>
                        </td>
                        <td className="text-truncate">11/12/2016</td>
                        <td className="text-truncate">$ 5685.00</td>
                      </tr>
                      <tr>
                        <td className="text-truncate">
                          <a>INV-008101</a>
                        </td>
                        <td className="text-truncate">Walter R.</td>
                        <td className="text-truncate">
                          <span className="tag tag-default tag-warning">
                            Overdue
                          </span>
                        </td>
                        <td className="text-truncate">18/05/2016</td>
                        <td className="text-truncate">$ 685.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row match-height">
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div className="card" style={style}>
              <div className="card-body">
                <img
                  className="card-img-top img-fluid"
                  src={CarouselImage}
                  alt="Card cap"
                />
                <div className="card-block">
                  <h4 className="card-title">Basic</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="btn btn-outline-pink">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div className="card" style={style}>
              <div className="card-body">
                <div className="card-block">
                  <h4 className="card-title">List Group</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span className="tag tag-default tag-pill bg-primary float-xs-right">
                      4
                    </span>{' '}
                    Cras justo odio
                  </li>
                  <li className="list-group-item">
                    <span className="tag tag-default tag-pill bg-info float-xs-right">
                      2
                    </span>{' '}
                    Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item">
                    <span className="tag tag-default tag-pill bg-warning float-xs-right">
                      1
                    </span>{' '}
                    Morbi leo risus
                  </li>
                  <li className="list-group-item">
                    <span className="tag tag-default tag-pill bg-success float-xs-right">
                      3
                    </span>{' '}
                    Porta ac consectetur ac
                  </li>
                  <li className="list-group-item">
                    <span className="tag tag-default tag-pill bg-danger float-xs-right">
                      8
                    </span>{' '}
                    Vestibulum at eros
                  </li>
                </ul>
                <div className="card-block">
                  <a className="card-link">Card link</a>
                  <a className="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-12 col-sm-12">
            <div className="card" style={style}>
              <div className="card-body">
                <div className="card-block">
                  <h4 className="card-title">Carousel</h4>
                  <h6 className="card-subtitle text-muted">
                    Support card subtitle
                  </h6>
                </div>
                <div
                  id="carousel-example-generic"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carousel-example-generic"
                      data-slide-to="0"
                      className=""
                    />
                    <li
                      data-target="#carousel-example-generic"
                      data-slide-to="1"
                      className="active"
                    />
                    <li
                      data-target="#carousel-example-generic"
                      data-slide-to="2"
                      className=""
                    />
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item">
                      <img src={CarouselImage} alt="First slide" />
                    </div>
                    <div className="carousel-item active">
                      <img src={CarouselImage} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img src={CarouselImage} alt="Third slide" />
                    </div>
                  </div>
                  <a
                    className="left carousel-control"
                    href="#carousel-example-generic"
                    role="button"
                    data-slide="prev"
                  >
                    <span className="icon-prev" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control"
                    href="#carousel-example-generic"
                    role="button"
                    data-slide="next"
                  >
                    <span className="icon-next" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <div className="card-block">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
