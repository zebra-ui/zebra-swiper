// @see: https://cz-git.qbenben.com/zh/guide
/** @type {import('cz-git').UserConfig} */

module.exports = {
  ignores: [(commit) => commit === 'init'],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release'
      ]
    ]
  },
  prompt: {
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixsSelect: '选择关联issue前缀（可选）:',
      customFooterPrefixs: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?'
    },
    types: [
      {
        value: 'feat',
        name: '特性:   🚀  新增功能',
        emoji: '🚀'
      },
      { value: 'fix', name: '修复:   🧩  修复缺陷', emoji: '🧩' },
      {
        value: 'docs',
        name: '文档:   📚  文档变更',
        emoji: '📚'
      },
      {
        value: 'style',
        name: '格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）',
        emoji: '🎨'
      },
      {
        value: 'refactor',
        name: '重构:   ♻️  代码重构（不包括 bug 修复、功能新增）',
        emoji: '♻️'
      },
      {
        value: 'perf',
        name: '性能:   ⚡️  性能优化',
        emoji: '⚡️'
      },
      {
        value: 'test',
        name: '测试:   ✅  添加疏漏测试或已有测试改动',
        emoji: '✅'
      },
      {
        value: 'chore',
        name: '构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）',
        emoji: '📦️'
      },
      {
        value: 'ci',
        name: '集成:   🎡  修改 CI 配置、脚本',
        emoji: '🎡'
      },
      {
        value: 'revert',
        name: '回退:   ⏪️  回滚 commit',
        emoji: '⏪️'
      },
      {
        value: 'build',
        name: '打包:   🔨  项目打包发布',
        emoji: '🔨'
      }
    ],
    useEmoji: true,
    themeColorCode: '',
    useAI: false,
    aiNumber: 5,
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixs: [
      { value: 'closed', name: 'closed:   ISSUES has been processed' }
    ],
    customIssuePrefixsAlign: 'top',
    emptyIssuePrefixsAlias: 'skip',
    customIssuePrefixsAlias: 'custom',
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}
