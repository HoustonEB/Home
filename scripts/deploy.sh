#!/bin/bash
npm ci
npm run build && node ./deployServer.js