.PHONY: build deploy logs

clean:
	rm -fr ./node_modules
	rm -fr ./dist

install:
	# builds client, then moves the resulting dist/ directory over here
	$(MAKE) -C ../client build
	rm -fr ./dist
	mv ../client/dist .

test:
	@echo Nothing to test here.

deploy: install
	# builds and pushes the code up to gcp app engine
	gcloud app deploy

logs:
	# tails the logs of the app engine
	gcloud app logs tail -s default
