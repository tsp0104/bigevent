/**
 * 用户模块，所有用户的操作都在这页面
 */

var user = {
    /**
     * 用户登录
     * @param {*} userName 用户名
     * @param {*} pwd 密码
     * @param {*} callBack 回调函数
     */
    login:function (userName,pwd,callBack) {
        $.post(
            'http://localhost:8000/admin/login', 
            {
                user_name: userName,
                password: pwd
            },
            function (res) {
                callBack(res);
                // if (res.code == 200) {
                //     window.location.href = './index.html';
                // } else {
                //     $('#pResult').text(res.msg);
                //     $('.modal').modal('show');
                // }
            }
        );
    },
    
    /**
     * 用户退出
     * @param {*} callBack 
     */
    logout:function (callBack) {
        $.post(
            'http://localhost:8000/admin/logout', 
            function (res) {
                callBack(res);  
            }
        );
    },
}