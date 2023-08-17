<script lang="ts">
  import {
    CForm,
    CFormItem,
    CButton,
    CInput,
    CCheckbox,
    openNotification
  } from '@casual-ui/svelte'
  import { push } from 'svelte-spa-router'

  const loginForm = {
    username: '',
    password: '',
    rememberMe: false
  }
  const rules = {
    username: [(v: string) => (v ? false : '请输入账号')],
    password: [(v: string) => (v ? false : '请输入密码')]
  }
  let formRef: CForm

  let loading = false

  function doLogin() {
    formRef.validateAll().then(() => {
      loading = true
      setTimeout(() => {
        loading = false
        push('/admin/dashboard')
        // not working?
        openNotification({
          theme: 'secondary',
          title: 'Congratulations!',
          message: 'Form validation passed'
        })
      }, 1500)
    })
  }
</script>

<div
  class="w-25rem bg-#ffffff90 p-(x-8 y-6) rounded-xl shadow-xl dark:bg-#22222290"
>
  <h1 class="text-(3xl brand-gradient center) font-(bold mono) m-(t-lg b-0) select-none">
    Svelte Admin
  </h1>
  <div class="mt-8 flex-(~ col)">
    <CForm
      bind:this={formRef}
      labelDirection="column"
      value={loginForm}
      {rules}
    >
      <CFormItem label="" labelAlign="left" labelWidth="0" labelDirection="column" field="username" col={12}>
        <CInput rounded clearable bind:value={loginForm.username} placeholder="账号" />
      </CFormItem>
      <CFormItem label="" labelAlign="left" labelWidth="0" labelDirection="column" field="password" col={12}>
        <!-- type="password"  not working -->
        <CInput rounded clearable bind:value={loginForm.password} placeholder="密码" />
      </CFormItem>
      <CFormItem label="" labelAlign="left" labelWidth="0" labelDirection="row" field="" col={12}>
        <div class="w-full flex-center justify-between -ml-12px">
          <CCheckbox bind:value={loginForm.rememberMe} label="记住密码" />
          <span
            class="text-(sm primary) cursor-pointer"
          >
            忘记密码?
          </span>
        </div>
      </CFormItem>
    </CForm>
    <div class="mt-8 w-full">
      <CButton block rounded on:click={doLogin} {loading}>登录</CButton>
    </div>
  </div>
</div>
