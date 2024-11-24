PROJECT=aristotle-categories
TEX_ENGINE=xelatex
OUTPUT_DIR=text

BUILDTEX=$(TEX_ENGINE) -shell-escape $(OUTPUT_DIR)/$(PROJECT).tex
REMOVE_AUXILIARY=make clean

all:
	$(REMOVE_AUXILIARY)
	$(BUILDTEX)
	$(BUILDTEX)
	$(BUILDTEX)
	mv $(PROJECT).pdf $(OUTPUT_DIR)
	$(REMOVE_AUXILIARY)

clean:
	find . -name "*.aux" -type f -delete
	find . -name "*.log" -type f -delete
	find . -name "*.out" -type f -delete
	find . -name "*.bbl" -type f -delete
	find . -name "*.blg" -type f -delete
	find . -name "*.toc" -type f -delete
	find . -name "*.tdo" -type f -delete
	find . -name "*.bcf" -type f -delete
	find . -name "*.glo" -type f -delete
	find . -name "*.idx" -type f -delete
	find . -name "*.ist" -type f -delete
	find . -name "*.nlo" -type f -delete
	find . -name "*.run.xml" -type f -delete
