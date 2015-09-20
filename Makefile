.PHONY: watch eslint

watch:
	./node_modules/.bin/watchify --extension=.jsx -t babelify -t reactify -p [css-modulesify -o public/build/bundle.css] client.js -o public/build/bundle.js -v

eslint:
	./node_modules/.bin/eslint .
