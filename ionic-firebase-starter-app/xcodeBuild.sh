#! /bin/sh

echo Building web asset folder
ionic build

echo Syncing web asset to ios and android native platforms
npx cap sync

echo Open new build in Xcode
npx cap open ios
