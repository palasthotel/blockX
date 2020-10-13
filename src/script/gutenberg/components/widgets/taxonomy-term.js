import {SelectControl} from "@wordpress/components";
import { useFetchTaxonomyTerms } from "../../hooks/useTaxonomy";
import { buildOption } from "../../utils/select";

const TaxonomyTerm = ({definition, value, onChange})=> {
    
    const taxonomyTerms = useFetchTaxonomyTerms(definition.taxonomy);

    // mutliple with checkbox control!
    // https://developer.wordpress.org/block-editor/components/checkbox-control/

    return <SelectControl
        label={definition.label}
        value={value}
        onChange={onChange}
        options={taxonomyTerms.map(t=>buildOption( t.id, t.name))}
    />
}

export default TaxonomyTerm;