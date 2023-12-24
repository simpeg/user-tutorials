SimPEG User Tutorials
=====================

SimPEG user tutorials is the place for those who have [installed SimPEG](https://docs.simpeg.xyz/content/getting_started/installing.html), and want to begin using the code base to practice simulating and inverting geophysical data. On this page, we answer the following questions:

- **what are user tutorials?**
- **what can I learn from user tutorial?**
- **how do I access user tutorials?**



:::{caution} Caution
To ensure all functionality works as intended within each user tutorial, please make sure your version of SimPEG is up to date.
:::


What are user tutorials?
------------------------

The SimPEG user tutorials are a library of [Jupyter Notebooks](https://jupyter.org/) that have been published as a website using [MyST](https://mystmd.org/). Each webpage corresponds to a Jupyter notebook where SimPEG has been used to simulate or invert geophysical data for a specific application. In addition to providing the code used to produce computational results, we add [Markdown](https://www.markdownguide.org/) text to thoroughly explain each step. By publishing our tutorials using MyST, users have the ability read, download, run and alter any tutorial. Our aim is to make learning SimPEG as painless as possible and ensure efficacy amongst our users.


```{figure} ./assets/website_images/title_image.png
:width: 450px
:align: center
```


What can I learn from user tutorials?
-------------------------------------

SimPEG user tutorials provide a learning resource beyond a simple set of reproducible examples. The material presented in each tutorial addresses 4 learning objectives: 1) what SimPEG objects represent, 2) creating SimPEG objects, 3) using SimPEG objects, and 4) suitable input parameters. Successful completion of all learning objectives is strongly urged for anyone who wishes to get the most out of SimPEG.


```{figure} ./assets/website_images/learning_image_2.png
:width: 300px
:align: center
```

**1. What SimPEG objects represent:** All of the components required to perform forward simulations and inversions with SimPEG (e.g. transmitters, receivers, meshes, regularizations) are defined as objects within the SimPEG framework. When defining new objects within each tutorial, we aim to provide some detail as to what component of the forward simulation or inversion was created. 

**2. Creating objects in SimPEG:** A multitude of required and optional input arguments are set when creating objects within SimPEG. The proper syntax for setting input arguments is provided. The user will also learn the order in which objects are generally created for standard forward modeling and inversion.

```
# Defining a receiver that measures total magnetic intensity data at (100, 0, 100).
import SimPEG.potential_fields.magnetics as mag
my_receiver = mag.receivers.Point(np.c_[10., 0., 0.], components="tmi")
```

**3. Using SimPEG Objects:** SimPEG objects have a variety of uses. Some objects can be used to extract information about the forward simulation or inversion (e.g. total number of data, number of mesh cells, target data misfit). And some objects are combined create new objects; e.g. a mesh, a survey and a mapping object are used to create a simulation object. Within each tutorial, we aim to demonstrate the various uses of SimPEG objects.

**4. Suitable input parameters:** The numerical algorithms responsible for performing forward simulations and inversions within SimPEG are non-trivial. And in order to ensure reasonable results, the set of input parameters (e.g. mesh discretization, data uncertainties, regularization parameters) must be suitable for the problem. To ensure efficacy amongst our users, common approaches for choosing suitable input parameter values are provided within each tutorial.


How do I access user tutorials?
-------------------------------

**Organization:** Tutorials can be accessed through the menu on the left-hand side of the screen. Tutorials are generally organized by geophysical method; e.g. magnetics, DC/IP, time-domain electromagnetics. And within these sections, the user will have access to a standard set of forward simulation and inversion tutorials. Tutorials that involve multiple geophysical methods or focus on advanced algorithms (e.g. joint inversion, petrophysically guided inversion) are organized separately.

**Downloading:** To download the Jupyter notebook used to generate the tutorial, simply scroll to the top of the page and click the download icon (pictured below) in the top-right corner.

```{figure} ./assets/website_images/download_image.png
:width: 80px
:align: center
```

What tutorials should I start with?
-----------------------------------

User tutorials cover introductory, intermediate and advanced topics within the SimPEG framework. We advise new users to start with introductory tutorials before working their way towards those that are more advanced. For most geophysical methods (e.g. gravity, magnetics, DC resistivity), there is an introductory level tutorial. At the beginning of each tutorial page, one of the following admonitions is used to state the difficulty level and suggested minimum proficiency with SimPEG. 


```{admonition} Introductory notebook
:class: hint
This tutorial teaches basic functionality within SimPEG and is a good entry point for new users.
```

```{admonition} Intermediate notebook
:class: caution
This tutorial focusses on intermediate level functionality within SimPEG. Basic functionality within SimPEG is not discussed in detail, as we assume the user is already familiar. 
```

```{admonition} Advanced notebook
:class: danger
This tutorial focusses on advanced functionality within SimPEG. Basic and intermediate level functionality are not discussed in detail, as we assume the user is already an experienced SimPEG user.
```

What are the computational requirements?
----------------------------------------

Some notebooks can be run in the background on standard laptops, while others can only be run with the help of cluster computing environments. At the beginning of each tutorial page, one of the following admonitions is used to state the computation requirements for running the notebook.

```{admonition} Light-weight notebook
:class: hint
This tutorial requires minimal computational resources and can be executed quickly in the background while other computer processes are running.
```

```{admonition} Medium-weight notebook
:class: caution
Requires moderate computational resources. Run-times may exceed several minutes and require up to 8 GB of available RAM.
```

```{admonition} Computationally intensive notebook
:class: danger
The computational resources required to execute this notebook exceed those provided by standard laptop computers. To execute the notebook, please deploy to a cluster computing environment.
```

