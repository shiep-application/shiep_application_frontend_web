<template>
  <div>
    <v-card class="myCard" style="padding: 20px;">
      <v-card-title>成绩查询</v-card-title>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="username"
            label="学号"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            :append-icon="show_psw ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show_psw ? 'text' : 'password'"
            @click:append="show_psw = !show_psw "
            label="密码"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="电子邮箱（请填写主流邮箱）"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-container class="px-0" fluid>
        <v-checkbox
          v-model="checkbox"
          @change="checkbox_change(checkbox)"
          label="是否订阅成绩推送"
        ></v-checkbox>
      </v-container>
      <v-btn depressed color="primary" @click="submit">发送</v-btn>
    </v-card>

    <v-data-table
        :headers="headers"
        :items="grades"
        :items-per-page="20"
        class="elevation-1"
        style="padding-top: 20px; margin: 20px;"
      ></v-data-table>

    <v-dialog v-model="dialog_display" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">是否订阅成绩推送？</v-card-title>
        <v-card-text style="padding-top: 20px;">
          【说明】：成绩订阅将会在您有新的成绩发布后，以邮件的形式第一时间推送至预留邮箱（一次订阅只能查七天，如仍有需求，需再次订阅）。但因技术必须，我们将缓存你的学号和密码来实现后台自动查成绩，望知晓。
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog_display = false">我同意</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-alert :type="alert_status" v-if="alert_display" style="position: fixed;top: 50%;left: 30%">{{alert_msg}}</v-alert>

  </div>

</template>

<script>
export default {
  name: 'grade',
  data: () => ({
    alert_status: "success",
    alert_msg: "请求成功",
    alert_display: false,
    checkbox: false,
    username: "",
    password: "",
    email: "",
    dialog_display: false,
    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    show_psw: false,
    headers: [
          { text: '课程名称', value: 'kcmc' },
          { text: '学分数', value: 'kcxf' },
          { text: '成绩', value: 'cj' },
          { text: '授课教师', value: 'rkjs' },
        ],
    grades: []

  }),
  computed: {
  },
  methods: {
    checkbox_change(checkbox) {
      console.log(checkbox)
      this.dialog_display = !!checkbox;
    },
    submit() {
      // 查成绩
      const that = this
      const domain = "http://127.0.0.1:6677"
      let data = {"username": this.username, "password": this.password}
      this.$http.post(domain + `/grade_query_once`, data)
        .then(res => {
          console.log(res.data)
          that.grades = res.data
          that.alert_status = "success"
          that.alert_msg = "请求成功"
          that.alert_display = true
          setTimeout(function () {
              that.alert_display = false
            }, 1500)
        })
      .catch(err => {
        console.log(err)
        that.alert_status = "error"
        that.alert_msg = "请求出错"
        that.alert_display= true
        setTimeout(function () {
              that.alert_display = false
            }, 1500)
      })

      // 订阅了查成绩服务c
      if (this.checkbox) {
        let data = {"username": this.username, "password": this.password, "email": this.email}
        this.$http.post(domain + `/grade_query_subscribe`, data)
            .then(res => {
              console.log(res.data)
              that.alert_status = "success"
              that.alert_msg = "请求成功"
              that.alert_display = true
              setTimeout(function () {
                that.alert_display = false
              }, 1500)
            })
            .catch(err => {
              console.log(err)
              that.alert_status = "error"
              that.alert_msg = "请求出错"
              that.alert_display = true
              setTimeout(function () {
                that.alert_display = false
              }, 1500)
            })
      }
    }
  }
}
</script>

<style scoped>
.myCard {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding-right: 20px;
}
</style>