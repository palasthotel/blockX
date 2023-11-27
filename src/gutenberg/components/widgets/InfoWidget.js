
const InfoWidget = ({definition})=> {
    return <p className="description" dangerouslySetInnerHTML={{__html: definition.text}} />
};

export default InfoWidget;
