## Pre-requisites
Vercel offers integrations with [Github](https://github.com), [Bitbucket](https://bitbucket.org), and [GitLab](https://gitlab.com) repositories. You'll need an account and an active repository on one of these platforms. Vercel has provided [some great documentation](https://vercel.com/docs/git-integrations#quick-installation) to help you get started connecting your repos.

### The repository should have at least two things in the root:
- Your site's `src` folder
- A `package.json` file with `ingrid-ssg` under `devDependencies`


## Telling Vercel how to build the project
Find the project settings for your Vercel site.

![Settings menu in a Vercel project](/_assets/images/vercel-settings__menu.png)

- Set the Build Command to `npx ingrid`
- Set the Output Directory to `dist` or your custom public directory name, if you've overridden Ingrid's default.

![Properly configured Vercel deploy settings](/_assets/images/vercel-deploy-settings__build.png)