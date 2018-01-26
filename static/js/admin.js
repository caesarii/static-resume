
// 添加应聘者
var staffAddBtn = $('.staff-btn')
// 默认隐藏
var staffBox = $('.staff-modal')
staffAddBtn.on('click', function(e) {
    // 显示
    staffBox.attr('display','block')
    layer.open({
        type: 1,
        content: staffBox,
        title: '添加应聘者',
        area: "450px"
    });
})

// 开始时间
layui.use('laydate', function(){
    var laydate = layui.laydate;

    //执行一个laydate实例
    laydate.render({
        elem: '#id-start-time' //指定元素,
    });
});

// 结束时间
layui.use('laydate', function(){
    var laydate = layui.laydate;

    //执行一个laydate实例
    laydate.render({
        elem: '#id-end-time', //指定元素
        loading: true,
    });
});

// 面试时间
layui.use('laydate', function(){
    var laydate = layui.laydate;
    laydate.render({
        elem: '#id-invite-time', //指定元素
        loading: true,
        type: "datetime"
    });
});

// 表格
layui.use('table', function(){
    var table = layui.table;
    // 邀约
    table.on('tool(test)', function(obj) {
        var data = obj.data
        var layEvent = obj.event
        if(layEvent === 'invite') {
            console.log('invite')
            // 弹窗
            var inviteModal = $('.invite-modal')
            inviteModal.attr('display','block')
            layer.open({
                type: 1,
                content: inviteModal,
                title: '请输入面试时间',
                area: "450px"
            });

        } else if(layEvent === 'download') {
            console.log('download')

        } else if(layEvent === 'print') {
            console.log('print')

        } else if(layEvent === 'detail') {
            console.log('detail')
            // 弹窗
            var detailModal = $('.detail-modal')
            detailModal.attr('display','block')
            layer.open({
                type: 1,
                content: detailModal,
                title: '应聘者详情',
                area: "450px"
            });
        }

    })

});

