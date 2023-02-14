#!/bin/sh

if test -z "$NPM_TOKEN"
then
    echo "\$NPM_TOKEN is not set"
    exit 1
else
    echo "//registry.npmjs.org/:_authToken=$(echo "$NPM_TOKEN")" > .npmrc
    echo "unsafe-perm = true" >> ~/.npmrc
    npm publish
fi
