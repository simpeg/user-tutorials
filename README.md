# SimPEG User Tutorials

A set of user tutorials for SimPEG.

**Website of the tutorials:**
[https://simpeg.xyz/user-tutorials](https://simpeg.xyz/user-tutorials/).


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

### Build and serve the website locally

Start by cloning this repository:

```bash
git clone https://github.com/simpeg/user-tutorials
cd user-tutorials
```

To build the website you'll need to [install `mystmd`][install-mystmd].
Alternatively, you can create a `conda` environment using the `environment.yml`
file:

```bash
conda env create -f environment.yml
```

Once you have `mystmd` installed, we can now build the website from its
sources.

#### Build and serve

The following command will build the website and serve it locally, so you can
preview it. Follow the instructions that will be prompted by the command to see
the website:

```bash
msyt start
```

#### Build only

The following command will build the website and store the HTML files in
a new `_build` folder:

```bash
msyt build --html
```

#### Clean cached builds

```bash
myst clean --all
```

### Rerun notebooks

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

> [!HINT]
> If you are using bash as your shell, then make sure to run `shopt -s
> globstar` to enable the `globstar` feature that allows the use of `**` for
> filename expansion.

```bash
jupyter nbconvert --to notebook --execute --inplace **/*.ipynb
```


[install-mystmd]: https://mystmd.org/guide/quickstart
[jupyter]: https://jupyter.org
[mystmd.org]: https://mystmd.org
