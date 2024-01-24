import './InfoWidget.css';

const InfoWidget = ({definition})=> {
    return <p className="description blockx-info-widget" dangerouslySetInnerHTML={{__html: definition.text}} />
};

export default InfoWidget;
