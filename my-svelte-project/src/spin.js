import { elasticOut } from "svelte/easing"
// import { scale } from 'svelte/types/runtime/transition'

export default function spin(node, { duration = 8000 }) {
    return {
        duration,
        css: t => {
            const eased = elasticOut(t);

            return `
                transform: scale(${eased}) rotate(${eased * 1080}deg);
                color: hsl(
                    ${~~(t * 360)},
                    ${Math.min(100, 1000 - 1000 * t)}%,
                    ${Math.min(50, 500 - 500 * t)}%
                );`
        }
    }
}
