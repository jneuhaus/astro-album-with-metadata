#!/usr/bin/env bash

readonly BASEDIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" || exit; pwd)"

rm -r ${BASEDIR}/dist && mkdir -p ${BASEDIR}/dist

if [[ $(command -v bun) ]]; then
	bun run build && cd ${BASEDIR}/dist && http-server && cd ${BASEDIR}
else
	npm run build && cd ${BASEDIR}/dist && http-server && cd ${BASEDIR}
fi
