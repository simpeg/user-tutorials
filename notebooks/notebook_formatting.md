Structure and Formatting for Notebooks
======================================

For consistency, tutorial notebooks follow strict structure and formatting requirements. Each notebook begins with an introductory section, comprised of several Markdown cells. The contents of the notebook are parsed into sections. Each section contains a Markdown cells, code cells, and plot outputs. For example, see the [3D integral formulation](xref:simpeg#simpeg.potential_fields.gravity.Simulation3DIntegral) tutorial. The structure and formatting requirements for tutorial notebooks are discussed below.

### Introduction Markdown

Every tutorial notebook must provide a thorough introduction.

#### Cell 1: Title Cell

The first cell in the notebooks is a Markdown cell containing the title and the author for the tutorial. It is formatted as follows.
The title is in quotations. You will need to add yourself as an author in the `myst.yml` file in the root directory of the repository.

```
---
title: "My Notebook Title In Quotes"
authors:
  - id: devincowan
---
```

#### Cell 2: Tutorial Difficulty

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

#### Cell 3: Computational Requirements

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

#### Cell 4: Keywords, Summary and Learning Objectives

In this cell, please provide keywords relevant to the notebook. E.g.

```
**Keywords:** gravity inversion, sparse-norm inversion, integral formulation, tree mesh.
```

Next, summarize the purpose of the tutorial. The summary should be roughly one paragraph. If your tutorial focusses on particular functionality within SimPEG, please link to the API documentation. Please link to tutorials you feel the reader should have already worked through. E.g. 

```
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

Finally, provide learning objectives as a bullet list. E.g.

```
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

### Formatting Tutorial Sections

Each section (or subsection) is constructed using a combination of Markdown and code cells. The structure and formatting of these are discussed below.

#### Section Header and Summary Cell

Each section (or subsection) begins with a Markdown cell containing the section header and a summary.
Here, the author must:

* summarize what is being done in the section
* describe any new functionality that is being introduced
* provide links to all relevant API documentation
* describe the choices for hyperparameter values used in the tutorial.

E.g.
```
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

#### Code Block Cells:

Code blocks must follow the [style required by SimPEG](https://docs.simpeg.xyz/latest/content/getting_started/contributing/code-style.html).
Please provide comments when defining new objects. This is especially important when exposing the reader to new functionality.

E.g.

```
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

#### Comments on Plotting:

The author is required to plot data, models, etc... When generating plot, please ensure:

* the figure renders at an appropriate size for display
* the code used to generate the plot is compact
* text and features within the plot are legible