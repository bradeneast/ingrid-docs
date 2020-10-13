> This is an example of deploying an Ingrid site with [Netlify](https://netlify.com).

## Pre-requisites
Netlify allows for continuous deployment from [Github](https://github.com), [Bitbucket](https://bitbucket.org), and [GitLab](https://gitlab.com) repositories. They've provided [some great documentation](https://docs.netlify.com/configure-builds/get-started/) to help you get started.

### The repository should have at least two things in the root:
- Your site's `src` folder
- A `package.json` file with `ingrid-ssg` under `devDependencies`


## Telling Netlify how to build the project
Find the "Build and Deploy" settings for your Netlify site.

- Set the Build Command to `npx ingrid`
- Set the Publish Directory to `dist` or your custom public directory name, if you've overridden Ingrid's default.

![Settings to use when deploying an Ingrid site to Netlify](/_assets/images/netlify-deploy-settings__continuous-deployment.png)


## Recommended: Use a newer Node.js version

Netlify allows you to specify which Node.js version to use when building your site. Ingrid should work out of the box with Netlify, but setting a newer version of Node usually results in faster build times and easier debugging.

- Key: `NODE_VERSION`
- Value: {Preferred version}

![An evironment variable specifying a recent version of Node.js on Netlify](/_assets/images/netlify-deploy-settings__environment-variables.png)