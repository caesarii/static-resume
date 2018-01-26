<template>
  <div>
    <Row type="flex" justify="start">
      <Col span="5">
      <Affix>
        <Menu :theme="theme2" active-name="1-2" :open-names="['3']" class="menu">
          <Menu-item name="1" >
            <Icon type="person"></Icon>
            基本信息
            <router-link to="#basic">323232</router-link>
          </Menu-item>
          <Menu-item name="2">
            <Icon type="ios-box"></Icon>

            <router-link to="#person">个人概况</router-link>
          </Menu-item>

          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              经历
            </template>
            <Menu-item name="3-1">教育经历</Menu-item>
            <Menu-item name="3-2">培训经历</Menu-item>
            <Menu-item name="3-3">工作经历</Menu-item>
          </Submenu>

          <Menu-item name="4">
            <Icon type="bowtie"></Icon>
            主要家庭成员及社会关系
          </Menu-item>
          <Menu-item name="5">
            <Icon type="podium"></Icon>
            性格
          </Menu-item>
          <Menu-item name="6">
            <Icon type="cube"></Icon>
            开放问题
          </Menu-item>
          <Menu-item name="7">
            <Icon type="waterdrop"></Icon>
            其他
          </Menu-item>
          <Menu-item name="8">
            <Icon type="chatboxes"></Icon>
            承诺书
          </Menu-item>

        </Menu>
      </Affix>
      </Col>


      <Col span="19">
      <div class="article-container">

        <h1>应聘人员登记表</h1>
        <article class="article">
          <div id="basic">

            <h3 >基本信息</h3>
          </div>
          <div id="person">

            <h3>个人概况</h3>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <Form-item>
                <Button type="primary" @click="handleSubmit('formValidate')">编辑</Button>
                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
              </Form-item>
              <Form-item label="姓名" prop="name">
                <Input v-model="formValidate.name" placeholder="请输入姓名" style="width: 200px"></Input>
              </Form-item>
              <Form-item label="性别" prop="gender">
                <Radio-group v-model="formValidate.gender">
                  <Radio label="male">男</Radio>
                  <Radio label="female">女</Radio>
                </Radio-group>
              </Form-item>
              <Form-item label="邮箱" prop="mail">
                <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
              </Form-item>
              <Form-item label="城市" prop="city">
                <Select v-model="formValidate.city" placeholder="请选择所在地">
                  <Option value="beijing">北京市</Option>
                  <Option value="shanghai">上海市</Option>
                  <Option value="shenzhen">深圳市</Option>
                </Select>
              </Form-item>
              <Form-item label="选择日期">
                <Row>
                  <Col span="11">
                  <Form-item prop="date">
                    <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
                  </Form-item>
                  </Col>
                  <Col span="2" style="text-align: center">
                  -</Col>
                  <Col span="11">
                  <Form-item prop="time">
                    <Time-picker type="time" placeholder="选择时间" v-model="formValidate.time"></Time-picker>
                  </Form-item>
                  </Col>
                </Row>
              </Form-item>

              <Form-item label="爱好" prop="interest">
                <Checkbox-group v-model="formValidate.interest">
                  <Checkbox label="吃饭"></Checkbox>
                  <Checkbox label="睡觉"></Checkbox>
                  <Checkbox label="跑步"></Checkbox>
                  <Checkbox label="看电影"></Checkbox>
                </Checkbox-group>
              </Form-item>
              <Form-item label="介绍" prop="desc">
                <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                       placeholder="请输入..."></Input>
              </Form-item>

            </Form>

          </div>
          <div id="3-1">

            <h3>教育经历</h3>
          </div>
          <div id="3-2">

            <h3>培训经历</h3>
          </div>
          <div id="3-3">

            <h3>工作经历</h3>
          </div>
          <div id="4">

            <h3>主要家庭成员及社会关系</h3>
          </div>
          <div id="5">

            <h3># 性格</h3>
          </div>
          <div id="6">

            <h3>开放问题</h3>
          </div>
          <div id="7">

            <h3>其他</h3>
          </div>
          <div id="8">

            <h3># 承诺书</h3>
          </div>
        </article>
      </div>
      </Col>


    </Row>

  </div>
</template>

<script>
  export default {

    name: 'Resume',

    data() {
      return {
        theme2: 'light',
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: ''
        },
        ruleValidate: {
          name: [
            {required: true, message: '姓名不能为空', trigger: 'blur'}
          ],
          mail: [
            {required: true, message: '邮箱不能为空', trigger: 'blur'},
            {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
          ],
          city: [
            {required: true, message: '请选择城市', trigger: 'change'}
          ],
          gender: [
            {required: true, message: '请选择性别', trigger: 'change'}
          ],
          interest: [
            {required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change'},
            {type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change'}
          ],
          date: [
            {required: true, type: 'date', message: '请选择日期', trigger: 'change'}
          ],
          time: [
            {required: true, type: 'date', message: '请选择时间', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请输入个人介绍', trigger: 'blur'},
            {type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur'}
          ]
        }
      };
    },

    methods: {
      handleClick(path) {
        console.log(path)
      },
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
  };
</script>

<style lang="css" scoped>
  .article-container {
    padding: 25px;
  }

  h3 {
    margin: 15px 0;
    padding-bottom: 8px;
    border-bottom: 1px solid #efefef;
  }

  .menu {
    margin-top: 30px;
  }

</style>
