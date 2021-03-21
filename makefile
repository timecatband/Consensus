DIRS = public_square journal_app
BLOCKCHAINDIRS = public_square

# install with just `make`
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

# compile contracts, publish to timecat-dev blockchain
.PHONY: blockchain
blockchain:
	make -C ./public_square migrate

# run client locally
.PHONY: local
local:
	make  -C ./journal_app/client local

# deploys client to gcloud
.PHONY: deploy-client
deploy-client:
	make -C ./journal_app/build_server deploy
