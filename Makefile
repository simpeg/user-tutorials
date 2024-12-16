NOTEBOOKS_DIR=notebooks

.PHONY: build run clean check check-style check-format format

help:
	@echo "Commands:"
	@echo ""
	@echo "  build        build Myst website (without running notebooks)"
	@echo "  clean        clean output of Myst website"
	@echo "  run          run all notebooks"
	@echo "  check        check notebooks style and format with ruff"
	@echo "  check-style  check notebooks style with ruff"
	@echo "  check-format check notebooks format with ruff"
	@echo "  format       autoformat notebooks with ruff"
	@echo ""


build:
	msyt build --html

clean:
	msyt clean --all

run:
	jupyter nbconvert --to notebook --execute --inplace "${NOTEBOOKS_DIR}/**/*.ipynb"

check: check-format check-style

check-style:
	ruff check "${NOTEBOOKS_DIR}"

check-format:
	ruff format --check "${NOTEBOOKS_DIR}"

format:
	ruff format "${NOTEBOOKS_DIR}"
