#!/bin/bash
yarn global add codecov
yarn
yarn test:unit # should eventually be `yarn test`
codecov || true # for local tests
