.PHONY: clean install test docker-build-server docker-run-server


DIRS = shared client server


clean:
	-for d in $(DIRS); do $(MAKE) -C $$d clean || exit 1; done


install:
	-for d in $(DIRS); do $(MAKE) -C $$d install || exit 1; done


test:
	-for d in $(DIRS); do $(MAKE) -C $$d test || exit 1; done


docker-build-server:
	docker build -t timecat/graph-socket-server -f Dockerfile.server .

docker-run-server:
	docker run -p 3000:3000 timecat/graph-socket-server
