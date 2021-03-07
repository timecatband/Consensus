.PHONY: clean install test


clean:
	rm -fr node_modules


install:
	npm install --quiet
	npm link


test:
	NODE_ENV=test npm run spectest
