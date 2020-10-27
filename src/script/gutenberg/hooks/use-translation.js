
export const useTranslation = (component) => {
    return typeof component === typeof "" ? BlockX.i18n[component] : BlockX.i18n;
}

export const useTranslationWidgetTaxQuery = ()=>{
    return useTranslation("widget_tax_query");
}