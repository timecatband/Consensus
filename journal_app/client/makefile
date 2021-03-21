.PHONY: all
all:
	make install

.PHONY: clean
clean:
	rm -fr node_modules

.PHONY: install
install:
	npm install --quiet
	npm link @timecat/graph-journal-shared

.PHONY: test
test:
	NODE_ENV=test npm run test

.PHONY: build
build:
	npm link
	npx webpack --config webpack.config.js --mode production

.PHONY: local
local:
	npm run dev
