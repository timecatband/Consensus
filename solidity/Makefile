abi:
	npm run compile
	echo "ConsensusGraphABI = " >> ConsensusGraphABI.js
	cat build/contracts/ConsensusGraph.json >> ConsensusGraphABI.js
	cp ConsensusGraphABI.js ../journal_app/client/public/services 