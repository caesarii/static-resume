// 模板
var eduPart =
    `
        <blockquote class="layui-elem-quote layui-quote-nm education-part">
                        <button class="layui-btn layui-btn-primary removeBtn">移除</button>

                        <div class="layui-form-item">
                            <label class="layui-form-label">学校名称</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">开始时间</label>
                            <div class="layui-input-inline">
                                <input type="text" class="layui-input tool-item" id="id-enrol-time" placeholder="" >

                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">毕业时间</label>
                            <div class="layui-input-inline">
                                <input type="text" class="layui-input tool-item" id="id-graduate-time" placeholder="" >
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">专业</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">学位</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </blockquote>


        `

var trainPart =
    `
        <blockquote class="layui-elem-quote layui-quote-nm train-part">
                        <button class="layui-btn  layui-btn-primary removeBtn">移除</button>
                        <div class="layui-form-item">
                            <label class="layui-form-label">培训机构名称</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">开始时间</label>
                            <div class="layui-input-inline">
                                <input type="text" class="layui-input tool-item" id="id-train-start-time" placeholder="" >
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">结束时间</label>
                            <div class="layui-input-inline">
                                <input type="text" class="layui-input tool-item" id="id-train-end-time" placeholder="" >
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">培训内容</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </blockquote>

        `
var occupationPart =
    `
        <blockquote class="layui-elem-quote layui-quote-nm occupation-part">
                        <button class="layui-btn layui-btn-primary removeBtn">移除</button>
                        <div class="layui-form-item">
                            <label class="layui-form-label">单位名称</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">就职时间</label>
                            <div class="layui-input-inline">
                                <input type="text" class="layui-input tool-item" id="id-work-start-time" placeholder="" >
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">离职时间</label>
                            <div class="layui-input-inline">
                                <input type="text" class="layui-input tool-item" id="id-work-end-time" placeholder="" >
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">职位</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">薪资</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">证明人</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">证明人联系方式</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>

                        <div class="layui-form-item">
                            <label class="layui-form-label">离职原因</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </blockquote>
        `
var familyPart =
    `
        <blockquote class="layui-elem-quote layui-quote-nm family-part">
                        <button class="layui-btn layui-btn-primary removeBtn">移除</button>
                        <div class="layui-form-item">
                            <label class="layui-form-label">关系</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">姓名</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">年龄</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">工作单位</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">职务</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">联系电话</label>
                            <div class="layui-input-inline">
                                <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                    </blockquote>
        `