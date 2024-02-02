# Automation Test Web E-Commerce DEMO

This repository is used to practice automation test. I use cypress for this project, and you can find more information about Cypress [here](https://docs-vercel.cypress.io/guides/overview/why-cypress). I use web application [E-Commerce Demo] (https://magento.softwaretestingboard.com/) to execute the automation script.

## Getting Started

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

First, make sure you have all the system requirements. You can find them in [here](https://docs-vercel.cypress.io/guides/getting-started/installing-cypress#System-requirements). Make sure you have Node.js and npm installed in your system. You can download it from [here](https://nodejs.org/en/download)

#### Operating System

Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:
- macOS 10.9 and above (Intel or Apple Silicon 64-bit (x64 or arm64))
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (x86_64 or Arm 64-bit (x64 or arm64)) (see Linux Prerequisites down below)
- Windows 7 and above (64-bit only)

#### Node.js

If you're using npm to install Cypress, it support:
- Node.js 14.x
- Node.js 16.x
- Node.js 18.x and above
Cypress generally aligns with Node's [release schedule](https://github.com/nodejs/Release).

### Installing

```
# Clone this repository
$ git clone https://github.com/wikensetya/at-ecommerce.git

# Go into the repository
$ cd at-ecommerce
```

Installing cypress via npm:
```
cd /your/project/path
npm install cypress --save-dev
```
This will install Cypress locally as a dev dependency for your project.

Installing Cypress via yarn:
```
cd /your/project/path
yarn add cypress --dev
```
System proxy properties http_proxy, https_proxy and no_proxy are respected for the download of the Cypress binary.

## Running the tests

How to run the automated tests using cypress:
Using npx
Note: npx is included with npm > v5.2 or can be installed separately.
```
npx cypress open
```

Or by using yarn
```
yarn run cypress open
```

The long way with the full path
```
./node_modules/.bin/cypress open
```

Or with the shortcut using npm bin
```
$(npm bin)/cypress open
```
After a moment, the Cypress Launchpad will open.

### Preview

![screenshot]()

## Authors

  - **Wikensetya** - Provided [at-ecommerce](https://github.com/wikensetya/)

## Acknowledgments

  - Hat tip to anyone whose code is used
  - Inspiration
  - etc
