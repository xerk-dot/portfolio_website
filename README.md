<p align="center">
  <!--<img src="/public/favicon.svg" width="50" alt="Logo" /> --->
</p>
<h1 align="center">Personal portfolio</h1>




[![Site preview](https://github.com/xerk-dot/portfolio_website/assets/82680202/614d2090-6da5-48d0-8e35-6417b12f0e1f
)](https://henryhecht.me)

My design portfolio to showcase a few projects. Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/). View the [live site](https://henryhecht.me).

## Install & run

Make sure you have nodejs `19.9.0` or higher and npm `9.6.3` or higher installed. Install dependencies with:

```bash
npm install
```

Once it's done start up a local server with:

```bash
npm run dev
```

To view the components storybook:

```bash
npm run dev:storybook
```

## Deployment

I've set up the site using Cloudflare for hosting. Deploy the site to Cloudflare Pages:

```bash
npm run deploy
```


## FAQs

<details>
  <summary>How do I change the color on the <code>DisplacementSphere</code> (blobby rotating thing in the background).</summary>
  
  You'll need to edit the fragment shader. [Check out this issue for more details](https://github.com/HamishMW/portfolio/issues/19#issuecomment-870996615).
</details>
