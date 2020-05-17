install: 
	npm install
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
publish: 
	npm publish --dry-run
link: 
	sudo npm link
lint:
	npx eslint .
