import React from 'react'
import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

window.bootstrap = require('bootstrap');

import Layout from './layout.js';

const root = createRoot(document.querySelector("#app"))

root.render(<Layout />)

