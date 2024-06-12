# initialise
`pnpm i`

# web build
`pnpm build` or `pnpm watch`

# build server
`bash server/build-server.sh`

only need to build once to get server.exe

## run server
run `server.exe` in server folder

# release
1. `bash release.sh`. copies build results to top level to be served
2. update package.json
3. commit, tag, push