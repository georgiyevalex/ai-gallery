import { ref, watch, type Ref, nextTick } from "vue"

export const useMasonry = (items: Ref<any[]>, columnsCount = 5) => {

  const columns = ref<any[][]>([])
  const ready = ref(false)

  const columnHeights = ref<number[]>([])

  const parseRatio = (ratio?: string | null) => {
    if (!ratio) return 4 / 3
    const [w, h] = ratio.split(":").map(Number)
    if (!w || !h) return 4 / 3
    return w / h
  }

  const estimateHeight = (ratio: number) => 1 / ratio

  const setItems = async (list: any[]) => {
    ready.value = false

    columns.value = Array.from({ length: columnsCount }, () => [])
    columnHeights.value = Array.from({ length: columnsCount }, () => 0)

    const heights = columnHeights.value
    const cols = columns.value

    for (const item of list) {
      const ratio = parseRatio(item.aspect_ratio)
      const height = estimateHeight(ratio)

      let minIndex = 0
      let minHeight = heights[0] as number

      for (let i = 1; i < heights.length; i++) {
        const current = heights[i] as number

        if (current < minHeight) {
          minHeight = current
          minIndex = i
        }
      }

      const column = cols[minIndex] as T[]
      column.push(item)

      heights[minIndex] = minHeight + height
    }

    await nextTick()

    ready.value = true
  }

  watch(items, (val) => {
    setItems(val || [])
  }, { immediate: true })

  return {
    columns,
    ready
  }
}