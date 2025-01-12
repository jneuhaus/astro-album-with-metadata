#!/usr/bin/env bash

readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" || exit; pwd)"

rm -r ${SCRIPT_DIR}/dist && mkdir -p ${SCRIPT_DIR}/dist

if [[ $(command -v deno) ]]; then
	deno run build && cd ${SCRIPT_DIR}/dist && http-server && cd ${SCRIPT_DIR}
else
	npm run build && cd ${SCRIPT_DIR}/dist && http-server && cd ${SCRIPT_DIR}
fi
