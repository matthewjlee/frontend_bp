clean: 
	rm -rf node_modules/

build:
	npm run build

serve:
	npm run start	

lint:
	./node_modules/.bin/eslint --fix src/ --ext .js,.jsx
