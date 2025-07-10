Review Process and GitHub Pull Requests
=======================================

Here, we describe the pull request and review process for bring new tutorial notebooks into the SimPEG user tutorials repository.

Requirements Checklist
----------------------

The following is a useful checklist for determining whether the tutorial notebook has satisfied formatting and structure requirements:

* **General:**
    * Notebook is compatible with latest SimPEG release
    * No deprecated functions and/or input arguments are being used
    * Coding cells linted according to the [style guides](https://docs.simpeg.xyz/latest/content/getting_started/contributing/code-style.html).
* **The introduction is complete:**
    * Title and author added to notebook
    * Admonitions for notebook difficulty and computational resources have been added
    * Keywords list has been added
    * Summary paragraph describing the tutorial has been added
    * Learning objectives have been listed
    * Hyperlinks to other tutorial notebooks added if necessary
* **For sections and subsections:**
    * A header and short summary of what is being done
    * Links to API documentation added for all classes and functions that are used
    * Newly introduced functionality is explained, or links are provided to relevant materials
    * The approach taken when choosing hyperparameter values is explained. The use of ad hoc values without explanation is discouraged
    * All figures are legible and rendered appropriately

Stages of a Pull Request
------------------------

When you are ready to submit your tutorial notebook review, you will make a 
GitHub pull request (PR). If your pull request is not ready for a final review,
but you would like feedback, please mark it as a draft pull request. Once you
feel the pull request is ready for a final review, you can convert the draft PR to
an open PR by selecting the ``Ready for review`` button at the bottom of the page.

Once a pull request is in ``open`` status and you are ready for review, please
ping ``dccowan`` and ``santisoler`` in a github comment to
request a review. At minimum for a PR to be eligible to merge, we look for

- Structure and formatting requirements are observed.
- The notebooks runs properly using the latest release of SimPEG.
- All reviewer comments (if any) have been addressed.
- A developer approves the PR.

After all these steps are satisfied, a ``@simpeg/simpeg-admin`` will merge your
pull request into the main branch (feel free to ping one of us on Github).

This being said, all SimPEG developers and admins are essentially volunteers
providing their time for the benefit of the community. This does mean that
it might take some time for us to get your PR.

Merging a Pull Request
----------------------

The ``@simpeg/simpeg-admin`` will merge a Pull Request to the `main` branch
using the `Squash and Merge
<https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#squash-and-merge-your-commits>`_
strategy: all commits made to the PR branch will be _squashed_ to a single
commit that will be added to `main`.

SimPEG admins will ensure that the commit message is descriptive and
comprehensive. Contributors can help by providing a descriptive and
comprehensive PR description of the changes that were applied and the reasons
behind them. This will be greatly appreciated.