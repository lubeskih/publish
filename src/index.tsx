import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Layout';
import { Store } from './Store'

const store = new Store();

ReactDOM.render(<Layout store={store} />, document.getElementById('root'));
