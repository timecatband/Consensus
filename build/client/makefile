.PHONY: build deploy logs

build:
	# builds client, then moves the resulting dist/ directory over here
	$(MAKE) -C ../../journal_app/client build
	rm -fr ./dist
	mv ../../journal_app/client/dist .

deploy: build
	# builds and pushes the code up to gcp app engine
	gcloud app deploy

logs:
	# tails the logs of the app engine
	gcloud app logs tail -s default

