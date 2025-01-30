#!/usr/bin/env bash

readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" || exit; pwd)"

rm -rf ${SCRIPT_DIR}/dist && mkdir -p ${SCRIPT_DIR}/dist

if [[ $(command -v deno) ]]; then
  deno run -A npm:@astrojs/upgrade
else
  npx @astrojs/upgrade
fi
