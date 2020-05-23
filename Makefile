install: 
	npm install
brain-even:
	node bin/games/brain-even.js
brain-calc:
	node bin/games/brain-calc.js
brain-gcd:
	node bin/games/brain-gcd.js
brain-progression:
	node bin/games/brain-progression.js
publish: 
	npm publish --dry-run
link: 
	sudo npm link
lint:
	npx eslint .
