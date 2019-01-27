// Libraries
import React, { Component } from 'react';

// Style
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';

// Components
import { Preview } from './components/Preview';
import { FormGroups } from './components/FormGroups';
import { CopyPreview } from './components/CopyPreview';
import { CopyAlert } from './components/CopyAlert';

// Store
import { Store } from './Store'
const store = new Store();

class Layout extends Component<{}, {}> {
  render() {
    return (
      <div className="container">
        <div>
          <img src={logo} className="logo" alt="logo" />
          <h3 className="mt-5">алатката</h3>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-7 mt-3">
            <FormGroups store={store} />
          </div>
          <div className="col-md-5 mt-3 preview-col">
            <Preview store={store} />
            <CopyPreview store={store} />
            <CopyAlert store={store} />

            <div className="infoPanel">
              <hr />
              <p>За <a href="http://blog.spodeli.org">#хаклаб</a>, напишано со &#10084;  од <a href="https://lh.mk">lh.mk</a>.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
