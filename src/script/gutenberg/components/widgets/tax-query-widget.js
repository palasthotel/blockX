import {Button, SelectControl, TextControl, ToggleControl} from "@wordpress/components";

const ConditionControl = ({taxonomies, value, onChange}) => {
    const {taxonomy = "", terms = ""} = value;
    return <>
        <div>
            <SelectControl
                label="Taxonomy"
                options={taxonomies}
                value={taxonomy}
                onChange={(taxonomy)=>onChange({taxonomy,terms})}
            />
        </div>
        <div>
            <TextControl
                label="Terms"
                value={terms}
                onChange={(terms)=>onChange({taxonomy, terms})}
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

    const {conditions = [], relation = "OR"} = value;

    return <div>
        <div>
            {conditions.map((condition, i)=>{
                return <ConditionWrapper>
                    <ConditionControl
                        key={i}
                        taxonomies={taxonomies}
                        value={condition}
                        onChange={(_condition)=>{
                            onChange({
                                relation,
                                conditions: conditions.map((c, j)=> i === j ? _condition : c)
                            })
                        }}
                    />
                    <Button 
                        isDestructive
                        isSmall
                        onClick={()=>{
                            onChange({
                                relation,
                                conditions: conditions
                                    .map((c,j)=> j === i ? null : c)
                                    .filter(c=>c!=null)
                            })
                        }}
                    >
                        Delete
                    </Button>
                </ConditionWrapper>
            })}
            {conditions.length > 1 ?
                <div
                style={{
                    marginTop: 10,
                }}
                >
                    <ToggleControl 
                        label={relation}
                        help={relation === "AND" ? "All taxonomy queries.": "One of these taxonomy queries."}
                        checked={relation === "AND"}
                        onChange={(checked)=>{
                            onChange({
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
            onChange({
                relation,
                conditions: [
                    ...conditions,
                    {}
                ]
            })
            }}
            style={{
                marginBottom: 20,
                width: "100%",
                textAlign:"center",
                display: "inline-block"
            }}
        >
            Add taxonomy
        </Button>
    </div>
}


const TaxQueryWidget = ({definition, value, onChange})=> {

    return <>
        <h2>{definition.label}</h2>
        <ConditionGroup 
            taxonomies={definition.taxonomies}
            value={value}
            onChange={onChange}
        />
    </>
}

export default TaxQueryWidget;