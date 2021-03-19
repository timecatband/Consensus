.PHONY: clean install test


clean:
	rm -fr node_modules


install:
	npm install --quiet
	npm link @timecat/graph-journal-shared


test:
	NODE_ENV=test npm run test


build:
	npm link
	npx webpack --config webpack.config.js --mode production
