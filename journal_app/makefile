DIRS = shared client server

.PHONY: all
all:
	make install

.PHONY: clean
clean:
	-for d in $(DIRS); do $(MAKE) -C $$d clean || exit 1; done

.PHONY: install
install:
	-for d in $(DIRS); do $(MAKE) -C $$d install || exit 1; done

.PHONY: test
test:
	-for d in $(DIRS); do $(MAKE) -C $$d test || exit 1; done

.PHONY: cook-server-image
cook-server-image:
	docker build -t timecat/graph-socket-server:latest -f Dockerfile.server .

.PHONY: run-server-local
run-server-local:
	docker run -p 3000:3000 timecat/graph-socket-server:latest

# the update-container command can fill up the disk of the compute engine instance.
# it should be reset with "docker image prune -a -f" from time to time (todo: fix this)
.PHONY: deploy-server
deploy-server: cook-server-image
	docker tag timecat/graph-socket-server:latest gcr.io/consensus-307005/graph-server:latest
	docker push gcr.io/consensus-307005/graph-server:latest
	gcloud compute instances update-container graph-socket-server --zone us-west1-b --container-image=gcr.io/consensus-307005/graph-server:latest
