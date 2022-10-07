#!/bin/bash

npm run createdb & 
npm run migratedb & 
node src/index.js

# Other command here