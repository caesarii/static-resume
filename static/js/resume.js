var layuiInit = function() {
    // 表单
    layui.use('form', function(){
        var form = layui.form;
        //监听提交
        form.on('submit(formDemo)', function(data){
            layer.msg(JSON.stringify(data.field));
            return false;
        });
    });

    //注意：导航 依赖 element 模块，否则无法进行功能性操作
    layui.use('element', function(){
        var element = layui.element;

        //…
    });

    // 应聘日期
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#id-apply-time' //指定元素
        });
    });

    // 可到职日期
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#id-entry-time' //指定元素
        });
    });

    // 出生日期
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#id-birth-time' //指定元素
        });
    });

    // 入学日期
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#id-enrol-time', //指定元素,
            type: 'month'
        });
    });

    // 毕业日期
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#id-graduate-time', //指定元素
            type: 'month'
        });
    });

    // 培训开始日期
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#id-train-start-time', //指定元素,
            type: 'month'
        });
    });

    // 培训结束日期
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#id-train-end-time', //指定元素
            type: 'month'
        });
    });


    // 上传
    layui.use('upload', function(){
        var upload = layui.upload;

        //执行实例
        var uploadInst = upload.render({
            elem: '#id-upload' //绑定元素
            ,url: '/upload/' //上传接口
            ,done: function(res){
                //上传完毕回调
            }
            ,error: function(){
                //请求异常回调
            }
        });
    });

}

var editExperience = function() {
    // add
    // education
    $('.addBtn-education').on('click', function(e) {
        $('#education').append(eduPart)
    })

    // train
    $('.addBtn-train').on('click', function(e) {
        $('#train').append(trainPart)
    })

    // occupation
    $('.addBtn-occupation').on('click', function(e) {
        $('#occupation').append(occupationPart)
    })

    // family
    $('.addBtn-family').on('click', function(e) {
        $('#family').append(familyPart)
    })

    // remove
    $('.body').on('click', '.removeBtn', function(e) {
        console.log('remove')
        $(e.target).parent().remove()
    })

}

var __main = function() {
    layuiInit()
    editExperience()
}

__main()