.PHONY: clean install test deploy_client


DIRS = public_square journal_app


clean:
	-for d in $(DIRS); do $(MAKE) -C $$d clean || exit 1; done


install:
	-for d in $(DIRS); do $(MAKE) -C $$d install || exit 1; done


test:
	-for d in $(DIRS); do $(MAKE) -C $$d test || exit 1; done
