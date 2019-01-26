// Libraries
import React, { Component } from 'react';
import { observer } from 'mobx-react';

// Style
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';

// Components
import { Preview } from './components/Preview';
import { FormGroups } from './components/FormGroups';
import { CopyPreview } from './components/CopyPreview';

// Store
import { Store } from './Store'

interface IProps {
  store: Store,
}

@observer
class Layout extends Component<IProps, {}> {
  constructor (props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div>
          <img src={logo} className="logo" alt="logo" />
          <h3 className="mt-5">алатката</h3>
        </div>
        <hr />
        <div className="row">
          <div className="col-7 mt-3">
            <FormGroups />
          </div>
          <div className="col-5 mt-3 preview-col">
            <Preview />
            <CopyPreview />

            <div className="infoPanel">
              <hr />
              <p>Built with ♥ for the <a href="http://blog.spodeli.org">#skopjehacklab</a> by <a href="https://lh.mk">lh.mk</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
