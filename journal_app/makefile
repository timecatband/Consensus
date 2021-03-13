.PHONY: clean install test docker-build-server docker-run-server


DIRS = shared client server


clean:
	-for d in $(DIRS); do $(MAKE) -C $$d clean || exit 1; done


install:
	-for d in $(DIRS); do $(MAKE) -C $$d install || exit 1; done


test:
	-for d in $(DIRS); do $(MAKE) -C $$d test || exit 1; done


cook-server-image:
	docker build -t timecat/graph-socket-server -f Dockerfile.server .


run-server:
	docker run -p 3000:3000 timecat/graph-socket-server


deploy-server-image:
	docker tag timecat/graph-socket-server:latest gcr.io/consensus-307005/graph-server
	docker push gcr.io/consensus-307005/graph-server
