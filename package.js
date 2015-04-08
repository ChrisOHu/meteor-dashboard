Package.describe({
  name: "spirit:dashboard",
  summary: "A complete dashboard solution",
  version: "1.0.0",
  git: ""
});

Package.on_use(function(api){

  both = ['client','server']

  api.versionsFrom('METEOR@1.0');

  api.use(
    ['iron:router@1.0.7',
    'coffeescript',
    'underscore',
    'aldeed:collection2@2.3.2',
    'aldeed:autoform@4.2.2 || 5.0.0',
    'aldeed:template-extension@3.1.1',
    'alanning:roles@1.2.13',
    'raix:handlebar-helpers@0.2.4',
    'reywood:publish-composite@1.3.5',
    'momentjs:moment@2.9.0',
    'aldeed:tabular@1.0.6',
    'meteorhacks:unblock@1.1.0'
    ],
    both);

  api.use(['less','session','jquery','templating'],'client')

  api.use(['email'],'server')

  api.add_files([
    'lib/lib/AdminDashboard.coffee',
    'lib/lib/router.coffee',
    'lib/lib/utils.coffee',
    'lib/lib/startup.coffee',
    'lib/lib/collections.coffee'
    ], both);

  api.add_files([
    //AdminLTE
    'lib/client/lib/AdminLTE/css/_all-skins.css',
    'lib/client/lib/AdminLTE/css/AdminLTE.css',
    'lib/client/lib/AdminLTE/js/app.js',

    'lib/client/html/admin_templates.html',
    'lib/client/html/admin_widgets.html',
    'lib/client/html/admin_layouts.html',
    'lib/client/html/admin_sidebar.html',
    'lib/client/html/admin_header.html',
    'lib/client/js/admin_layout.js',
    'lib/client/js/helpers.coffee',
    'lib/client/js/templates.coffee',
    'lib/client/js/events.coffee',
    'lib/client/js/autoForm.coffee',
    ], 'client');

  api.add_files([
    'lib/server/publish.coffee',
    'lib/server/methods.coffee'
    ], 'server');



  api.export('AdminDashboard',both)

});
