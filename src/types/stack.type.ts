export type StackItem = {
    name: string;
    description: string;
    properties: Properties;
    features: FeatureList;
    developer: Developer;
};

type Properties = {
    markup: string[];
    templates: string[];
    language: string;
    framework: string;
};

export type FeatureList = {
    pdf: boolean;
    multilang: boolean;
    search: boolean;
    darkmode: boolean;
    tabs: boolean;
    blog: boolean;
    ssr: boolean;
    themes: boolean;
};

type Developer = {
    name: string;
    license: string;
    url: string;
};