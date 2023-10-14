#!/bin/sh
. '$(dirname '$0')/_/husky.sh'

bunx --no -- commitlint --edit ''
bun commitlint --edit $1