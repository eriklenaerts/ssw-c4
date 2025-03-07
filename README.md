# Introduction
This repository contains the architectural perspectives of Stream Software - Streamliner Cloud.

We use [LikeC4](https://likec4.dev/) to code the model and generate different views from it. LikeC4 is an alternative to C4 modelling with a modern toolset and active community.

# Tools

* We use the [VSCode extension](https://likec4.dev/tooling/vscode/) to help us coding the models.
* We use the [CLI](https://likec4.dev/tooling/cli/) to start a development preview server

# Local dev
Run the following command to `build` the project. The CLI will scan all c4 files for views and will make a static website where they can be previewed.

```shell
 npx likec4 build -o ./dist 
```

to start a local dev server to actually view the diagrams

```shell
 npx likec4 start 
```
