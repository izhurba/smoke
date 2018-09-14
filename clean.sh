#!/bin/bash
(cd smokr && sudo make clean) && (cd smoke-backend && sudo make clean)
sudo rm -fr smoke-editor/node_modules
docker rm --force smoke_smokr_1 smoke_backend_1 smoke_web_1
docker rmi --force python:alpine3.8 node:alpine
