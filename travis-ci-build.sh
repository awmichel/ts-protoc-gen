#!/bin/bash
set -ex

npm run lint
npm test

npm run generate
MODIFIED_FILES=$(git diff --name-only)
if [[ -n $MODIFIED_FILES ]]; then
  echo "ERROR: Changes detected in generated code, please run 'npm run generate' and check-in the changes."
  exit 1
fi

bazel build //...:all
bazel test //...:all
