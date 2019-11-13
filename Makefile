.PHONY: all install-js publish lint clean

all:
	@echo "make install-js"
	@echo "    Install dependencies"
	@echo "make publish"
	@echo "    Publish package"
	@echo "make lint"
	@echo "    Run linter"
	@echo "make clean"
	@echo "    Remove node_modules"

install-js: package.json
	npm install --save-dev

publish:
	sh publish.sh

lint:
	npm run lint

clean:
	rm -rf node_modules
