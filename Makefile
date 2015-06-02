
test:
	@node ./error-perf.js
	@totoro --code ./error-perf.js

publish:
	@git push origin gh-pages
