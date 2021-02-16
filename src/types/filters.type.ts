import type { FeatureList } from "$types/stack.type"

export type Filters = {
    language: "all" | "js" | "python" | "go" | "other";
    features: FeatureList;
}