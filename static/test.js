var tmpl =
    `
            <blockquote class="layui-elem-quote layui-quote-nm education-part">
                <a class="layui-btn layui-btn-primary removeBtn">移除</a>

                <div class="layui-form-item">
                    <label class="layui-form-label">学校名称</label>
                    <div class="layui-input-inline">
                        <input type="text" name="title" value=`${schoolName}` required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input schoolName">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">开始时间</label>
                    <div class="layui-input-inline">
                        <input type="text" value=`${startTime}` class="layui-input tool-item startTime" id="id-enrol-time" placeholder="" >

                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">毕业时间</label>
                    <div class="layui-input-inline">
                        <input type="text" value=`${endTime}` class="layui-input tool-item endTime" id="id-graduate-time" placeholder="" >
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">专业</label>
                    <div class="layui-input-inline">
                        <input type="text" value=`${major}` name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input major">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">学位</label>
                    <div class="layui-input-inline">
                        <input type="text" value=`${academicDegree}` name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input academicDegree">
                    </div>
                </div>
            </blockquote>
            `



