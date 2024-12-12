Cloning the Repository and Building the Website Locally
=======================================================

## Cloning the GitHub Repository

The GitHub repository for SimPEG User Tutorials can cloned from https://github.com/simpeg/user-tutorials/.
If using the Git Bash shell:

```bash
git clone https://github.com/simpeg/user-tutorials
cd user-tutorials
```

## Setting Up Your Python Environment

The notebooks are maintained so that they run correctly using the latest SimPEG release. Some notebooks may not
run correctly if SimPEG is being imported from an earlier release or development branch. The website is built
from the collection of Markdown files and Jupyter notebooks using [Myst][mystmd.org]. To build the website locally,
you will need to [install `mystmd`][install-mystmd]

For contributors, an `environment.yml` file has been provided in the root directory of the repository.
To create the environment using conda:

```bash
conda env create -f environment.yml
```

## How to build the website locally

The SimPEG User Tutorials were created using [Myst][mystmd.org]. Myst is
capable of building the website from content stored in [Jupyter
Notebooks][jupyter].

We can build the website from the current content in the Jupyter Notebooks.
This can be done in a few seconds with very slim resource requirements.

Rerunning the notebooks is a more intensive task that will require significant
amount of memory (specially for the computationally intensive notebooks) and it
will take some time.

Here you'll find instructions to:

- [Build and the website locally](#build-and-serve-the-website-locally)
- [Rerun notebooks in the repo](#rerun-notebooks)

### Build and Serve the Website Locally

#### Build and Serve

The following command will build the website and serve it locally, so you can
preview it. Follow the instructions that will be prompted by the command to see
the website:

```bash
msyt start
```

#### Build Only

The following command will build the website and store the HTML files in
a new `_build` folder:

```bash
msyt build --html
```

#### Clean Cached Builds

```bash
myst clean --all
```

### Rerun Notebooks

Start by cloning this repository:

```bash
git clone https://github.com/simpeg/user-tutorials
cd user-tutorials
```

And create a `conda` environment using the provided `environment.yml` file:

```bash
conda env create -f environment.yml
```

We can use `nbconvert` to rerun a notebook and overwrite its output cells
in place.
To rerun a single notebook, use:

```bash
jupyter nbconvert --to notebook --execute --inplace notebook.ipynb
```

To rerun all notebooks, use:

> [!CAUTION]
> Rerunning all notebooks is a computationally intensive task. Some notebooks
> require significant amount of memory to allocate large sensitivity matrices.

> [!IMPORTANT]
> If you are using bash as your shell, make sure to run `shopt -s
> globstar` to enable the `globstar` feature that allows the use of `**` for
> filename expansion.

```bash
jupyter nbconvert --to notebook --execute --inplace notebooks/**/*.ipynb
```


[install-mystmd]: https://mystmd.org/guide/quickstart
[jupyter]: https://jupyter.org
[mystmd.org]: https://mystmd.org


## Check Style of Notebooks

We can check the code style of our notebooks using [`ruff`][ruff] and
[`nbqa`][nbqa]. Simply run the following command to check the style of the
notebooks:

```bash
nbqa ruff notebooks
```

And run this to autoformat them:

```bash
nbqa ruff --fix notebooks
```

Alternatively, you can use the targets we have in the `Makefile`, like `make
check` and `make format`. Read more information about the available targets
by running `make help`.