(function (require) {
    'use strict';

    require.config({
        paths: {
            jquery: 'libs/jquery/jquery-1.7.2.min',
            jqueryplugins: 'libs/jquery/jquery.plugins',
            knockout: 'libs/knockout/knockout',
            bootstrap: 'libs/bootstrap/bootstrap.min',
            text: 'libs/require/text',
            order: 'libs/require/order'
        }

    });

    require(['jquery', 'CommitFormatter'], function ($, CommitFormatter) {
        $(function () {
            var app = new CommitFormatter();
            app.init();
        });
    });

} (require));