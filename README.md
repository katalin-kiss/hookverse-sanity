# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

# How to run it locally

1. You need a sanity account. [Sanity sign up](https://www.sanity.io/login/sign-up)

2. Install @sanity/cli globally to scaffold the project together with your sanity account.

```bash
yarn global add @sanity/cli@2.19.1
```

You can check if the installation was successful.

```bash
sanity versions
```

3. Login to sanity cli.

```bash
sanity login
```

####### TODO ####### 4. Open terminal at the root of the project. Use `sanity init`

5. You need to create an `.env.development` file to setup the **Preview drafts** feature. The file the following:

```
SANITY_STUDIO_PROJECT_URL=*http://localhost:port-number*
SANITY_STUDIO_PREVIEW_SECRET=*secret*
```

6. Go to [manage sanity](https://www.sanity.io/manage) website,select the project and navigate to **Settings**. Navigate to _API setting/CORS origins_ and add new origins. Use _url_ from 5. step. Credential are not needed.

#### TODO

7. Navigate to Tokens and a new one, only _viewer_ permission is need for **Preview drafts** feature.

8. You can run project with:

```bash
yarn start
sanity start
```
