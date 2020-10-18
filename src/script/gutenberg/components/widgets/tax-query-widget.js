import { Button, SelectControl, ToggleControl, FormTokenField, BaseControl } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { useFetchTaxonomyTerms } from "../../hooks/useTaxonomy.js";
import { useTranslationWidgetTaxQuery } from '../../hooks/useTranslation.js'
import { buildOption } from "../../utils/select.js";

const findTermByName = (name, terms) => terms.find(_t=>_t.name === name);
const findTermBySlug = (slug, terms) => terms.find(_t => _t.slug === slug);
const findTermById = (id, terms) => terms.find(_t => _t.id === id);
const findTerm = (s, terms) =>findTermById(s, terms) || findTermBySlug(s, terms) || findTermByName(s, terms);

const ConditionControl = ({taxonomies, value, onChange}) => {
    const {taxonomy = taxonomies[0], termIds = [], operator = "OR"} = value;
    const {
        label_taxonomy,
        label_add_terms,
        label_operator,
    } = useTranslationWidgetTaxQuery();
    const taxonomyTerms = useFetchTaxonomyTerms(taxonomy);

    // ------------------------------------------------
    // auto select default taxonomy effect
    // ------------------------------------------------
    useEffect(()=>{
        if(!taxonomies.map(tax=>tax.value).includes(taxonomy)){
            onChange({
                ...value,
                taxonomy: taxonomies[0].value,
            })
        }
    }, [taxonomy, taxonomies])

    // ------------------------------------------------
    // taxonomy token field changed
    // ------------------------------------------------
    const handleChangeTerms = (_terms)=>{
        const newTerms = _terms.map(t=>{
            const search = typeof t === typeof "" ? t : t.value;
            const _term = findTerm(search, taxonomyTerms);
            return _term ? _term.id : search;
        })
        //console.debug(terms, "=> change to => ",_terms, "results in", {taxonomy, terms:newTerms})
        onChange({
            ...value,
            termIds:newTerms
        })
    }

    return <>
        <div>
            <SelectControl
                label={label_taxonomy}
                options={taxonomies}
                value={taxonomy}
                onChange={(taxonomy)=>onChange({
                    ...value,
                    taxonomy
                })}
            />
        </div>
        <div>
            <FormTokenField
                label={label_add_terms}
                value={termIds.map(t=>{
                    const taxonomyTerm = findTerm(t, taxonomyTerms)
                    return taxonomyTerm ? taxonomyTerm.name : t;
                    
                })}
                suggestions={taxonomyTerms.map(t=>(t.name))}
                onChange={handleChangeTerms}
            />
        </div>
        <div>
            <SelectControl 
                label={label_operator}
                value={operator}
                options={['IN', 'NOT IN', 'AND' ].map(i=> buildOption(i,i))}
                onChange={(_operator)=>{
                    onChange({
                        ...value,
                        operator: _operator,
                    })
                }}
            />
        </div>
    </>
}

const ConditionWrapper = ({children})=>{
    return <div
        style={{
            background: "rgba(0, 0, 0, 0.02)",
            padding: 8,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: 4,
            marginBottom: 5,
            marginLeft: -10,
            marginRight: -10,
        }}
    >
        {children}
    </div>
}

const ConditionGroup = ({taxonomies, value, onChange})=>{

    const {
        toggle_AND_description,
        toggle_OR_description,
        btn_add_taxonomy,
        btn_delete_taxonomy,
    } = useTranslationWidgetTaxQuery()

    const {taxonomies: tax = [], relation = "OR"} = value;
    
    const handleChange = (_value)=> onChange(_value.taxonomies.length >= 1 ? _value : undefined);

    return <div>
        <div>
            {tax.map((_tax, i)=>{
                return <ConditionWrapper key={i}>
                    <ConditionControl
                        taxonomies={taxonomies}
                        value={_tax}
                        onChange={(changedTax)=>{
                            handleChange({
                                ...value,
                                taxonomies: tax.map((c, j)=> i === j ? changedTax : c)
                            })
                        }}
                    />
                    <Button 
                        isDestructive
                        isSmall
                        onClick={()=>{
                            handleChange({
                                ...value,
                                taxonomies: tax
                                    .map((c,j)=> j === i ? null : c)
                                    .filter(c=>c!=null)
                            })
                        }}
                    >
                        {btn_delete_taxonomy}
                    </Button>
                </ConditionWrapper>
            })}
            {tax.length > 1 ?
                <div
                style={{
                    marginTop: 10,
                }}
                >
                    <ToggleControl 
                        label={relation}
                        help={relation === "AND" ? toggle_AND_description: toggle_OR_description}
                        checked={relation === "AND"}
                        onChange={(checked)=>{
                            handleChange({
                                ...value,
                                relation: checked ? "AND" : "OR",
                            })
                        }}
                    />
                </div>
                :
                null
            }
        </div>
        <Button 
            isSecondary
            isSmall
            onClick={()=>{
                handleChange({
                    relation,
                    taxonomies: [
                        ...tax,
                        {}
                    ]
                })
            }}
            style={{
                width: "100%",
                textAlign:"center",
                display: "inline-block"
            }}
        >
            {btn_add_taxonomy}
        </Button>
    </div>
}


const TaxQueryWidget = ({definition, value, onChange})=> {
    return <BaseControl 
        label={definition.label}
    >
        <ConditionGroup 
            taxonomies={definition.taxonomies}
            value={value}
            onChange={onChange}
        />
    </BaseControl>
}

export default TaxQueryWidget;