#!/bin/sh

if test -z "$NPM_TOKEN"
then
    echo "\$NPM_TOKEN is not set"
    exit 1
else
    # Need to replace "_" with "-" as GitLab CI won't accept secret vars with "-"
    echo "//registry.npmjs.org/:_authToken=$(echo "$NPM_TOKEN" | tr _ -)" > .npmrc
    echo "unsafe-perm = true" >> ~/.npmrc
    npm publish
fi
