install: 
	npm install
brain-even:
	node bin/games/brain-even.js
brain-calc:
	node bin/games/brain-calc.js
publish: 
	npm publish --dry-run
link: 
	sudo npm link
lint:
	npx eslint .
