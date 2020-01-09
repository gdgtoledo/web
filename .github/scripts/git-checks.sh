#!/bin/bash

function git_checks() {
  dirty=$(git_dirty)
  if [[ "$dirty" == "1" ]]; then
    echo "The repository is dirty. Please clean the workspace before releasing."
    exit 1
  fi

  tracked=$(git_num_tracked_files)
  if [[ "$tracked" != "0" ]]; then
    echo "The repository has ${tracked} tracked files. Please commit (or clean) them the workspace before releasing."
    exit 1
  fi

  untracked=$(git_num_untracked_files)
  if [[ "$untracked" != "0" ]]; then
    echo "The repository has ${untracked} untracked files. Please clean the workspace before releasing."
    exit 1
  fi

  echo "0"
}

function git_dirty() {
  [[ $(git diff --shortstat 2>/dev/null | tail -n1) != "" ]] && echo "1"
}

function git_num_untracked_files() {
  expr $(git status --porcelain 2>/dev/null | grep "^??" | wc -l | xargs)
}

function git_num_tracked_files() {
  expr $(git status --porcelain 2>/dev/null | grep "^M" | wc -l | xargs)
}

function main() {
  gitChecks=$(git_checks)

  if [[ "$gitChecks" == "0" ]]; then
    echo "$gitChecks"
    exit 1
  fi
}

main