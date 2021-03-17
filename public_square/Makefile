abi:
	npm run compile
	rm ConsensusGraphABI.js
	echo "const ConsensusGraphABI = " >> ConsensusGraphABI.js
	cat build/contracts/ConsensusGraph.json >> ConsensusGraphABI.js
	echo "\n export default ConsensusGraphABI" >> ConsensusGraphABI.js
	cp ConsensusGraphABI.js ../journal_app/client/public/services/external_data/

install:
	npm install

migrate:
	npm run migrate
	make abi
