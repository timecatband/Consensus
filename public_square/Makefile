abi:
	npm run compile
	rm -f ConsensusGraphABI.js
	echo "const ConsensusGraphABI = " >> ConsensusGraphABI.js
	cat build/contracts/ConsensusGraph.json >> ConsensusGraphABI.js
	echo "\n export default ConsensusGraphABI" >> ConsensusGraphABI.js
	cp ConsensusGraphABI.js ../journal_app/client/public/services/external_data/

abi2:
	npm run compile
	rm -f PublicSquareABI.js
	echo "const PublicSquareABI = " >> PublicSquareABI.js
	cat build/contracts/PublicSquare.json >> PublicSquareABI.js
	echo "\n export default PublicSquareABI" >> PublicSquareABI.js
	cp PublicSquareABI.js ../journal_app/client/public/services/external_data/


install:
	npm install

migrate:
	npm run migrate
	make abi
	make abi2