#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no -- commitlint --edit ""
bun commitlint --edit $1