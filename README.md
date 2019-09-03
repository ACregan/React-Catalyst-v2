React-Catalyst-v2

## Things to log, note or document

The webpack.config.prod.js file has a output.publicPath setting that is super-important to react-router and express playing nice together. The long and short of it is, if your bundle is being served from ```mysite.com/folder/anotherfolder/yetanotherfolder/index.html``` then your publicPath should be set to: ```/folder/anotherfolder/yetanotherfolder/```. This should only be changed in ```production``` configs, the dev config requires it to be set to ```/```