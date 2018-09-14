#!/bin/bash
npm install -g codecov
npm install
npm run test:unit && (codecov || true) # for local tests
