.PHONY: frontend backend
	
all: setup frontend backend
	cp README.md dist/
	cp LICENSE dist/

setup:
	rm -rf dist
	mkdir -p dist
	
frontend:
	docker-compose run --rm frontend make
	cp -rf frontend/dist/* dist/

backend:
	docker-compose run --rm backend make
	cp -rf backend/dist/* dist/
