.PHONY: test

consensus_abi:
	rm -f ConsensusGraphABI.js
	echo "const ConsensusGraphABI = " >> ConsensusGraphABI.js
	cat build/contracts/ConsensusGraph.json >> ConsensusGraphABI.js
	echo "\n export default ConsensusGraphABI" >> ConsensusGraphABI.js
	cp ConsensusGraphABI.js ../journal_app/shared/src/external_data/ABI/

public_square_abi:
	rm -f PublicSquareABI.js
	echo "const PublicSquareABI = " >> PublicSquareABI.js
	cat build/contracts/PublicSquare.json >> PublicSquareABI.js
	echo "\n export default PublicSquareABI" >> PublicSquareABI.js
	cp PublicSquareABI.js ../journal_app/shared/src/external_data/ABI/

compile_contracts:
	npm run compile
	make consensus_abi
	make public_square_abi

migrate:
	npm run migrate-timecat
	make consensus_abi
	make public_square_abi

install:
	npm install

test:
	truffle test

ganache:
	npm run test:ethereum
