# make a release by copying build to top level

set -exu
HERE=$(dirname $(realpath $BASH_SOURCE))
cd $HERE

pnpm build
cp -r build/* .