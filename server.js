'use strict';
import { join } from 'path';
const express = require('express');
import { ngExpressEngine} from "@nguniversal/express-engine";
import {provideModuleMap} from "@nguniversal/module-map-ngfactory-loader";

const PORT = process.env['PORT'] || 8000;
const staticRoot = join(process.cwd(), 'dist', 'store-seo');
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/store-server/main');

const app = express();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}))

app.set('view engine', 'html');
app.set('views', staticRoot);
app.get('*.*', express.static(staticRoot));
app.get('*', (req, res) => res.render('index', {req}));
app.listen(PORT, () => console.log('Listening'))
