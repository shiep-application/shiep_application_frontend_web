<template>
  <div>
    <v-card class="myCard" style="padding: 20px;">
      <div style="font-size: 35px;text-align: center;">公告</div>
      <div><b>软件简介</b></div>
      <div style="text-indent:2em;">考虑到每一次登录研究生系统均需连接vpn，并且研究生系统大部分功能对于学生而言并常用，因此设计并开发了本平台。本网站可使用非校园网直接打开，并（计划）提供以下服务：</div>
      <ul>
        <li>成绩查询</li>
        <li>成绩订阅（每当新出一门成绩，会直接推送至您的预留邮箱）</li>
        <li>课表查询（敬请期待）</li>
        <li>学生请假与销假（敬请期待）</li>
        <li>学生动态申请（敬请期待）</li>
      </ul>

      <div style="padding-top: 20px"><b>申明</b></div>
      <ul>
        <li>出于技术目的，<span style="color: red">如选择成绩订阅服务，将在数据库储存您的账号和密码（仅用于自动成绩查询）</span>，望知晓</li>
        <li>本软件已在 <a>https://github.com/shiep-application</a> 开源，<span style="color: red">不会缓存各同学的成绩以及其他隐私信息</span>，开发者愿接受公众的监督</li>
        <li>由于软件刚处于起步阶段，大量基本工作未完善，<span style="color: red">暂不考虑适配本科生群体、教师群体，同时对于非数理学院（电子信息）研究生的适配或许会存在问题</span></li>
        <li>目前仍为初稿状态，<span style="color: red">切勿恶意攻击！</span></li>
        <li>由于<span style="color: red">校园vpn会对连续在线的用户强制下线（目测是小半天左右），如遇内网断连问题</span>，可以直接反馈给 xuyuyan999@126.com <span style="color: red">（近日将完全修复）</span></li>
        <li>如在使用软件的过程中遇到问题，可以邮件联系开发者 xuyuyan999@126.com</li>
      </ul>


      <div style="padding-top: 20px"><b>迭代计划（大致按需求重要程度排序）</b></div>
      <ul>
        <li>【非常重要】监控连接内网的服务器，保证24小时校园网不断连</li>
        <li>【非常重要】迁移至微信小程序（或保留网页端）：基于微信小程序可实现微信账号和系统账号的绑定，无需每次输入账号和密码</li>
        <li>【重要】绩点计算</li>
        <li>【重要】课表查询功能</li>
        <li>【重要】学生动态申请</li>
        <li>【重要】学生请假与销假</li>
        <li>【一般】学生课程评价（学评教）</li>
        <li>如有其他想要开发者实现的，可以在 <a>https://github.com/shiep-application/shiep_application_frontend_web/issues</a> 提需求，无法打开 github 的同学可以直接邮件联系开发者 xuyuyan999@126.com</li>
      </ul>


      <div style="padding-top: 20px"><b>加入我们</b></div>
      <ul>
        <div>目前本平台由数理学院电子信息专业学生单人开发、单人维护，如果你对我们正在做的事情有兴趣，并满足以下的任何一条，我们欢迎你的到来！</div>
        <li>了解、熟悉主流前端技术 微信小程序 或 web前端框架（Vue） 等</li>
        <li>了解、熟悉主流后端开发框架 SpringBoot 或 Flask 或 Django 等</li>
        <li>了解、熟悉 http 请求并具有基本网络常识，有强烈的探索精神</li>
        <li>可以熟练操作 linux 系统 && windows 系统的远程服务器，排查、定位基本错误来源</li>
        <li>感兴趣的同学可以邮件联系开发者 xuyuyan999@126.com</li>
      </ul>

    </v-card>

  </div>

</template>

<script>

export default {
  name: 'index',
  data: () => ({
  }),
  computed: {
  },
  methods: {}
}
</script>

<style scoped>
</style>