punch := ./node_modules/.bin/punch

run:
	@$(punch) s

publish:
	@$(punch) p

generate:
	@$(punch) g --blank

.PHONY: run publish generate