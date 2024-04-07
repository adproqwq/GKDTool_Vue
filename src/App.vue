<script lang="ts">
import { type InputHTMLAttributes, defineComponent } from 'vue'
import { search } from './methods/search'
import { getDefaultSub, getThirdPartySub } from './methods/getSub'
import { output } from './methods/output'
import { changeSwitch } from './methods/changeSwitch'
import { quickStart } from './methods/quickStart'
import { readFile } from './methods/readFile'
import { edit } from './methods/edit'
import { switchStatus } from './methods/switchStatus'

export default defineComponent({
  data() {
    return {
      codeVer: '2.0.1'
    }
  },
  methods: {
    search(e: Event) {
      search((e.target as InputHTMLAttributes).value)
    },
    output(type: string) {
      output(type)
    },
    getThirdPartySub() {
      getThirdPartySub()
    },
    changeSwitch(index: string, job: 'on' | 'off') {
      changeSwitch(index, job)
    },
    quickStart() {
      quickStart()
    },
    readFile() {
      readFile()
    },
    edit(location: string) {
      edit(location)
    },
    switchStatus(type: 'memorize' | 'read') {
      switchStatus(type)
    }
  },
  created() {
    getDefaultSub()
  },
  mounted() {
    ;(window as any).changeSwitch = this.changeSwitch
    ;(window as any).edit = this.edit
  }
})
</script>

<template>
  <div>
    <input id="name" placeholder="搜索应用或包名" @keydown.enter="search" />
  </div>
  <div>
    <button type="button" class="btn btn1" @click="output('all')">导出全部</button>
    <span>导出格式：</span>
    <select id="outputMode">
      <option value="json">JSON</option>
      <option value="json5">JSON5</option>
    </select>
  </div>
  <div>
    <span>导入外部订阅文件：</span>
    <input id="upload" type="file" accept=".json5, application/json" @change="readFile" />
    <span>选择第三方订阅：</span>
    <select id="thirdParty">
      <option selected disabled hidden value="defult" label="默认订阅"></option>
      <option value="Adpro" label="Adpro的GKD订阅"></option>
      <option value="AIsouler" label="AIsouler的GKD订阅"></option>
      <option value="aoguai" label="aoguai的GKD订阅"></option>
      <option value="ganlinte" label="甘霖的GKD订阅"></option>
      <option value="114514" label="田所浩二的GKD订阅"></option>
      <option value="MengNianxiaoyao" label="梦念逍遥の订阅"></option>
    </select>
    <button type="button" class="btn btn1" @click="getThirdPartySub">快捷导入第三方订阅</button>
  </div>
  <div id="switchStatus">
    <button type="button" class="btn btn1" @click="switchStatus('memorize')">
      记忆当前订阅开关状态
    </button>
    <button type="button" class="btn btn1" @click="switchStatus('read')">
      读取当前订阅开关状态
    </button>
  </div>
  <div id="quickStart">
    <button type="button" class="btn btn1" @click="quickStart">一键打开GKD</button>
  </div>
  <div id="version">
    <div id="subVer"></div>
    <div id="codeVer"></div>
  </div>
  <div id="appList"></div>
  <div id="edit" class="editor">
    <div class="editor-input">
      <span class="close">&times;</span>
      <textarea id="content" cols="20" rows="25"></textarea>
      <button type="submit" id="save">保存</button>
    </div>
  </div>
  <div id="copyright-box">
    <div id="copyright-footer" class="column small">
      <ul class="footer-column-b">
        <li>托管服务：<a href="https://vercel.com/">Vercel</a></li>
        <li>
          特别鸣谢：<a href="https://github.com/gkd-kit/gkd">GKD</a>及其<a
            href="https://github.com/gkd-kit/subscription"
            >默认订阅</a
          >项目
        </li>
        <li>本网站由Adpro开发</li>
      </ul>
    </div>
  </div>
</template>
