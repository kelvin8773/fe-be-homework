This page describes the homework required for senior SaaS developer in Visdom.

## Overview on the homework

The homework includes following tests, please try to finish them as much as possible.

## Test 1 (mandatory): create customized frontend dev skeleton

bring given frontend frameworks together to create a customized frontend development environment

### Detail requirement

The dev skeleton must include:

| framework  | reference address       | description                                              |
|------------|-------------------------|----------------------------------------------------------|
| mithril js | https://mithril.js.org  | this is main javascript framework, like react, vue, etc. |
| parcel     | https://parceljs.org    | this is the build tool, like webpack, etc.               |
| tailwind   | https://tailwindcss.com | this is the utility-first CSS framework                  |

besides the chosen frameworks above, the dev skeleton shall include:

- with typescript support, as use typescript as the development language
- use jest (https://jestjs.io) as the test framework
- use playwright (https://playwright.dev) as the E2E test framework

### Acceptance criteria

- `yarn build` and `yarn start` to build or start local dev against the sources at `src` directory using `parcel`
- https support when `yarn start` on localhost
- `index.html` as the mithril app container template
- `index.ts` with a mithril component as the mithril app entry
- `index.ts` shall contain some tailwind class to control the component styles
- jest test
- playwright E2E test
- keep git history, it's helpful to describe what you have done in the whole process


---
> All below tests are optional, you're required to finish the first one. However, please try to finish
> as much as possible for below tests

## Test 2 (optional): Deployment

- write a `Dockerfile` to generate the frontend image (use nginx as base image)
- if you're familiar with kubernetes, please write kubernetes manifests for `deployment`, `service` and `ingress`
- if you're familiar with kustomize, please write kustomize manifests to do customization on base kubernetes manifests 
- if you're familiar with skaffold, please write skaffold manifests to do `build`, `deploy`, `test`, etc.
- if you're familiar with other tools, such as `Grafana Tanka`, `terraform`, `jsonnet`, `kubecfg`, `helm`, etc, just
do what you'd like to with those tools

## Test 3 (optional): create an SPA app to present your own resume

- using the app skeleton (mithril + tailwind) created in first test
- Typescript shall be used as the development language
- All object used in source codes shall have corresponding type defined, e.g: a typescript interface describe the resume data object:
```typescript
  // this is just an example, do whatever you like
  interface BasicProfile {
      name: String
      gender: 'male'|'female'|'unknown'

      // some optional field
      age?: number
      phone?: String

      // define more fields according to your own design
  }

  interface WorkExperience {
      // define the fields according to your own design
  }

  interface Resume {
      // unique ID for this resume, its value depends on the backend implementation.
      // e.g.: it could the the national ID or user email address, phone, etc...
      id: string
      basicProfile: BasicProfile
      workExperienceList: WorkExperience[]

      // define more fields according to your own design
  }
```

- The data of the resume shall be fetched through http API.
  - you can use mockjs or any mock framework, or even online mock data service to return the mock data when using local
  development environment
  - (**optional**) write a simple backend http service to return the resume data. you can write the http server with any
  language and framework, e.g.,: python flask, nodejs, perl, golang, java, php-fpm, etc.
  - (**optional**) use a database to store the resume data, you can use any database, such as mysql, postgresql, mongodb,
  redis, rocksdb, Elasticsearch. the simple http server above shall read the data from the database.