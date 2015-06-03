name = $(shell grep '"name"' package.json | awk -F'"' '{print $$4}')
version = $(shell grep '"version"' package.json | awk -F'"' '{print $$4}')
JS_FILE=./index.js
DIST=./dist

dev:
	@npm run dev

test:
	@node $(JS_FILE)
	@totoro --code $(JS_FILE)

build:
	@npm run build
	@cp index.html $(DIST)
	@cp ./qrcode-preview.png $(DIST)
	@cp $(DIST)/$(name)/$(version)/index.js $(DIST)
	@rm -rf $(DIST)/$(name)

publish: build
	@ghp-import $(DIST)
	@git push origin gh-pages
