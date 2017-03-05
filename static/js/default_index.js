// This is the js for the default/index.html view.

var app = function() {

    var self = {};

   Vue.config.silent = false; // show all warnings




    self.vue = new Vue({
        el: "#vue-div",
        delimiters: ['${', '}'],
        unsafeDelimiters: ['!{', '}'],
        data: {
            page: 'home'
        },
        methods: {
            
        }

    });

    
    $("#vue-div").show();


    return self;
};

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function(){APP = app();});
