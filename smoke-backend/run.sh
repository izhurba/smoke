#!/bin/sh
pip install -q -r requirements.txt
pip install -q -e .
smoke_backend init
flask run -h 0.0.0.0 -p 8000
