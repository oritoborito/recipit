import {useRouter} from "vue-router";
import {routes} from "@/router";

export type RouterPath = typeof routes[number]['path']

export function useNavigation() {
    const router = useRouter()

    function navigateToPath(path: RouterPath) {
        router.push(path)
    }

    return {
        navigateToPath
    }
}