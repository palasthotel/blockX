import {SelectControl} from "@wordpress/components";
import { useFetchTaxonomyTermsAsOptionsWithDefaultAny } from "../../hooks/use-taxonomy";

const TaxonomyTerm = ({definition, value, onChange})=> {

    const {
        label,
        taxonomy,
    } = definition;
    
    const taxonomyTermOptions = useFetchTaxonomyTermsAsOptionsWithDefaultAny(taxonomy);

    // mutliple with checkbox control!
    // https://developer.wordpress.org/block-editor/components/checkbox-control/

    return <SelectControl
        label={label}
        value={value}
        onChange={onChange}
        options={taxonomyTermOptions}
    />
}

export default TaxonomyTerm;