.PHONY: all
all:
	make install

.PHONY: clean
clean:
	rm -fr node_modules

.PHONY: install
install:
	npm install --quiet
	npm link

.PHONY: test
test:
	NODE_ENV=test npm run test
