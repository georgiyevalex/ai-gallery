<script>
import { h, computed } from "vue"
import {
  IconSparkles2Filled,
  IconInnerShadowBottomLeft,
  IconPlus,
  IconLayoutGrid,
  IconPhoto,
  IconMovie,
  IconHeartFilled,
  IconEye,
  IconHeart,
} from "@tabler/icons-vue"

const icons = {
  IconHeart,
  IconEye,
  IconHeartFilled,
  IconMovie,
  IconPhoto,
  IconLayoutGrid,
  IconPlus,
  IconInnerShadowBottomLeft,
  IconSparkles2Filled
}

export default {
  props: {
    name: { type: String, required: true },
    scale: { type: [ String, Number ], default: null }
  },
  setup(props, context) {
    const iconComponent = computed(() => icons[props.name])

    const style = computed(() =>
        props.scale ? { transform: `scale(${props.scale})` } : undefined
    )

    return () => {
      if (!iconComponent.value) return null

      return h(iconComponent.value, {
        size: 16,
        style: style.value,
        ...context.attrs
      })
    }
  }
}
</script>