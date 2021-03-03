# Project Purple Planet

A simple, clean and lightweight personal project and task manager.

<span align="center">

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/davidsaulrodriguez/FitnessPlusPlus)
[![Build Status](https://travis-ci.com/davidsaulrodriguez/FitnessPlusPlus.svg?branch=main)](https://travis-ci.com/davidsaulrodriguez/FitnessPlusPlus)
[![GitHub license](https://img.shields.io/github/license/davidsaulrodriguez/FitnessPlusPlus)](https://github.com/davidsaulrodriguez/FitnessPlusPlus)

---

[![GitHub issues](https://img.shields.io/github/issues/davidsaulrodriguez/FitnessPlusPlus)](https://github.com/davidsaulrodriguez/FitnessPlusPlus/issues)
[![GitHub forks](https://img.shields.io/github/forks/davidsaulrodriguez/FitnessPlusPlus)](https://github.com/davidsaulrodriguez/FitnessPlusPlus/network)
[![GitHub stars](https://img.shields.io/github/stars/davidsaulrodriguez/FitnessPlusPlus)](https://github.com/davidsaulrodriguez/FitnessPlusPlus/stargazers)
![GitHub contributors](https://img.shields.io/github/contributors/davidsaulrodriguez/FitnessPlusPlus)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_FitnessPlusPlus&metric=bugs)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_FitnessPlusPlus)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_FitnessPlusPlus&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_FitnessPlusPlus)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_FitnessPlusPlus&metric=security_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_FitnessPlusPlus)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_FitnessPlusPlus&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_FitnessPlusPlus)
![GitHub commits since latest release (by SemVer)](https://img.shields.io/github/commits-since/davidsaulrodriguez/FitnessPlusPlus/latest/main)

</span>

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Dependencies](#dependdencies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development](#development)
- [Supported Versions](#supported-versions)
- [Contributing](#contributing)
- [Bugs and Issues](#bugs-and-issues)
- [License](#license)

## Description

**FitnessPlusPlus** is a fitness tracking application with created with MongoDB, Express and NodeJS.

This application was created based off of starter code given for the homework unit #17.

## Screenshots

**Coming Soon**

## Dependencies

**Project Dependencies**

- "dotenv": "^8.2.0",
- "express": "^4.16.3",
- "helmet": "^4.4.1",
- "mongoose": "^5.3.16",
- "morgan": "^1.9.1"

**Development Dependencies**

- "eslint": "^7.21.0",
- "nodemon": "^2.0.7"

## Installation

**Installation Requirements**

You will need [NodeJS][nodejs] installed for use with this project.

You will also need the latest version of [MongoDB][mongodb] installed locally on your machine.

**Download**

[Download the zip][archive] or clone this project.

```shell
git clone https://github.com/davidsaulrodriguez/FitnessPlusPlus.git
cd FitnessPlusPlus/
```

**Install**

Now install the required dependencies with npm.

```shell
npm install
```

## Configuration

To configure this application for use, you should create a `.env` file with your database information. For convience, a sample enviroment variable file can be found in the root directory with the name of: `.env.example`.

## Usage

Before using this application you should create the **FitnessPlusPlus** database. You can do this by running:

```shell
npm run seed
```

> This command will create and prepopulate the database with seeded dummy information.

After building the project assets and creating the database, you can start **FitnessPlusPlus** by running:

```shell
npm run start
```

## Development

While working and developing on the source code, you can run a live development server with:

```shell
npm run watch
```

## Supported Versions

Below is a list of the currently supported versions of this software.

> Note: This project is an ephemeral homework assignment and will not be worked on past its release (due date). Hence the week-long support life cycle.

| Release |       Status       | Initial Release | Active LTS Start | Maintenance LTS Start | End of Life |
| :-----: | :----------------: | :-------------: | :--------------: | :-------------------: | :---------: |
| develop |      Unstable      |        -        |        -         |           -           |      -      |
|   v1    | :heavy_check_mark: |   2021-03-09    |        -         |           -           | 2021-03-16  |

You can view the Status Key Map and software support model [here][support].

## Contributing

Contributions are more than welcome! If you improve on this project, please feel free to share it by submitting a Pull Request.

Before contributing, be sure to check out the [CONTRIBUTING][contrib] and [Branching Model][branching] docs.

## Bugs and Issues

Found a bug? Having an issue with this app? [Open a new issue][issues] here.

## License

This project and all of its source code is released and permissively licensed under the [BSD 2 Clause][license] license.

[archive]: https://github.com/davidsaulrodriguez/FitnessPlusPlus/archive/main.zip
[mongodb]: https://www.mongodb.com/try/download/community
[nodejs]: https://nodejs.com
[support]: ./SLC.md
[contrib]: ./CONTRIBUTING.md
[branching]: ./docs/Branching_Model.md
[issues]: https://github.com/davidsaulrodriguez/FitnessPlusPlus/issues/new/choose
[license]: ./LICENSE
