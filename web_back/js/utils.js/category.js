/**
 * 文章类别管理
 */
var category = {
    //显示
    show: function (callback) {
        $.get(
            'http://localhost:8000/admin/category_search',

            function (res) {
                callback(res)
            }
        )
    },
    //插入
    add: function (name,slug,callback) {
        $.post(
            'http://localhost:8000/admin/category_add',
            {name:name,slug:slug},
            function (res){
                callback(res)
            }
        )
    },

    //删除
    del: function () {

    },

    //删除
    edit: function () {

    },


}