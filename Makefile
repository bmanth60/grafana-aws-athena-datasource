.PHONY: frontend backend
	
all: frontend backend
	mkdir -p dist
	cp -rf frontend/dist/ dist/
	cp -rf backend/dist/ dist/
	cp README.md dist/
	cp LICENSE dist/

frontend:
	docker-compose run --rm frontend bash -c "npm install && npm run build"

backend:
	docker-compose run --rm backend make
