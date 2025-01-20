<div align="center">
    <img src="alexandria.png">
</div>

![Node Version Badge]
[![GitHub workflow status badge][GitHub workflow status badge]][GitHub workflow status URL]
[![Apache License][Apache License Badge]][Apache License, Version 2.0]

**Alexandria** is a content-opinionated web app for learning Grammar of the following languages:

- Ancient Greek
- Latin
- Classical Hebrew
- Classical Sanskrit

## Application Monitoring

[![Sentry Badge]](https://paion-data.sentry.io/issues/?project=4508675053977600)

[sentry.io] has been integrated into the [alexandria.qubitpi.org](https://alexandria.qubitpi.org/). Specifically:

- [sourcemap](https://docs.sentry.io/platforms/javascript/legacy-sdk/sourcemaps/) is uploaded to sentry during build time
- error trace are sent to sentry during run time

While error trace will always be sent in production mode (`process.env.NODE_ENV === "production"`), an
[.env.sentry-build-plugin](https://docs.sentry.io/platforms/javascript/sourcemaps/uploading/webpack/) is, however,
required for `yarn build` to be able to generate and upload the sourcemap.

> [!NOTE]
>
> If the `.env.sentry-build-plugin` is not present, `yarn build` will still run successfully. It's just not possible
> then to locate the exact location of error in code on sentry issue console because sourcemap hasn't been uploaded

## License

The use and distribution terms for [alexandria]() are covered by the [Apache License, Version 2.0].

[Apache License Badge]: https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white
[Apache License, Version 2.0]: https://www.apache.org/licenses/LICENSE-2.0
[GitHub workflow status badge]: https://img.shields.io/github/actions/workflow/status/QubitPi/alexandria/ci-cd.yaml?branch=master&style=for-the-badge&logo=github&logoColor=white&label=CI/CD
[GitHub workflow status URL]: https://github.com/QubitPi/alexandria/actions/workflows/ci-cd.yaml
[Node Version Badge]: https://img.shields.io/badge/NODE-18-339933?logo=Node.js&logoColor=white&labelColor=66cc33&style=for-the-badge
[sentry.io]: https://sentry.io/
[Sentry Badge]: https://img.shields.io/badge/Application%20Monitoring-362D59.svg?style=for-the-badge&logo=sentry&logoColor=white
