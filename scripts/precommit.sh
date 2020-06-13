#!/bin/env bash

function get_commit {
    git log --oneline -- $1 | head -n 1 | cut -d " " -f1
}

ROOT_COMMIT=$(get_commit)
SUBDIR_COMMIT=$(get_commit chat)

if [ "$SUBDIR_COMMIT" == "$ROOT_COMMIT" ]; then
    echo "Files changes"
fi