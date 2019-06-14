all: dep check build
	
build:
	npm run build
	
dep-clean:
	rm -rf node_modules

dep:
	npm install

dep-info:
	npm outdated || true

# testing
test:
	npm run test

testx: check dep-info test

cover:
	mkdir -p reports
	npm run test:coverage

# linting
check:
	npm run prettier
	npm run lint
	npm run ts-check
