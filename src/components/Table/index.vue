<template>
  <div v-loading="loading">
    <el-table v-bind="$attrs" :data="data" stripe>
      <template v-for="column in columns">
        <slot
          v-if="
            column.slot &&
              !(typeof column.hidden === 'function'
                ? column.hidden()
                : column.hidden)
          "
          :name="column.slot"
        />
        <el-table-column
          v-if="
            column.buttons &&
              !(typeof column.hidden === 'function'
                ? column.hidden()
                : column.hidden)
          "
          :key="column.value"
          v-bind="column"
        >
          <template v-slot="{ row }">
            <el-button
              v-for="button in column.buttons.filter(
                button =>
                  !button.ifRender ||
                  (typeof button.ifRender === 'function'
                    ? button.ifRender(row)
                    : button.ifRender)
              )"
              :key="button.value"
              :size="button.size"
              :type="button.type"
              :icon="button.icon"
              :loading="button.loading"
              :class="
                typeof button.class === 'function'
                  ? button.class(row)
                  : button.class
              "
              :disabled="
                typeof button.disabled === 'function'
                  ? button.disabled(row)
                  : button.disabled
              "
              @click="button.click(row)"
            >
              {{ button.label || getRowIdentity(row, button.prop) }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="
            !(typeof column.hidden === 'function'
              ? column.hidden()
              : column.hidden)
          "
          :key="column.value"
          v-bind="column"
          :show-overflow-tooltip="showTip"
        />
      </template>
    </el-table>
    <el-pagination
      v-if="pagination"
      :layout="layout"
      v-bind="pagination"
      :total="total"
      @current-change="currentChange"
      @size-change="sizeChange"
    />
  </div>
</template>

<script>
import { getRowIdentity } from '@/utils'
export default {
  name: 'Table',
  inheritAttrs: false,
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    showTip: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Object,
      default: null
    },
    total: {
      type: Number,
      default: 0
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  },
  methods: {
    getRowIdentity,
    currentChange(val) {
      this.$emit('pagination-change', { type: 'currentPage', val })
    },
    sizeChange(val) {
      this.$emit('pagination-change', { type: 'pageSize', val })
    }
  }
}
</script>
