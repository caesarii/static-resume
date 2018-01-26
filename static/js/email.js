layui.use('layedit', function() {
    var layedit = layui.layedit
        , $ = layui.jquery;

    //构建一个默认的编辑器
    var index = layedit.build('LAY_demo1', {height: 600});

    //编辑器外部操作
    var active = {
        cancel: function() {
            alert("取消"); //取消
        }
        , confirm: function() {
            alert(layedit.getText(index)); //确认
        }
    };

    $('.site-demo-layedit').on('click', function() {
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });

});

// 表单提交
layui.use('form', function(){
    var form = layui.form;

    //监听提交
    form.on('submit(form-email)', function(data){
        layer.msg(JSON.stringify(data.field));
        return false;
    });
});

