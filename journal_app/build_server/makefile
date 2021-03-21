.PHONY: all
all:
	make install

.PHONY: clean
clean:
	rm -fr ./node_modules
	rm -fr ./dist

.PHONY: install
install:
	# builds client, then moves the resulting dist/ directory over here
	$(MAKE) -C ../client build
	rm -fr ./dist
	mv ../client/dist .

.PHONY: test
test:
	@echo "Nothing to test in client build server."

.PHONY: deploy
deploy: install
	# builds and pushes the code up to gcp app engine
	gcloud app deploy

.PHONY: logs
logs:
	# tails the logs of the app engine
	gcloud app logs tail -s default
