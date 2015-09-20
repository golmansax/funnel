.PHONY: watch eslint

watch:
	./node_modules/.bin/watchify --extension=.jsx -t babelify -t reactify client.js -o public/build/bundle.js -v

eslint:
	./node_modules/.bin/eslint .
