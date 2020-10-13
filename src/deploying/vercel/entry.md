> This is an example of deploying an Ingrid site with [Vercel](https://vercel.com).

## Pre-requisites
Vercel allows for continuous deployment from [Github](https://github.com), [Bitbucket](https://bitbucket.org), and [GitLab](https://gitlab.com) repositories. They've provided [some great documentation](https://vercel.com/docs/git-integrations#quick-installation) to help you get started.

### The repository should have at least two things in the root:
- Your site's `src` folder
- A `package.json` file with `ingrid-ssg` under `devDependencies`

![Select Vercel's option to import a new project.](/_assets/images/vercel-dashboard__new-site.png)


## Telling Vercel how to build the project
Find the project settings for your Vercel site.

![Settings menu in a Vercel project](/_assets/images/vercel-settings__menu.png)

- Set the Build Command to `npx ingrid`
- Set the Output Directory to `dist` or your custom public directory name, if you've overridden Ingrid's default.

![Properly configured Vercel deploy settings](/_assets/images/vercel-deploy-settings__build.png)