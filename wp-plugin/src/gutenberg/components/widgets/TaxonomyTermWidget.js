import {FormTokenField} from "@wordpress/components";
import {useFetchTaxonomyTermById, useFetchTaxonomyTerms, useFetchTaxonomyTermsByIds} from "../../hooks/use-taxonomy";
import {useEffect, useState} from "@wordpress/element";
import {findTerm} from "../../utils/selectors";
import LockedTextControl from "../LockedTextControl";
import AutoCompleteTextControl from "../AutoCompleteTextControl";
import {useTaxonomyTermsCompletionFactory} from "../../hooks/use-completion";
import './TaxonomyTermWidget.css';

const MultipleTaxonomyTerms = ({definition, value, onChange}) => {

    const {
        label,
        taxonomy,
    } = definition;

    const [tokenInput, setTokenInput] = useState("");
    const [searchTermsInput, setSearchTermsInput] = useState("");

    const termIds = Array.isArray(value) ? value : (typeof value !== 'undefined' ? [value] : []);

    const {
        terms: taxonomyTerms,
        isResolving: isResolvingTaxonomyTerms,
    } = useFetchTaxonomyTerms(taxonomy, searchTermsInput);

    const {
        terms: selectedTerms,
        isResolving: isResolvingSelectedTerms,
    } = useFetchTaxonomyTermsByIds(taxonomy, termIds);

    // ------------------------------------------------
    // suggestions
    // ------------------------------------------------
    useEffect(() => {
        let requestTimeout = setTimeout(() => {
            setSearchTermsInput(tokenInput);
        }, 600);
        return () => clearTimeout(requestTimeout);
    }, [termIds, tokenInput]);

    const handleTokenInputChange = (_value) => {
        setTokenInput(_value);
    }

    const handleChangeTerms = (_terms) => {
        const newTerms = _terms.map(t => {
            const search = typeof t === typeof "" ? t : t.value;
            const _term = findTerm(search, taxonomyTerms) || findTerm(search, selectedTerms);
            return _term ? _term.id : search;
        });
        onChange(newTerms);
    }
    const currentValue = termIds.map(t => {
        const taxonomyTerm = findTerm(t, selectedTerms)
        return taxonomyTerm ? taxonomyTerm.name : t;
    });

    return <FormTokenField
        label={label}
        value={currentValue}
        onInputChange={handleTokenInputChange}
        suggestions={taxonomyTerms.map(t => (t.name))}
        onChange={handleChangeTerms}
    />
}

const LockedTerm = ({label, term_id, taxonomy, onUnlock}) => {

    const {term, isResolving} = useFetchTaxonomyTermById(taxonomy, term_id);

    return <LockedTextControl
        label={label}
        value={term ? term.name : (isResolving ? "..." : "?")}
        onUnlock={onUnlock}
    />
}

const SingleTaxonomyTerm = ({definition, value, onChange}) => {

    const {
        label,
        taxonomy,
    } = definition;

    const useCompletion = useTaxonomyTermsCompletionFactory(taxonomy);

    if (value) {
        return <LockedTerm
            label={label}
            term_id={value}
            taxonomy={taxonomy}
            onUnlock={() => onChange("")}
        />
    }

    return <AutoCompleteTextControl
        label={label}
        useCompletion={useCompletion}
        renderItem={(item) => {
            return <div
                key={item.id}
                onClick={() => onChange(item.id)}
                className="blockx-taxonomy-term__suggestion"
            >
                {item.name}
            </div>
        }}
    />
}

const TaxonomyTerm = ({definition, value, onChange}) => {

    const {
        multiple = false,
    } = definition;

    if (multiple) {
        return <MultipleTaxonomyTerms
            definition={definition}
            value={value}
            onChange={onChange}
        />
    }

    return <SingleTaxonomyTerm
        definition={definition}
        value={value}
        onChange={onChange}
    />
}

export default TaxonomyTerm;