.PHONY: all
all:
	make install

.PHONY: consensus_abi
consensus_abi:
	rm -f ConsensusGraphABI.js
	echo "const ConsensusGraphABI = " >> ConsensusGraphABI.js
	cat build/contracts/ConsensusGraph.json >> ConsensusGraphABI.js
	echo "\n export default ConsensusGraphABI" >> ConsensusGraphABI.js
	cp ConsensusGraphABI.js ../journal_app/shared/src/external_data/ABI/

.PHONY: public_square_abi
public_square_abi:
	rm -f PublicSquareABI.js
	echo "const PublicSquareABI = " >> PublicSquareABI.js
	cat build/contracts/PublicSquare.json >> PublicSquareABI.js
	echo "\n export default PublicSquareABI" >> PublicSquareABI.js
	cp PublicSquareABI.js ../journal_app/shared/src/external_data/ABI/

# Converts existing json contracts to js, moves them into shared directory
.PHONY: abi
abi:
	make consensus_abi
	make public_square_abi

.PHONY: compile_contracts
compile_contracts:
	npm run compile
	make abi

# compile contracts, publish to timecat-dev blockchain
.PHONY: migrate
migrate:
	npm run migrate-timecat
	make abi

.PHONY: install
install:
	npm install
	make abi

.PHONY: test
test:
	truffle test
