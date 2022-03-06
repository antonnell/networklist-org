#!/bin/bash

git add -A .
git commit -S -m "$1"
git push origin main
