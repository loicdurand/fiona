(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"hero\">\n    <div class=\"texture-overlay\"></div>\n    <div class=\"container\">\n        <div class=\"row nav-wrapper\">\n            <div class=\"col-md-6 col-sm-6 col-xs-6 text-left\">\n                <a href=\"#\">\n                    <img src=\"images/custom/main_logo.jpeg\" alt=\"Logo du site\" height=\"120px\">\n                </a>\n            </div>\n            <div class=\"col-md-6 col-sm-6 col-xs-6 text-right navicon\">\n                <p>MENU</p>\n                <a id=\"trigger-overlay\" class=\"nav_slide_button nav-toggle\" href=\"#\">\n                    <span></span>\n                </a>\n            </div>\n        </div>\n        <div class=\"row hero-content\">\n            <div class=\"col-md-12\">\n                <h1 class=\"animated fadeInDown\">Fina Le Masson, votre notaire à Vertou</h1>\n                <a href=\"\" class=\"use-btn animated fadeInUp\">Présentation</a>\n                <a href=\"#about\" class=\"learn-btn animated fadeInUp\">Contact\n                    <i class=\"fa fa-arrow-down\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>";
},"useData":true});
})();