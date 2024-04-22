/** @type {import('next').NextConfig} */
const nextConfig = {
    // The command [next build] is used to export to 'out' directory for Static Site Hosting as a SPA(Single Page Application)
    output: "export",

    // To optimize images
    images: {
        unoptimized: true,
    },

    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,

    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
};

module.exports = nextConfig;
