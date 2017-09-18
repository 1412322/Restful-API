
var app = {

    productsPosts: function() {

        this.init = function() {
            this.get_all_items_pagination();
        }
        
        /* Search when Enter Key is triggered */
        $("#product-name-search-input, #product-brand-search-input, #product-price-search-input, #product-cpu-search-input, #product-ram-search-input, #product-rom-search-input, #product-resolution-search-input").keyup(function (e) {
            //if (e.keyCode == 13) {
                $('#kind').html('All');
                products.ajax_get_all_items_pagination(1, null);
            //}
        });

        $(".selection").click(function (e) {
            //if (e.keyCode == 13) {
                //console.log($(this).attr('id'));
                $('#kind').html($(this).attr('id'));
                products.ajax_get_all_items_pagination(1, $(this).attr('id'));
            //}
        });

        this.get_all_items_pagination = function() {

            /* Pagination Clicks   */                  
            $('.product-pagination-nav').on('click', '.pagination-nav li.active', function(){
                var page = $(this).attr('p');
                products.ajax_get_all_items_pagination(page, null);                
            });
        }
        
        this.ajax_get_all_items_pagination = function(page, id){
            var data = {
                page: page,
                //search: $('#product-search-input').val(),
                namesearch: $('#product-name-search-input').val(),
                brandsearch: $('#product-brand-search-input').val(),
                pricesearch: $('#product-price-search-input').val(),
                cpusearch: $('#product-cpu-search-input').val(),
                ramsearch: $('#product-ram-search-input').val(),
                romsearch: $('#product-rom-search-input').val(),
                //weightsearch: $('#product-weight-search-input').val(),
                resolutionsearch: $('#product-resolution-search-input').val(),
                id: $('#kind').text(),
            };

            $.ajax({
                url: '/productlist',
                type: 'POST',
                dataType: 'JSON',
                data: data  
            }).done(function (response) {
                if($(".pagination-content").html(response.content)){
                    $('.product-pagination-nav').find('.pagination-nav').html(response.navigation);
                }
            });
            
        }
    },

    commentPosts: function() {

        this.init = function() {
            this.get_all_items_pagination();
        }
        
        this.get_all_items_pagination = function() {           

            /* Pagination Clicks   */                  
            $('.comment-pagination-nav').on('click', '.pagination-nav li.active', function(){
                var page = $(this).attr('p');
                comments.ajax_get_all_items_pagination(page);                
            });
        }
        
        this.ajax_get_all_items_pagination = function(page){
            var id = $('#productid').val();
            var data = {
                page: page,
                id: id
            };

            $.ajax({
                url: '/products/:' + id,
                type: 'POST',
                dataType: 'JSON',
                data: data  
            }).done(function (response) {
                if($("#comment-block").html(response.content)){
                    $('.comment-pagination-nav').find('.pagination-nav').html(response.navigation);
                    
                }
            });
            
        }
    },

    adminproductsPosts: function() {

        this.init = function() {
            this.get_all_items_pagination();
        }
        
        this.get_all_items_pagination = function() {           

            /* Pagination Clicks   */                  
            $('.admin-product-nav').on('click', '.pagination-nav li.active', function(){
                var page = $(this).attr('p');
                adminproducts.ajax_get_all_items_pagination(page);                
            });
        }
        
        this.ajax_get_all_items_pagination = function(page){
            var data = {
                page: page,
            };
            console.log('abc');
            $.ajax({
                url: '/admin/productlist',
                type: 'POST',
                dataType: 'JSON',
                data: data  
            }).done(function (response) {
                if($(".admin-product-content").html(response.content)){
                    $('.admin-product-nav').find('.pagination-nav').html(response.navigation);
                    
                }
            });
            
        }
    }
}

$(document).ready( function () {
    if (window.location.pathname == '/productlist') {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        products = new app.productsPosts(); /* Instantiate the Posts Class */
        products.init(); /* Load Posts class methods */  
        products.ajax_get_all_items_pagination(1);
    }
    if ($(".form-comment").length > 0) {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        comments = new app.commentPosts(); /* Instantiate the Posts Class */
        comments.init(); /* Load Posts class methods */  
        comments.ajax_get_all_items_pagination(1); 
    }
    if (window.location.pathname == '/admin/productlist') {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        adminproducts = new app.adminproductsPosts(); /* Instantiate the Posts Class */
        adminproducts.init(); /* Load Posts class methods */  
        adminproducts.ajax_get_all_items_pagination(1);
    }
});