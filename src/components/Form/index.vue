<template>
  <el-row type="flex" :justify="inline ? 'start' : 'center'">
    <el-col :span="formSpan">
      <el-form
        ref="form"
        v-bind="$attrs"
        :model="form"
        :rules="rules"
        :inline="inline"
        :label-width="labelWidth"
      >
        <slot />
        <template v-if="inline">
          <el-form-item
            v-for="item in formItems.filter(
              item =>
                !item.ifRender ||
                (typeof item.ifRender === 'function'
                  ? item.ifRender(form)
                  : item.ifRender)
            )"
            :key="item.value"
            :prop="item.slot ? item.slot : item.type ? item.value : ''"
            :label="item.label"
            :class="item.class"
          >
            <!-- solt -->
            <slot v-if="item.slot" :name="item.slot" />
            <!-- 详情项 -->
            <span v-if="!item.type">
              {{
                item.formatter
                  ? item.formatter(item.value, getValueByPath(form, item.value))
                  : getValueByPath(form, item.value)
              }}
            </span>
            <!-- 普通输入框 -->
            <el-input
              v-if="item.type === 'input' || item.type === 'password'"
              v-model.trim="form[item.value]"
              v-bind="item"
              :placeholder="getPlaceholder(item)"
            />
            <!-- 文本输入框 -->
            <el-input
              v-if="item.type === 'textarea'"
              v-model.trim="form[item.value]"
              v-bind="item"
              :placeholder="getPlaceholder(item)"
            />
            <!-- 计数器 -->
            <el-input-number
              v-if="item.type === 'inputNumber'"
              v-model="form[item.value]"
              v-bind="item"
              :placeholder="getPlaceholder(item)"
            />
            <!-- 选择框 -->
            <el-select
              v-if="item.type === 'select'"
              v-model="form[item.value]"
              v-bind="item"
              :placeholder="getPlaceholder(item)"
            >
              <el-option
                v-for="childItem in item.list"
                :key="childItem.value"
                :label="childItem.label"
                :value="childItem.value"
              />
            </el-select>
            <!-- 单选框 -->
            <el-radio-group
              v-if="item.type === 'radio'"
              v-model="form[item.value]"
              v-bind="item"
            >
              <el-radio
                v-for="childItem in item.list"
                :key="childItem.value"
                :label="childItem.value"
              >
                {{ childItem.label }}
              </el-radio>
            </el-radio-group>
            <!-- 日期选择框 -->
            <el-date-picker
              v-if="
                item.type === 'datetime' ||
                  item.type === 'date' ||
                  item.type === 'month' ||
                  item.type === 'week' ||
                  item.type === 'year'
              "
              v-model="form[item.value]"
              :value-format="item.valueFormat || 'timestamp'"
              v-bind="item"
              :placeholder="getPlaceholder(item)"
            />
            <!-- 日期范围选择框 -->
            <el-date-picker
              v-if="item.type === 'daterange'"
              v-model="form[item.value]"
              :value-format="item.valueFormat || 'timestamp'"
              :default-time="defaultTime"
              v-bind="item"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
            <!-- 日期时间范围选择框 -->
            <el-date-picker
              v-if="item.type === 'datetimerange'"
              v-model="form[item.value]"
              :value-format="item.valueFormat || 'timestamp'"
              :default-time="defaultTime"
              v-bind="item"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
            <!-- 级联选择框 -->
            <el-cascader
              v-if="item.type === 'cascader'"
              v-model="form[item.value]"
              v-bind="item"
            />
            <!-- 文字链接 -->
            <el-link
              v-if="item.type === 'link'"
              type="primary"
              :href="form[item.value]"
              :underline="false"
              v-bind="item"
            >
              {{ form[item.value] }}
            </el-link>
            <!-- 图片 -->
            <el-image
              v-if="item.type === 'image'"
              style="width: 100px; height: 100px;"
              :src="form[item.value]"
              :preview-src-list="[form[item.value]]"
              lazy
              v-bind="item"
            />
          </el-form-item>
        </template>
        <template v-else>
          <el-row :gutter="20">
            <el-col
              v-for="item in formItems.filter(
                item =>
                  !item.ifRender ||
                  (typeof item.ifRender === 'function'
                    ? item.ifRender(form)
                    : item.ifRender)
              )"
              :key="item.value"
              :span="twoColumns ? 12 : 24"
            >
              <el-form-item
                :prop="item.slot ? item.slot : item.type ? item.value : ''"
                :label="item.label"
                :class="item.class"
              >
                <!-- solt -->
                <slot v-if="item.slot" :name="item.slot" />
                <!-- 详情项 -->
                <span v-if="!item.type">
                  {{
                    item.formatter
                      ? item.formatter(
                          item.value,
                          getValueByPath(form, item.value)
                        )
                      : getValueByPath(form, item.value)
                  }}
                </span>
                <!-- 普通输入框 -->
                <el-input
                  v-if="item.type === 'input' || item.type === 'password'"
                  v-model.trim="form[item.value]"
                  v-bind="item"
                  :placeholder="getPlaceholder(item)"
                />
                <!-- 文本输入框 -->
                <el-input
                  v-if="item.type === 'textarea'"
                  v-model.trim="form[item.value]"
                  v-bind="item"
                  :placeholder="getPlaceholder(item)"
                />
                <!-- 计数器 -->
                <el-input-number
                  v-if="item.type === 'inputNumber'"
                  v-model="form[item.value]"
                  v-bind="item"
                  :placeholder="getPlaceholder(item)"
                />
                <!-- 选择框 -->
                <el-select
                  v-if="item.type === 'select'"
                  v-model="form[item.value]"
                  v-bind="item"
                  :placeholder="getPlaceholder(item)"
                >
                  <el-option
                    v-for="childItem in item.list"
                    :key="childItem.value"
                    :label="childItem.label"
                    :value="childItem.value"
                  />
                </el-select>
                <!-- 单选框 -->
                <el-radio-group
                  v-if="item.type === 'radio'"
                  v-model="form[item.value]"
                  v-bind="item"
                >
                  <el-radio
                    v-for="childItem in item.list"
                    :key="childItem.value"
                    :label="childItem.value"
                  >
                    {{ childItem.label }}
                  </el-radio>
                </el-radio-group>
                <!-- 日期选择框 -->
                <el-date-picker
                  v-if="
                    item.type === 'date' ||
                      item.type === 'week' ||
                      item.type === 'month' ||
                      item.type === 'year'
                  "
                  v-model="form[item.value]"
                  :value-format="item.valueFormat || 'timestamp'"
                  v-bind="item"
                  :placeholder="getPlaceholder(item)"
                />
                <!-- 日期时间选择框 -->
                <el-date-picker
                  v-if="item.type === 'datetime'"
                  v-model="form[item.value]"
                  :value-format="item.valueFormat || 'timestamp'"
                  v-bind="item"
                  :placeholder="getPlaceholder(item)"
                />
                <!-- 日期时间范围选择框 -->
                <el-date-picker
                  v-if="item.type === 'datetimerange'"
                  v-model="form[item.value]"
                  :value-format="item.valueFormat || 'timestamp'"
                  :default-time="defaultTime"
                  v-bind="item"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
                <!-- 级联选择框 -->
                <el-cascader
                  v-if="item.type === 'cascader'"
                  v-model="form[item.value]"
                  v-bind="item"
                />
                <!-- 文字链接 -->
                <el-link
                  v-if="item.type === 'link'"
                  type="primary"
                  :href="form[item.value]"
                  :underline="false"
                  v-bind="item"
                >
                  {{ form[item.value] }}
                </el-link>
                <!-- 图片 -->
                <el-image
                  v-if="item.type === 'image'"
                  style="width: 100px; height: 100px;"
                  :src="form[item.value]"
                  :preview-src-list="[form[item.value]]"
                  lazy
                  v-bind="item"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </template>
        <div v-if="buttons.length !== 0" class="button-wrapper">
          <el-button
            v-for="button in buttons.filter(
              button =>
                !button.ifRender ||
                (typeof button.ifRender === 'function'
                  ? button.ifRender(form)
                  : button.ifRender)
            )"
            :key="button.value"
            :size="button.size"
            :type="button.type"
            :icon="button.icon"
            :disabled="button.disabled"
            :loading="button.loading"
            @click="button.click"
          >
            {{ button.label }}
          </el-button>
        </div>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { getValueByPath } from '@/utils'
export default {
  name: 'Form',
  inheritAttrs: false,
  props: {
    formSpan: {
      type: Number,
      default: 24
    },
    form: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      default: null
    },
    inline: {
      type: Boolean,
      default: false
    },
    twoColumns: {
      type: Boolean,
      default: false
    },
    labelWidth: {
      type: String,
      default: 'auto'
    },
    formItems: {
      type: Array,
      required: true
    },
    buttons: {
      type: Array,
      default: () => []
    },
    defaultTime: {
      type: Array,
      default: () => ['00:00:00', '23:59:59']
    }
  },
  methods: {
    getValueByPath,
    getPlaceholder(row) {
      let placeholder
      if (row.disabled) return
      if (row.placeholder) return row.placeholder
      if (
        row.type === 'input' ||
        row.type === 'textarea' ||
        row.type === 'inputNumber'
      ) {
        placeholder = '请输入' + row.label
      } else if (
        row.type === 'select' ||
        row.type === 'data' ||
        row.type === 'datetime'
      ) {
        placeholder = '请选择' + row.label
      } else {
        placeholder = row.label
      }
      return placeholder
    },
    validate(valid) {
      return this.$refs.form.validate(valid)
    },
    resetFields() {
      return this.$refs.form.resetFields()
    },
    clearValidate() {
      return this.$refs.form.clearValidate()
    }
  }
}
</script>

<style lang="scss" scoped>
.button-wrapper {
  text-align: right;
}
</style>
