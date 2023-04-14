export default function Metrics() {
  return (
    <>
      <link
        href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css'
        rel='stylesheet'
        id='bootstrap-css'
      />
      <script src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js' />
      <script src='//code.jquery.com/jquery-1.11.1.min.js' />

      <nav className='navbar navbar-default navbar-static-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <a className='navbar-brand' href='home'>
              ADMIN
            </a>
          </div>
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a
                  href='http://www.sciax2.it/forum/utenti/-kik_226760/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Return back
                </a>
              </li>
              <li className='dropdown '>
                <a
                  href='home'
                  className='dropdown-toggle'
                  data-toggle='dropdown'
                  role='button'
                  aria-expanded='false'
                >
                  Settings
                  <span className='caret' />
                </a>
                <ul className='dropdown-menu' role='menu'>
                  <li className='dropdown-header'>SETTINGS</li>
                  <li className=''>
                    <a href='home'>Link</a>
                  </li>
                  <li className=''>
                    <a href='home'>Other Link</a>
                  </li>
                  <li className=''>
                    <a href='home'>Other Link</a>
                  </li>
                  <li className='divider' />
                  <li>
                    <a href='home'>Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container-fluid'>
        <div className='col col-md-3'>
          <div className='panel-group' id='accordion'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h4 className='panel-title'>
                  <a
                    data-toggle='collapse'
                    data-parent='#accordion'
                    href='#collapse1'
                  >
                    Files
                  </a>
                </h4>
              </div>
              <div id='collapse1' className='panel-collapse collapse in'>
                <ul className='list-group'>
                  <li className='list-group-item'>
                    <span className='badge'>253</span> New
                  </li>
                  <li className='list-group-item'>
                    <span className='badge'>17</span> Deleted
                  </li>
                  <li className='list-group-item'>
                    <span className='badge'>3</span> Reported
                  </li>
                </ul>
              </div>
            </div>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h4 className='panel-title'>
                  <a
                    data-toggle='collapse'
                    data-parent='#accordion'
                    href='#collapse2'
                  >
                    Blog
                  </a>
                </h4>
              </div>
              <div id='collapse2' className='panel-collapse collapse'>
                <ul className='list-group'>
                  <li className='list-group-item'>
                    <span className='badge'>12</span> New
                  </li>
                  <li className='list-group-item'>
                    <span className='badge'>5</span> Deleted
                  </li>
                </ul>
              </div>
            </div>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h4 className='panel-title'>
                  <a
                    data-toggle='collapse'
                    data-parent='#accordion'
                    href='#collapse3'
                  >
                    Settings
                  </a>
                </h4>
              </div>
              <div id='collapse3' className='panel-collapse collapse'>
                <ul className='list-group'>
                  <li className='list-group-item'>
                    <span className='badge'>1</span> Users Reported
                  </li>
                  <li className='list-group-item'>
                    <span className='badge'>5</span> User Waiting Activation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col col-md-9'>
          <div className='row'>
            <div className='col col-md-5'>
              <h4>Today Stats:</h4>
              Visits<span className='pull-right strong'>- 15%</span>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-danger'
                  role='progressbar'
                  aria-valuenow='15'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: 15 }}
                >
                  15%
                </div>
              </div>
              20 New Users<span className='pull-right strong'>+ 30%</span>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-success'
                  role='progressbar'
                  aria-valuenow='30'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: 30 }}
                >
                  30%
                </div>
              </div>
              359 Downloads<span className='pull-right strong'>+ 8%</span>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-warning'
                  role='progressbar'
                  aria-valuenow='8'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: 8 }}
                >
                  8%
                </div>
              </div>
            </div>
            <div className='col col-md-5'>
              <h4>This Month Stats:</h4>
              Visits<span className='pull-right strong'>+ 45%</span>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-success'
                  role='progressbar'
                  aria-valuenow='45'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: 45 }}
                >
                  45%
                </div>
              </div>
              395 New Users<span className='pull-right strong'>+ 57%</span>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-success'
                  role='progressbar'
                  aria-valuenow='57'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: 57 }}
                >
                  57%
                </div>
              </div>
              12.593 Downloads<span className='pull-right strong'>+ 25%</span>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-success'
                  role='progressbar'
                  aria-valuenow='25'
                  aria-valuemin='0'
                  aria-valuemax='100'
                  style={{ width: 25 }}
                >
                  25%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
