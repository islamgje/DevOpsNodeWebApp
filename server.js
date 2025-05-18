'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('(-: Hello FS2025 DevOps Course! :-) by islamgje. Test für Repo-09. Automatischer Cloud Deploy auf Render.com by islamgje v9 Abgabe Screencast');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
