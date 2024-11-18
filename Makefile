NOTEBOOKS_DIR=notebooks

.PHONY: build run clean check format

help:
	@echo "Commands:"
	@echo ""
	@echo "  build   build Myst website (without running notebooks)"
	@echo "  clean   clean output of Myst website"
	@echo "  run     run all notebooks"
	@echo "  check   lint notebooks with nbqa and ruff"
	@echo "  format  autoformat notebooks with nbqa and ruff"
	@echo ""


build:
	msyt build --html

clean:
	msyt clean --all

run:
	jupyter nbconvert --to notebook --execute --inplace "${NOTEBOOKS_DIR}/**/*.ipynb"

check:
	nbqa ruff "${NOTEBOOKS_DIR}/**/*.ipynb"

format:
	nbqa ruff --fix "${NOTEBOOKS_DIR}/**/*.ipynb"
