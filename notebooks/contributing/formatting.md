Tutorial Structure and Formatting Requirements
==============================================

To ensure quality and consistency, the [Jupyter Notebooks](https://jupyter.org/) containing tutorials must follow strict structure and formatting requirements. The contents of each notebooks must be parsed sensibly into a set of sections. Sufficient explanation and links to API documentation are required when presenting functionality. Each section within a tutorial contains a combination of [Markdown](https://www.markdownguide.org/getting-started/) and coding cells. Our notebooks use the functionality in [MyST Parser](https://myst-parser.readthedocs.io/en/latest/) to augment the contents of Markdown cells. Before moving forward, we advise the contributor to:

* Be familiar with the structure and formatting that is used by most forward simulation and inversion tutorials. E.g. [3D Forward Simulation of Gravity Anomaly Data](../03-gravity/fwd_gravity_anomaly_3d.ipynb) and [3D Inversion of Gravity Anomaly Data](../03-gravity/inv_gravity_anomaly_3d.ipynb).

* Refer to the Markdown syntax used by [MyST Parser](https://myst-parser.readthedocs.io/en/latest/).

* Refer to the [style guide](https://docs.simpeg.xyz/latest/content/getting_started/contributing/code-style.html) for coding cells.


## Notebook Introduction

Every tutorial notebook requires an introduction section. The Markdown cells required for the introduction are described below.

### Cell 1: Title Cell

The first cell contains the title and the author for the tutorial. It is formatted as follows.
The title is in quotations. You will need to add yourself as an author in the `myst.yml` file in the root directory of the repository.

```yaml
---
title: "My Notebook Title In Quotes"
authors:
  - id: devincowan
---
```

### Cell 2: Tutorial Difficulty

Here, we indicate whether the notebook contains introductory, intermediate or advanced content. The author is required to choose
from one of the following [MyST admonitions](https://myst-parser.readthedocs.io/en/latest/syntax/admonitions.html), which is rendered when the webpage is built.

```
:::{admonition} Introductory notebook
:class: hint
This tutorial teaches basic functionality within SimPEG and is a good
entry point for new users.
:::
```

```
:::{admonition} Intermediate notebook
:class: caution
This tutorial focusses on intermediate level functionality within SimPEG.
Basic functionality within SimPEG is not discussed in detail, as we assume
the user is already familiar.
:::
```

```
:::{admonition} Advanced notebook
:class: danger
This tutorial focusses on advanced functionality within SimPEG. Basic and
intermediate level functionality are not discussed in detail, as we assume
the user is already an experienced SimPEG user.
:::
```

### Cell 3: Computational Requirements

Here, we specify the computational requirements to run the notebook. Whereas some notebooks can be run easily on laptop computers, some notebook may need to be exported as Python files and run using cluster computing. The author is required to choose from one of the following [MyST admonitions](https://myst-parser.readthedocs.io/en/latest/syntax/admonitions.html), which is rendered when the webpage is built.

```
:::{admonition} Light-weight notebook
:class: hint
This tutorial requires minimal computational resources and can be executed
quickly in the background while other computer processes are running.
:::
```

```
:::{admonition} Medium-weight notebook
:class: caution
Requires moderate computational resources. Run-times may exceed several
minutes and require up to 8 GB of available RAM.
:::
```

```
:::{admonition} Computationally intensive notebook
:class: danger
The computational resources required to execute this notebook exceed those
provided by standard laptop computers. To execute the notebook, please deploy
to a cluster computing environment.
:::
```

### Cell 4: Keywords, Summary and Learning Objectives

In this cell, the contributor must provide a set of relevant keywords. E.g.

```markdown
**Keywords:** gravity inversion, sparse-norm inversion, integral formulation, tree mesh.
```

Next, the contributor must provide a summary of the tutorial. The summary should be roughly one paragraph. If your tutorial focusses on particular functionality within SimPEG, please link to the API documentation. Also, link to tutorials you feel the reader should have already worked through. E.g. 

```markdown
**Summary:** Here we invert gravity anomaly data to recover a density contrast model.
We demonstrate two approaches for recovering a density contrast model:

1. Weighted least-squares inversion for a tensor mesh
2. Iteratively re-weighted least-squares (IRLS) inversion for a tree mesh

The *weighted least-squares* approach is a great introduction to geophysical inversion
with SimPEG. One drawback however, is that it recovers smooth structures which may not
be representative of the true model. To recover sparse and/or blocky structures, we
also demonstrate the *iteratively re-weighted least-squares* approach. Because this
tutorial focusses primarily on inversion-related functionality, we urge the reader to
become familiar with functionality explained in the [3D Forward Simulation of Gravity
Anomaly Data](fwd_gravity_anomaly_3d.ipynb) tutorial before working through this one.
```

Finally, the contributor must provide learning objectives using a bullet list. E.g.

```markdown
**Learning Objectives:**

- How geophysical inversion is carried out using SimPEG.
- How to assign appropriate uncertainties to gravity anomaly data.
- How to design a suitable mesh for gravity inversion when using the integral formulation.
- How to choose and set parameters for the inversion.
- How to define directives that are applied and updated throughout the inversion.
- How to applying the sensitivity weighting generally used in 3D gravity inversion.
- How to invert data using weighted least-squares and sparse-norm regularization.
- How to analyse inversion results.
```

## Import Functionality

Following the introduction section, the contributor must import all functionality used by the tutorial and briefly explain the functionality that is most important.

### Cell 1: Header and Summary

This Markdown cell uses the heading **Import Modules**. For functionality that relates
directly to the purpose of the tutorial, some context and a link to API documentation
should be provided. E.g. 

:::
## Import Modules

Here, we import all of the functionality required to run the notebook for the tutorial
exercise. All of the functionality specific to simulating gravity data are imported from
[simpeg.potential_fields.gravity](xref:simpeg#simpeg.potential_fields.gravity). We also
import some useful utility functions from [simpeg.utils](xref:simpeg#simpeg.utils).
To simulate gravity data, we need to define our problem geometry on a numerical grid
(or mesh). To generate the mesh, we used the
[discretize](https://discretize.simpeg.xyz/en/main) package.
:::

### Cell 2: Code Cell

The coding cell where functionality is imported should be organized. E.g.

```python
# SimPEG functionality
from simpeg.potential_fields import gravity
from simpeg.utils import plot2Ddata, model_builder
from simpeg import maps

# discretize functionality
from discretize import TensorMesh
from discretize.utils import mkvc, active_from_xyz

# Common Python functionality
import numpy as np
from scipy.interpolate import LinearNDInterpolator
import matplotlib as mpl

mpl.rcParams.update({"font.size": 14})
import matplotlib.pyplot as plt
import os
```

## Tutorial Sections (and Subsections)

Each section (or subsection) is constructed using a combination of Markdown and code cells. The structure and formatting of these are discussed below.

### Header and Summary

Each section (or subsection) begins with a Markdown cell containing the header and a summary.
Here, the contributor must:

* summarize what is being done in the section
* describe any new functionality that is being introduced
* provide links to all relevant API documentation
* describe the choices for hyperparameter values used in the tutorial

E.g.

```markdown
## Define the Survey

Surveys within SimPEG generally require the user to create and connect three
types of objects:

- [receivers](xref:simpeg#simpeg.potential_fields.gravity.receivers.Point):
which define the locations of field measurements and type of data being measured.
- [sources](xref:simpeg#simpeg.potential_fields.gravity.sources.SourceField):
the passive or active sources responsible for generating geophysical responses,
and their associated receivers.
- [survey](xref:simpeg#simpeg.potential_fields.gravity.survey.Survey): the object
which stores and organizes all of the sources and receivers.

Here, we define the survey that will be used for the forward simulation. Gravity
surveys are simple to create. The user only needs an (N, 3)
[numpy.ndarray](xref:numpy#numpy.ndarray) to define the xyz locations of the
observation locations, and a list of field components
which are to be measured. For the tutorial simulation, the receivers are located
5 m above the surface topography and spaced 10 m apart.
```

If something has been thoroughly explained in an introductory tutorial, you can avoid repetition by linking to that tutorial.
However, the choice in values used in your tutorial should always be stated. E.g.

```markdown
## Assign Uncertainties

Approaches for applying reasonable uncertainties to normalized voltage and apparent
resistivity data were presented in the [2.5D Inversion](inv_dcr_2d.ipynb) tutorial.
Here, we apply uncertainties of 1e-7 V/A + 10 % to the normalized voltage data being
inverted.
```

### Code Block Cells

Code blocks must follow the [style required by SimPEG](https://docs.simpeg.xyz/latest/content/getting_started/contributing/code-style.html).
Please provide comments when defining new objects. This is especially important when exposing the reader to new functionality.
Avoid lengthy code blocks that can be better parsed into multiple cells. Markdown cells can also be added between code cells
to provide additional explanation to the reader.

```python
# Define the component(s) of the field we want to simulate as strings within
# a list. Here we simulate only the vertical component of the gravity anomaly.
components = ["gz"]

# Use the observation locations and components to define receivers for the entire survey
# in one step. The set of receivers, even if it's only 1, are organized within a list.
receiver_list = gravity.receivers.Point(receiver_locations, components=components)
receiver_list = [receiver_list]

# Defining the source. For gravity surveys, we simply need to specific the list of
# receivers associated with the source field.
source_field = gravity.sources.SourceField(receiver_list=receiver_list)

# Defining the survey.
survey = gravity.survey.Survey(source_field)
```

### Plotting Requirements

The contributor is required to plot data, models and other quantities that are best understood visually.
Due to its widespread use, figures should be generated using [matplotlib](https://matplotlib.org/) package.
When generating a figure, please ensure:

* the figure renders at an appropriate size when building the website
* the code used to generate the figure is compact whenever possible
* the text and features within the plot are legible


## Check Style of Notebooks

We can check the code style of our notebooks using [`ruff`][ruff].
Simply run the following command to check the style of the notebooks:

```bash
ruff check notebooks
```

You can run the following that the notebooks are correctly formatted:

```bash
ruff format --check notebooks
```

And run this to autoformat them:

```bash
ruff format --fix notebooks
```

Alternatively, you can use the targets we have in the `Makefile`, like `make
check` and `make format`. Read more information about the available targets
by running `make help`.

[ruff]: https://astral.sh/ruff
[install-mystmd]: https://mystmd.org/guide/quickstart
[jupyter]: https://jupyter.org
[mystmd.org]: https://mystmd.org
