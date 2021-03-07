.PHONY: clean install test


clean:
	rm -fr node_modules


install:
	npm install --quiet
	npm link @timecat/GraphJournalShared


test:
	NODE_ENV=test npm run spectest
