Building the User Tutorials Website Locally
===========================================

Here, we provide instructions for setting up an appropriate Python environment and building the SimPEG user tutorials website locally with [MyST](https://mystmd.org/).

## Step 1: Cloning the GitHub Repository

The URL for the SimPEG user tutorials GitHub repository is: https://github.com/simpeg/user-tutorials/. If using the Git Bash shell:

```bash
git clone https://github.com/simpeg/user-tutorials
cd user-tutorials
```

## Step 2: Setting Up a Python Environment

The Jupyter notebooks containing the tutorials are maintained to run properly using the [latest release of SimPEG](https://github.com/simpeg/simpeg/releases).
Notebooks may not run correctly if SimPEG is being imported from an earlier release or development branch.
The [mystmd][install-mystmd] and [nodejs](https://nodejs.org/api/packages.html) are also required to build the website locally.

We advise building a Python environment from the `environment.yml` file in the root directory of the repository.
To create the `simpeg-user-tutorials` environment using conda:

```bash
conda env create -f environment.yml
```

Once built, you can activate using:

```bash
conda activate simpeg-user-tutorials
```

## Step 3: Build and Execution Commands

The SimPEG user tutorials are a collection of [Jupyter Notebook](https://jupyter.org/) (and [Markdown](https://www.markdownguide.org/getting-started/)) files,
which [MyST][mystmd.org] builds into a website. Here, we describe the commands that contributors should be familiar with.

:::{important}
The tutorial notebooks, including their states, are tracked by GitHub. When the SimPEG user tutorials repository was cloned, all notebooks had been run and saved. Therefore, you do not need to rerun all of the notebooks prior to building the website!
:::

### Locally Build and Serve Website

The following command will build the website and serve it locally.
This will allow you to preview the website and observe any changes to notebooks on the fly.
To locally build and serve the website:
the website:

```bash
msyt start
```

Next, follow the instructions prompted by the command to launch the local build in your brower.

### Build Only

The following command will build the website and store the HTML files in
a new `_build` folder:

```bash
msyt build --html
```

### Clean Cached Builds

```bash
myst clean --all
```

### Rerunning Notebooks

When making alterations and rerunning notebooks, we typically do so by launching Jupyter Notebooks:

```bash
jupyter notebook
```

However, we can rerun a notebook and overwrite its output cells in place using `nbconvert`.
To rerun a single notebook, use:

```bash
jupyter nbconvert --to notebook --execute --inplace notebook.ipynb
```

We may also want to rerun all notebooks in the repository.
To rerun all notebooks, use:

```bash
jupyter nbconvert --to notebook --execute --inplace notebooks/**/*.ipynb
```

:::{danger}
Rerunning all notebooks is a computationally intensive task. Some notebooks
require significant amount of memory to allocate large sensitivity matrices.
:::

> [!IMPORTANT]
> If you are using bash as your shell, make sure to run `shopt -s
> globstar` to enable the `globstar` feature that allows the use of `**` for
> filename expansion.




[install-mystmd]: https://mystmd.org/guide/quickstart
[jupyter]: https://jupyter.org
[mystmd.org]: https://mystmd.org

