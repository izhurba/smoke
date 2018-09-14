#!/bin/bash
export PATH="${PATH}:${HOME}/.local/bin"
pushd $(dirname $0)/..

# make sure failing tests cause failing

for part in smoke-editor smoke-backend smokr; do
    pushd ${part}
    if [ -f .travis/test.sh ] ; then
        set -e
        .travis/test.sh
        set +e
    fi
    popd
done

popd
