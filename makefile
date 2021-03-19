.PHONY: clean install test blockchain


DIRS = public_square journal_app
BLOCKCHAINDIRS = public_square


clean:
	-for d in $(DIRS); do $(MAKE) -C $$d clean || exit 1; done


install:
	-for d in $(DIRS); do $(MAKE) -C $$d install || exit 1; done


test:
	-for d in $(DIRS); do $(MAKE) -C $$d test || exit 1; done

blockchain:
	make -C ./public_square migrate

abi:
	make -C ./public_square consensus_abi
	make -C ./public_square public_square_abi

ganache:
	make -C ./public_square ganache

