import {useRoute, useRouter} from "vue-router";
import {ref, watch} from "vue";

export function useStep() {
    const router = useRouter()
    const route = useRoute()
    const current = ref<number>(parseInt(route.query.step as string ?? 0));
    const next = () => {
        const nextStep = current.value + 1
        router.push({query: {step: nextStep.toString()}})
    }

    const previous = () => {
        const prevStep = current.value - 1
        router.push({query: {step: prevStep.toString()}})
    }

    watch(route, () => {
        current.value = parseInt(route.query.step as string)
    })

    return {
        current,
        next,
        previous
    }
}
